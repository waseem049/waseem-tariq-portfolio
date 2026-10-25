"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { ThemeToggle } from "@/components/theme-toggle";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/research", label: "Research" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`site-header sticky top-0 z-100 border-b border-[var(--line)] bg-[color-mix(in_srgb,var(--bg)_88%,_transparent)] backdrop-blur-[24px] backdrop-saturate-[200%] transition-all duration-250 ease-in-out ${
        scrolled ? "shadow-[0_1px_20px_rgba(0,0,0,.06)]" : ""
      }`}
    >
      <div className="container header-inner flex items-center justify-between gap-24 h-64">
        <Link
          href="/"
          className="brand inline-flex items-center gap-10 flex-shrink-0 text-decoration-none"
          aria-label="Waseem Tariq home"
          onClick={() => setMenuOpen(false)}
        >
          <span className="brand-mark grid place-items-center w-[34px] h-[34px] rounded-[8px] bg-[var(--accent-gradient)] text-white text-[11px] font-[800] tracking-[-0.03em] shadow-[0_2px_8px_var(--accent-glow)] transition-all duration-150 ease-spring">
            WT
          </span>
          <span className="brand-name text-[14px] font-[600] tracking-[-0.02em] text-[var(--ink)]">
            Waseem Tariq
            <span className="brand-sep text-[var(--line-2)] font-normal"> ·</span>
          </span>
        </Link>

        <button
          className="mobile-menu-toggle hidden w-[36px] h-[36px] border border-[var(--line)] rounded-[8px] bg-[var(--surface)] text-[var(--ink)] text-[18px] items-center justify-center transition-all duration-150 ease-in-out"
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        >
          <span>{menuOpen ? "×" : "☰"}</span>
        </button>

        <nav
          className={`main-nav flex items-center gap-4 ${
            menuOpen ? "is-open" : ""
          }`}
          aria-label="Main navigation"
        >
          {navItems.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                href={item.href}
                key={item.href}
                className={`nav-link relative inline-flex items-center px-3 py-[6px] rounded-[8px] text-[13px] font-[500] text-[var(--ink-3)] transition-all duration-150 ease-in-out ${active ? "text-[var(--accent)] bg-[var(--accent-subtle)] font-[600]" : ""}`}
                aria-current={active ? "page" : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
