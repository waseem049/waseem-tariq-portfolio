import type { Metadata, Viewport } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { profile } from "@/data/profile";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${profile.name} — Software Developer & AI Research Enthusiast`,
    template: `%s | ${profile.name}`,
  },
  description: "Portfolio of Waseem Tariq: software projects, engineering experience, and ongoing research into reliable AI-assisted healthcare service discovery.",
  metadataBase: new URL("https://example.com"), // Replace with your final domain before launch.
  openGraph: {
    title: `${profile.name} — Software Developer`,
    description: "Building useful software and exploring reliable applied AI.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#fafafa",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
