'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { ThemeToggle } from '@/components/layout/ThemeToggle'
import styles from './SiteHeader.module.css'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/experience', label: 'Experience' },
  { href: '/research', label: 'Research' },
  { href: '/contact', label: 'Contact' },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}
    >
      <div className={styles.headerInner}>
        <Link
          href="/"
          className={styles.brand}
          aria-label="Waseem Tariq home"
          onClick={() => setMenuOpen(false)}
        >
          <span className={styles.brandMark}>
            WT
          </span>
          <span className={styles.brandName}>
            Waseem Tariq
            <span className={styles.brandSep}>·</span>
          </span>
        </Link>

        <button
          className={styles.mobileMenuToggle}
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
        >
          <span>{menuOpen ? '×' : '☰'}</span>
        </button>

        <nav
          className={`${styles.mainNav} ${menuOpen ? styles.open : ''}`}
          aria-label="Main navigation"
        >
          {navItems.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`)
            return (
              <Link
                href={item.href}
                key={item.href}
                className={`${styles.navLink} ${active ? styles.active : ''}`}
                aria-current={active ? 'page' : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            )
          })}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}