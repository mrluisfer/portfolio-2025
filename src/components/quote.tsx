import { NAVIGATION_NAMES } from '@/constants/navigation-names';

export const Quote = () => {
  return (
    <section
      aria-labelledby="portfolio-headline"
      className="relative isolate mx-4 overflow-hidden rounded-3xl border border-white/10 bg-slate-950 shadow-2xl"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-fuchsia-500/10 via-cyan-400/10 to-emerald-400/10"></div>

      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl"></div>
      <div className="pointer-events-none absolute -right-16 -bottom-28 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl"></div>
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400/10 blur-3xl"></div>

      <div className="pointer-events-none absolute inset-0 -z-10 opacity-20 [background:radial-gradient(60rem_60rem_at_50%_0%,#fff_2%,transparent_40%),linear-gradient(to_right,transparent_48%,#fff1_50%,transparent_52%),linear-gradient(to_bottom,transparent_48%,#fff1_50%,transparent_52%)]"></div>

      <div className="mx-auto max-w-5xl px-6 py-20 sm:py-24 md:py-28">
        <div className="mb-6 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium tracking-wide text-white/70 backdrop-blur">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400"></span>
            Always improving
          </span>
        </div>

        <h2
          id="portfolio-headline"
          className="text-center text-3xl leading-tight font-extrabold tracking-tight text-balance text-white sm:text-4xl md:text-6xl"
        >
          <span className="bg-gradient-to-r from-fuchsia-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent drop-shadow-[0_2px_16px_rgba(34,211,238,0.25)]">
            A portfolio is a journey, not a destination,
          </span>
          <br className="hidden sm:block" />
          <span className="text-white/90">so keep coding and iterating.</span>
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-center text-sm leading-relaxed text-pretty text-white/70 sm:text-base">
          Celebrate each version, measure, learn, and relaunch. Your work improves with each
          iteration: design, performance, accessibility, and user experience.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={`#${NAVIGATION_NAMES.PROJECTS}`}
            className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-fuchsia-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg transition-transform hover:scale-[1.02] active:scale-[0.99]"
          >
            See projects
          </a>
          <a
            href={`#${NAVIGATION_NAMES.CONNECT}`}
            className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10"
          >
            Contact
          </a>
        </div>

        <div className="mx-auto mt-12 h-2 w-full max-w-md rounded-full bg-white/10">
          <div className="relative h-2 w-2/3 rounded-full bg-gradient-to-r from-fuchsia-400 via-cyan-300 to-emerald-400">
            <span className="absolute -top-1 -right-1 inline-block h-4 w-4 animate-bounce rounded-full bg-white shadow-md ring-2 ring-cyan-300/60"></span>
          </div>
        </div>

        <div className="mx-auto mt-8 flex flex-wrap justify-center gap-2">
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
            Iterate
          </span>
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
            Measure
          </span>
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
            Optimize
          </span>
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
            Ship
          </span>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-px bg-white/10"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-px bg-white/10"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-white/10"></div>
    </section>
  );
};
