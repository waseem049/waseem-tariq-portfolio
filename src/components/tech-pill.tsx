export function TechPill({ label }: { label: string }) {
  return (
    <span
      className="inline-flex items-center gap-4 px-2 py-1 rounded-full border border-[var(--line)] bg-[var(--surface)] text-[10px] font-[500] text-[var(--ink-3)]"
    >
      {label}
    </span>
  );
}
