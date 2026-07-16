import Image from "next/image";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import {
  APP_STORE_URL,
  SITE_URL,
  localeMeta,
  localizedPath,
  siteCopy,
  type Locale,
} from "@/lib/site-content";

const galleryAssets = [
  { file: "home.webp", width: 760, height: 1651, kind: "phone" },
  { file: "magic.webp", width: 760, height: 1651, kind: "phone" },
  { file: "detail-birthday.webp", width: 760, height: 1651, kind: "phone" },
  { file: "detail-trip.webp", width: 760, height: 1651, kind: "phone" },
  { file: "ipad-home.webp", width: 1100, height: 1467, kind: "tablet" },
  { file: "watch.webp", width: 368, height: 448, kind: "watch" },
] as const;

function screenshotPath(locale: Locale, file: string) {
  const mediaLocale = locale === "ar" ? "en" : locale;
  return `/media/screenshots/${mediaLocale}/${file}`;
}

export function MarketingPage({ locale }: { locale: Locale }) {
  const copy = siteCopy[locale];
  const meta = localeMeta[locale];
  const homePath = localizedPath(locale);
  const softwareApplication = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Moment365",
    description: copy.meta.description,
    url: `${SITE_URL}${homePath}`,
    downloadUrl: APP_STORE_URL,
    applicationCategory: "ProductivityApplication",
    operatingSystem: "iOS 18+, iPadOS 18+, watchOS 10+",
    inLanguage: meta.htmlLang,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  return (
    <div className="marketing-site" lang={meta.htmlLang} dir={meta.direction}>
      <a className="skip-link" href="#main-content">
        {copy.nav.skip}
      </a>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplication) }}
      />
      <SiteHeader locale={locale} />

      <main id="main-content" tabIndex={-1}>
      <section className="hero section-shell" aria-labelledby="hero-title">
        <div className="hero__copy">
          <p className="eyebrow">{copy.hero.eyebrow}</p>
          <h1 id="hero-title">{copy.hero.title}</h1>
          <p className="hero__body">{copy.hero.body}</p>
          <div className="hero__actions">
            <a className="button button--primary" href={APP_STORE_URL} target="_blank" rel="noreferrer">
              {copy.hero.primary}
              <span aria-hidden="true">↗</span>
            </a>
            <a className="button button--quiet" href="#create">
              {copy.hero.secondary}
              <span aria-hidden="true">↓</span>
            </a>
          </div>
          <p className="hero__availability">
            <span aria-hidden="true" />
            {copy.hero.availability}
          </p>
        </div>

        <div className="hero__visual" aria-label={copy.hero.imageAlt}>
          <div className="countdown-ring countdown-ring--one" aria-hidden="true" />
          <div className="countdown-ring countdown-ring--two" aria-hidden="true" />
          <div className="hero-shot-wrap">
            <Image
              src={screenshotPath(locale, "home.webp")}
              alt={copy.hero.imageAlt}
              width={760}
              height={1651}
              className="hero-shot"
              priority
              sizes="(max-width: 820px) 74vw, 365px"
            />
          </div>
          <div className="hero-app-icon" aria-hidden="true">
            <Image src="/media/brand/app-icon.webp" alt="" width={640} height={640} sizes="88px" />
          </div>
          <div className="hero-countdown-note" aria-hidden="true">
            <strong>3</strong>
            <span>{copy.hero.floatingUnit}</span>
          </div>
        </div>
      </section>

      <section className="signals section-shell" aria-label={copy.signalsLabel}>
        {copy.signals.map((signal) => (
          <div className="signal" key={signal.label}>
            <strong>{signal.value}</strong>
            <span>{signal.label}</span>
          </div>
        ))}
      </section>

      <section className="product-section section-shell section-pad" id="create" aria-labelledby="product-title">
        <div className="section-heading section-heading--split">
          <div>
            <p className="eyebrow">{copy.product.eyebrow}</p>
            <h2 id="product-title">{copy.product.title}</h2>
          </div>
          <p>{copy.product.body}</p>
        </div>

        <div className="feature-grid">
          {copy.product.features.map((feature) => (
            <article className="feature-card" key={feature.number}>
              <span className="feature-card__number">{feature.number}</span>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="magic-section dark-panel" id="magic" aria-labelledby="magic-title">
        <div className="magic-layout section-shell">
          <div className="magic-visual">
            <div className="magic-glow" aria-hidden="true" />
            <Image
              src={screenshotPath(locale, "magic.webp")}
              alt={copy.magicAdd.imageAlt}
              width={760}
              height={1651}
              className="magic-shot"
              sizes="(max-width: 820px) 76vw, 355px"
            />
            <span className="magic-orbit magic-orbit--one" aria-hidden="true">
              {copy.magicAdd.orbitOne}
            </span>
            <span className="magic-orbit magic-orbit--two" aria-hidden="true">
              {copy.magicAdd.orbitTwo}
            </span>
          </div>
          <div className="magic-copy">
            <p className="eyebrow eyebrow--dark">{copy.magicAdd.eyebrow}</p>
            <h2 id="magic-title">{copy.magicAdd.title}</h2>
            <p className="magic-copy__body">{copy.magicAdd.body}</p>
            <ul className="magic-points">
              {copy.magicAdd.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <p className="requirement-note">{copy.magicAdd.requirement}</p>
          </div>
        </div>
      </section>

      <section className="beauty-section" aria-labelledby="beauty-title">
        <div className="beauty-layout section-shell">
          <div className="beauty-copy">
            <p className="eyebrow">{copy.beauty.eyebrow}</p>
            <h2 id="beauty-title">{copy.beauty.title}</h2>
            <p>{copy.beauty.body}</p>
            <ul className="check-list">
              {copy.beauty.bullets.map((bullet) => (
                <li key={bullet}>
                  <span aria-hidden="true">✓</span>
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
          <div className="beauty-visual">
            <Image
              src={screenshotPath(locale, "detail-birthday.webp")}
              alt={copy.beauty.birthdayAlt}
              width={760}
              height={1651}
              className="beauty-shot beauty-shot--birthday"
              sizes="(max-width: 580px) 64vw, 330px"
            />
            <Image
              src={screenshotPath(locale, "detail-trip.webp")}
              alt={copy.beauty.tripAlt}
              width={760}
              height={1651}
              className="beauty-shot beauty-shot--trip"
              sizes="(max-width: 580px) 64vw, 330px"
            />
            <div className="beauty-swatch" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      </section>

      <section className="native-section dark-panel" id="native" aria-labelledby="native-title">
        <div className="section-shell section-pad">
          <div className="section-heading section-heading--split section-heading--dark">
            <div>
              <p className="eyebrow eyebrow--dark">{copy.native.eyebrow}</p>
              <h2 id="native-title">{copy.native.title}</h2>
            </div>
            <p>{copy.native.body}</p>
          </div>

          <div className="platform-grid">
            {copy.native.platforms.map((platform, index) => (
              <article className="platform-card" key={platform.name}>
                <span className="platform-card__index">0{index + 1}</span>
                <h3>{platform.name}</h3>
                <p className="platform-card__requirement">{platform.requirement}</p>
                <p>{platform.description}</p>
              </article>
            ))}
          </div>

          <div className="device-stage">
            <p className="device-note">{copy.native.stageLabel}</p>
            <Image
              src={screenshotPath(locale, "ipad-home.webp")}
              alt={copy.native.ipadAlt}
              width={1100}
              height={1467}
              className="device-stage__ipad"
              sizes="(max-width: 820px) 88vw, 660px"
            />
            <div className="device-stage__watch">
              <Image
                src={screenshotPath(locale, "watch.webp")}
                alt={copy.native.watchAlt}
                width={368}
                height={448}
                sizes="176px"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="gallery-section section-pad" aria-labelledby="gallery-title">
        <div className="section-shell">
          <div className="section-heading section-heading--split">
            <div>
              <p className="eyebrow">{copy.gallery.eyebrow}</p>
              <h2 id="gallery-title">{copy.gallery.title}</h2>
            </div>
            <p>{copy.gallery.body}</p>
          </div>
        </div>

        <div className="gallery-rail" role="list" aria-label={copy.gallery.title} tabIndex={0}>
          {copy.gallery.items.map((item, index) => {
            const asset = galleryAssets[index];
            return (
              <figure className={`gallery-card gallery-card--${asset.kind}`} key={asset.file} role="listitem">
                <div className="gallery-card__image">
                  <Image
                    src={screenshotPath(locale, asset.file)}
                    alt={item.alt}
                    width={asset.width}
                    height={asset.height}
                    sizes={asset.kind === "tablet" ? "(max-width: 820px) 86vw, 520px" : "(max-width: 820px) 78vw, 360px"}
                  />
                </div>
                <figcaption>
                  <span>{item.tag}</span>
                  <strong>{item.title}</strong>
                </figcaption>
              </figure>
            );
          })}
          <div className="gallery-spacer" aria-hidden="true" />
        </div>
        <p className="gallery-hint">
          <span aria-hidden="true">↔</span> {copy.gallery.hint}
        </p>
      </section>

      <section className="privacy-section section-shell" aria-labelledby="privacy-title">
        <div className="privacy-copy">
          <p className="eyebrow">{copy.privacy.eyebrow}</p>
          <h2 id="privacy-title">{copy.privacy.title}</h2>
          <p>{copy.privacy.body}</p>
          <Link className="text-link" href="/privacy/">
            {copy.privacy.link} <span aria-hidden="true">→</span>
          </Link>
        </div>
        <ul className="privacy-points">
          {copy.privacy.points.map((point, index) => (
            <li key={point}>
              <span aria-hidden="true">0{index + 1}</span>
              {point}
            </li>
          ))}
        </ul>
      </section>

      <section className="final-cta section-shell" aria-labelledby="cta-title">
        <div className="final-cta__art" aria-hidden="true">
          <Image src="/media/brand/app-icon.webp" alt="" width={640} height={640} sizes="250px" />
          <div className="cta-ring cta-ring--one" />
          <div className="cta-ring cta-ring--two" />
        </div>
        <div className="final-cta__copy">
          <p className="eyebrow eyebrow--dark">{copy.cta.eyebrow}</p>
          <h2 id="cta-title">{copy.cta.title}</h2>
          <p>{copy.cta.body}</p>
          <a className="button button--light" href={APP_STORE_URL} target="_blank" rel="noreferrer">
            {copy.cta.button} <span aria-hidden="true">↗</span>
          </a>
          <small>{copy.cta.note}</small>
        </div>
      </section>
      </main>

      <SiteFooter locale={locale} />
    </div>
  );
}
