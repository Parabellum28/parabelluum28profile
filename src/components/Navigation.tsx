import { useEffect, useState } from 'react';

const links = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-navy-950/80 backdrop-blur-md border-b border-neon-400/10'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
        <a href="#top" className="group flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center border border-neon-400/40 text-neon-200 text-sm tracking-tighter transition-all duration-300 group-hover:border-neon-400/80 group-hover:shadow-[0_0_16px_rgba(10,132,255,0.4)]">
            <span className="font-serif italic text-neon-100">h</span>
          </span>
          <span className="font-serif text-sm tracking-[0.2em] text-gray-300 transition-colors duration-300 group-hover:text-neon-100">
            H T<span className="text-neon-300">.</span>CHETHAN
          </span>
        </a>

        <div className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative font-serif text-sm tracking-wide text-gray-400 transition-colors duration-300 hover:text-neon-100"
            >
              <span className="italic text-neon-300/70">/</span> {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-neon-400/60 transition-all duration-400 group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-serif text-xs tracking-wide text-gray-400 transition-colors hover:text-neon-100"
            >
              <span className="italic text-neon-300/70">/</span> {l.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
