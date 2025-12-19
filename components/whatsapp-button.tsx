"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ORG_CONFIG } from "@/lib/constants"

export function WhatsAppButton() {
  const handleClick = () => {
    const url = `https://wa.me/${ORG_CONFIG.whatsapp.number.replace(/\D/g, "")}?text=${encodeURIComponent(
      ORG_CONFIG.whatsapp.message,
    )}`
    window.open(url, "_blank")
  }

  return (
    <Button
      onClick={handleClick}
      size="icon"
      className="fixed bottom-6 right-6 z-40 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-lg hover:shadow-[#25D366]/50 transition-all duration-300 animate-glow-pulse h-14 w-14"
      aria-label="Contact via WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </Button>
  )
}
