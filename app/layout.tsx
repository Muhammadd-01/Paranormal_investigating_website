import type React from "react"
import type { Metadata, Viewport } from "next"
import { Cinzel, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { ORG_CONFIG } from "@/lib/constants"
import { ScrollToTopNavigation } from "@/components/scroll-to-top-navigation"

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://your-domain.com"), // Update with actual domain
  title: {
    default: `${ORG_CONFIG.name} - ${ORG_CONFIG.tagline}`,
    template: `%s | ${ORG_CONFIG.name}`,
  },
  description:
    "Leading Islamic paranormal research organization specializing in spiritual healing through Qur'an and Sunnah. Professional Ruqyah services for Jinn possession, Sihr (black magic), Evil Eye, and spiritual afflictions. Expert guidance based on authentic Islamic teachings.",
  keywords: [
    "Islamic healing",
    "Ruqyah",
    "Paranormal research",
    "Jinn possession",
    "Sihr treatment",
    "Black magic removal",
    "Evil Eye protection",
    "Spiritual healing",
    "Quran healing",
    "Islamic exorcism",
    "Hasad treatment",
    "Islamic spirituality",
    "Muslim exorcist",
    "Spiritual cleansing Islam",
    "Islamic paranormal investigation",
    "Ruqyah practitioner",
  ],
  authors: [{ name: ORG_CONFIG.name }],
  creator: ORG_CONFIG.name,
  publisher: ORG_CONFIG.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-domain.com",
    siteName: ORG_CONFIG.name,
    title: `${ORG_CONFIG.name} - ${ORG_CONFIG.tagline}`,
    description:
      "Professional Islamic spiritual healing and Ruqyah services. Expert treatment for Jinn possession, Sihr, and Evil Eye based on Quran and Sunnah.",
    images: [
      {
        url: "/open-quran-with-islamic-calligraphy-soft-light-spi.jpg",
        width: 1200,
        height: 630,
        alt: `${ORG_CONFIG.name} - Islamic Spiritual Healing`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${ORG_CONFIG.name} - ${ORG_CONFIG.tagline}`,
    description: "Professional Islamic spiritual healing and Ruqyah services based on Quran and Sunnah.",
    images: ["/open-quran-with-islamic-calligraphy-soft-light-spi.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
  alternates: {
    canonical: "https://your-domain.com",
  },
  category: "Health & Wellness",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#171717" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
}

import { LanguageProvider } from "@/context/LanguageContext"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.variable} ${cinzel.variable} font-sans antialiased`}>
        <LanguageProvider>
          <ScrollToTopNavigation />
          {children}
          <Analytics />
        </LanguageProvider>
      </body>
    </html>
  )
}

