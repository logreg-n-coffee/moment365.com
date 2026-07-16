import Image from "next/image";
import Link from "next/link";
import {
  APP_STORE_URL,
  localeMeta,
  locales,
  localizedPath,
  siteCopy,
  type Locale,
} from "@/lib/site-content";

interface SiteHeaderProps {
  locale: Locale;
  currentPath?: "/" | "/support";
  compact?: boolean;
  showLanguageMenu?: boolean;
}

export function LanguageMenu({
  locale,
  currentPath = "/",
}: {
  locale: Locale;
  currentPath?: "/" | "/support";
}) {
  const copy = siteCopy[locale];

  return (
    <details className="language-menu">
      <summary aria-label={copy.nav.language}>
        <span aria-hidden="true">{localeMeta[locale].shortLabel}</span>
        <span className="summary-chevron" aria-hidden="true" />
      </summary>
      <div className="language-menu__popover">
        <p>{copy.nav.language}</p>
        {locales.map((option) => (
          <Link
            key={option}
            href={localizedPath(option, currentPath)}
            hrefLang={localeMeta[option].htmlLang}
            lang={localeMeta[option].htmlLang}
            dir={localeMeta[option].direction}
            aria-current={option === locale ? "page" : undefined}
          >
            <span>{localeMeta[option].label}</span>
            <span className="language-code">{localeMeta[option].shortLabel}</span>
          </Link>
        ))}
      </div>
    </details>
  );
}

export function SiteHeader({
  locale,
  currentPath = "/",
  compact = false,
  showLanguageMenu = true,
}: SiteHeaderProps) {
  const copy = siteCopy[locale];
  const home = localizedPath(locale);

  return (
    <header className={`site-header${compact ? " site-header--compact" : ""}`}>
      <div className="site-header__inner">
        <Link className="brand" href={home} aria-label="Moment365">
          <Image
            src="/media/brand/app-icon.webp"
            alt=""
            width={640}
            height={640}
            className="brand__icon"
            sizes="40px"
          />
          <span>Moment365</span>
        </Link>

        {!compact ? (
          <nav className="desktop-nav" aria-label={copy.nav.primaryLabel}>
            <a href={`${home}#create`}>{copy.nav.product}</a>
            <a href={`${home}#magic`}>{copy.nav.magic}</a>
            <a href={`${home}#native`}>{copy.nav.native}</a>
            <Link href={localizedPath(locale, "/support")}>{copy.nav.support}</Link>
          </nav>
        ) : (
          <Link className="back-link" href={home}>
            <span aria-hidden="true">←</span> {copy.support.back}
          </Link>
        )}

        <div className="site-header__actions">
          {showLanguageMenu ? <LanguageMenu locale={locale} currentPath={currentPath} /> : null}
          <a className="header-cta" href={APP_STORE_URL} target="_blank" rel="noreferrer">
            {copy.nav.download}
          </a>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter({ locale }: { locale: Locale }) {
  const copy = siteCopy[locale];
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer__top">
        <Link className="brand brand--footer" href={localizedPath(locale)} aria-label="Moment365">
          <Image
            src="/media/brand/app-icon.webp"
            alt=""
            width={640}
            height={640}
            className="brand__icon"
            sizes="44px"
          />
          <span>Moment365</span>
        </Link>
        <p>{copy.footer.tagline}</p>
      </div>
      <div className="site-footer__bottom">
        <div className="footer-links">
          <Link href="/privacy/">{copy.footer.privacy}</Link>
          <Link href="/disclaimer/">{copy.footer.disclaimer}</Link>
          <Link href={localizedPath(locale, "/support")}>{copy.footer.support}</Link>
        </div>
        <p>
          © {year} Moment365. {copy.footer.rights}
        </p>
      </div>
      {locale !== "en" ? <p className="legal-language-note">{copy.footer.legalLanguage}</p> : null}
    </footer>
  );
}
