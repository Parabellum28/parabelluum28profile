export default function Experience() {
  return (
    <section id="experience" className="relative w-full py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex items-end justify-between border-b border-neon-400/15 pb-6">
          <h2 className="font-serif text-3xl text-gray-100 md:text-4xl">
            Experience <span className="italic text-neon-200">freelance</span>
          </h2>
        </div>

        <article className="mt-10 border border-neon-400/15 bg-navy-900/30 p-6 md:p-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 className="font-serif text-xl text-gray-100 md:text-2xl">
                Freelance Full-Stack Developer
              </h3>
              <p className="mt-1 font-serif text-sm italic text-neon-200/80">
                Independent / Freelance
              </p>
            </div>
            <p className="font-mono text-xs tracking-wide text-gray-500">
              May 2025 – June 2026
            </p>
          </div>

          <p className="mt-5 max-w-4xl font-serif text-base leading-relaxed text-gray-400">
            Worked independently with clients to design, develop, and deploy full-stack websites.
            Delivered approximately 3–4 client projects, translating business requirements into
            responsive, functional web solutions.
          </p>

          <ul className="mt-5 grid gap-x-8 gap-y-2 sm:grid-cols-2">
            {[
              'Developed and deployed client websites.',
              'Built responsive frontend interfaces using React, Next.js and Tailwind CSS.',
              'Worked on backend integrations, APIs and data handling.',
              'Collaborated with clients to understand requirements and deliver solutions.',
              'Managed project development and deployment.',
            ].map((responsibility) => (
              <li
                key={responsibility}
                className="flex gap-2 font-serif text-sm leading-relaxed text-gray-400"
              >
                <span className="text-neon-300/70" aria-hidden="true">/</span>
                {responsibility}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
