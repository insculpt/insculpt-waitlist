import "./globals.css";
import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans';
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Insculpt | Sculpt your ideas into apps",
  description:
    "Insculpt is an AI-first platform to build web, mobile, and desktop apps inside one unified workspace. Join the waitlist for early access.",

  openGraph: {
    title: "Insculpt | Sculpt your ideas into apps",
    description:
      "Build full apps with AI. UI, CMS, and workflows in one workspace.",
    url: "https://insculpt.io",
    siteName: "Insculpt",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Insculpt — Sculpt your ideas into apps",
    description:
      "From idea to full app. Build web, mobile, and desktop apps with AI.",
    images: ["/og-image.png"],
  },

  keywords: [
    "AI app builder",
    "no code platform",
    "low code",
    "prompt to app",
    "build apps with AI",
    "flutter app builder",
    "tauri apps",
  ],

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://insculpt.io" />
      </head>
      <body className={GeistSans.className}>
        {children}
        <Toaster richColors position="top-center" />
        <Analytics />
      </body>
    </html>
  );
}
