import type { MetadataRoute } from "next";
import { SITE_URL, localeMeta, locales, localizedPath } from "@/lib/site-content";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const localizedPages = locales.flatMap((locale) =>
    ["/", "/support"].map((path) => ({
      url: `${SITE_URL}${localizedPath(locale, path as "/" | "/support")}`,
      lastModified: new Date("2026-07-15"),
      changeFrequency: path === "/" ? ("weekly" as const) : ("monthly" as const),
      priority: path === "/" ? 1 : 0.7,
      alternates: {
        languages: Object.fromEntries(
          locales.map((alternateLocale) => [
            localeMeta[alternateLocale].htmlLang,
            `${SITE_URL}${localizedPath(alternateLocale, path as "/" | "/support")}`,
          ]),
        ),
      },
    })),
  );

  return [
    ...localizedPages,
    {
      url: `${SITE_URL}/privacy/`,
      lastModified: new Date("2026-07-15"),
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${SITE_URL}/disclaimer/`,
      lastModified: new Date("2026-07-15"),
      changeFrequency: "yearly",
      priority: 0.4,
    },
  ];
}
