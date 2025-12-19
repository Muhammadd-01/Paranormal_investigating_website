import HomeClient from "./home-client"

export const metadata = {
  title: "Islamic Paranormal Research & Spiritual Healing - Ruqyah Services",
  description:
    "Professional Islamic spiritual healing and paranormal research organization. Expert Ruqyah services for Jinn possession, black magic (Sihr) removal, Evil Eye treatment, and spiritual counseling based on Quran and Sunnah. Available 24/7.",
  keywords: [
    "Islamic paranormal research",
    "Ruqyah services",
    "Jinn possession treatment",
    "black magic removal",
    "Sihr treatment",
    "Evil Eye healing",
    "Islamic spiritual healing",
    "Muslim exorcist",
    "Quran healing",
    "spiritual cleansing Islam",
    "Islamic exorcism",
    "paranormal investigation Islam",
    "haunted house Islamic solution",
    "spiritual protection Islam",
  ],
  openGraph: {
    title: "Islamic Paranormal Research & Spiritual Healing Organization",
    description:
      "Leading organization for Islamic spiritual healing through Quran and Sunnah. Professional Ruqyah services, paranormal investigation, and spiritual counseling available 24/7.",
    type: "website",
    images: [
      {
        url: "/islamic-geometric-patterns-in-dark-background-with.jpg",
        width: 1200,
        height: 630,
        alt: "Islamic Paranormal Research & Spiritual Healing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Islamic Paranormal Research & Spiritual Healing",
    description: "Professional Ruqyah services and spiritual healing based on Quran and Sunnah. Available 24/7.",
  },
  alternates: {
    canonical: "/",
  },
}

export default function HomePage() {
  return <HomeClient />
}
