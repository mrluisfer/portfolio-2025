'use client';
import { useCallback, useSyncExternalStore } from 'react';

/**
 * @example const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
 * const isMediumDevice = useMediaQuery("only screen and (min-width : 769px) and (max-width : 992px)");
 * @param query - The media query string to match against.
 * @returns A boolean indicating whether the media query matches.
 */
export function useMediaQuery(query: string) {
  const subscribe = useCallback(
    (callback: () => void) => {
      const matchMedia = window.matchMedia(query);

      matchMedia.addEventListener('change', callback);
      return () => {
        matchMedia.removeEventListener('change', callback);
      };
    },
    [query]
  );

  const getSnapshot = () => {
    return window.matchMedia(query).matches;
  };

  const getServerSnapshot = () => {
    throw Error('useMediaQuery is a client-only hook');
  };

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
