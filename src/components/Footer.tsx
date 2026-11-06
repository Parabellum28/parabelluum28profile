export default function Footer() {
  return (
    <footer className="relative border-t border-neon-400/15">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-10 md:flex-row md:px-10">
        <div className="flex items-center gap-2.5">
          <span className="flex h-7 w-7 items-center justify-center border border-neon-400/40">
            <span className="font-serif italic text-sm text-neon-100">a</span>
          </span>
          <span className="font-serif text-sm tracking-[0.2em] text-gray-400">
            ALEX<span className="text-neon-300">.</span>MERCER
          </span>
        </div>

        <p className="font-mono text-[11px] tracking-wide text-gray-600">
          <span className="italic font-serif text-gray-500">Designed</span> & built with care — © 2026
        </p>

        <a
          href="#top"
          className="group font-serif text-sm text-gray-500 transition-colors hover:text-neon-100"
        >
          <span className="italic">Back to top</span> ↑
        </a>
      </div>
    </footer>
  );
}
