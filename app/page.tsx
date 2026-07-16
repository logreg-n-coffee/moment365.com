import type { Metadata } from "next";
import { MarketingPage } from "@/components/marketing-page";
import { SITE_URL, languageAlternates, siteCopy } from "@/lib/site-content";

export const metadata: Metadata = {
  title: { absolute: siteCopy.en.meta.title },
  description: siteCopy.en.meta.description,
  alternates: {
    canonical: SITE_URL,
    languages: languageAlternates(),
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: siteCopy.en.meta.title,
    description: siteCopy.en.meta.description,
    locale: "en_US",
    siteName: "Moment365",
    images: [{ url: "/media/social/moment365-og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteCopy.en.meta.title,
    description: siteCopy.en.meta.description,
    images: ["/media/social/moment365-og.png"],
  },
};

export default function HomePage() {
  return <MarketingPage locale="en" />;
}
