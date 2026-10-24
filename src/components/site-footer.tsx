import Link from "next/link";
import { profile } from "@/data/profile";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <Link href="/" className="footer-brand">
            Waseem Tariq<span>.</span>
          </Link>
          <p className="footer-note">Software engineering, thoughtful systems, and applied AI.</p>
        </div>
        <div className="footer-right">
          <div className="footer-links">
            {profile.github ? (
              <a href={profile.github} target="_blank" rel="noreferrer">
                GitHub ↗
              </a>
            ) : null}
            {profile.linkedin ? (
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn ↗
              </a>
            ) : null}
            {profile.email ? (
              <a href={`mailto:${profile.email}`}>Email ↗</a>
            ) : null}
            <Link href="/contact">Contact ↗</Link>
          </div>
          <span className="copyright">© {new Date().getFullYear()} Waseem Tariq</span>
        </div>
      </div>
    </footer>
  );
}
