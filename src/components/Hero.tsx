import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import Terminal from './Terminal';

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 grid-bg opacity-60" aria-hidden />
      <div className="absolute inset-0 vignette" aria-hidden />
      <div className="pointer-events-none absolute left-1/4 top-1/3 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 ambient-glow opacity-70" aria-hidden />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center gap-12 px-6 pt-24 pb-16 md:px-10 lg:flex-row lg:items-center lg:gap-8">
        {/* Left — editorial intro */}
        <div className="flex-1 lg:pr-8">
          <h1
            className="mt-7 font-serif text-[2.6rem] leading-[1.12] tracking-tight text-gray-100 animate-fade-up sm:text-5xl lg:text-6xl"
            style={{ opacity: 0, animationDelay: '0.1s' }}
          >
            Building <span className="italic text-neon-200 text-glow">precise</span> interfaces
            <br />
            and <span className="italic text-neon-200 text-glow">resilient</span> systems
            <br />
            for the modern web.
          </h1>

          <p
            className="mt-8 max-w-md font-serif text-lg leading-relaxed text-gray-400 animate-fade-up"
            style={{ opacity: 0, animationDelay: '0.25s' }}
          >
            I&apos;m <span className="italic text-gray-200">H T Chethan</span>, an AI &amp; ML Developer focused on
            <span className="italic text-neon-200"> performance</span>, thoughtful architecture, and
            <span className="italic text-neon-200"> detail</span>-obsessed design.
          </p>

          <div
            className="mt-10 flex flex-wrap items-center gap-4 animate-fade-up"
            style={{ opacity: 0, animationDelay: '0.4s' }}
          >

            <a
              href="#contact"
              className="group inline-flex items-center gap-2 font-serif text-sm tracking-wide text-gray-400 transition-colors duration-300 hover:text-neon-100"
            >
              <span className="italic">Get in touch</span>
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>

        {/* Right — terminal */}
        <div className="flex flex-1 items-center justify-center lg:justify-end">
          <Terminal />
        </div>
      </div>

      {/* Scroll cue */}
      <div className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in" style={{ opacity: 0, animationDelay: '1.2s' }}>
        <div className="flex flex-col items-center gap-2">
          <span className="font-mono text-[10px] tracking-[0.3em] text-gray-600 uppercase">scroll</span>
          <span className="h-10 w-px bg-gradient-to-b from-neon-400/50 to-transparent" />
        </div>
      </div>
    </section>
  );
}
