import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MarketingPage } from "@/components/marketing-page";
import {
  SITE_URL,
  isLocale,
  languageAlternates,
  localeMeta,
  locales,
  localizedPath,
  siteCopy,
} from "@/lib/site-content";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.filter((locale) => locale !== "en").map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale) || locale === "en") return {};

  const copy = siteCopy[locale];
  const url = `${SITE_URL}${localizedPath(locale)}`;

  return {
    title: { absolute: copy.meta.title },
    description: copy.meta.description,
    alternates: {
      canonical: url,
      languages: languageAlternates(),
    },
    openGraph: {
      type: "website",
      url,
      title: copy.meta.title,
      description: copy.meta.description,
      locale: localeMeta[locale].openGraphLocale,
      siteName: "Moment365",
      images: [{ url: "/media/social/moment365-og.png", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: copy.meta.title,
      description: copy.meta.description,
      images: ["/media/social/moment365-og.png"],
    },
  };
}

export default async function LocalizedHomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale) || locale === "en") notFound();
  return <MarketingPage locale={locale} />;
}
