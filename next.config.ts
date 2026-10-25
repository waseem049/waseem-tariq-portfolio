import type { NextConfig } from "next"
import bundleAnalyzer from "@next/bundle-analyzer"

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
})

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "placehold.co" },
      { protocol: "https", hostname: "example.com" },
      { protocol: "https", hostname: "cloudify-gray.vercel.app" },
      { protocol: "https", hostname: "doclified.vercel.app" },
      { protocol: "https", hostname: "exceptionaliasacademy.com" },
      { protocol: "https", hostname: "nexgendevelopers.in" },
    ],
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  experimental: {
    optimizePackageImports: ["framer-motion", "lucide-react"],
  },
}

export default withBundleAnalyzer(nextConfig)