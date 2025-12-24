"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { SectionDivider } from "@/components/section-divider"
import { Shield, Target, Eye, Users, Heart, Star, Anchor, CheckCircle, Globe, BookMarked, GraduationCap } from "lucide-react"
import { ORG_CONFIG } from "@/lib/constants"
import { useLanguage } from "@/context/LanguageContext"


export default function AboutPageClient() {
  const { t } = useLanguage()
  const sectionsRef = useRef<HTMLElement[]>([])

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

      {/* Hero */}
      <section className="relative pt-32 pb-20 container mx-auto px-4 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
          <Image
            src="/islamic-architecture-mosque-intricate-patterns-spi.jpg"
            alt="Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-[family-name:var(--font-cinzel)] font-bold text-balance animate-fade-in-up">
            {t("about_title")} <span className="text-primary">{ORG_CONFIG.name}</span>
          </h1>
          <p className="text-xl text-muted-foreground animate-fade-in-up [animation-delay:200ms] opacity-0 [animation-fill-mode:forwards]">
            {t("about_subtitle")}
          </p>
        </div>
      </section>


      <SectionDivider />

      <section ref={addToRefs} className="container mx-auto px-4 py-20 opacity-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-96 rounded-lg overflow-hidden group">
            <Image
              src="/muslim-scholar-reading-quran-in-library-peaceful-i.jpg"
              alt="Islamic Knowledge"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl font-[family-name:var(--font-cinzel)] font-bold text-balance">
              {t("vision_mission_title")}
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                {t("vision_mission_desc_1")}
              </p>
              <p>
                {t("vision_mission_desc_2")}
              </p>
              <p>
                {t("vision_mission_desc_3")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      <section ref={addToRefs} className="container mx-auto px-4 py-20 opacity-0">
        <h2 className="text-4xl font-[family-name:var(--font-cinzel)] font-bold text-center text-balance mb-16">
          {t("what_we_do")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Users,
              title: t("direct_care"),
              description: t("direct_care_desc"),
            },
            {
              icon: BookMarked,
              title: t("islamic_research"),
              description: t("islamic_research_desc"),
            },
            {
              icon: GraduationCap,
              title: t("edu_training"),
              description: t("edu_training_desc"),
            },
            {
              icon: Heart,
              title: t("family_support_about"),
              description: t("family_support_about_desc"),
            },
            {
              icon: Globe,
              title: t("community_outreach_about"),
              description: t("community_outreach_about_desc"),
            },
            {
              icon: CheckCircle,
              title: t("professional_ethics"),
              description: t("professional_ethics_desc"),
            },
          ].map((item, index) => (
            <Card key={index} className="group border-2 border-border hover:border-primary/50 bg-card/30 backdrop-blur-sm transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 overflow-hidden">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-background transition-colors duration-500 text-primary">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-[family-name:var(--font-cinzel)] font-bold text-balance">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <SectionDivider />

      {/* Islamic Principles */}
      <section ref={addToRefs} className="container mx-auto px-4 py-20 opacity-0">
        <h2 className="text-4xl font-[family-name:var(--font-cinzel)] font-bold text-center text-balance mb-12">
          {t("principles_title")}
        </h2>

        <div className="max-w-4xl mx-auto space-y-6">
          {[
            {
              title: t("principle_1_title"),
              description: t("principle_1_desc"),
            },
            {
              title: t("principle_2_title"),
              description: t("principle_2_desc"),
            },
            {
              title: t("principle_3_title"),
              description: t("principle_3_desc"),
            },
            {
              title: t("principle_4_title"),
              description: t("principle_4_desc"),
            },
            {
              title: t("principle_5_title"),
              description: t("principle_5_desc"),
            },
            {
              title: t("principle_6_title"),
              description: t("principle_6_desc"),
            },
          ].map((principle, index) => (
            <Card
              key={index}
              className="group border-2 border-border hover:border-primary/50 bg-card/30 backdrop-blur-sm transition-all duration-500 hover:shadow-lg hover:shadow-primary/10 hover:translate-x-2"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <CardContent className="p-6 flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-foreground">{principle.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{principle.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <SectionDivider />

      <section ref={addToRefs} className="container mx-auto px-4 py-20 opacity-0">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl font-[family-name:var(--font-cinzel)] font-bold text-center text-balance">
            {t("foundations_title")}
          </h2>
          <p className="text-center text-muted-foreground leading-relaxed">
            {t("foundations_desc")}
          </p>

          <div className="space-y-6">
            <Card className="border-2 border-primary/30 bg-gradient-to-br from-card/80 to-primary/5 backdrop-blur-sm hover:border-primary/50 transition-all duration-500 hover:shadow-lg hover:shadow-primary/20">
              <CardContent className="p-8 space-y-4">
                <blockquote className="text-lg text-foreground/90 italic leading-relaxed">
                  &quot;{t("foundation_1_quote")}&quot;
                </blockquote>
                <p className="text-primary font-semibold">{t("foundation_1_src")}</p>
                <p className="text-sm text-muted-foreground">
                  {t("foundation_1_desc")}
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/30 bg-gradient-to-br from-card/80 to-primary/5 backdrop-blur-sm hover:border-primary/50 transition-all duration-500 hover:shadow-lg hover:shadow-primary/20">
              <CardContent className="p-8 space-y-4">
                <blockquote className="text-lg text-foreground/90 italic leading-relaxed">
                  &quot;{t("foundation_2_quote")}&quot;
                </blockquote>
                <p className="text-primary font-semibold">{t("foundation_2_src")}</p>
                <p className="text-sm text-muted-foreground">
                  {t("foundation_2_desc")}
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/30 bg-gradient-to-br from-card/80 to-primary/5 backdrop-blur-sm hover:border-primary/50 transition-all duration-500 hover:shadow-lg hover:shadow-primary/20">
              <CardContent className="p-8 space-y-4">
                <blockquote className="text-lg text-foreground/90 italic leading-relaxed">
                  &quot;{t("foundation_3_quote")}&quot;
                </blockquote>
                <p className="text-primary font-semibold">{t("foundation_3_src")}</p>
                <p className="text-sm text-muted-foreground">
                  {t("foundation_3_desc")}
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/30 bg-gradient-to-br from-card/80 to-primary/5 backdrop-blur-sm hover:border-primary/50 transition-all duration-500 hover:shadow-lg hover:shadow-primary/20">
              <CardContent className="p-8 space-y-4">
                <blockquote className="text-lg text-foreground/90 italic leading-relaxed">
                  &quot;{t("foundation_4_quote")}&quot;
                </blockquote>
                <p className="text-primary font-semibold">{t("foundation_4_src")}</p>
                <p className="text-sm text-muted-foreground">
                  {t("foundation_4_desc")}
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/30 bg-gradient-to-br from-card/80 to-primary/5 backdrop-blur-sm hover:border-primary/50 transition-all duration-500 hover:shadow-lg hover:shadow-primary/20">
              <CardContent className="p-8 space-y-4">
                <blockquote className="text-lg text-foreground/90 italic leading-relaxed">
                  &quot;{t("foundation_5_quote")}&quot;
                </blockquote>
                <p className="text-primary font-semibold">{t("foundation_5_src")}</p>
                <p className="text-sm text-muted-foreground">
                  {t("foundation_5_desc")}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-in-left">
              <h2 className="text-4xl font-[family-name:var(--font-cinzel)] font-bold text-primary">
                {t("our_story")}
              </h2>
              <p className="text-lg text-foreground/70 leading-relaxed">
                {t("our_story_desc")}
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <p className="text-3xl font-bold text-primary mb-1">15+</p>
                  <p className="text-sm text-foreground/60">{t("years_experience")}</p>
                </div>
                <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <p className="text-3xl font-bold text-primary mb-1">500+</p>
                  <p className="text-sm text-foreground/60">{t("cases_handled")}</p>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden animate-slide-in-right">
              <Image
                src="/islamic-educational-setting-with-books-and-peacef.jpg"
                alt="Our Story"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Values Section */}
      <section className="py-20 px-4 bg-primary/5">
        <div className="container mx-auto">
          <h2 className="text-4xl font-[family-name:var(--font-cinzel)] font-bold text-primary text-center mb-16">
            {t("our_values")}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: t("value_authenticity"),
                desc: t("value_authenticity_desc"),
                icon: Shield,
              },
              {
                title: t("value_compassion"),
                desc: t("value_compassion_desc"),
                icon: Shield, // I'll use Shield for all for now, or Heart if available
              },
              {
                title: t("value_integrity"),
                desc: t("value_integrity_desc"),
                icon: Shield,
              },
            ].map((value, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <value.icon className="w-12 h-12 text-primary mx-auto mb-6" />
                  <h3 className="text-xl font-[family-name:var(--font-cinzel)] font-bold text-primary mb-4">
                    {value.title}
                  </h3>
                  <p className="text-foreground/70">
                    {value.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      <section ref={addToRefs} className="container mx-auto px-4 py-20 opacity-0">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-4xl font-[family-name:var(--font-cinzel)] font-bold text-center text-balance">
            {t("approach_title")}
          </h2>

          <Card className="border-2 border-border bg-card/50 backdrop-blur-sm">
            <CardContent className="p-8 space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-[family-name:var(--font-cinzel)] font-bold text-primary">
                  {t("approach_1_title")}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t("approach_1_desc")}
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-[family-name:var(--font-cinzel)] font-bold text-primary">
                  {t("approach_2_title")}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t("approach_2_desc")}
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-[family-name:var(--font-cinzel)] font-bold text-primary">
                  {t("approach_3_title")}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t("approach_3_desc")}
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-[family-name:var(--font-cinzel)] font-bold text-primary">
                  {t("approach_4_title")}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t("approach_4_desc")}
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-[family-name:var(--font-cinzel)] font-bold text-primary">
                  {t("approach_5_title")}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t("approach_5_desc")}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
      <WhatsAppButton />
    </div>
  )
}
