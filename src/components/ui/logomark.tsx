export function Logomark({ name }: { name: string }) {
  const initial = name.trim().charAt(0).toUpperCase();
  return (
    <span className="inline-flex items-center gap-2.5 text-foreground/70">
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        aria-hidden
        className="shrink-0"
      >
        <circle cx="14" cy="14" r="13" stroke="currentColor" strokeWidth="1.2" />
        <text
          x="14"
          y="19"
          textAnchor="middle"
          fontSize="13"
          fontFamily="var(--font-geist-mono)"
          fill="currentColor"
        >
          {initial}
        </text>
      </svg>
      <span className="whitespace-nowrap text-lg font-medium tracking-tight">
        {name}
      </span>
    </span>
  );
}
