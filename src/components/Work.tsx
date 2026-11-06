import { ArrowUpRight } from 'lucide-react';

type Project = {
  id: string;
  name: string;
  italic: string;
  description: string;
  tags: string[];
  year: string;
  links: ProjectLink[];
};

type ProjectLink = {
  label: string;
  url: string;
};

const projects: Project[] = [
  {
    id: '01',
    name: 'PaperPilot— Stateful arXiv Research Digest & Grounded QA Agent ',
    italic: 'RAG pipeline using semantic embeddings',
    description:
      ' A stateful research assistant that searches arXiv, retrieves and parses paper PDFs, and generates structured research digests.',
    tags: ['RAG', 'query routing', 'chunking'],
    year: 'Sept 2026',
    links: [{ label: 'GitHub Repository', url: 'https://github.com/Parabellum28/Autonomous-arXiv-Paper-Digest-QA-Agent' }],
  },
  {
    id: '02',
    name: 'Risk Appetite Framework ',
    italic: 'RAG Based Project',
    description:
      'An AI automated Retrieval-Augmented Generation (RAG) system using Python, Flask REST APIs, LangChain, Groq Llama 3.3-70B, ChromaDB, Sentence Transformers, Redis, and Docker for semantic search and context-aware response generation.',
    tags: ['LangChain', 'Sentence Transformers', 'Docker', 'Redis', 'ChromaDB'],
    year: 'May 2026',
    links: [{ label: 'GitHub Repository', url: 'https://github.com/Parabellum28/Risk-Appetite-Framework' }],
  },
  {
    id: '03',
    name: 'DevOps Deployment Pipeline for Flask API',
    italic: 'AWS CI/CD Automation Based Project',
    description:
      ' deployed a containerized Flask REST API on AWS EC2, using Docker for application isolation and Nginx as a reverse proxy for production HTTP traffic.',
    tags: ['AWS', 'Docker', 'Nginx', 'Flask', 'CI/CD'],
    year: 'Sept 2026',
    links: [{ label: 'GitHub Repository', url: 'https://github.com/Parabellum28/DevOps-Deployment-Pipeline-for-Flask-API' }],
  },
  {
    id: '04',
    name: 'Freelance Projects',
    italic: 'Under Contract',
    description:
      'Developed, deployed, and maintained production-ready web applications and backend services using Python, JavaScript/ TypeScript, React, Node.js, Flask, REST APIs, and Docker.',
    tags: ['REVA BAKERY MACHINERY', 'THROTTLE & THEORY AVIATION', 'FANTACIAN LABS'],
    year: '2024',
    links: [
      { label: 'REVA BAKERY MACHINERY — Visit Live Website', url: 'https://www.revabakerymachinery.com' },
      { label: 'THROTTLE & THEORY AVIATION — Visit Live Website', url: 'https://www.throttleandtheoryaviation.com' },
      { label: 'FANTACIAN LABS — Visit Live Website', url: 'https://www.fantacianlabs.com' },
    ],
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
        <SectionHeading index="01" title="" italic="Projects" />

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

              <div className="relative mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
                {p.links.map(({ label, url }) => {
                  const isPlaceholder = url.startsWith('#ADD_');
                  const content = (
                    <>
                      <span className="italic">{label}</span>
                      {isPlaceholder && <span className="font-mono text-[10px] text-gray-500"></span>}
                      <ArrowUpRight aria-hidden="true" className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </>
                  );

                  return isPlaceholder ? (
                    <span
                      key={`${label}-${url}`}
                      aria-disabled="true"
                      title={`Replace ${url} with the destination URL in the project data`}
                      className="inline-flex items-center gap-1.5 font-serif text-sm text-neon-200/60"
                    >
                      {content}
                    </span>
                  ) : (
                    <a
                      key={label}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${label} (opens in new tab)`}
                      className="inline-flex items-center gap-1.5 font-serif text-sm text-neon-200 transition-colors duration-300 hover:text-neon-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-neon-300"
                    >
                      {content}
                    </a>
                  );
                })}
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
