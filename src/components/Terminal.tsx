import { useEffect, useRef, useState } from 'react';

type Line = {
  text: string;
  kind: 'cmd' | 'out' | 'ok' | 'dim';
};

const script: Line[] = [
  { text: 'whoami', kind: 'cmd' },
  { text: 'alex_mercer — software engineer', kind: 'out' },
  { text: '', kind: 'dim' },
  { text: 'cat stack.config', kind: 'cmd' },
  { text: '› languages: TypeScript, Rust, Go', kind: 'out' },
  { text: '› frontend:  React, Next.js, WebGL', kind: 'out' },
  { text: '› backend:   Node, Postgres, Edge', kind: 'out' },
  { text: '✓ configuration loaded', kind: 'ok' },
  { text: '', kind: 'dim' },
  { text: 'status --current', kind: 'cmd' },
  { text: '› available for select engagements', kind: 'out' },
  { text: '› shipping from Berlin / remote', kind: 'out' },
  { text: '', kind: 'dim' },
  { text: './run --portfolio', kind: 'cmd' },
  { text: '› initializing interface...', kind: 'dim' },
  { text: '✓ connection established', kind: 'ok' },
];

export default function Terminal() {
  const [visibleLines, setVisibleLines] = useState<Line[]>([]);
  const [typed, setTyped] = useState('');
  const idxRef = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let typeTimer: ReturnType<typeof setTimeout>;
    let lineTimer: ReturnType<typeof setTimeout>;

    const runLine = () => {
      const i = idxRef.current;
      if (i >= script.length) {
        return;
      }
      const line = script[i];
      if (line.kind === 'cmd') {
        setTyped('');
        let char = 0;
        const typeChar = () => {
          char++;
          setTyped(line.text.slice(0, char));
          if (char < line.text.length) {
            typeTimer = setTimeout(typeChar, 38 + Math.random() * 60);
          } else {
            lineTimer = setTimeout(() => {
              setVisibleLines((prev) => [...prev, line]);
              setTyped('');
              idxRef.current = i + 1;
              lineTimer = setTimeout(runLine, 260);
            }, 360);
          }
        };
        typeChar();
      } else {
        lineTimer = setTimeout(() => {
          setVisibleLines((prev) => [...prev, line]);
          idxRef.current = i + 1;
          runLine();
        }, line.text === '' ? 140 : 200);
      }
    };

    const start = setTimeout(runLine, 900);
    return () => {
      clearTimeout(start);
      clearTimeout(typeTimer);
      clearTimeout(lineTimer);
    };
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [visibleLines, typed]);

  const current = idxRef.current < script.length ? script[idxRef.current] : null;
  const showCursor = current?.kind === 'cmd';

  return (
    <div className="relative w-full max-w-[460px] mx-auto animate-fade-in" style={{ animationDelay: '0.6s', opacity: 0 }}>
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -inset-12 ambient-glow animate-glow-pulse" aria-hidden />

      {/* Terminal frame */}
      <div className="relative border border-neon-400/20 bg-navy-900/90 backdrop-blur-sm border-glow overflow-hidden">
        {/* Scan line */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neon-400/30 to-transparent animate-scan" aria-hidden />

        {/* Title bar */}
        <div className="flex items-center gap-2 border-b border-neon-400/10 bg-navy-850/60 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full border border-neon-400/30" />
          <span className="h-2.5 w-2.5 rounded-full border border-neon-400/30" />
          <span className="h-2.5 w-2.5 rounded-full border border-neon-400/40" />
          <span className="ml-3 font-mono text-[11px] tracking-wide text-gray-500">
            alex@mercer: <span className="text-neon-300/80">~</span>/portfolio
          </span>
        </div>

        {/* Body */}
        <div
          ref={containerRef}
          className="h-[300px] overflow-y-auto scrollbar-hidden px-5 py-4 font-mono text-[13px] leading-relaxed"
        >
          {visibleLines.map((line, i) => (
            <LineRow key={i} line={line} />
          ))}
          {showCursor && (
            <div className="flex items-center">
              <Prompt />
              <span className="text-gray-200">{typed}</span>
              <span className="ml-0.5 inline-block h-[15px] w-[8px] bg-neon-300/90 animate-blink" />
            </div>
          )}
          {!showCursor && idxRef.current >= script.length && (
            <div className="flex items-center">
              <Prompt />
              <span className="ml-0.5 inline-block h-[15px] w-[8px] bg-neon-300/90 animate-blink" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Prompt() {
  return (
    <span className="mr-2 select-none text-neon-400">
      <span className="text-neon-300">alex@mercer</span>
      <span className="text-gray-600">:</span>
      <span className="text-neon-200">~</span>
      <span className="text-gray-600">$</span>
    </span>
  );
}

function LineRow({ line }: { line: Line }) {
  if (line.text === '') return <div className="h-3" />;
  if (line.kind === 'cmd') {
    return (
      <div className="flex animate-fade-up-sm" style={{ opacity: 0 }}>
        <Prompt />
        <span className="text-gray-200">{line.text}</span>
      </div>
    );
  }
  if (line.kind === 'ok') {
    return (
      <div className="animate-fade-up-sm pl-0 text-cyan-400" style={{ opacity: 0 }}>
        {line.text}
      </div>
    );
  }
  if (line.kind === 'dim') {
    return (
      <div className="animate-fade-up-sm pl-0 text-gray-600" style={{ opacity: 0 }}>
        {line.text}
      </div>
    );
  }
  return (
    <div className="animate-fade-up-sm pl-0 text-gray-400" style={{ opacity: 0 }}>
      {line.text}
    </div>
  );
}
