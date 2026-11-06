import { ArrowUpRight } from 'lucide-react';
import { SectionHeading } from './Work';

const channels = [
  { label: 'Email', value: 'alex@mercer.dev', href: 'mailto:alex@mercer.dev' },
  { label: 'GitHub', value: 'github.com/alexmercer', href: '#' },
  { label: 'LinkedIn', value: 'linkedin.com/in/alexmercer', href: '#' },
];

export default function Contact() {
  return (
    <section id="contact" className="relative w-full py-28 md:py-36">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 ambient-glow opacity-40" aria-hidden />

      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading index="03" title="Contact" italic="connect" />

        <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          {/* Headline */}
          <div>
            <p className="font-mono text-xs tracking-[0.3em] text-neon-300/60 uppercase">
              <span className="text-gray-600">[</span> available · 2026 <span className="text-gray-600">]</span>
            </p>
            <h3 className="mt-6 font-serif text-4xl leading-[1.15] text-gray-100 md:text-5xl">
              Let&apos;s build something
              <br />
              <span className="italic text-neon-200 text-glow">worth keeping</span>.
            </h3>
            <p className="mt-7 max-w-md font-serif text-base leading-relaxed text-gray-400">
              Open to <span className="italic text-gray-200">select</span> engineering engagements, advisory, and
              ambitious <span className="italic text-gray-200">product</span> work.
            </p>
          </div>

          {/* Channels */}
          <div className="border border-neon-400/15 border-glow">
            <div className="border-b border-neon-400/10 bg-navy-900/60 px-5 py-3">
              <span className="font-mono text-[11px] tracking-wide text-gray-500">
                channels <span className="text-gray-700">·</span> <span className="text-neon-300/70">open</span>
              </span>
            </div>
            <ul>
              {channels.map((c) => (
                <li key={c.label} className="border-b border-neon-400/10 last:border-b-0">
                  <a
                    href={c.href}
                    className="group flex items-center justify-between px-5 py-5 transition-all duration-300 hover:bg-neon-500/5"
                  >
                    <div>
                      <p className="font-mono text-[10px] tracking-[0.2em] text-gray-600 uppercase">{c.label}</p>
                      <p className="mt-1 font-serif text-base text-gray-200 transition-colors group-hover:text-neon-100">
                        {c.value}
                      </p>
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-gray-600 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-neon-200" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
