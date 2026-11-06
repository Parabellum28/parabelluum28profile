import { SectionHeading } from './Work';

const skills = [
  { group: 'Languages', items: ['TypeScript', 'Rust', 'Go', 'Python'] },
  { group: 'Frontend', items: ['React', 'Next.js', 'WebGL', 'Tailwind'] },
  { group: 'Backend', items: ['Node.js', 'Postgres', 'Edge Functions', 'Redis'] },
  { group: 'Infrastructure', items: ['Docker', 'Terraform', 'AWS', 'CI/CD'] },
];

const timeline = [
  { year: '2024 — Now', role: 'Principal Engineer', org: 'Independent', italic: 'selected engagements' },
  { year: '2021 — 2024', role: 'Staff Engineer', org: 'Halcyon Labs', italic: 'platform team' },
  { year: '2018 — 2021', role: 'Senior Engineer', org: 'Meridian', italic: 'data systems' },
];

export default function About() {
  return (
    <section id="about" className="relative w-full py-28 md:py-36">
      <div className="pointer-events-none absolute right-1/4 top-1/2 h-72 w-72 -translate-y-1/2 ambient-glow opacity-40" aria-hidden />

      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading index="02" title="About" italic="profile" />

        <div className="mt-16 grid gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Narrative */}
          <div>
            <p className="font-serif text-xl leading-relaxed text-gray-300 md:text-2xl">
              I build software at the intersection of <span className="italic text-neon-200">engineering rigor</span> and
              <span className="italic text-neon-200"> editorial clarity</span> — systems that are fast, dependable,
              and quietly considered.
            </p>
            <p className="mt-6 max-w-xl font-serif text-base leading-relaxed text-gray-400">
              Over the past decade I&aposve led <span className="italic text-gray-200">platform</span> teams, shipped
              <span className="italic text-gray-200"> real-time</span> infrastructure, and obsessively refined the
              <span className="italic text-gray-200"> details</span> that make products feel inevitable. I work in
              small, senior teams where <span className="italic text-neon-200">taste</span> and velocity both matter.
            </p>

            {/* Skills */}
            <div className="mt-12 grid grid-cols-2 gap-px border border-neon-400/15 bg-neon-400/10 sm:grid-cols-4">
              {skills.map((s) => (
                <div key={s.group} className="bg-navy-950 p-5">
                  <h4 className="font-mono text-[10px] tracking-[0.2em] text-neon-300/60 uppercase">{s.group}</h4>
                  <ul className="mt-3 space-y-1.5">
                    {s.items.map((item) => (
                      <li key={item} className="font-serif text-sm text-gray-400">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="lg:pl-8">
            <h4 className="font-mono text-[10px] tracking-[0.3em] text-neon-300/60 uppercase">// trajectory</h4>
            <div className="mt-6 space-y-px border-l border-neon-400/15">
              {timeline.map((t) => (
                <div
                  key={t.year}
                  className="group relative pl-8 py-6 transition-colors duration-300 hover:bg-navy-900/40"
                >
                  <span className="absolute left-[-5px] top-7 h-2.5 w-2.5 border border-neon-400/40 bg-navy-950 transition-all duration-300 group-hover:border-neon-400/80 group-hover:shadow-[0_0_12px_rgba(10,132,255,0.5)]" />
                  <p className="font-mono text-xs tracking-wide text-gray-600">{t.year}</p>
                  <p className="mt-2 font-serif text-lg text-gray-100">
                    {t.role} <span className="italic text-neon-200/80">— {t.org}</span>
                  </p>
                  <p className="mt-1 font-serif text-sm italic text-gray-500">{t.italic}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
