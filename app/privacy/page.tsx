import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { SITE_URL, SUPPORT_URL } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Moment365 stores and processes countdown, calendar, photo, speech, and iCloud data.",
  alternates: { canonical: `${SITE_URL}/privacy/` },
};

export default function PrivacyPage() {
  return (
    <div className="legal-site" lang="en">
      <a className="skip-link" href="#privacy-content">Skip to content</a>
      <SiteHeader locale="en" compact showLanguageMenu={false} />
      <main className="legal-main" id="privacy-content" tabIndex={-1}>
        <header className="legal-hero">
          <p className="eyebrow">Privacy</p>
          <h1>Your moments stay yours.</h1>
          <p>
            Moment365 is designed without an account, advertising, or developer-operated analytics. The App Store
            lists Data Not Collected.
          </p>
          <p className="legal-updated">Effective and last updated July 15, 2026</p>
        </header>

        <div className="legal-content">
          <section>
            <h2>1. Data you create</h2>
            <p>
              Countdown titles, dates, notes, locations, categories, reminder preferences, colors, emoji, and optional
              event photos are stored on your device. Moment365 does not require a developer account and does not send
              this information to a developer-operated server.
            </p>
          </section>

          <section>
            <h2>2. Optional iCloud sync</h2>
            <p>
              If you enable iCloud sync, supported event data and photos are stored in your private iCloud database so
              they can stay in step across your devices. Apple operates iCloud, and Apple&apos;s terms and privacy policy
              apply. You can leave sync disabled and use Moment365 locally.
            </p>
          </section>

          <section>
            <h2>3. Optional device permissions</h2>
            <p>Moment365 asks only when a feature needs access. Depending on what you use, this can include:</p>
            <ul>
              <li>Calendar access for suggestions, importing events, and optional calendar mirroring.</li>
              <li>Photo selection for event images or scanning a ticket, invitation, or screenshot.</li>
              <li>Microphone and Speech Recognition for voice dictation.</li>
              <li>Notifications for reminders and countdown updates.</li>
            </ul>
            <p>
              You can review or revoke these permissions at any time in system Settings. When calendar mirroring is
              enabled, copied event details may sync through your selected calendar provider and are governed by that
              provider&apos;s terms and privacy practices.
            </p>
          </section>

          <section>
            <h2>4. On-device intelligence</h2>
            <p>
              Photo text recognition, semantic search, and supported Magic Add enrichment use Apple frameworks on the
              device. Voice transcription uses Apple&apos;s Speech framework and is required to stay on-device when the
              current device and language support on-device recognition. Apple may otherwise process speech according
              to its platform settings and privacy terms.
            </p>
          </section>

          <section>
            <h2>5. No advertising or developer analytics</h2>
            <p>
              The current app does not include third-party advertising, tracking, or analytics SDKs. This website is a
              static product site and does not set analytics or advertising cookies.
            </p>
          </section>

          <section>
            <h2>6. Your controls</h2>
            <p>
              You can edit, archive, export, import, or delete moments from the app. Disabling iCloud stops future sync.
              Deleting app data or iCloud records is subject to Apple&apos;s normal device, backup, and iCloud behavior.
            </p>
          </section>

          <section>
            <h2>7. Children&apos;s privacy</h2>
            <p>
              Moment365 is not directed to children under 13, and the developer does not knowingly collect personal
              information from children.
            </p>
          </section>

          <section>
            <h2>8. Changes and contact</h2>
            <p>
              This policy may be updated when the app&apos;s data practices change. Questions can be submitted through the{" "}
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
