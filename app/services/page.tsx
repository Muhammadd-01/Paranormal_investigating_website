import { ServicesClientPage } from "./services-client-page"

export const metadata = {
  title: "Our Services - Ruqyah & Islamic Spiritual Healing",
  description:
    "Professional Islamic spiritual healing services including Ruqyah treatment, Jinn possession diagnosis, Sihr (black magic) removal, Evil Eye protection, and spiritual counseling. Authentic treatments based on Quran and Sunnah available 24/7.",
  keywords: [
    "Ruqyah services",
    "Islamic spiritual healing",
    "jinn possession treatment",
    "black magic removal",
    "evil eye treatment",
    "Islamic exorcism services",
    "spiritual counseling Islam",
  ],
  openGraph: {
    title: "Professional Ruqyah and Spiritual Healing Services",
    description:
      "Comprehensive Islamic spiritual healing services for Jinn possession, Sihr, and Evil Eye based on authentic Islamic teachings.",
    type: "website",
  },
}

export default function ServicesPage() {
  return <ServicesClientPage />
}
