import type { Metadata } from "next";
import { SupportPage } from "@/components/support-page";
import { SITE_URL, languageAlternates, siteCopy } from "@/lib/site-content";

export const metadata: Metadata = {
  title: { absolute: siteCopy.en.support.metaTitle },
  description: siteCopy.en.support.metaDescription,
  alternates: {
    canonical: `${SITE_URL}/support/`,
    languages: languageAlternates("/support"),
  },
};

export default function SupportRoute() {
  return <SupportPage locale="en" />;
}
