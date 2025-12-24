"use client"

import Link from "next/link"

import { Mail, Phone, MapPin } from "lucide-react"
import { ORG_CONFIG } from "@/lib/constants"
import { useLanguage } from "@/context/LanguageContext"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-border/50 bg-card/30 backdrop-blur-sm mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-[family-name:var(--font-cinzel)] font-bold text-primary mb-4">
              {ORG_CONFIG.name}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{ORG_CONFIG.tagline}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">{t("quick_links")}</h4>
            <ul className="space-y-2">
              {[
                { label: t("about"), href: "/about" },
                { label: t("research_nav"), href: "/research" },
                { label: t("services"), href: "/services" },
                { label: t("contact"), href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">{t("contact")}</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <span>{ORG_CONFIG.email}</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <span>{ORG_CONFIG.whatsapp.number}</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>{t("online")}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-border/50 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {ORG_CONFIG.name}. {t("all_rights_reserved")}
          </p>
          <p className="text-xs text-muted-foreground mt-2">{t("footer_blessing")}</p>
        </div>
      </div>
    </footer>
  )
}

