import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ScrollToTop } from "@/components/scroll-to-top"
import { SectionDivider } from "@/components/section-divider"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { BookOpen, Download, Video, FileText, Headphones, Shield } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "Islamic Resources - Ruqyah, Quranic Protection & Spiritual Healing",
  description:
    "Free Islamic resources for spiritual protection and healing. Download Quranic verses, Ruqyah audio, protection supplications, Islamic books on Jinn, and daily adhkar. Authentic resources based on Quran and Sunnah for self-treatment and spiritual growth.",
  keywords: [
    "Ruqyah resources",
    "Quranic protection verses",
    "Islamic healing downloads",
    "free Ruqyah audio",
    "adhkar protection",
    "Islamic spiritual books",
    "Ayat al-Kursi",
  ],
  openGraph: {
    title: "Free Islamic Resources for Spiritual Protection & Healing",
    description:
      "Comprehensive collection of Quranic verses, Ruqyah audio, and Islamic books for spiritual protection.",
    type: "website",
  },
}

import ResourcesClient from "./resources-client"

export default function ResourcesPage() {
  return <ResourcesClient />
}

