import type { Metadata } from "next";
import { Geist, Geist_Mono, Sarpanch, Sora } from "next/font/google";
import Script from "next/script";

import { RootProvider } from "fumadocs-ui/provider/next";

import "./globals.css";

const sarpanch = Sarpanch({
  variable: "--font-sarpanch",
  subsets: ["latin"],
  weight: "400",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fluxbuttons.vercel.app/"),
  title: "Fluxbuttons – A shadcn registry of beautifully crafted buttons",
  description:
    "Beautiful, interactive buttons built for landing pages and modern web apps — no packages, no lock-in. The perfect companion for shadcn.",

  keywords: [
    "React components",
    "Next.js UI",
    "Framer Motion",
    "Tailwind CSS",
    "shadcn ui",
    "Button library",
    "Button Registry",
    "animated UI components",
    "react button collection",
    "UI library",
    "animated buttons",
    "component library",
    "frontend UI kit",
  ],

  openGraph: {
    title: "Fluxbuttons – A shadcn registry of beautifully crafted buttons",
    description:
      "Beautiful, interactive buttons built for landing pages and modern web apps — no packages, no lock-in. The perfect companion for shadcn.",
    url: "https://fluxbuttons.vercel.app/",
    siteName: "Fluxbuttons",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Fluxbuttons",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Fluxbuttons – A shadcn registry of beautifully crafted buttons",
    description:
      "Beautiful, interactive buttons built for landing pages and modern web apps — no packages, no lock-in. The perfect companion for shadcn.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <RootProvider
          theme={{
            defaultTheme: "dark",
            enabled: false,
          }}
        >
          {" "}
          {children}
          <Script
            src="https://cloud.umami.is/script.js"
            data-website-id="e4159322-9c42-41ea-bb49-042f52b3fd1a"
          />
        </RootProvider>
      </body>
    </html>
  );
}
