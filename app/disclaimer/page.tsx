import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { SITE_URL, SUPPORT_URL } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: "Important limitations for Moment365 countdowns, reminders, sync, and intelligent suggestions.",
  alternates: { canonical: `${SITE_URL}/disclaimer/` },
};

export default function DisclaimerPage() {
  return (
    <div className="legal-site" lang="en">
      <a className="skip-link" href="#disclaimer-content">Skip to content</a>
      <SiteHeader locale="en" compact showLanguageMenu={false} />
      <main className="legal-main" id="disclaimer-content" tabIndex={-1}>
        <header className="legal-hero">
          <p className="eyebrow">Disclaimer</p>
          <h1>Plan the moment. Keep the important backup.</h1>
          <p>
            Moment365 is a convenience tool for personal countdowns and reminders. It is not designed for medical,
            emergency, safety-of-life, legal, or other critical scheduling.
          </p>
          <p className="legal-updated">Last updated July 15, 2026</p>
        </header>

        <div className="legal-content">
          <section>
            <h2>1. No warranties</h2>
            <p>
              Moment365 is provided on an “as is” and “as available” basis without warranties of any kind, to the
              fullest extent permitted by law.
            </p>
          </section>

          <section>
            <h2>2. Reminders and time calculations</h2>
            <p>
              Notification delivery depends on device settings, system scheduling, Focus modes, battery conditions,
              time-zone changes, and platform availability. Keep an independent reminder for anything critical.
            </p>
          </section>

          <section>
            <h2>3. Intelligent suggestions</h2>
            <p>
              Calendar suggestions, text extraction, semantic matching, and Magic Add can misunderstand a title, date,
              recurrence, time zone, or location. Review each suggested moment before saving or relying on it.
            </p>
          </section>

          <section>
            <h2>4. Sync and third-party services</h2>
            <p>
              iCloud, Calendar, notifications, speech recognition, and other Apple platform services may be unavailable,
              delayed, or changed by their provider. Keep exports or other backups appropriate to the importance of your
              data.
            </p>
          </section>

          <section>
            <h2>5. Limitation of liability</h2>
            <p>
              To the fullest extent permitted by law, the developer is not liable for indirect, incidental, special,
              consequential, or punitive damages arising from use of, or inability to use, the app.
            </p>
          </section>

          <section>
            <h2>6. Updates</h2>
            <p>
              Features, compatibility, and this disclaimer may change as Moment365 evolves. Questions can be submitted
              through the{" "}
              <a className="text-link" href={SUPPORT_URL} target="_blank" rel="noreferrer">
                support issue tracker <span aria-hidden="true">↗</span>
              </a>
              .
            </p>
            <p>
              <Link className="text-link" href="/">
                Return to Moment365 <span aria-hidden="true">→</span>
              </Link>
            </p>
          </section>
        </div>
      </main>
      <SiteFooter locale="en" />
    </div>
  );
}
