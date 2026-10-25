import Link from "next/link";

type ProjectStatus = "Live" | "In development";

export function ProjectCaseCard({
  image,
  name,
  status,
  subtitle,
  description,
  techs,
  viewUrl,
}: {
  image: string;
  name: string;
  status: ProjectStatus;
  subtitle: string;
  description: string;
  techs: string[];
  viewUrl: string;
}) {
  const isLive = status === "Live";

  return (
    <article className="flex flex-col gap-4 p-[24px] rounded-[12px] border border-[var(--line)] bg-[var(--surface)]">
      <div className="flex items-center justify-between">
        <h3 className="text-[16px] font-[600] text-[var(--ink)]">
          {name}
        </h3>
        <span
          className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-[600] uppercase ${
            isLive
              ? "bg-[var(--green-bg)] text-[var(--green)] border border-[var(--green)]"
              : "bg-[var(--amber-bg)] text-[var(--amber)] border border-[var(--amber)]"
          }`}
        >
          <span className="w-[6px] h-[6px] rounded-full bg-current" />
          {status}
        </span>
      </div>

      <div className="relative overflow-hidden rounded-[8px] bg-[var(--surface-2)] border border-[var(--line)] h-[120px]">
        <div className="absolute inset-0 flex items-center justify-center text-[var(--ink-4)] text-[11px]">
          {image}
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2 mb-2">
        <Link
          className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--ink)] text-[var(--bg)] text-[10px] font-[600] hover:bg-[var(--accent)] transition-colors duration-150`}
          href={viewUrl}
        >
          View Case Study <span aria-hidden="true">→</span>
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-2 text-[9px] font-[500] text-[var(--ink-3)]">
        {techs.map((t) => (
          <span key={t} className="border border-[var(--line-2)] rounded-[4px] px-2 py-1 text-[8px] font-[500] text-[var(--ink-4)] bg-[var(--surface-2)]">
            {t}
          </span>
        ))}
      </div>
    </article>
  );
}
