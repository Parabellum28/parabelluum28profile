import { SectionHeading } from './Work';

const skills = [
  { group: 'Languages', items: ['Python', 'TypeScript', 'SQL', 'JavaScript'] },
  { group: 'Frontend', items: ['React', 'Next.js','Tailwind CSS'] },
  { group: 'Backend', items: ['Flask', 'Node.js', 'Express.js', 'REST APIs'] },
  { group: 'Infrastructure', items: ['RAG', 'Docker', 'AWS EC2', 'Nginx', 'GitHub Actions', 'Redis', 'Git & GitHub'] },
];

export default function About() {
  return (
    <section id="about" className="relative w-full py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading index="02" title="About" italic="profile" />

        <div className="mt-16">
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
        </div>
      </div>
    </section>
  );
}
