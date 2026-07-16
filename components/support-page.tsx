import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import {
  APP_STORE_URL,
  SUPPORT_URL,
  localeMeta,
  siteCopy,
  type Locale,
} from "@/lib/site-content";

export function SupportPage({ locale }: { locale: Locale }) {
  const copy = siteCopy[locale];
  const meta = localeMeta[locale];

  return (
    <div className="support-site" lang={meta.htmlLang} dir={meta.direction}>
      <a className="skip-link" href="#support-content">
        {copy.nav.skip}
      </a>
      <SiteHeader locale={locale} currentPath="/support" compact />
      <main className="support-main" id="support-content" tabIndex={-1}>
        <header className="support-hero">
          <p className="eyebrow">{copy.support.eyebrow}</p>
          <h1>{copy.support.title}</h1>
          <p>{copy.support.body}</p>
          <div className="support-actions">
            <a className="button button--primary" href={SUPPORT_URL} target="_blank" rel="noreferrer">
              {copy.support.issues}
              <span aria-hidden="true">↗</span>
            </a>
            <a className="button button--quiet" href={APP_STORE_URL} target="_blank" rel="noreferrer">
              {copy.support.appStore}
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </header>

        <section className="requirements-panel" aria-labelledby="requirements-title">
          <h2 id="requirements-title">{copy.support.requirementsTitle}</h2>
          <div className="requirements-grid">
            {copy.support.requirements.map((requirement) => (
              <article className="requirement-card" key={requirement.label}>
                <strong>{requirement.label}</strong>
                <span>{requirement.value}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="faq-panel" aria-labelledby="faq-title">
          <h2 id="faq-title">{copy.support.faqTitle}</h2>
          <div className="faq-list">
            {copy.support.faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="contact-panel" aria-labelledby="contact-title">
          <h2 id="contact-title">{copy.support.contactTitle}</h2>
          <p>{copy.support.contactBody}</p>
          <a className="button button--primary" href={SUPPORT_URL} target="_blank" rel="noreferrer">
            {copy.support.contactButton}
            <span aria-hidden="true">↗</span>
          </a>
        </section>
      </main>
      <SiteFooter locale={locale} />
    </div>
  );
}
