import AboutPageClient from "./about-client"

export const metadata = {
  title: "About Us - Islamic Paranormal Research & Spiritual Healing",
  description:
    "Learn about our Islamic-based paranormal research organization. Expert team dedicated to spiritual healing through authentic Ruqyah, Quranic treatment, and scholarly research on Jinn, Sihr, and Evil Eye based on Quran and Sunnah.",
  keywords: [
    "Islamic paranormal research",
    "Ruqyah experts",
    "Islamic spiritual healing team",
    "jinn research scholars",
    "Islamic exorcism experts",
    "spiritual healing organization",
  ],
  openGraph: {
    title: "About Our Islamic Spiritual Healing Organization",
    description:
      "Meet our expert team dedicated to authentic Islamic spiritual healing and paranormal research based on Quran and Sunnah.",
    type: "website",
  },
}

export default function AboutPage() {
  return <AboutPageClient />
}
