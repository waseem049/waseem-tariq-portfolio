import type { Metadata, Viewport } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { profile } from "@/data/profile";
import { plusJakartaSans, inter } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${profile.name} — Full Stack Java Engineer`,
    template: `%s | ${profile.name}`,
  },
  description: "Full stack engineer building web products and Spring Boot backends, with ongoing research into reliable AI-assisted healthcare service discovery.",
  metadataBase: new URL("https://waseemtariq.vercel.app"),
  openGraph: {
    title: `${profile.name} — Full Stack Java Engineer`,
    description: "Full stack engineer building web products and Spring Boot backends.",
    type: "website",
    url: "https://waseemtariq.vercel.app",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: profile.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — Full Stack Java Engineer`,
    description: "Full stack engineer building web products and Spring Boot backends.",
    images: ["/og-image.svg"],
  },
  alternates: {
    canonical: "https://waseemtariq.vercel.app",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#fafafa",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: "Full Stack Java Engineer",
    url: "https://waseemtariq.vercel.app",
    email: profile.email,
    sameAs: [profile.github, profile.linkedin],
    description: profile.introduction
  };
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <head>
        {/* Theme applied before hydration to avoid flash */}
        <script
          id="waseem-theme-init"
          dangerouslySetInnerHTML={{
            __html: `
              (function(){
                var root = document.documentElement;
                var saved = localStorage.getItem('waseem-theme');
                if (saved === 'dark') {
                  root.dataset.theme = 'dark';
                  root.classList.add('dark');
                }
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="icon" href="/favicon.svg" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <link rel="alternate" href="https://waseemtariq.vercel.app" hrefLang="en" />
      </head>
      <body className={`${plusJakartaSans.variable} ${inter.variable}`}>
        <a className="skip-link" href="#main">Skip to content</a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
