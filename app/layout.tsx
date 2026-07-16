import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://moment365.com"),
  title: {
    default: "Moment365 — Beautiful countdowns for what matters",
    template: "%s · Moment365",
  },
  description:
    "Create beautiful countdowns in seconds, get thoughtful reminders, and keep your next moments close across your Apple devices.",
  applicationName: "Moment365",
  keywords: [
    "countdown app",
    "event countdown",
    "birthday countdown",
    "reminders",
    "Apple Watch countdown",
    "iPhone widgets",
    "iCloud sync",
  ],
  authors: [{ name: "Rui Hu" }],
  creator: "Rui Hu",
  publisher: "Rui Hu",
  category: "productivity",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png", sizes: "64x64" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Moment365",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f3ec" },
    { media: "(prefers-color-scheme: dark)", color: "#111528" },
  ],
  colorScheme: "light dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
