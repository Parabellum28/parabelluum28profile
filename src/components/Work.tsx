import { ArrowUpRight } from 'lucide-react';

type Project = {
  id: string;
  name: string;
  italic: string;
  description: string;
  tags: string[];
  year: string;
};

const projects: Project[] = [
  {
    id: '01',
    name: 'Lumen OS',
    italic: 'distributed runtime',
    description:
      'A lightweight <edge runtime> for globally distributed applications with sub-millisecond cold starts.',
    tags: ['Rust', 'WASM', 'Edge'],
    year: '2025',
  },
  {
    id: '02',
    name: 'Halcyon',
    italic: 'design system',
    description:
      'A <component architecture> and token system powering twenty internal products at scale.',
    tags: ['TypeScript', 'React', 'Tokens'],
    year: '2025',
  },
  {
    id: '03',
    name: 'Meridian',
    italic: 'data canvas',
    description:
      'Real-time <visualization engine> rendering millions of points with WebGL and streaming data.',
    tags: ['WebGL', 'Canvas', 'Streams'],
    year: '2024',
  },
  {
    id: '04',
    name: 'Quartz',
    italic: 'auth gateway',
    description:
      'A <zero-trust authentication> layer handling ten million sessions across regulated markets.',
    tags: ['Go', 'OAuth', 'Security'],
    year: '2024',
  },
];

function renderDesc(text: string) {
  const parts = text.split(/<([^>]+)>/);
  return parts.map((p, i) =>
    i % 2 === 1 ? (
      <span key={i} className="italic text-neon-200">
        {p}
      </span>
    ) : (
      <span key={i}>{p}</span>
    )
  );
}

export default function Work() {
  return (
    <section id="work" className="relative w-full py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading index="01" title="Selected Work" italic="projects" />

        <div className="mt-16 grid gap-px border border-neon-400/15 bg-neon-400/10 sm:grid-cols-2">
          {projects.map((p, i) => (
            <article
              key={p.id}
              className="group relative bg-navy-950 p-8 transition-all duration-500 hover:bg-navy-900 md:p-10"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              {/* hover glow border */}
              <div className="pointer-events-none absolute inset-0 border border-neon-400/0 transition-all duration-500 group-hover:border-neon-400/30 group-hover:shadow-[0_0_30px_rgba(10,132,255,0.1)]" />

              <div className="relative flex items-start justify-between">
                <span className="font-mono text-xs tracking-[0.2em] text-gray-600">{p.id}</span>
                <span className="font-mono text-xs tracking-wide text-gray-600">{p.year}</span>
              </div>

              <h3 className="relative mt-6 font-serif text-2xl text-gray-100 md:text-3xl">
                {p.name}
              </h3>
              <p className="relative mt-1 font-serif text-sm italic text-neon-200/80">{p.italic}</p>

              <p className="relative mt-5 max-w-md font-serif text-base leading-relaxed text-gray-400">
                {renderDesc(p.description)}
              </p>

              <div className="relative mt-7 flex flex-wrap items-center gap-2.5">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="border border-neon-400/15 px-2.5 py-1 font-mono text-[10px] tracking-wide text-gray-500 transition-colors duration-300 group-hover:border-neon-400/30 group-hover:text-gray-400"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="relative mt-7 flex items-center gap-1.5 font-serif text-sm text-gray-500 transition-colors duration-300 group-hover:text-neon-100">
                <span className="italic">View case study</span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({ index, title, italic }: { index: string; title: string; italic: string }) {
  return (
    <div className="flex items-end justify-between border-b border-neon-400/15 pb-6">
      <div className="flex items-baseline gap-4">
        <span className="font-mono text-xs tracking-[0.3em] text-neon-300/60">{index}</span>
        <h2 className="font-serif text-3xl text-gray-100 md:text-4xl">
          {title} <span className="italic text-neon-200">{italic}</span>
        </h2>
      </div>
      <span className="hidden font-mono text-xs tracking-wide text-gray-600 sm:block">// section</span>
    </div>
  );
}
