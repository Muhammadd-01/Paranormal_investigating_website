import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ScrollToTop } from "@/components/scroll-to-top"
import { SectionDivider } from "@/components/section-divider"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock, MessageSquare, Send } from "lucide-react"
import Image from "next/image"
import { ORG_CONFIG } from "@/lib/constants"

export const metadata = {
  title: `Contact Us - ${ORG_CONFIG.name}`,
  description:
    "Contact us for Islamic spiritual healing, Ruqyah services, and paranormal consultations. Available 24/7 for emergency spiritual assistance. Professional guidance based on Quran and Sunnah.",
  keywords: [
    "contact ruqyah",
    "spiritual healing consultation",
    "Islamic exorcist contact",
    "Ruqyah appointment",
    "jinn removal help",
    "sihr treatment contact",
  ],
  openGraph: {
    title: `Contact ${ORG_CONFIG.name}`,
    description:
      "Reach out for professional Islamic spiritual healing and Ruqyah services. Emergency consultations available.",
    type: "website",
  },
}

import ContactClient from "./contact-client"

export default function ContactPage() {
  return <ContactClient />
}

