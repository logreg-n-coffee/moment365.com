import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SupportPage } from "@/components/support-page";
import {
  SITE_URL,
  isLocale,
  languageAlternates,
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
  return {
    title: { absolute: copy.support.metaTitle },
    description: copy.support.metaDescription,
    alternates: {
      canonical: `${SITE_URL}${localizedPath(locale, "/support")}`,
      languages: languageAlternates("/support"),
    },
  };
}

export default async function LocalizedSupportRoute({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale) || locale === "en") notFound();
  return <SupportPage locale={locale} />;
}
