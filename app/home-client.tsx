"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { SectionDivider } from "@/components/section-divider"
import { Shield, BookOpen, Heart, ChevronRight, Moon, Users, Award } from "lucide-react"
import { ORG_CONFIG } from "@/lib/constants"
import { useLanguage } from "@/context/LanguageContext"


export default function HomeClient() {
  const heroRef = useRef<HTMLDivElement>(null)
  const sectionsRef = useRef<HTMLElement[]>([])
  const { t, dir } = useLanguage()


  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      name: ORG_CONFIG.name,
      description: ORG_CONFIG.tagline,
      url: typeof window !== "undefined" ? window.location.origin : "",
      telephone: ORG_CONFIG.phone,
      email: ORG_CONFIG.email,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Your City",
        addressRegion: "Your Region",
        addressCountry: "Your Country",
      },
      openingHours: "Mo-Th 09:00-21:00, Fr 14:00-22:00, Sa 09:00-21:00",
      priceRange: "$$",
      areaServed: {
        "@type": "Place",
        name: "Worldwide",
      },
      availableService: [
        {
          "@type": "MedicalTherapy",
          name: "Ruqyah Spiritual Healing",
          description: "Islamic spiritual healing through Quranic recitation",
        },
        {
          "@type": "MedicalTherapy",
          name: "Spiritual Assessment",
          description: "Diagnosis of spiritual afflictions based on Islamic methodology",
        },
      ],
    }

    const script = document.createElement("script")
    script.type = "application/ld+json"
    script.text = JSON.stringify(structuredData)
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el)
    }
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/islamic-geometric-patterns-in-dark-background-with.jpg"
            alt="Islamic geometric patterns background"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/80" />
        </div>

        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(209,213,219,0.1),transparent)]" />

        <div className="container relative z-10 mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Heading - staggered animation */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-[family-name:var(--font-cinzel)] font-bold text-balance animate-fade-in-up [animation-delay:200ms] opacity-0 [animation-fill-mode:forwards]">
              {t("hero_title").split(t("hero_unseen"))[0]}
              <span className="text-primary">{t("hero_unseen")}</span>
              {t("hero_title").split(t("hero_unseen"))[1]}
            </h1>


            {/* Subtitle */}
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground text-pretty animate-fade-in-up [animation-delay:400ms] opacity-0 [animation-fill-mode:forwards]">
              {ORG_CONFIG.tagline}
            </p>

            {/* Organization name */}
            <p className="text-base sm:text-lg text-foreground/60 animate-fade-in-up [animation-delay:600ms] opacity-0 [animation-fill-mode:forwards]">
              {ORG_CONFIG.name}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up [animation-delay:800ms] opacity-0 [animation-fill-mode:forwards]">
              <Button
                asChild
                size="lg"
                className="group bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
              >
                <Link href="/contact">
                  {t("request_help")}
                  <ChevronRight className={`ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform ${dir === 'rtl' ? 'rotate-180' : ''}`} />
                </Link>

              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="group border-2 border-primary/50 hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:scale-105 bg-transparent"
              >
                <Link href="/about">
                  {t("learn_more")}
                  <ChevronRight className={`ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform ${dir === 'rtl' ? 'rotate-180' : ''}`} />
                </Link>

              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce-slow hidden md:flex">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Core Values Section */}
      <section ref={addToRefs} className="container mx-auto px-4 py-20 opacity-0">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-[family-name:var(--font-cinzel)] font-bold text-center text-balance mb-16">
          {t("our_foundation")}
        </h2>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Shield,
              title: t("service_assessment"),
              description: t("service_assessment_desc"),
            },
            {
              icon: BookOpen,
              title: t("service_ruqyah"),
              description: t("service_ruqyah_desc"),
            },
            {
              icon: Heart,
              title: t("healing"),
              description: t("healing_desc"),
            },
          ].map((item, index) => (

            <Card
              key={item.title}
              className="group relative overflow-hidden border-2 border-border hover:border-primary/50 bg-card/50 backdrop-blur-sm transition-all duration-500 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-2"
              style={{
                animationDelay: `${index * 200}ms`,
              }}
            >
              <CardContent className="p-6 md:p-8 text-center space-y-4">
                <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300 group-hover:scale-110 transform">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl md:text-2xl font-[family-name:var(--font-cinzel)] font-bold">{item.title}</h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{item.description}</p>
              </CardContent>

              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Card>
          ))}
        </div>
      </section>

      <SectionDivider />

      <section ref={addToRefs} className="container mx-auto px-4 py-20 opacity-0">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-[family-name:var(--font-cinzel)] font-bold text-center text-balance mb-16">
          {t("our_services")}
        </h2>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {[
            {
              icon: Moon,
              title: t("service_assessment"),
              description: t("service_assessment_desc"),
              image: "/islamic-prayer-beads-tasbih-on-dark-background-wit.jpg",
            },
            {
              icon: BookOpen,
              title: t("service_ruqyah"),
              description: t("service_ruqyah_desc"),
              image: "/open-quran-with-islamic-calligraphy-soft-light-spi.jpg",
            },
            {
              icon: Users,
              title: t("service_family"),
              description: t("service_family_desc"),
              image: "/muslim-family-praying-together-peaceful-islamic-en.jpg",
            },
            {
              icon: Award,
              title: t("service_education"),
              description: t("service_education_desc"),
              image: "/islamic-books-and-manuscripts-with-arabic-calligra.jpg",
            },
          ].map((service, index) => (

            <Card
              key={service.title}
              className="group relative overflow-hidden border-2 border-border hover:border-primary/50 bg-card/30 backdrop-blur-sm transition-all duration-500 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-3"
              style={{
                animationDelay: `${index * 150}ms`,
              }}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
              </div>
              <CardContent className="p-4 md:p-6 space-y-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg md:text-xl font-[family-name:var(--font-cinzel)] font-bold">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </CardContent>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            asChild
            size="lg"
            className="group bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
          >
            <Link href="/services">
              {t("view_all_services")}
              <ChevronRight className={`ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform ${dir === 'rtl' ? 'rotate-180' : ''}`} />
            </Link>

          </Button>
        </div>
      </section>

      <SectionDivider />

      <section ref={addToRefs} className="container mx-auto px-4 py-20 opacity-0">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {[
            { value: "500+", label: t("cases_handled") },
            { value: "15+", label: t("years_experience") },
            { value: "98%", label: t("recovery_rate") },
            { value: "24/7", label: t("support_available") },
          ].map((stat, index) => (

            <Card
              key={stat.label}
              className="group border-2 border-border hover:border-primary/50 bg-card/30 backdrop-blur-sm transition-all duration-500 hover:shadow-lg hover:shadow-primary/20 hover:scale-105"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <CardContent className="p-6 md:p-8 text-center space-y-2">
                <div className="text-3xl sm:text-4xl md:text-5xl font-[family-name:var(--font-cinzel)] font-bold text-primary group-hover:scale-110 transition-transform duration-300 inline-block">
                  {stat.value}
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <SectionDivider />

      <section ref={addToRefs} className="container mx-auto px-4 py-20 opacity-0">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-[family-name:var(--font-cinzel)] font-bold text-balance">
            {t("grounded_in_faith")}
          </h2>

          <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
            <p>
              {t("faith_desc_1")}
            </p>

            <p>
              {t("faith_desc_2")}
            </p>

            <blockquote className="border-l-4 border-primary pl-4 md:pl-6 italic text-foreground/80 my-8">
              {t("faith_quote")}
              <br />
              <span className="text-sm text-primary">{t("faith_surah")}</span>
            </blockquote>

          </div>
        </div>
      </section>

      <SectionDivider />

      <section ref={addToRefs} className="container mx-auto px-4 py-20 opacity-0">
        <Card className="border-2 border-primary/30 bg-gradient-to-br from-card/80 to-primary/5 backdrop-blur-sm overflow-hidden relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(209,213,219,0.1),transparent)]" />

          <CardContent className="relative z-10 p-8 md:p-12 text-center space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-[family-name:var(--font-cinzel)] font-bold text-balance">
              {t("need_guidance")}
            </h2>

            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {t("guidance_desc")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                asChild
                size="lg"
                className="group bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
              >
                <Link href="/contact">
                  {t("contact_us")}
                  <ChevronRight className={`ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform ${dir === 'rtl' ? 'rotate-180' : ''}`} />
                </Link>

              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-primary/50 hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:scale-105 bg-transparent"
              >
                <Link href="/research">{t("explore_research")}</Link>

              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      <Footer />
      <ScrollToTop />
      <WhatsAppButton />
    </div>
  )
}
