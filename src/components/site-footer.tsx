import Link from "next/link";
import { profile } from "@/data/profile";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner flex items-center justify-between gap-[32px] px-0 py-[40px]">
        <div className="footer-social flex items-center gap-[16px]">
          {profile.linkedin ? (
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-6 h-[34px] px-[16px] rounded-full border border-[var(--line-2)] text-[11px] font-[500] text-[var(--ink-2)] hover:bg-[var(--surface-2)] transition-all duration-150 ease-in-out">
              <span className="text-[10px]">in</span> LinkedIn
            </a>
          ) : null}
          {profile.email ? (
            <a href={`mailto:${profile.email}`} className="flex items-center gap-6 h-[34px] px-[16px] rounded-full border border-[var(--line-2)] text-[11px] font-[500] text-[var(--ink-2)] hover:bg-[var(--surface-2)] transition-all duration-150 ease-in-out">
              <span className="text-[10px]">✉</span> Email
            </a>
          ) : null}
          {profile.github ? (
            <a href={profile.github} target="_blank" rel="noreferrer" className="flex items-center gap-6 h-[34px] px-[16px] rounded-full border border-[var(--line-2)] text-[11px] font-[500] text-[var(--ink-2)] hover:bg-[var(--surface-2)] transition-all duration-150 ease-in-out">
              <span className="text-[10px]">⌂</span> GitHub
            </a>
          ) : null}
        </div>
        <span className="copyright text-[11px] text-[var(--ink-4)]">
          © {new Date().getFullYear()}. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
