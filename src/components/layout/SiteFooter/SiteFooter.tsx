'use client'

import Link from 'next/link'
import { profile } from '@/content'
import styles from './SiteFooter.module.css'

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div>
          <Link href="/" className={styles.footerBrand}>
            Waseem Tariq<span className={styles.brandDot}>.</span>
          </Link>
          <p className={styles.footerNote}>Software engineering, thoughtful systems, and applied AI.</p>
        </div>
        <div className={styles.footerRight}>
          <div className={styles.footerLinks}>
            {profile.github ? (
              <a href={profile.github} target="_blank" rel="noreferrer" className={styles.footerLink}>
                GitHub ↗
              </a>
            ) : null}
            {profile.linkedin ? (
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className={styles.footerLink}>
                LinkedIn ↗
              </a>
            ) : null}
            {profile.email ? (
              <a href={`mailto:${profile.email}`} className={styles.footerLink}>
                Email ↗
              </a>
            ) : null}
            <Link href="/contact" className={styles.footerLink}>Contact ↗</Link>
          </div>
          <span className={styles.copyright}>© {new Date().getFullYear()} Waseem Tariq</span>
        </div>
      </div>
    </footer>
  )
}