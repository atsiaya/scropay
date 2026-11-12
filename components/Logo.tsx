export default function Logo({ size = 28 }: { size?: number }) {
  return (
    <span className="inline-flex items-center gap-2">
      <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true">
        <rect width="32" height="32" rx="9" fill="var(--color-moss)" />
        <path d="M9 12h11m0 0-3-3m3 3-3 3M23 20H12m0 0 3-3m-3 3 3 3" stroke="#03150b" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
      <span className="font-display text-lg font-semibold tracking-tight text-[var(--color-ink)]">Ramp</span>
    </span>
  );
}
