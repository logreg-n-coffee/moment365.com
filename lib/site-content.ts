export const APP_STORE_URL = "https://apps.apple.com/app/id6742171830";
export const SITE_URL = "https://moment365.com";
export const SUPPORT_URL = "https://github.com/logreg-n-coffee/moment365.com/issues";

export const locales = ["en", "de", "es", "fr", "ja", "zh-hans", "ar"] as const;
export type Locale = (typeof locales)[number];
export type LocalizedRoute = "/" | "/support";

export const localeMeta: Record<
  Locale,
  {
    label: string;
    shortLabel: string;
    htmlLang: string;
    openGraphLocale: string;
    direction: "ltr" | "rtl";
  }
> = {
  en: { label: "English", shortLabel: "EN", htmlLang: "en", openGraphLocale: "en_US", direction: "ltr" },
  de: { label: "Deutsch", shortLabel: "DE", htmlLang: "de", openGraphLocale: "de_DE", direction: "ltr" },
  es: { label: "Español", shortLabel: "ES", htmlLang: "es", openGraphLocale: "es_ES", direction: "ltr" },
  fr: { label: "Français", shortLabel: "FR", htmlLang: "fr", openGraphLocale: "fr_FR", direction: "ltr" },
  ja: { label: "日本語", shortLabel: "JA", htmlLang: "ja", openGraphLocale: "ja_JP", direction: "ltr" },
  "zh-hans": {
    label: "简体中文",
    shortLabel: "简",
    htmlLang: "zh-Hans",
    openGraphLocale: "zh_CN",
    direction: "ltr",
  },
  ar: { label: "العربية", shortLabel: "ع", htmlLang: "ar", openGraphLocale: "ar_SA", direction: "rtl" },
};

interface FeatureCopy {
  number: string;
  title: string;
  description: string;
}

interface PlatformCopy {
  name: string;
  requirement: string;
  description: string;
}

interface GalleryCopy {
  tag: string;
  title: string;
  alt: string;
}

interface FaqCopy {
  question: string;
  answer: string;
}

export interface SiteCopy {
  meta: { title: string; description: string };
  nav: {
    skip: string;
    primaryLabel: string;
    product: string;
    magic: string;
    native: string;
    support: string;
    download: string;
    language: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    body: string;
    primary: string;
    secondary: string;
    availability: string;
    imageAlt: string;
    floatingUnit: string;
  };
  signalsLabel: string;
  signals: Array<{ value: string; label: string }>;
  product: { eyebrow: string; title: string; body: string; features: FeatureCopy[] };
  magicAdd: {
    eyebrow: string;
    title: string;
    body: string;
    points: string[];
    requirement: string;
    imageAlt: string;
    orbitOne: string;
    orbitTwo: string;
  };
  beauty: {
    eyebrow: string;
    title: string;
    body: string;
    bullets: string[];
    birthdayAlt: string;
    tripAlt: string;
  };
  native: {
    eyebrow: string;
    title: string;
    body: string;
    platforms: PlatformCopy[];
    stageLabel: string;
    ipadAlt: string;
    watchAlt: string;
  };
  gallery: { eyebrow: string; title: string; body: string; hint: string; items: GalleryCopy[] };
  privacy: { eyebrow: string; title: string; body: string; points: string[]; link: string };
  cta: { eyebrow: string; title: string; body: string; button: string; note: string };
  footer: {
    tagline: string;
    privacy: string;
    disclaimer: string;
    support: string;
    rights: string;
    legalLanguage: string;
  };
  support: {
    metaTitle: string;
    metaDescription: string;
    back: string;
    eyebrow: string;
    title: string;
    body: string;
    issues: string;
    appStore: string;
    requirementsTitle: string;
    requirements: Array<{ label: string; value: string }>;
    faqTitle: string;
    faqs: FaqCopy[];
    contactTitle: string;
    contactBody: string;
    contactButton: string;
  };
}

const en: SiteCopy = {
  meta: {
    title: "Moment365 — Beautiful countdowns for what matters",
    description:
      "Create beautiful countdowns in seconds, get thoughtful reminders, and keep your next moments close with widgets, Live Activities, Apple Watch, calendar import, Siri, and optional iCloud sync.",
  },
  nav: {
    skip: "Skip to content",
    primaryLabel: "Primary navigation",
    product: "How it works",
    magic: "Magic Add",
    native: "Everywhere",
    support: "Support",
    download: "Get Moment365",
    language: "Language",
  },
  hero: {
    eyebrow: "Countdowns & reminders for Apple devices · Free on the App Store",
    title: "Count down to what matters.",
    body:
      "Trips, birthdays, launches, anniversaries—Moment365 turns every date into a beautiful countdown that is easy to add and hard to forget.",
    primary: "Get Moment365 free",
    secondary: "Explore the app",
    availability: "For iPhone and iPad, with an Apple Watch companion · iOS/iPadOS 18+ · watchOS 10+",
    imageAlt: "Moment365 home screen showing colorful countdowns for a birthday, trip, graduation, and anniversary",
    floatingUnit: "days",
  },
  signalsLabel: "Moment365 at a glance",
  signals: [
    { value: "7", label: "interface languages" },
    { value: "Private", label: "by design" },
    { value: "3", label: "Apple device experiences" },
  ],
  product: {
    eyebrow: "A date becomes a moment",
    title: "Add it your way. See it beautifully.",
    body:
      "Start quickly, add the detail you care about, and let Moment365 keep every upcoming or already-passed date easy to find.",
    features: [
      {
        number: "01",
        title: "Quick or guided creation",
        description: "Use a full form, a guided flow, or Quick Add—whatever fits the moment in front of you.",
      },
      {
        number: "02",
        title: "A smarter calendar",
        description: "Import events, spot notable dates, and optionally mirror changes with your iOS Calendar.",
      },
      {
        number: "03",
        title: "Reminders that repeat",
        description: "Choose a reminder time and keep birthdays or anniversaries returning monthly or yearly.",
      },
      {
        number: "04",
        title: "Built for real dates",
        description: "Handle all-day plans, time zones, precise countdowns, and count-ups after a date has passed.",
      },
      {
        number: "05",
        title: "Find any moment",
        description: "Use favorites, categories, sorting, archive, and semantic search when exact words are not enough.",
      },
      {
        number: "06",
        title: "Your details, portable",
        description: "Work offline, optionally sync through private iCloud, and export or import moment details as JSON. Photos remain separate.",
      },
    ],
  },
  magicAdd: {
    eyebrow: "Magic Add",
    title: "From a thought to a countdown.",
    body:
      "Type it, say it, or scan a ticket or screenshot. On-device intelligence can shape the title, date, emoji, color, location, recurrence, and even multiple moments from one prompt.",
    points: ["Type naturally", "Dictate by voice", "Scan a photo", "Create multiple moments"],
    requirement:
      "Magic Add enrichment requires an Apple Intelligence–capable device running iOS or iPadOS 26+ with Apple Intelligence enabled and ready. All other Moment365 features continue to work on iOS and iPadOS 18+.",
    imageAlt: "Moment365 Magic Add screen turning a natural-language birthday description into a countdown",
    orbitOne: "On-device intelligence",
    orbitTwo: "Text · voice · photo",
  },
  beauty: {
    eyebrow: "Every wait has a mood",
    title: "The wait deserves a view of its own.",
    body:
      "Give each moment a color, emoji, photo, and level of precision. A clear progress ring makes the distance feel tangible—and keeps counting after a date becomes a memory.",
    bullets: [
      "Color themes, photos, emoji, notes, and locations",
      "A live ring from years to the final minutes",
      "Count up from milestones worth remembering",
    ],
    birthdayAlt: "Rose Moment365 birthday countdown with a circular progress ring and reminder",
    tripAlt: "Blue Moment365 trip countdown with a circular progress ring and location",
  },
  native: {
    eyebrow: "Your next moment, everywhere",
    title: "Close at hand. Even when the app is not open.",
    body:
      "Moment365 extends into the Apple surfaces you already use, with glanceable updates and quick ways back to the date that matters.",
    platforms: [
      {
        name: "iPhone",
        requirement: "iOS 18+",
        description: "Home and Lock Screen widgets, Live Activities, Dynamic Island, Siri, Spotlight, and controls.",
      },
      {
        name: "iPad",
        requirement: "iPadOS 18+",
        description: "A spacious countdown library with every creation, search, import, and sync tool close by.",
      },
      {
        name: "Apple Watch",
        requirement: "watchOS 10+",
        description: "See upcoming moments, open details, favorite or archive, and pin the next date as a complication.",
      },
    ],
    stageLabel: "Widgets, Live Activities, and your next moment on your wrist.",
    ipadAlt: "Moment365 iPad screen showing the countdown library and next birthday",
    watchAlt: "Moment365 Apple Watch screen listing upcoming moments",
  },
  gallery: {
    eyebrow: "A closer look",
    title: "Made for the big days and the little ones.",
    body: "The Moment365 experience across iPhone, iPad, and Apple Watch.",
    hint: "Swipe to explore",
    items: [
      { tag: "Home", title: "Everything ahead, at a glance", alt: "Moment365 home screen with upcoming countdowns" },
      { tag: "Magic Add", title: "Describe it and it is ready", alt: "Moment365 Magic Add creating a birthday countdown" },
      { tag: "Birthday", title: "A beautiful view for every wait", alt: "Moment365 birthday countdown detail" },
      { tag: "Travel", title: "Big trips feel closer", alt: "Moment365 trip countdown detail" },
      { tag: "iPad", title: "More room for every moment", alt: "Moment365 countdown library on iPad" },
      { tag: "Watch", title: "Your next date on your wrist", alt: "Moment365 upcoming countdowns on Apple Watch" },
    ],
  },
  privacy: {
    eyebrow: "Private by design",
    title: "Your moments stay yours.",
    body:
      "No account, no ads, and no developer-operated analytics. Moment365 does not send your moments to a developer server. Optional Calendar mirroring and private iCloud sync stay under your control. Magic Add processing stays on-device where supported.",
    points: ["No account required", "No third-party analytics or ads", "Export, import, or delete your data"],
    link: "Read the privacy policy",
  },
  cta: {
    eyebrow: "Your next date is already on its way",
    title: "Make the next moment feel closer.",
    body: "Download Moment365 and give every trip, birthday, launch, and anniversary a place worth returning to.",
    button: "Download free on the App Store",
    note: "Free · No account required",
  },
  footer: {
    tagline: "Every moment counts.",
    privacy: "Privacy",
    disclaimer: "Disclaimer",
    support: "Support",
    rights: "All rights reserved.",
    legalLanguage: "Legal pages are available in English.",
  },
  support: {
    metaTitle: "Moment365 Support",
    metaDescription: "Help with Moment365 countdowns, reminders, iCloud sync, Magic Add, Calendar, and Apple devices.",
    back: "Back to Moment365",
    eyebrow: "Support",
    title: "Keep your next moment on track.",
    body: "Find quick answers about countdowns, sync, reminders, Magic Add, and your data—or open a support issue.",
    issues: "Open a support issue",
    appStore: "View on the App Store",
    requirementsTitle: "Works on",
    requirements: [
      { label: "iPhone", value: "iOS 18 or later" },
      { label: "iPad", value: "iPadOS 18 or later" },
      { label: "Apple Watch", value: "watchOS 10 or later" },
    ],
    faqTitle: "Frequently asked questions",
    faqs: [
      {
        question: "How do I sync moments across devices?",
        answer: "Open Settings in Moment365 and enable iCloud sync. Use the same Apple Account with iCloud Drive enabled on each device. You can pull down on the home screen to request a refresh.",
      },
      {
        question: "Can I use Moment365 offline?",
        answer: "Yes. Your moments work locally without a connection. When optional iCloud sync is on, queued changes retry after the device reconnects.",
      },
      {
        question: "Why is Magic Add unavailable?",
        answer: "Magic Add enrichment needs an Apple Intelligence–capable device on iOS or iPadOS 26+, with Apple Intelligence enabled and its model ready. The rest of the app works on iOS and iPadOS 18+.",
      },
      {
        question: "Why did I not receive a reminder?",
        answer: "Check that notifications are enabled for Moment365, that the event still has a future reminder date, and that a Focus mode or system setting is not silencing it.",
      },
      {
        question: "How do Calendar suggestions and mirroring differ?",
        answer: "Suggestions surface notable dates for one-tap import. Optional mirroring also writes new or edited moments to iOS Calendar and can pull rescheduled dates back.",
      },
      {
        question: "How can I move or remove my data?",
        answer: "Use Data Management in Settings to export or import JSON. Delete individual moments or clear the archive in the app, and disable iCloud sync whenever you want to keep future changes local.",
      },
    ],
    contactTitle: "Still need a hand?",
    contactBody: "Include your device, OS version, what you expected, and what happened. Those details make a support issue much easier to investigate.",
    contactButton: "Open the issue tracker",
  },
};

const de: SiteCopy = {
  ...en,
  meta: {
    title: "Moment365 — Schöne Countdowns für das, was zählt",
    description: "Erstelle schöne Countdowns, erhalte passende Erinnerungen und behalte wichtige Termine mit Widgets, Live Activities, Apple Watch, Kalender, Siri und optionalem iCloud-Sync im Blick.",
  },
  nav: {
    skip: "Zum Inhalt springen",
    primaryLabel: "Hauptnavigation",
    product: "So funktioniert’s",
    magic: "Magisch hinzufügen",
    native: "Überall dabei",
    support: "Support",
    download: "Moment365 laden",
    language: "Sprache",
  },
  hero: {
    eyebrow: "Countdowns & Erinnerungen für Apple Geräte · Kostenlos im App Store",
    title: "Zähl herunter, was zählt.",
    body: "Reisen, Geburtstage, Launches und Jahrestage – Moment365 macht aus jedem Datum einen schönen Countdown, der schnell angelegt und schwer zu vergessen ist.",
    primary: "Moment365 kostenlos laden",
    secondary: "App entdecken",
    availability: "Für iPhone und iPad, mit Apple Watch Begleiter · iOS/iPadOS 18+ · watchOS 10+",
    imageAlt: "Moment365 Startseite mit bunten Countdowns für Geburtstag, Reise, Abschluss und Jahrestag",
    floatingUnit: "Tage",
  },
  signalsLabel: "Moment365 auf einen Blick",
  signals: [
    { value: "7", label: "Oberflächensprachen" },
    { value: "Privat", label: "von Grund auf" },
    { value: "3", label: "Apple Geräteerlebnisse" },
  ],
  product: {
    eyebrow: "Ein Datum wird zum Moment",
    title: "Füge es auf deine Art hinzu. Sieh es wunderschön.",
    body: "Starte schnell, ergänze die Details, die dir wichtig sind, und finde kommende wie vergangene Termine jederzeit wieder.",
    features: [
      { number: "01", title: "Schnell oder geführt", description: "Nutze das vollständige Formular, den Schritt-für-Schritt-Ablauf oder Schnell hinzufügen – passend zum Moment." },
      { number: "02", title: "Ein klügerer Kalender", description: "Importiere Termine, entdecke wichtige Daten und spiegle Änderungen optional mit deinem iOS Kalender." },
      { number: "03", title: "Erinnerungen, die wiederkehren", description: "Wähle eine Uhrzeit und lass Geburtstage oder Jahrestage monatlich oder jährlich zurückkehren." },
      { number: "04", title: "Für echte Termine gebaut", description: "All-Day-Termine, Zeitzonen, präzise Countdowns und Count-ups nach dem Datum sind abgedeckt." },
      { number: "05", title: "Jeden Moment finden", description: "Favoriten, Kategorien, Sortierung, Archiv und semantische Suche führen schnell zum richtigen Termin." },
      { number: "06", title: "Deine Details bleiben beweglich", description: "Offline arbeiten, optional privat über iCloud synchronisieren und Momentdetails als JSON exportieren oder importieren. Fotos bleiben separat." },
    ],
  },
  magicAdd: {
    eyebrow: "Magisch hinzufügen",
    title: "Vom Gedanken zum Countdown.",
    body: "Tippe, sprich oder scanne ein Ticket oder einen Screenshot. Intelligenz auf dem Gerät erkennt Titel, Datum, Emoji, Farbe, Ort, Wiederholung und sogar mehrere Momente in einer Eingabe.",
    points: ["Natürlich tippen", "Per Stimme diktieren", "Foto scannen", "Mehrere Momente anlegen"],
    requirement: "Magisch hinzufügen benötigt ein Apple-Intelligence-fähiges Gerät mit iOS oder iPadOS 26+, aktivierter Apple Intelligence und einem bereiten Modell. Alle anderen Funktionen laufen weiterhin ab iOS und iPadOS 18.",
    imageAlt: "Magisch hinzufügen in Moment365 erstellt aus einer Geburtstagsbeschreibung einen Countdown",
    orbitOne: "Intelligenz auf dem Gerät",
    orbitTwo: "Text · Stimme · Foto",
  },
  beauty: {
    eyebrow: "Jede Wartezeit hat eine Stimmung",
    title: "Die Vorfreude verdient ihre eigene Ansicht.",
    body: "Gib jedem Moment Farbe, Emoji, Foto und die passende Genauigkeit. Ein klarer Ring macht die Entfernung sichtbar und zählt nach dem Datum weiter.",
    bullets: ["Farben, Fotos, Emoji, Notizen und Orte", "Ein lebendiger Ring von Jahren bis Minuten", "Seit wichtigen Meilensteinen aufwärts zählen"],
    birthdayAlt: "Rosafarbener Moment365 Geburtstags-Countdown mit Fortschrittsring und Erinnerung",
    tripAlt: "Blauer Moment365 Reise-Countdown mit Fortschrittsring und Ort",
  },
  native: {
    eyebrow: "Dein nächster Moment, überall",
    title: "Immer nah. Auch wenn die App geschlossen ist.",
    body: "Moment365 erscheint auf den Apple Oberflächen, die du bereits nutzt – mit schnellen Einblicken und direkten Wegen zurück zum wichtigen Datum.",
    platforms: [
      { name: "iPhone", requirement: "iOS 18+", description: "Home- und Sperrbildschirm-Widgets, Live Activities, Dynamic Island, Siri, Spotlight und Controls." },
      { name: "iPad", requirement: "iPadOS 18+", description: "Eine großzügige Countdown-Bibliothek mit Erstellen, Suchen, Importieren und Synchronisieren." },
      { name: "Apple Watch", requirement: "watchOS 10+", description: "Momente ansehen, Details öffnen, favorisieren oder archivieren und das nächste Datum als Komplikation anheften." },
    ],
    stageLabel: "Widgets, Live Activities und dein nächster Moment am Handgelenk.",
    ipadAlt: "Moment365 auf dem iPad mit Countdown-Bibliothek und nächstem Geburtstag",
    watchAlt: "Moment365 auf der Apple Watch mit kommenden Momenten",
  },
  gallery: {
    eyebrow: "Im Detail",
    title: "Für große Tage und die kleinen dazwischen.",
    body: "Das Moment365 Erlebnis auf iPhone, iPad und Apple Watch.",
    hint: "Wischen zum Entdecken",
    items: [
      { tag: "Start", title: "Alles Kommende auf einen Blick", alt: "Moment365 Startseite mit kommenden Countdowns" },
      { tag: "Magisch hinzufügen", title: "Beschreiben und fertig", alt: "Magisch hinzufügen in Moment365 erstellt einen Geburtstags-Countdown" },
      { tag: "Geburtstag", title: "Eine schöne Ansicht für jede Wartezeit", alt: "Moment365 Geburtstags-Countdown" },
      { tag: "Reise", title: "Große Reisen fühlen sich näher an", alt: "Moment365 Reise-Countdown" },
      { tag: "iPad", title: "Mehr Platz für jeden Moment", alt: "Moment365 Countdown-Bibliothek auf dem iPad" },
      { tag: "Watch", title: "Das nächste Datum am Handgelenk", alt: "Moment365 Countdowns auf der Apple Watch" },
    ],
  },
  privacy: {
    eyebrow: "Privat von Grund auf",
    title: "Deine Momente bleiben deine.",
    body: "Kein Konto, keine Werbung und keine vom Entwickler betriebene Analyse. Moment365 sendet deine Momente nicht an einen Entwickler-Server. Optionale Kalenderspiegelung und privater iCloud-Sync bleiben unter deiner Kontrolle. Magisch hinzufügen arbeitet, wo unterstützt, auf dem Gerät.",
    points: ["Kein Konto erforderlich", "Keine Drittanbieter-Analyse oder Werbung", "Daten exportieren, importieren oder löschen"],
    link: "Datenschutzrichtlinie lesen",
  },
  cta: {
    eyebrow: "Das nächste Datum ist schon unterwegs",
    title: "Lass den nächsten Moment näher wirken.",
    body: "Lade Moment365 und gib Reisen, Geburtstagen, Launches und Jahrestagen einen Ort, zu dem du gern zurückkehrst.",
    button: "Kostenlos im App Store laden",
    note: "Kostenlos · Kein Konto erforderlich",
  },
  footer: {
    tagline: "Jeder Moment zählt.",
    privacy: "Datenschutz",
    disclaimer: "Haftungsausschluss",
    support: "Support",
    rights: "Alle Rechte vorbehalten.",
    legalLanguage: "Rechtliche Seiten sind auf Englisch verfügbar.",
  },
  support: {
    metaTitle: "Moment365 Support",
    metaDescription: "Hilfe zu Moment365 Countdowns, Erinnerungen, iCloud-Sync, Magisch hinzufügen, Kalender und Apple Geräten.",
    back: "Zurück zu Moment365",
    eyebrow: "Support",
    title: "Halte deinen nächsten Moment auf Kurs.",
    body: "Schnelle Antworten zu Countdowns, Synchronisierung, Erinnerungen, Magisch hinzufügen und Daten – oder ein Support-Ticket öffnen.",
    issues: "Support-Ticket öffnen",
    appStore: "Im App Store ansehen",
    requirementsTitle: "Verfügbar auf",
    requirements: [
      { label: "iPhone", value: "iOS 18 oder neuer" },
      { label: "iPad", value: "iPadOS 18 oder neuer" },
      { label: "Apple Watch", value: "watchOS 10 oder neuer" },
    ],
    faqTitle: "Häufige Fragen",
    faqs: [
      { question: "Wie synchronisiere ich Momente zwischen Geräten?", answer: "Aktiviere iCloud-Sync in den Einstellungen, verwende überall denselben Apple Account und aktiviere iCloud Drive. Ziehe die Startseite nach unten, um eine Aktualisierung anzufordern." },
      { question: "Funktioniert Moment365 offline?", answer: "Ja. Momente funktionieren lokal ohne Internet. Mit optionalem iCloud-Sync werden ausstehende Änderungen nach der Verbindung erneut versucht." },
      { question: "Warum ist Magisch hinzufügen nicht verfügbar?", answer: "Magisch hinzufügen benötigt ein Apple-Intelligence-fähiges Gerät mit iOS oder iPadOS 26+, aktivierter Apple Intelligence und bereitem Modell. Der Rest der App läuft ab Version 18." },
      { question: "Warum kam keine Erinnerung?", answer: "Prüfe Mitteilungen, das Erinnerungsdatum und ob ein Fokusmodus oder eine Systemeinstellung die Nachricht stummschaltet." },
      { question: "Was ist der Unterschied zwischen Vorschlägen und Spiegelung?", answer: "Vorschläge zeigen wichtige Daten zum Import. Die optionale Spiegelung schreibt neue oder geänderte Momente in den iOS Kalender und übernimmt verschobene Termine zurück." },
      { question: "Wie verschiebe oder lösche ich meine Daten?", answer: "Unter Datenverwaltung kannst du JSON exportieren oder importieren. Momente und Archiv lassen sich in der App löschen; iCloud-Sync kann jederzeit deaktiviert werden." },
    ],
    contactTitle: "Noch Hilfe nötig?",
    contactBody: "Nenne Gerät, Betriebssystem, erwartetes Verhalten und tatsächliches Ergebnis. So lässt sich das Problem schneller untersuchen.",
    contactButton: "Issue-Tracker öffnen",
  },
};

const es: SiteCopy = {
  ...en,
  meta: {
    title: "Moment365 — Cuenta atrás para lo que importa",
    description: "Crea cuentas atrás en segundos, recibe recordatorios y mantén cerca tus próximos momentos con widgets, Actividades en directo, Apple Watch, Calendario, Siri y sincronización opcional con iCloud.",
  },
  nav: {
    skip: "Ir al contenido",
    primaryLabel: "Navegación principal",
    product: "Cómo funciona",
    magic: "Añadir con IA",
    native: "En todas partes",
    support: "Ayuda",
    download: "Descargar Moment365",
    language: "Idioma",
  },
  hero: {
    eyebrow: "Cuentas atrás y recordatorios para dispositivos Apple · Gratis en el App Store",
    title: "Cuenta atrás para lo que importa.",
    body: "Viajes, cumpleaños, lanzamientos y aniversarios: Moment365 convierte cada fecha en una cuenta atrás bonita, fácil de crear y difícil de olvidar.",
    primary: "Descargar Moment365 gratis",
    secondary: "Descubrir la app",
    availability: "Para iPhone y iPad, con app para Apple Watch · iOS/iPadOS 18+ · watchOS 10+",
    imageAlt: "Pantalla de inicio de Moment365 con cuentas atrás de un cumpleaños, un viaje, una graduación y un aniversario",
    floatingUnit: "días",
  },
  signalsLabel: "Moment365 de un vistazo",
  signals: [
    { value: "7", label: "idiomas de interfaz" },
    { value: "Privada", label: "por diseño" },
    { value: "3", label: "experiencias en dispositivos Apple" },
  ],
  product: {
    eyebrow: "Una fecha se convierte en un momento",
    title: "Añádelo a tu manera. Disfrútalo a la vista.",
    body: "Empieza rápido, añade los detalles que te importan y encuentra con facilidad tanto las fechas futuras como las que ya pasaron.",
    features: [
      { number: "01", title: "Creación rápida o guiada", description: "Usa el formulario completo, el flujo guiado o Añadir rápido, según lo que necesites." },
      { number: "02", title: "Un calendario más inteligente", description: "Importa eventos, descubre fechas destacadas y, si quieres, refleja cambios en Calendario de iOS." },
      { number: "03", title: "Recordatorios recurrentes", description: "Elige una hora y repite cumpleaños o aniversarios cada mes o cada año." },
      { number: "04", title: "Hecha para fechas reales", description: "Gestiona eventos de todo el día, zonas horarias, cuentas precisas y tiempo transcurrido tras la fecha." },
      { number: "05", title: "Encuentra cualquier momento", description: "Usa favoritos, categorías, orden, archivo y búsqueda semántica cuando no recuerdes las palabras exactas." },
      { number: "06", title: "Tus detalles son portátiles", description: "Funciona sin conexión, sincroniza opcionalmente mediante iCloud privado y exporta o importa detalles en JSON. Las fotos quedan aparte." },
    ],
  },
  magicAdd: {
    eyebrow: "Añadir con IA",
    title: "De una idea a una cuenta atrás.",
    body: "Escríbelo, dilo o escanea una entrada o captura. La inteligencia en el dispositivo puede definir título, fecha, emoji, color, lugar, repetición e incluso varios momentos desde una sola petición.",
    points: ["Escribe con naturalidad", "Dicta con tu voz", "Escanea una foto", "Crea varios momentos"],
    requirement: "Las mejoras de Añadir con IA requieren un dispositivo compatible con Apple Intelligence, iOS o iPadOS 26+, y Apple Intelligence activado y listo. El resto de Moment365 funciona desde iOS y iPadOS 18.",
    imageAlt: "Añadir con IA de Moment365 convierte una descripción natural de cumpleaños en una cuenta atrás",
    orbitOne: "Inteligencia en el dispositivo",
    orbitTwo: "Texto · voz · foto",
  },
  beauty: {
    eyebrow: "Cada espera tiene su ambiente",
    title: "La espera merece una vista propia.",
    body: "Da a cada momento un color, emoji, foto y nivel de precisión. Un anillo claro hace tangible la distancia y sigue contando cuando la fecha se convierte en recuerdo.",
    bullets: ["Colores, fotos, emoji, notas y lugares", "Un anillo vivo desde años hasta los últimos minutos", "Cuenta el tiempo desde los hitos que quieres recordar"],
    birthdayAlt: "Cuenta atrás rosa de cumpleaños en Moment365 con anillo de progreso y recordatorio",
    tripAlt: "Cuenta atrás azul de viaje en Moment365 con anillo de progreso y lugar",
  },
  native: {
    eyebrow: "Tu próximo momento, en todas partes",
    title: "Siempre cerca, aunque la app esté cerrada.",
    body: "Moment365 llega a los espacios de Apple que ya utilizas, con información rápida y accesos directos a la fecha importante.",
    platforms: [
      { name: "iPhone", requirement: "iOS 18+", description: "Widgets de inicio y bloqueo, Actividades en directo, Dynamic Island, Siri, Spotlight y controles." },
      { name: "iPad", requirement: "iPadOS 18+", description: "Una amplia biblioteca con todas las herramientas de creación, búsqueda, importación y sincronización." },
      { name: "Apple Watch", requirement: "watchOS 10+", description: "Consulta momentos, abre detalles, marca favoritos o archiva y fija la próxima fecha como complicación." },
    ],
    stageLabel: "Widgets, Actividades en directo y tu próximo momento en la muñeca.",
    ipadAlt: "Moment365 en iPad con la biblioteca de cuentas atrás y el próximo cumpleaños",
    watchAlt: "Moment365 en Apple Watch con una lista de próximos momentos",
  },
  gallery: {
    eyebrow: "Más de cerca",
    title: "Para los grandes días y los pequeños.",
    body: "La experiencia Moment365 en iPhone, iPad y Apple Watch.",
    hint: "Desliza para explorar",
    items: [
      { tag: "Inicio", title: "Todo lo que viene, de un vistazo", alt: "Inicio de Moment365 con próximas cuentas atrás" },
      { tag: "Añadir con IA", title: "Descríbelo y ya está listo", alt: "Añadir con IA de Moment365 creando una cuenta atrás de cumpleaños" },
      { tag: "Cumpleaños", title: "Una vista bonita para cada espera", alt: "Detalle de una cuenta atrás de cumpleaños en Moment365" },
      { tag: "Viaje", title: "Los grandes viajes se sienten más cerca", alt: "Detalle de una cuenta atrás de viaje en Moment365" },
      { tag: "iPad", title: "Más espacio para cada momento", alt: "Biblioteca de Moment365 en iPad" },
      { tag: "Watch", title: "Tu próxima fecha en la muñeca", alt: "Próximas cuentas atrás de Moment365 en Apple Watch" },
    ],
  },
  privacy: {
    eyebrow: "Privada por diseño",
    title: "Tus momentos son solo tuyos.",
    body: "Sin cuenta, sin anuncios y sin analítica gestionada por el desarrollador. Moment365 no envía tus momentos a un servidor del desarrollador. El reflejo opcional en Calendario y la sincronización privada con iCloud quedan bajo tu control. Añadir con IA procesa en el dispositivo cuando es compatible.",
    points: ["No requiere cuenta", "Sin anuncios ni analítica de terceros", "Exporta, importa o elimina tus datos"],
    link: "Leer la política de privacidad",
  },
  cta: {
    eyebrow: "Tu próxima fecha ya está en camino",
    title: "Haz que el próximo momento se sienta más cerca.",
    body: "Descarga Moment365 y da a cada viaje, cumpleaños, lanzamiento y aniversario un lugar al que quieras volver.",
    button: "Descargar gratis en el App Store",
    note: "Gratis · No requiere cuenta",
  },
  footer: {
    tagline: "Cada momento cuenta.",
    privacy: "Privacidad",
    disclaimer: "Aviso legal",
    support: "Ayuda",
    rights: "Todos los derechos reservados.",
    legalLanguage: "Las páginas legales están disponibles en inglés.",
  },
  support: {
    metaTitle: "Ayuda de Moment365",
    metaDescription: "Ayuda con cuentas atrás, recordatorios, iCloud, Añadir con IA, Calendario y dispositivos Apple en Moment365.",
    back: "Volver a Moment365",
    eyebrow: "Ayuda",
    title: "Mantén tu próximo momento en marcha.",
    body: "Encuentra respuestas sobre cuentas atrás, sincronización, recordatorios, Añadir con IA y tus datos, o abre una incidencia.",
    issues: "Abrir una incidencia",
    appStore: "Ver en el App Store",
    requirementsTitle: "Compatible con",
    requirements: [
      { label: "iPhone", value: "iOS 18 o posterior" },
      { label: "iPad", value: "iPadOS 18 o posterior" },
      { label: "Apple Watch", value: "watchOS 10 o posterior" },
    ],
    faqTitle: "Preguntas frecuentes",
    faqs: [
      { question: "¿Cómo sincronizo momentos entre dispositivos?", answer: "Activa la sincronización con iCloud en Ajustes de Moment365. Usa la misma cuenta de Apple con iCloud Drive activado en cada dispositivo. Desliza hacia abajo en el inicio para solicitar una actualización." },
      { question: "¿Puedo usar Moment365 sin conexión?", answer: "Sí. Tus momentos funcionan localmente sin conexión. Si activas iCloud, los cambios pendientes vuelven a intentarse al reconectar." },
      { question: "¿Por qué no está disponible Añadir con IA?", answer: "Las mejoras de Añadir con IA necesitan un dispositivo compatible con Apple Intelligence, iOS o iPadOS 26+, y Apple Intelligence activado y listo. El resto de la app funciona desde la versión 18." },
      { question: "¿Por qué no recibí un recordatorio?", answer: "Comprueba que Moment365 tenga notificaciones permitidas, que la fecha del recordatorio siga en el futuro y que ningún modo de concentración o ajuste del sistema lo silencie." },
      { question: "¿En qué se diferencian las sugerencias y el reflejo de Calendario?", answer: "Las sugerencias muestran fechas destacadas para importarlas con un toque. El reflejo opcional escribe momentos nuevos o editados en Calendario de iOS y puede recuperar fechas reprogramadas." },
      { question: "¿Cómo traslado o elimino mis datos?", answer: "Usa Gestión de datos en Ajustes para exportar o importar JSON. Puedes borrar momentos o vaciar el archivo en la app y desactivar iCloud cuando quieras que los cambios futuros sean locales." },
    ],
    contactTitle: "¿Aún necesitas ayuda?",
    contactBody: "Incluye el dispositivo, la versión del sistema, lo que esperabas y lo que ocurrió. Esos datos facilitan investigar la incidencia.",
    contactButton: "Abrir el gestor de incidencias",
  },
};

const fr: SiteCopy = {
  ...en,
  meta: {
    title: "Moment365 — De beaux comptes à rebours pour l’essentiel",
    description: "Créez de beaux comptes à rebours, recevez des rappels et gardez vos prochains moments à portée de main avec les widgets, Activités en direct, Apple Watch, Calendrier, Siri et la synchronisation iCloud facultative.",
  },
  nav: {
    skip: "Aller au contenu",
    primaryLabel: "Navigation principale",
    product: "Fonctionnement",
    magic: "Ajout magique",
    native: "Partout avec vous",
    support: "Assistance",
    download: "Obtenir Moment365",
    language: "Langue",
  },
  hero: {
    eyebrow: "Comptes à rebours et rappels pour appareils Apple · Gratuit sur l’App Store",
    title: "Comptez jusqu’à l’essentiel.",
    body: "Voyages, anniversaires, lancements et grandes dates : Moment365 transforme chaque date en un beau compte à rebours, simple à créer et difficile à oublier.",
    primary: "Obtenir Moment365 gratuitement",
    secondary: "Découvrir l’app",
    availability: "Pour iPhone et iPad, avec une app Apple Watch · iOS/iPadOS 18+ · watchOS 10+",
    imageAlt: "Écran d’accueil de Moment365 avec des comptes à rebours colorés pour un anniversaire, un voyage, un diplôme et une date anniversaire",
    floatingUnit: "jours",
  },
  signalsLabel: "Moment365 en un coup d’œil",
  signals: [
    { value: "7", label: "langues d’interface" },
    { value: "Privée", label: "par conception" },
    { value: "3", label: "expériences sur appareils Apple" },
  ],
  product: {
    eyebrow: "Une date devient un moment",
    title: "Ajoutez-le à votre façon. Admirez-le pleinement.",
    body: "Commencez vite, ajoutez les détails qui comptent et retrouvez facilement les dates à venir comme celles déjà passées.",
    features: [
      { number: "01", title: "Création rapide ou guidée", description: "Utilisez le formulaire complet, le parcours guidé ou Ajout rapide selon le moment." },
      { number: "02", title: "Un calendrier plus intelligent", description: "Importez des événements, repérez les dates importantes et répercutez facultativement les changements dans Calendrier iOS." },
      { number: "03", title: "Des rappels récurrents", description: "Choisissez une heure et faites revenir les anniversaires chaque mois ou chaque année." },
      { number: "04", title: "Pensé pour les vraies dates", description: "Gérez les journées entières, fuseaux horaires, décomptes précis et le temps écoulé après une date." },
      { number: "05", title: "Retrouvez chaque moment", description: "Favoris, catégories, tri, archives et recherche sémantique vous guident même sans les mots exacts." },
      { number: "06", title: "Vos détails restent mobiles", description: "Travaillez hors ligne, synchronisez facultativement via votre iCloud privé et exportez ou importez les détails en JSON. Les photos restent séparées." },
    ],
  },
  magicAdd: {
    eyebrow: "Ajout magique",
    title: "D’une pensée à un compte à rebours.",
    body: "Écrivez, dictez ou scannez un billet ou une capture. L’intelligence sur l’appareil peut proposer le titre, la date, l’emoji, la couleur, le lieu, la répétition et même plusieurs moments à la fois.",
    points: ["Écrivez naturellement", "Dictez à la voix", "Scannez une photo", "Créez plusieurs moments"],
    requirement: "Les fonctions enrichies d’Ajout magique nécessitent un appareil compatible Apple Intelligence sous iOS ou iPadOS 26+, avec Apple Intelligence activé et prêt. Toutes les autres fonctions restent disponibles dès iOS et iPadOS 18.",
    imageAlt: "Ajout magique de Moment365 transforme une description d’anniversaire en compte à rebours",
    orbitOne: "Intelligence sur l’appareil",
    orbitTwo: "Texte · voix · photo",
  },
  beauty: {
    eyebrow: "Chaque attente a son ambiance",
    title: "L’attente mérite sa propre vue.",
    body: "Donnez à chaque moment une couleur, un emoji, une photo et le bon niveau de précision. Un anneau clair rend la distance tangible et continue après que la date devient un souvenir.",
    bullets: ["Couleurs, photos, emoji, notes et lieux", "Un anneau vivant, des années aux dernières minutes", "Comptez le temps depuis les étapes à retenir"],
    birthdayAlt: "Compte à rebours d’anniversaire rose dans Moment365 avec anneau de progression et rappel",
    tripAlt: "Compte à rebours de voyage bleu dans Moment365 avec anneau de progression et lieu",
  },
  native: {
    eyebrow: "Votre prochain moment, partout",
    title: "Toujours proche, même lorsque l’app est fermée.",
    body: "Moment365 s’intègre aux espaces Apple que vous utilisez déjà, avec des informations immédiates et un accès rapide à la date qui compte.",
    platforms: [
      { name: "iPhone", requirement: "iOS 18+", description: "Widgets d’accueil et d’écran verrouillé, Activités en direct, Dynamic Island, Siri, Spotlight et commandes." },
      { name: "iPad", requirement: "iPadOS 18+", description: "Une bibliothèque spacieuse avec tous les outils de création, recherche, importation et synchronisation." },
      { name: "Apple Watch", requirement: "watchOS 10+", description: "Consultez les moments, ouvrez les détails, ajoutez aux favoris ou archivez, et épinglez la prochaine date en complication." },
    ],
    stageLabel: "Widgets, Activités en direct et votre prochain moment au poignet.",
    ipadAlt: "Moment365 sur iPad avec la bibliothèque de comptes à rebours et le prochain anniversaire",
    watchAlt: "Moment365 sur Apple Watch avec les moments à venir",
  },
  gallery: {
    eyebrow: "De plus près",
    title: "Pour les grands jours comme les petits.",
    body: "L’expérience Moment365 sur iPhone, iPad et Apple Watch.",
    hint: "Balayez pour explorer",
    items: [
      { tag: "Accueil", title: "Tout ce qui arrive, en un coup d’œil", alt: "Accueil de Moment365 avec les prochains comptes à rebours" },
      { tag: "Ajout magique", title: "Décrivez-le, il est prêt", alt: "Ajout magique de Moment365 créant un compte à rebours d’anniversaire" },
      { tag: "Anniversaire", title: "Une belle vue pour chaque attente", alt: "Détail d’un compte à rebours d’anniversaire dans Moment365" },
      { tag: "Voyage", title: "Les grands voyages semblent plus proches", alt: "Détail d’un compte à rebours de voyage dans Moment365" },
      { tag: "iPad", title: "Plus d’espace pour chaque moment", alt: "Bibliothèque Moment365 sur iPad" },
      { tag: "Watch", title: "Votre prochaine date au poignet", alt: "Prochains comptes à rebours Moment365 sur Apple Watch" },
    ],
  },
  privacy: {
    eyebrow: "Privée par conception",
    title: "Vos moments restent les vôtres.",
    body: "Aucun compte, aucune publicité et aucune analyse gérée par le développeur. Moment365 n’envoie pas vos moments à un serveur du développeur. La recopie Calendrier et la synchronisation iCloud privée restent facultatives et sous votre contrôle. Ajout magique traite les données sur l’appareil lorsque cela est pris en charge.",
    points: ["Aucun compte requis", "Aucune analyse tierce ni publicité", "Exportez, importez ou supprimez vos données"],
    link: "Lire la politique de confidentialité",
  },
  cta: {
    eyebrow: "Votre prochaine date est déjà en route",
    title: "Rapprochez votre prochain moment.",
    body: "Téléchargez Moment365 et offrez à chaque voyage, anniversaire, lancement et grande date un écrin où revenir.",
    button: "Télécharger gratuitement sur l’App Store",
    note: "Gratuit · Aucun compte requis",
  },
  footer: {
    tagline: "Chaque moment compte.",
    privacy: "Confidentialité",
    disclaimer: "Mentions légales",
    support: "Assistance",
    rights: "Tous droits réservés.",
    legalLanguage: "Les pages juridiques sont disponibles en anglais.",
  },
  support: {
    metaTitle: "Assistance Moment365",
    metaDescription: "Aide pour les comptes à rebours, rappels, iCloud, Ajout magique, Calendrier et appareils Apple dans Moment365.",
    back: "Retour à Moment365",
    eyebrow: "Assistance",
    title: "Gardez votre prochain moment sur la bonne voie.",
    body: "Trouvez des réponses sur les comptes à rebours, la synchronisation, les rappels, Ajout magique et vos données, ou ouvrez une demande d’assistance.",
    issues: "Ouvrir une demande",
    appStore: "Voir sur l’App Store",
    requirementsTitle: "Compatible avec",
    requirements: [
      { label: "iPhone", value: "iOS 18 ou version ultérieure" },
      { label: "iPad", value: "iPadOS 18 ou version ultérieure" },
      { label: "Apple Watch", value: "watchOS 10 ou version ultérieure" },
    ],
    faqTitle: "Questions fréquentes",
    faqs: [
      { question: "Comment synchroniser mes moments entre appareils ?", answer: "Activez la synchronisation iCloud dans les réglages de Moment365. Utilisez le même compte Apple avec iCloud Drive activé sur chaque appareil. Tirez l’accueil vers le bas pour demander une actualisation." },
      { question: "Puis-je utiliser Moment365 hors ligne ?", answer: "Oui. Vos moments fonctionnent localement sans connexion. Avec iCloud facultatif, les changements en attente sont renvoyés dès la reconnexion." },
      { question: "Pourquoi Ajout magique est-il indisponible ?", answer: "Les fonctions enrichies d’Ajout magique nécessitent un appareil compatible Apple Intelligence sous iOS ou iPadOS 26+, avec Apple Intelligence activé et prêt. Le reste de l’app fonctionne dès la version 18." },
      { question: "Pourquoi n’ai-je pas reçu de rappel ?", answer: "Vérifiez que les notifications de Moment365 sont autorisées, que la date du rappel est encore future et qu’aucun mode Concentration ou réglage système ne le masque." },
      { question: "Quelle différence entre les suggestions et la recopie Calendrier ?", answer: "Les suggestions affichent les dates importantes à importer en un geste. La recopie facultative écrit aussi les moments créés ou modifiés dans Calendrier iOS et peut récupérer les dates reprogrammées." },
      { question: "Comment déplacer ou supprimer mes données ?", answer: "Dans Gestion des données, exportez ou importez du JSON. Supprimez des moments ou videz les archives dans l’app, et désactivez iCloud si vous voulez que les prochains changements restent locaux." },
    ],
    contactTitle: "Encore besoin d’aide ?",
    contactBody: "Indiquez votre appareil, la version du système, le résultat attendu et ce qui s’est produit. Ces détails facilitent l’enquête.",
    contactButton: "Ouvrir le suivi des demandes",
  },
};

const ja: SiteCopy = {
  ...en,
  meta: {
    title: "Moment365 — 大切な日を美しくカウントダウン",
    description: "美しいカウントダウンをすばやく作成。リマインダー、ウィジェット、ライブアクティビティ、Apple Watch、カレンダー、Siri、任意のiCloud同期で、次の瞬間をいつも身近に。",
  },
  nav: {
    skip: "本文へ移動",
    primaryLabel: "メインナビゲーション",
    product: "できること",
    magic: "AIで追加",
    native: "いつでも身近に",
    support: "サポート",
    download: "Moment365を入手",
    language: "言語",
  },
  hero: {
    eyebrow: "Appleデバイスのためのカウントダウン＆リマインダー · App Storeで無料",
    title: "大切な瞬間まで、あと何日。",
    body: "旅行、誕生日、リリース、記念日。Moment365なら、どんな日付も、すぐ作れて忘れにくい美しいカウントダウンになります。",
    primary: "Moment365を無料で入手",
    secondary: "アプリを見る",
    availability: "iPhone・iPad対応、Apple Watchアプリ付き · iOS/iPadOS 18+ · watchOS 10+",
    imageAlt: "誕生日、旅行、卒業、記念日のカラフルなカウントダウンを表示したMoment365のホーム画面",
    floatingUnit: "日",
  },
  signalsLabel: "Moment365の特長",
  signals: [
    { value: "7", label: "つの表示言語" },
    { value: "プライベート", label: "を前提に設計" },
    { value: "3", label: "つのAppleデバイス体験" },
  ],
  product: {
    eyebrow: "日付が、待ち遠しい瞬間になる",
    title: "好きな方法で追加。美しく眺める。",
    body: "すばやく始めて、大切な詳細を追加。これからの日も、過ぎた日も、いつでも簡単に見つけられます。",
    features: [
      { number: "01", title: "すばやく、またはガイド付きで作成", description: "詳細フォーム、ガイド付きフロー、クイック追加から、その瞬間に合う方法を選べます。" },
      { number: "02", title: "もっと賢いカレンダー", description: "イベントを読み込み、大切な日を見つけ、必要に応じてiOSカレンダーと変更を反映できます。" },
      { number: "03", title: "繰り返すリマインダー", description: "通知時刻を選び、誕生日や記念日を毎月または毎年繰り返せます。" },
      { number: "04", title: "実際の日程にしっかり対応", description: "終日予定、タイムゾーン、正確なカウントダウン、日付を過ぎてからの経過時間に対応します。" },
      { number: "05", title: "どの瞬間もすぐ見つかる", description: "お気に入り、カテゴリ、並べ替え、アーカイブ、意味検索で、正確な言葉を覚えていなくても探せます。" },
      { number: "06", title: "詳細を自由に持ち運べる", description: "オフラインで使い、任意でプライベートiCloudに同期し、瞬間の詳細をJSON形式で書き出し・読み込みできます。写真は別に保たれます。" },
    ],
  },
  magicAdd: {
    eyebrow: "AIで追加",
    title: "ひらめきから、カウントダウンへ。",
    body: "文字で入力、声で伝える、チケットやスクリーンショットをスキャン。デバイス上のインテリジェンスが、タイトル、日付、絵文字、色、場所、繰り返しを整え、1回の入力から複数の瞬間も作れます。",
    points: ["自然な言葉で入力", "声で伝える", "写真をスキャン", "複数の瞬間を作成"],
    requirement: "AIで追加の拡張機能には、Apple Intelligence対応デバイス、iOSまたはiPadOS 26以降、および有効化・準備済みのApple Intelligenceが必要です。Moment365のその他の機能はiOS・iPadOS 18以降で利用できます。",
    imageAlt: "自然な誕生日の説明からカウントダウンを作成するMoment365のAIで追加画面",
    orbitOne: "デバイス上のインテリジェンス",
    orbitTwo: "テキスト · 音声 · 写真",
  },
  beauty: {
    eyebrow: "待つ時間にも、その日らしさを",
    title: "待ち時間に、特別な眺めを。",
    body: "色、絵文字、写真、表示精度を瞬間ごとに設定。分かりやすいリングがその日までの距離を見せ、思い出になった後も時間を刻み続けます。",
    bullets: ["カラーテーマ、写真、絵文字、メモ、場所", "年単位から最後の数分まで動くリング", "覚えておきたい節目からの経過時間"],
    birthdayAlt: "進捗リングとリマインダーを表示した、ローズ色のMoment365誕生日カウントダウン",
    tripAlt: "進捗リングと場所を表示した、青色のMoment365旅行カウントダウン",
  },
  native: {
    eyebrow: "次の瞬間を、どこにでも",
    title: "アプリを開いていなくても、すぐそばに。",
    body: "Moment365は、いつも使うAppleの画面に自然に広がります。ひと目で分かる更新情報から、大切な日へすぐ戻れます。",
    platforms: [
      { name: "iPhone", requirement: "iOS 18+", description: "ホーム画面・ロック画面ウィジェット、ライブアクティビティ、Dynamic Island、Siri、Spotlight、コントロール。" },
      { name: "iPad", requirement: "iPadOS 18+", description: "作成、検索、読み込み、同期をゆったり操作できる、広々としたカウントダウンライブラリ。" },
      { name: "Apple Watch", requirement: "watchOS 10+", description: "予定を確認し、詳細を開き、お気に入りやアーカイブを操作。次の日付をコンプリケーションに固定できます。" },
    ],
    stageLabel: "ウィジェット、ライブアクティビティ、そして手首に次の瞬間を。",
    ipadAlt: "カウントダウンライブラリと次の誕生日を表示したiPad版Moment365",
    watchAlt: "今後の瞬間を一覧表示したApple Watch版Moment365",
  },
  gallery: {
    eyebrow: "もう少し詳しく",
    title: "大きな日にも、小さな日にも。",
    body: "iPhone、iPad、Apple Watchで使えるMoment365。",
    hint: "スワイプして見る",
    items: [
      { tag: "ホーム", title: "これからの予定を、ひと目で", alt: "今後のカウントダウンを表示したMoment365のホーム画面" },
      { tag: "AIで追加", title: "伝えるだけで、できあがり", alt: "誕生日カウントダウンを作成するMoment365のAIで追加" },
      { tag: "誕生日", title: "待つ時間を美しく", alt: "Moment365の誕生日カウントダウン詳細" },
      { tag: "旅行", title: "大きな旅が近く感じる", alt: "Moment365の旅行カウントダウン詳細" },
      { tag: "iPad", title: "すべての瞬間に、もっと広い空間を", alt: "iPad上のMoment365カウントダウンライブラリ" },
      { tag: "Watch", title: "次の日付を手首に", alt: "Apple Watch上のMoment365カウントダウン一覧" },
    ],
  },
  privacy: {
    eyebrow: "プライバシーを前提に設計",
    title: "あなたの瞬間は、あなただけのもの。",
    body: "アカウントも広告も、開発者が運用する分析もありません。Moment365が瞬間を開発者サーバーへ送ることはありません。任意のカレンダー反映とプライベートiCloud同期はあなたが管理できます。対応環境ではAIで追加の処理もデバイス上で行われます。",
    points: ["アカウント登録不要", "第三者分析・広告なし", "データの書き出し、読み込み、削除に対応"],
    link: "プライバシーポリシーを読む",
  },
  cta: {
    eyebrow: "次の日は、もう近づいています",
    title: "次の瞬間を、もっと身近に。",
    body: "Moment365をダウンロードして、旅行、誕生日、リリース、記念日に、何度も見返したくなる場所を。",
    button: "App Storeから無料でダウンロード",
    note: "無料 · アカウント登録不要",
  },
  footer: {
    tagline: "すべての瞬間を大切に。",
    privacy: "プライバシー",
    disclaimer: "免責事項",
    support: "サポート",
    rights: "All rights reserved.",
    legalLanguage: "法的文書は英語で提供されています。",
  },
  support: {
    metaTitle: "Moment365 サポート",
    metaDescription: "Moment365のカウントダウン、リマインダー、iCloud同期、AIで追加、カレンダー、Appleデバイスに関するヘルプ。",
    back: "Moment365に戻る",
    eyebrow: "サポート",
    title: "次の瞬間まで、しっかりサポート。",
    body: "カウントダウン、同期、リマインダー、AIで追加、データについての回答を見るか、サポート依頼を作成できます。",
    issues: "サポート依頼を作成",
    appStore: "App Storeで見る",
    requirementsTitle: "対応環境",
    requirements: [
      { label: "iPhone", value: "iOS 18以降" },
      { label: "iPad", value: "iPadOS 18以降" },
      { label: "Apple Watch", value: "watchOS 10以降" },
    ],
    faqTitle: "よくある質問",
    faqs: [
      { question: "デバイス間で瞬間を同期するには？", answer: "Moment365の設定でiCloud同期を有効にします。各デバイスで同じApple Accountを使い、iCloud Driveを有効にしてください。ホーム画面を下に引くと更新をリクエストできます。" },
      { question: "オフラインでも使えますか？", answer: "はい。瞬間はインターネット接続なしでもローカルで利用できます。任意のiCloud同期が有効なら、未送信の変更は再接続後に再試行されます。" },
      { question: "AIで追加が使えないのはなぜですか？", answer: "AIで追加の拡張機能には、Apple Intelligence対応デバイス、iOSまたはiPadOS 26以降、有効化・準備済みのApple Intelligenceが必要です。その他の機能はバージョン18以降で使えます。" },
      { question: "リマインダーが届かないのはなぜですか？", answer: "Moment365の通知が許可されていること、リマインダー日時が未来であること、集中モードやシステム設定で通知が消音されていないことを確認してください。" },
      { question: "カレンダーの提案と反映の違いは？", answer: "提案は大切な日を表示し、ワンタップで読み込めます。任意の反映機能は新規・編集した瞬間をiOSカレンダーにも書き込み、変更された日付を取り込めます。" },
      { question: "データを移動または削除するには？", answer: "設定のデータ管理でJSONを書き出し・読み込みできます。個別の瞬間やアーカイブをアプリ内で削除し、今後の変更をローカルだけにする場合はiCloud同期を無効にできます。" },
    ],
    contactTitle: "解決しない場合",
    contactBody: "デバイス、OSバージョン、期待した動作、実際に起きたことをお知らせください。詳しい情報が調査に役立ちます。",
    contactButton: "問題を報告する",
  },
};

const zhHans: SiteCopy = {
  ...en,
  meta: {
    title: "Moment365 — 为重要时刻精美倒计时",
    description: "几秒创建精美倒计时，通过提醒、小组件、实时活动、Apple Watch、日历、Siri 和可选 iCloud 同步，让下一个重要时刻常伴身边。",
  },
  nav: {
    skip: "跳到主要内容",
    primaryLabel: "主导航",
    product: "使用方式",
    magic: "智能添加",
    native: "随处相伴",
    support: "支持",
    download: "获取 Moment365",
    language: "语言",
  },
  hero: {
    eyebrow: "为 Apple 设备打造的倒计时与提醒 · App Store 免费下载",
    title: "为重要时刻倒计时。",
    body: "旅行、生日、发布与纪念日——Moment365 把每个日期变成精美倒计时，添加轻松，也不易忘记。",
    primary: "免费获取 Moment365",
    secondary: "探索 App",
    availability: "适用于 iPhone 和 iPad，并配有 Apple Watch App · iOS/iPadOS 18+ · watchOS 10+",
    imageAlt: "Moment365 主屏幕，展示生日、旅行、毕业和纪念日的彩色倒计时",
    floatingUnit: "天",
  },
  signalsLabel: "Moment365 一览",
  signals: [
    { value: "7", label: "种界面语言" },
    { value: "隐私", label: "融入设计" },
    { value: "3", label: "种 Apple 设备体验" },
  ],
  product: {
    eyebrow: "让日期成为期待",
    title: "随心添加，悦目呈现。",
    body: "快速开始，加入你在意的细节，让将来或已经过去的每个日期都易于找到。",
    features: [
      { number: "01", title: "快速或引导式创建", description: "可选完整表单、引导流程或快速添加，按当下需要开始。" },
      { number: "02", title: "更聪明的日历", description: "导入日程、发现值得关注的日期，并可选择与 iOS 日历同步映射变更。" },
      { number: "03", title: "循环提醒", description: "选择提醒时间，让生日或纪念日每月或每年重复。" },
      { number: "04", title: "适配真实日程", description: "支持全天事件、时区、精确倒计时，以及日期过后的正计时。" },
      { number: "05", title: "找到任一时刻", description: "通过收藏、分类、排序、归档和语义搜索，在记不清原词时也能找到。" },
      { number: "06", title: "详情自由携带", description: "离线使用，可选通过私人 iCloud 同步，并以 JSON 导入或导出时刻详情。照片单独保留。" },
    ],
  },
  magicAdd: {
    eyebrow: "智能添加",
    title: "从一个念头，到一场倒计时。",
    body: "输入、说出，或扫描票据与截图。设备端智能可整理标题、日期、表情、颜色、地点、重复规则，甚至从一次描述创建多个时刻。",
    points: ["自然输入", "语音口述", "扫描照片", "创建多个时刻"],
    requirement: "智能添加增强功能需要支持 Apple Intelligence 的设备、iOS 或 iPadOS 26+，且 Apple Intelligence 已启用并准备就绪。Moment365 的其他功能仍可在 iOS 和 iPadOS 18+ 使用。",
    imageAlt: "Moment365 智能添加将自然语言生日描述转换为倒计时",
    orbitOne: "设备端智能",
    orbitTwo: "文字 · 语音 · 照片",
  },
  beauty: {
    eyebrow: "每段等待都有氛围",
    title: "等待，也值得独特的画面。",
    body: "为每个时刻选择颜色、表情、照片和精度。清晰的进度环让距离触手可感，并在日期成为回忆后继续计时。",
    bullets: ["配色、照片、表情、备注和地点", "从数年到最后几分钟的动态进度环", "从值得铭记的里程碑开始正计时"],
    birthdayAlt: "玫瑰色 Moment365 生日倒计时，带进度环和提醒",
    tripAlt: "蓝色 Moment365 旅行倒计时，带进度环和地点",
  },
  native: {
    eyebrow: "下一个时刻，随处相伴",
    title: "即使 App 未打开，也近在身边。",
    body: "Moment365 延伸到你常用的 Apple 界面，提供一目了然的更新，并让你快速回到重要日期。",
    platforms: [
      { name: "iPhone", requirement: "iOS 18+", description: "主屏幕与锁定屏幕小组件、实时活动、灵动岛、Siri、聚焦搜索和控制项。" },
      { name: "iPad", requirement: "iPadOS 18+", description: "宽敞的倒计时资料库，创建、搜索、导入和同步工具触手可及。" },
      { name: "Apple Watch", requirement: "watchOS 10+", description: "查看未来时刻、打开详情、收藏或归档，并将下个日期固定为复杂功能。" },
    ],
    stageLabel: "小组件、实时活动，以及腕上的下一个时刻。",
    ipadAlt: "iPad 上的 Moment365，展示倒计时资料库和下一个生日",
    watchAlt: "Apple Watch 上的 Moment365，列出即将到来的时刻",
  },
  gallery: {
    eyebrow: "近距离体验",
    title: "为大日子，也为小期待。",
    body: "Moment365 在 iPhone、iPad 和 Apple Watch 上的体验。",
    hint: "滑动探索",
    items: [
      { tag: "主页", title: "接下来的一切，一目了然", alt: "Moment365 主屏幕上的未来倒计时" },
      { tag: "智能添加", title: "描述一下，即刻完成", alt: "Moment365 智能添加创建生日倒计时" },
      { tag: "生日", title: "让每段等待都赏心悦目", alt: "Moment365 生日倒计时详情" },
      { tag: "旅行", title: "让远行感觉更近", alt: "Moment365 旅行倒计时详情" },
      { tag: "iPad", title: "给每个时刻更多空间", alt: "iPad 上的 Moment365 倒计时资料库" },
      { tag: "Watch", title: "把下个日期戴在腕上", alt: "Apple Watch 上的 Moment365 未来倒计时" },
    ],
  },
  privacy: {
    eyebrow: "隐私融入设计",
    title: "你的时刻，只属于你。",
    body: "无需账户，没有广告，也没有由开发者运营的分析。Moment365 不会把你的时刻发送到开发者服务器。可选的日历映射与私人 iCloud 同步由你掌控。受支持时，智能添加也在设备端处理。",
    points: ["无需账户", "无第三方分析或广告", "可导出、导入或删除数据"],
    link: "阅读隐私政策",
  },
  cta: {
    eyebrow: "下一个日期已经在路上",
    title: "让下一个时刻感觉更近。",
    body: "下载 Moment365，为每次旅行、生日、发布与纪念日留一个值得常回来的地方。",
    button: "在 App Store 免费下载",
    note: "免费 · 无需账户",
  },
  footer: {
    tagline: "每个时刻都值得。",
    privacy: "隐私",
    disclaimer: "免责声明",
    support: "支持",
    rights: "保留所有权利。",
    legalLanguage: "法律页面仅提供英文版本。",
  },
  support: {
    metaTitle: "Moment365 支持",
    metaDescription: "获取有关 Moment365 倒计时、提醒、iCloud 同步、智能添加、日历和 Apple 设备的帮助。",
    back: "返回 Moment365",
    eyebrow: "支持",
    title: "让下一个时刻按计划到来。",
    body: "查找关于倒计时、同步、提醒、智能添加和数据的快速解答，或提交支持问题。",
    issues: "提交支持问题",
    appStore: "在 App Store 查看",
    requirementsTitle: "支持设备",
    requirements: [
      { label: "iPhone", value: "iOS 18 或更高版本" },
      { label: "iPad", value: "iPadOS 18 或更高版本" },
      { label: "Apple Watch", value: "watchOS 10 或更高版本" },
    ],
    faqTitle: "常见问题",
    faqs: [
      { question: "如何在设备间同步时刻？", answer: "在 Moment365 设置中启用 iCloud 同步。在每台设备上使用同一 Apple 账户并启用 iCloud 云盘。可在主屏幕下拉以请求刷新。" },
      { question: "可以离线使用 Moment365 吗？", answer: "可以。没有网络时，你的时刻仍在本地正常使用。启用可选 iCloud 同步后，待处理的变更会在设备重新联网后重试。" },
      { question: "为什么智能添加不可用？", answer: "智能添加增强功能需要支持 Apple Intelligence 的设备、iOS 或 iPadOS 26+，且 Apple Intelligence 已启用并准备就绪。App 的其他功能可在版本 18+ 使用。" },
      { question: "为什么没有收到提醒？", answer: "请检查是否已允许 Moment365 通知、提醒日期是否仍在未来，以及专注模式或系统设置是否将其静音。" },
      { question: "日历建议和映射有什么不同？", answer: "建议会呈现值得关注的日期，供你一键导入。可选映射还会把新增或编辑的时刻写入 iOS 日历，并可取回重新安排的日期。" },
      { question: "如何迁移或删除数据？", answer: "在设置的“数据管理”中导出或导入 JSON。你可以在 App 中删除单个时刻或清空归档，并随时关闭 iCloud 同步，让之后的变更仅保留在本地。" },
    ],
    contactTitle: "仍需帮助？",
    contactBody: "请提供设备、系统版本、预期结果和实际情况。这些信息能让支持问题更容易排查。",
    contactButton: "打开问题跟踪器",
  },
};

const ar: SiteCopy = {
  ...en,
  meta: {
    title: "Moment365 — عدّ تنازلي جميل لما يهمك",
    description: "أنشئ عدّاً تنازلياً جميلاً خلال ثوانٍ، وتلقَّ تذكيرات، وأبقِ لحظاتك القادمة قريبة عبر الأدوات والأنشطة المباشرة وApple Watch والتقويم وSiri ومزامنة iCloud الاختيارية.",
  },
  nav: {
    skip: "انتقل إلى المحتوى",
    primaryLabel: "التنقل الرئيسي",
    product: "كيف يعمل",
    magic: "الإضافة السحرية",
    native: "في كل مكان",
    support: "الدعم",
    download: "نزّل Moment365",
    language: "اللغة",
  },
  hero: {
    eyebrow: "عدّ تنازلي وتذكيرات لأجهزة Apple · مجاناً على App Store",
    title: "عدّ تنازلياً لما يهمك.",
    body: "الرحلات وأعياد الميلاد وعمليات الإطلاق والذكريات السنوية — يحوّل Moment365 كل تاريخ إلى عدّ تنازلي جميل، سهل الإضافة وصعب النسيان.",
    primary: "نزّل Moment365 مجاناً",
    secondary: "استكشف التطبيق",
    availability: "لـ iPhone وiPad، مع تطبيق مرافق لـ Apple Watch · iOS/iPadOS 18+ · watchOS 10+",
    imageAlt: "شاشة Moment365 الرئيسية تعرض عدّاً تنازلياً ملوّناً لعيد ميلاد ورحلة وتخرّج وذكرى سنوية",
    floatingUnit: "أيام",
  },
  signalsLabel: "Moment365 في لمحة",
  signals: [
    { value: "7", label: "لغات للواجهة" },
    { value: "خاص", label: "من أساس التصميم" },
    { value: "3", label: "تجارب على أجهزة Apple" },
  ],
  product: {
    eyebrow: "يتحوّل التاريخ إلى لحظة",
    title: "أضفه بطريقتك. وشاهده بجمال.",
    body: "ابدأ بسرعة، وأضف التفاصيل التي تهمك، ودع Moment365 يجعل كل تاريخ قادم أو مضى سهل العثور عليه.",
    features: [
      { number: "01", title: "إنشاء سريع أو موجّه", description: "استخدم النموذج الكامل أو الخطوات الموجّهة أو إضافة سريعة، بحسب ما يلائم اللحظة." },
      { number: "02", title: "تقويم أذكى", description: "استورد الأحداث، واكتشف التواريخ المهمة، واعكس التغييرات اختيارياً مع تقويم iOS." },
      { number: "03", title: "تذكيرات متكررة", description: "اختر وقت التذكير واجعل أعياد الميلاد أو الذكريات تتكرر شهرياً أو سنوياً." },
      { number: "04", title: "مصمم للتواريخ الحقيقية", description: "يتعامل مع أحداث اليوم الكامل والمناطق الزمنية والعدّ الدقيق والوقت المنقضي بعد التاريخ." },
      { number: "05", title: "اعثر على أي لحظة", description: "استخدم المفضلة والفئات والفرز والأرشيف والبحث الدلالي عندما لا تكفي الكلمات الدقيقة." },
      { number: "06", title: "تفاصيلك قابلة للنقل", description: "استخدمه دون اتصال، وزامن اختيارياً عبر iCloud الخاص، وصدّر تفاصيل اللحظات أو استوردها بصيغة JSON. تبقى الصور منفصلة." },
    ],
  },
  magicAdd: {
    eyebrow: "الإضافة السحرية",
    title: "من فكرة إلى عدّ تنازلي.",
    body: "اكتبها أو انطقها أو امسح تذكرة أو لقطة شاشة. يمكن للذكاء على الجهاز إعداد العنوان والتاريخ والرمز واللون والموقع والتكرار، بل وإنشاء لحظات متعددة من طلب واحد.",
    points: ["اكتب بصورة طبيعية", "أملِ بصوتك", "امسح صورة", "أنشئ لحظات متعددة"],
    requirement: "تتطلب مزايا الإضافة السحرية المحسّنة جهازاً يدعم Apple Intelligence ويعمل بنظام iOS أو iPadOS 26+، مع تفعيل Apple Intelligence وجاهزيته. تظل جميع مزايا Moment365 الأخرى متاحة على iOS وiPadOS 18+.",
    imageAlt: "شاشة الإضافة السحرية في Moment365 تحوّل وصفاً طبيعياً لعيد ميلاد إلى عدّ تنازلي",
    orbitOne: "ذكاء على الجهاز",
    orbitTwo: "نص · صوت · صورة",
  },
  beauty: {
    eyebrow: "لكل انتظار أجواؤه",
    title: "الانتظار يستحق منظراً خاصاً.",
    body: "امنح كل لحظة لوناً ورمزاً وصورة ومستوى الدقة المناسب. تجعل الحلقة الواضحة المسافة ملموسة، وتواصل العدّ بعد أن يصبح التاريخ ذكرى.",
    bullets: ["ألوان وصور ورموز وملاحظات ومواقع", "حلقة حيّة من السنوات حتى الدقائق الأخيرة", "عدّ الوقت منذ المحطات التي تستحق التذكّر"],
    birthdayAlt: "عدّ تنازلي وردي لعيد ميلاد في Moment365 مع حلقة تقدم وتذكير",
    tripAlt: "عدّ تنازلي أزرق لرحلة في Moment365 مع حلقة تقدم وموقع",
  },
  native: {
    eyebrow: "لحظتك القادمة، في كل مكان",
    title: "قريبة منك، حتى حين لا يكون التطبيق مفتوحاً.",
    body: "يمتد Moment365 إلى واجهات Apple التي تستخدمها بالفعل، بتحديثات سريعة وطرق مباشرة للعودة إلى التاريخ المهم.",
    platforms: [
      { name: "iPhone", requirement: "iOS 18+", description: "أدوات الشاشة الرئيسية وشاشة القفل، والأنشطة المباشرة، وDynamic Island، وSiri، وSpotlight، وعناصر التحكم." },
      { name: "iPad", requirement: "iPadOS 18+", description: "مكتبة واسعة للعدّ التنازلي، مع أدوات الإنشاء والبحث والاستيراد والمزامنة في متناولك." },
      { name: "Apple Watch", requirement: "watchOS 10+", description: "شاهد اللحظات القادمة، وافتح التفاصيل، وأضف إلى المفضلة أو الأرشيف، وثبّت التاريخ التالي كإضافة على الواجهة." },
    ],
    stageLabel: "الأدوات والأنشطة المباشرة ولحظتك التالية على معصمك.",
    ipadAlt: "Moment365 على iPad يعرض مكتبة العدّ التنازلي وعيد الميلاد القادم",
    watchAlt: "Moment365 على Apple Watch يعرض قائمة باللحظات القادمة",
  },
  gallery: {
    eyebrow: "نظرة أقرب",
    title: "للأيام الكبيرة والصغيرة.",
    body: "تجربة Moment365 على iPhone وiPad وApple Watch.",
    hint: "اسحب للاستكشاف",
    items: [
      { tag: "الرئيسية", title: "كل ما هو قادم، في لمحة", alt: "شاشة Moment365 الرئيسية مع العدّ التنازلي القادم" },
      { tag: "الإضافة السحرية", title: "صِفه وسيصبح جاهزاً", alt: "الإضافة السحرية في Moment365 تنشئ عدّاً تنازلياً لعيد ميلاد" },
      { tag: "عيد ميلاد", title: "منظر جميل لكل انتظار", alt: "تفاصيل العدّ التنازلي لعيد ميلاد في Moment365" },
      { tag: "سفر", title: "تبدو الرحلات الكبيرة أقرب", alt: "تفاصيل العدّ التنازلي لرحلة في Moment365" },
      { tag: "iPad", title: "مساحة أكبر لكل لحظة", alt: "مكتبة العدّ التنازلي في Moment365 على iPad" },
      { tag: "Watch", title: "تاريخك التالي على معصمك", alt: "العدّ التنازلي القادم في Moment365 على Apple Watch" },
    ],
  },
  privacy: {
    eyebrow: "الخصوصية أساس التصميم",
    title: "لحظاتك تبقى لك.",
    body: "لا حساب، ولا إعلانات، ولا تحليلات يديرها المطوّر. لا يرسل Moment365 لحظاتك إلى خادم تابع للمطوّر. يبقى انعكاس التقويم الاختياري ومزامنة iCloud الخاصة تحت تحكمك. تجري معالجة الإضافة السحرية على الجهاز حيثما كانت مدعومة.",
    points: ["لا يتطلب حساباً", "لا تحليلات خارجية أو إعلانات", "صدّر بياناتك أو استوردها أو احذفها"],
    link: "اقرأ سياسة الخصوصية",
  },
  cta: {
    eyebrow: "تاريخك القادم في طريقه إليك",
    title: "اجعل اللحظة القادمة تبدو أقرب.",
    body: "نزّل Moment365 وامنح كل رحلة وعيد ميلاد وإطلاق وذكرى مكاناً يستحق العودة إليه.",
    button: "نزّله مجاناً من App Store",
    note: "مجاني · لا يتطلب حساباً",
  },
  footer: {
    tagline: "كل لحظة لها قيمتها.",
    privacy: "الخصوصية",
    disclaimer: "إخلاء المسؤولية",
    support: "الدعم",
    rights: "جميع الحقوق محفوظة.",
    legalLanguage: "الصفحات القانونية متاحة باللغة الإنجليزية.",
  },
  support: {
    metaTitle: "دعم Moment365",
    metaDescription: "مساعدة في العدّ التنازلي والتذكيرات ومزامنة iCloud والإضافة السحرية والتقويم وأجهزة Apple في Moment365.",
    back: "العودة إلى Moment365",
    eyebrow: "الدعم",
    title: "أبقِ لحظتك القادمة على المسار.",
    body: "اعثر على إجابات سريعة حول العدّ التنازلي والمزامنة والتذكيرات والإضافة السحرية وبياناتك، أو افتح طلب دعم.",
    issues: "افتح طلب دعم",
    appStore: "اعرضه على App Store",
    requirementsTitle: "يعمل على",
    requirements: [
      { label: "iPhone", value: "iOS 18 أو أحدث" },
      { label: "iPad", value: "iPadOS 18 أو أحدث" },
      { label: "Apple Watch", value: "watchOS 10 أو أحدث" },
    ],
    faqTitle: "الأسئلة المتكررة",
    faqs: [
      { question: "كيف أزامن اللحظات بين الأجهزة؟", answer: "افتح الإعدادات في Moment365 وفعّل مزامنة iCloud. استخدم Apple Account نفسه مع تفعيل iCloud Drive على كل جهاز. اسحب الشاشة الرئيسية إلى الأسفل لطلب تحديث." },
      { question: "هل يمكنني استخدام Moment365 دون اتصال؟", answer: "نعم. تعمل لحظاتك محلياً دون اتصال. عند تفعيل مزامنة iCloud الاختيارية، تُعاد محاولة التغييرات المعلّقة بعد اتصال الجهاز." },
      { question: "لماذا لا تتوفر الإضافة السحرية؟", answer: "تتطلب مزايا الإضافة السحرية المحسّنة جهازاً يدعم Apple Intelligence بنظام iOS أو iPadOS 26+، مع تفعيل Apple Intelligence وجاهزيته. يعمل باقي التطبيق على الإصدار 18+." },
      { question: "لماذا لم أتلقَّ تذكيراً؟", answer: "تحقق من السماح بإشعارات Moment365، وأن تاريخ التذكير ما زال في المستقبل، وأن وضع تركيز أو إعداداً في النظام لا يكتمه." },
      { question: "ما الفرق بين اقتراحات التقويم والانعكاس؟", answer: "تعرض الاقتراحات التواريخ المهمة للاستيراد بنقرة واحدة. يكتب الانعكاس الاختياري اللحظات الجديدة أو المعدّلة في تقويم iOS، ويمكنه استرداد التواريخ التي أُعيدت جدولتها." },
      { question: "كيف أنقل بياناتي أو أحذفها؟", answer: "استخدم إدارة البيانات في الإعدادات لتصدير JSON أو استيراده. احذف اللحظات الفردية أو امسح الأرشيف داخل التطبيق، وعطّل مزامنة iCloud متى أردت إبقاء التغييرات القادمة محلية." },
    ],
    contactTitle: "ما زلت بحاجة إلى مساعدة؟",
    contactBody: "اذكر جهازك وإصدار النظام وما توقعت حدوثه وما حدث فعلاً. تسهّل هذه التفاصيل التحقيق في طلب الدعم.",
    contactButton: "افتح متتبع الطلبات",
  },
};

export const siteCopy: Record<Locale, SiteCopy> = {
  en,
  de,
  es,
  fr,
  ja,
  "zh-hans": zhHans,
  ar,
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function localizedPath(locale: Locale, path: LocalizedRoute = "/") {
  if (locale === "en") {
    return path === "/" ? "/" : `${path}/`;
  }

  return path === "/" ? `/${locale}/` : `/${locale}${path}/`;
}

export function languageAlternates(path: LocalizedRoute = "/") {
  return Object.fromEntries([
    ...locales.map((locale) => [localeMeta[locale].htmlLang, `${SITE_URL}${localizedPath(locale, path)}`]),
    ["x-default", `${SITE_URL}${localizedPath("en", path)}`],
  ]);
}
