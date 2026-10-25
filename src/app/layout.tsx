import type { Metadata, Viewport } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { profile } from "@/data/profile";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${profile.name} — Full Stack Java Engineer`,
    template: `%s | ${profile.name}`,
  },
  description: "Full stack engineer building web products and Spring Boot backends, with ongoing research into reliable AI-assisted healthcare service discovery.",
  metadataBase: new URL("https://example.com"), // Replace with your final domain before launch.
  openGraph: {
    title: `${profile.name} — Full Stack Java Engineer`,
    description: "Full stack engineer building web products and Spring Boot backends.",
    type: "website",
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
    url: "https://example.com",
    email: profile.email,
    sameAs: [profile.github, profile.linkedin],
    description: profile.introduction
  };
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
