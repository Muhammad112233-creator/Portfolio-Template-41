export function ArrowUpRight({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M4 12L12 4M12 4H5.5M12 4v6.5" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export function Sparkle({ size = 11 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M8 0c.35 4.2 3.8 7.65 8 8-4.2.35-7.65 3.8-8 8-.35-4.2-3.8-7.65-8-8 4.2-.35 7.65-3.8 8-8Z" />
    </svg>
  );
}

export function Plus({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

export function ArrowDown({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M8 2v12M3 9l5 5 5-5" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}
