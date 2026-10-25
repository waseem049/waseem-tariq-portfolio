import Link from "next/link";

export default function NotFound() {
  return (
    <div className="inner-page container">
      <main className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <div className="text-[clamp(48px, 12vw, 96px)] font-[800] text-[var(--accent)] leading-none">404</div>
        <h2 className="mt-6 text-[clamp(24px, 4vw, 32px)] font-[700] text-[var(--ink)]">
          Page not found
        </h2>
        <p className="mt-4 max-w-[480px] text-[var(--ink-3)] leading-[1.7]">
          The page you&apos;re looking for doesn&apos;t exist. It may have been moved or removed.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-[8px] border border-[var(--line)] bg-[var(--surface)] text-[13px] font-[600] text-[var(--ink)] hover:bg-[var(--surface-2)] transition-colors"
          >
            Back to home <span aria-hidden="true">→</span>
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-[8px] border border-[var(--line)] bg-[var(--surface)] text-[13px] font-[600] text-[var(--ink)] hover:bg-[var(--surface-2)] transition-colors"
          >
            Browse projects <span aria-hidden="true">→</span>
          </Link>
        </div>
      </main>
    </div>
  );
}
