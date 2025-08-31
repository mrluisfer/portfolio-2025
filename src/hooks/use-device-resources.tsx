import { useEffect, useMemo, useRef, useState } from 'react';

type UseDeviceResourcesOptions = {
  sampleIntervalMs?: number;
  observeLongTasks?: boolean;
  longTasksBuffer?: number;
};

type DeviceResources = {
  deviceMemoryGB?: number; // navigator.deviceMemory
  hardwareConcurrency?: number; // navigator.hardwareConcurrency
  effectiveType?: string; // navigator.connection.effectiveType (2g/3g/4g)
  saveData?: boolean; // navigator.connection.saveData
  rtt?: number; // ms
  downlinkMbps?: number; // Mbps

  jsHeapSizeLimit?: number; // bytes
  totalJSHeapSize?: number; // bytes
  usedJSHeapSize?: number; // bytes
  uaMemoryMB?: number; // measureUserAgentSpecificMemory en MB (if exists)

  longTasksCount: number;
  lastUpdated: number;

  isLowEndDevice: boolean;
  lowEndReasons: string[];
};

function readConnection() {
  const nav = typeof navigator !== 'undefined' ? navigator : undefined;
  const conn = (nav && (nav as any).connection) || undefined;
  return {
    effectiveType: conn?.effectiveType as string | undefined,
    saveData: Boolean(conn?.saveData),
    rtt: typeof conn?.rtt === 'number' ? conn.rtt : undefined,
    downlinkMbps: typeof conn?.downlink === 'number' ? conn.downlink : undefined,
  };
}

async function readUAMemoryMB(): Promise<number | undefined> {
  // Experimental: https://developer.mozilla.org/en-US/docs/Web/API/Performance/measureUserAgentSpecificMemory
  // Safari/Firefox doesn't support it. Chrome requires a flag/permission.
  if (typeof (performance as any).measureUserAgentSpecificMemory === 'function') {
    try {
      const result = await (performance as any).measureUserAgentSpecificMemory();
      // result.bytes
      const mb = result?.bytes ? Math.round(result.bytes / (1024 * 1024)) : undefined;
      return mb;
    } catch {
      return undefined;
    }
  }
  return undefined;
}

function readPerformanceMemory() {
  // Chrome: https://developer.mozilla.org/en-US/docs/Web/API/Performance/memory
  const mem = (performance as any).memory;
  if (!mem) return {};
  const { jsHeapSizeLimit, totalJSHeapSize, usedJSHeapSize } = mem as {
    jsHeapSizeLimit: number;
    totalJSHeapSize: number;
    usedJSHeapSize: number;
  };
  return { jsHeapSizeLimit, totalJSHeapSize, usedJSHeapSize };
}

function getLowEndHeuristics(input: {
  deviceMemoryGB?: number;
  hardwareConcurrency?: number;
  effectiveType?: string;
  saveData?: boolean;
  uaMemoryMB?: number;
  jsHeapSizeLimit?: number;
  longTasksCount?: number;
}) {
  const reasons: string[] = [];
  let score = 0;

  if (typeof input.deviceMemoryGB === 'number') {
    if (input.deviceMemoryGB <= 2) {
      score += 2;
      reasons.push('deviceMemory ≤ 2GB');
    } else if (input.deviceMemoryGB <= 4) {
      score += 1;
      reasons.push('deviceMemory ≤ 4GB');
    }
  }

  if (typeof input.hardwareConcurrency === 'number') {
    if (input.hardwareConcurrency <= 2) {
      score += 2;
      reasons.push('CPU ≤ 2 cores');
    } else if (input.hardwareConcurrency <= 4) {
      score += 1;
      reasons.push('CPU ≤ 4 cores');
    }
  }

  if (input.effectiveType && /^(2g|3g)$/i.test(input.effectiveType)) {
    score += 1;
    reasons.push(`effectiveType ${input.effectiveType}`);
  }
  if (input.saveData) {
    score += 1;
    reasons.push('Save-Data enabled');
  }

  // UA Memory
  if (typeof input.uaMemoryMB === 'number') {
    if (input.uaMemoryMB < 1500) {
      score += 1;
      reasons.push('UA memory < 1.5GB');
    }
  }

  if (typeof input.jsHeapSizeLimit === 'number') {
    // < 512MB heap JS
    if (input.jsHeapSizeLimit < 512 * 1024 * 1024) {
      score += 1;
      reasons.push('JS heap limit < 512MB');
    }
  }

  if ((input.longTasksCount ?? 0) >= 5) {
    score += 1;
    reasons.push('Multiple long tasks observed');
  }

  // 2+ signals → low-end
  const isLowEndDevice = score >= 2;

  return { isLowEndDevice, reasons };
}

export function useDeviceResources(opts: UseDeviceResourcesOptions = {}): DeviceResources {
  const { sampleIntervalMs = 30_000, observeLongTasks = true, longTasksBuffer = 50 } = opts;

  const [state, setState] = useState<DeviceResources>(() => {
    // SSR-safe
    const nav = typeof navigator !== 'undefined' ? navigator : (undefined as any);
    const deviceMemoryGB = typeof nav?.deviceMemory === 'number' ? nav.deviceMemory : undefined;
    const hardwareConcurrency =
      typeof nav?.hardwareConcurrency === 'number' ? nav.hardwareConcurrency : undefined;
    const { effectiveType, saveData, rtt, downlinkMbps } = readConnection();
    const { jsHeapSizeLimit, totalJSHeapSize, usedJSHeapSize } = readPerformanceMemory();

    const heur = getLowEndHeuristics({
      deviceMemoryGB,
      hardwareConcurrency,
      effectiveType,
      saveData,
      jsHeapSizeLimit,
      longTasksCount: 0,
    });

    return {
      deviceMemoryGB,
      hardwareConcurrency,
      effectiveType,
      saveData,
      rtt,
      downlinkMbps,
      jsHeapSizeLimit,
      totalJSHeapSize,
      usedJSHeapSize,
      uaMemoryMB: undefined,
      longTasksCount: 0,
      lastUpdated: Date.now(),
      isLowEndDevice: heur.isLowEndDevice,
      lowEndReasons: heur.reasons,
    };
  });

  const longTasksRef = useRef<number>(0);

  useEffect(() => {
    const nav = navigator as any;
    const conn = nav?.connection;
    if (!conn?.addEventListener) return;

    const onConnChange = () => {
      setState((prev) => {
        const { effectiveType, saveData, rtt, downlinkMbps } = readConnection();
        const heur = getLowEndHeuristics({
          deviceMemoryGB: prev.deviceMemoryGB,
          hardwareConcurrency: prev.hardwareConcurrency,
          effectiveType,
          saveData,
          uaMemoryMB: prev.uaMemoryMB,
          jsHeapSizeLimit: prev.jsHeapSizeLimit,
          longTasksCount: longTasksRef.current,
        });
        return {
          ...prev,
          effectiveType,
          saveData,
          rtt,
          downlinkMbps,
          isLowEndDevice: heur.isLowEndDevice,
          lowEndReasons: heur.reasons,
          lastUpdated: Date.now(),
        };
      });
    };

    conn.addEventListener('change', onConnChange);
    return () => conn.removeEventListener('change', onConnChange);
  }, []);

  // Long tasks observer (if supported)
  useEffect(() => {
    if (!observeLongTasks || typeof PerformanceObserver === 'undefined') return;
    let observer: PerformanceObserver | null = null;

    try {
      observer = new PerformanceObserver((list) => {
        // entryType 'longtask' requiere "Long Tasks API" (Chromium)
        const entries = list.getEntries();

        if (entries.length) {
          longTasksRef.current = Math.min(longTasksRef.current + entries.length, longTasksBuffer);
          setState((prev) => {
            const heur = getLowEndHeuristics({
              deviceMemoryGB: prev.deviceMemoryGB,
              hardwareConcurrency: prev.hardwareConcurrency,
              effectiveType: prev.effectiveType,
              saveData: prev.saveData,
              uaMemoryMB: prev.uaMemoryMB,
              jsHeapSizeLimit: prev.jsHeapSizeLimit,
              longTasksCount: longTasksRef.current,
            });
            return {
              ...prev,
              longTasksCount: longTasksRef.current,
              isLowEndDevice: heur.isLowEndDevice,
              lowEndReasons: heur.reasons,
              lastUpdated: Date.now(),
            };
          });
        }
      });
      observer.observe({ entryTypes: ['longtask'] as any });
    } catch (error) {
      console.error(error);
    }

    return () => observer?.disconnect();
  }, [observeLongTasks, longTasksBuffer]);

  useEffect(() => {
    let timer: number | null = null;
    let active = true;

    const sample = async () => {
      if (!active) return;

      const uaMemoryMB = await readUAMemoryMB();
      const { jsHeapSizeLimit, totalJSHeapSize, usedJSHeapSize } = readPerformanceMemory();

      setState((prev) => {
        const heur = getLowEndHeuristics({
          deviceMemoryGB: prev.deviceMemoryGB,
          hardwareConcurrency: prev.hardwareConcurrency,
          effectiveType: prev.effectiveType,
          saveData: prev.saveData,
          uaMemoryMB: uaMemoryMB ?? prev.uaMemoryMB,
          jsHeapSizeLimit,
          longTasksCount: longTasksRef.current,
        });

        return {
          ...prev,
          uaMemoryMB: uaMemoryMB ?? prev.uaMemoryMB,
          jsHeapSizeLimit: jsHeapSizeLimit ?? prev.jsHeapSizeLimit,
          totalJSHeapSize: totalJSHeapSize ?? prev.totalJSHeapSize,
          usedJSHeapSize: usedJSHeapSize ?? prev.usedJSHeapSize,
          isLowEndDevice: heur.isLowEndDevice,
          lowEndReasons: heur.reasons,
          lastUpdated: Date.now(),
        };
      });
    };

    sample();

    if (sampleIntervalMs > 0) {
      timer = window.setInterval(sample, sampleIntervalMs);
    }

    return () => {
      active = false;
      if (timer) window.clearInterval(timer);
    };
  }, [sampleIntervalMs]);

  return useMemo(() => state, [state]);
}
