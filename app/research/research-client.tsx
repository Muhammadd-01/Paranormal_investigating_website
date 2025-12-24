"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { SectionDivider } from "@/components/section-divider"
import { BookOpen, Eye, Zap, Moon, Flame, Brain, ScrollText, Users2 } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"


export default function ResearchClientPage() {
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
        <div className="absolute top-0 right-0 w-2/3 h-full opacity-10">
          <Image
            src="/ancient-islamic-manuscripts-scholarly-research-boo.jpg"
            alt="Research Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-[family-name:var(--font-cinzel)] font-bold text-balance animate-fade-in-up">
            {t("research_title")}
          </h1>
          <p className="text-xl text-muted-foreground animate-fade-in-up [animation-delay:200ms] opacity-0 [animation-fill-mode:forwards]">
            {t("research_subtitle")}
          </p>
        </div>
      </section>


      <SectionDivider />

      {/* Research Areas */}
      <section ref={addToRefs} className="container mx-auto px-4 py-20 opacity-0">
        <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-cinzel)] font-bold text-center text-balance mb-16">
          {t("res_area_title")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Moon,
              title: t("res_area_jinn_title"),
              description: t("res_area_jinn_desc"),
            },
            {
              icon: Zap,
              title: t("res_area_sihr_title"),
              description: t("res_area_sihr_desc"),
            },
            {
              icon: Eye,
              title: t("res_area_eye_title"),
              description: t("res_area_eye_desc"),
            },
            {
              icon: Flame,
              title: t("res_area_poss_title"),
              description: t("res_area_poss_desc"),
            },
            {
              icon: Brain,
              title: t("res_area_psy_title"),
              description: t("res_area_psy_desc"),
            },
            {
              icon: BookOpen,
              title: t("res_area_ruq_title"),
              description: t("res_area_ruq_desc"),
            },
            {
              icon: ScrollText,
              title: t("res_area_prop_title"),
              description: t("res_area_prop_desc"),
            },
            {
              icon: Users2,
              title: t("res_area_case_title"),
              description: t("res_area_case_desc"),
            },
          ].map((area, index) => (
            <Card
              key={index}
              className="group border-2 border-border hover:border-primary/50 bg-card/30 backdrop-blur-sm transition-all duration-500 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-3"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <CardContent className="p-6 text-center space-y-4">
                <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300 group-hover:scale-110 transform">
                  <area.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-[family-name:var(--font-cinzel)] font-bold">{area.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{area.description}</p>
              </CardContent>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Card>
          ))}
        </div>
      </section>

      <SectionDivider />

      {/* Detailed Research: Jinn */}
      <section ref={addToRefs} className="container mx-auto px-4 py-20 opacity-0">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-[family-name:var(--font-cinzel)] font-bold text-balance">
              {t("jinn_intro_title")}
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t("jinn_intro_desc")}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="border-2 border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-500">
              <CardContent className="p-8 space-y-4">
                <h3 className="text-2xl font-[family-name:var(--font-cinzel)] font-bold text-primary">
                  {t("jinn_creation_title")}
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="leading-relaxed">• {t("jinn_creation_l1")}</li>
                  <li className="leading-relaxed">
                    • {t("jinn_creation_l2")}
                  </li>
                  <li className="leading-relaxed">
                    • {t("jinn_creation_l3")}
                  </li>
                  <li className="leading-relaxed">• {t("jinn_creation_l4")}</li>
                  <li className="leading-relaxed">• {t("jinn_creation_l5")}</li>
                  <li className="leading-relaxed">
                    • {t("jinn_creation_l6")}
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-500">
              <CardContent className="p-8 space-y-4">
                <h3 className="text-2xl font-[family-name:var(--font-cinzel)] font-bold text-primary">{t("jinn_types_title")}</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="leading-relaxed">
                    <strong className="text-foreground">{t("jinn_type_1_label")}</strong> {t("jinn_type_1_text")}
                  </li>
                  <li className="leading-relaxed">
                    <strong className="text-foreground">{t("jinn_type_2_label")}</strong> {t("jinn_type_2_text")}
                  </li>
                  <li className="leading-relaxed">
                    <strong className="text-foreground">{t("jinn_type_3_label")}</strong> {t("jinn_type_3_text")}
                  </li>
                  <li className="leading-relaxed">
                    <strong className="text-foreground">{t("jinn_type_4_label")}</strong> {t("jinn_type_4_text")}
                  </li>
                  <li className="leading-relaxed">
                    <strong className="text-foreground">{t("jinn_type_5_label")}</strong> {t("jinn_type_5_text")}
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-500">
              <CardContent className="p-8 space-y-4">
                <h3 className="text-2xl font-[family-name:var(--font-cinzel)] font-bold text-primary">
                  {t("jinn_ability_title")}
                </h3>
                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <p className="font-semibold text-foreground mb-2">{t("jinn_can_title")}</p>
                    <ul className="space-y-2">
                      <li>• {t("jinn_can_l1")}</li>
                      <li>• {t("jinn_can_l2")}</li>
                      <li>• {t("jinn_can_l3")}</li>
                      <li>• {t("jinn_can_l4")}</li>
                      <li>• {t("jinn_can_l5")}</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-2">{t("jinn_cant_title")}</p>
                    <ul className="space-y-2">
                      <li>• {t("jinn_cant_l1")}</li>
                      <li>• {t("jinn_cant_l2")}</li>
                      <li>• {t("jinn_cant_l3")}</li>
                      <li>• {t("jinn_cant_l4")}</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-500">
              <CardContent className="p-8 space-y-4">
                <h3 className="text-2xl font-[family-name:var(--font-cinzel)] font-bold text-primary">
                  {t("jinn_quran_title")}
                </h3>
                <div className="space-y-4">
                  <blockquote className="border-l-4 border-primary pl-4 italic text-foreground/90">
                    &quot;{t("jinn_quran_1_text")}&quot;
                    <p className="text-sm text-primary mt-2">— {t("jinn_quran_1_src")}</p>
                  </blockquote>
                  <blockquote className="border-l-4 border-primary pl-4 italic text-foreground/90">
                    &quot;{t("jinn_quran_2_text")}&quot;
                    <p className="text-sm text-primary mt-2">— {t("jinn_quran_2_src")}</p>
                  </blockquote>
                  <blockquote className="border-l-4 border-primary pl-4 italic text-foreground/90">
                    &quot;{t("jinn_quran_3_text")}&quot;
                    <p className="text-sm text-primary mt-2">— {t("jinn_quran_3_src")}</p>
                  </blockquote>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Sihr (Magic) Research */}
      <section ref={addToRefs} className="container mx-auto px-4 py-20 opacity-0">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-[family-name:var(--font-cinzel)] font-bold text-balance">
              {t("sihr_intro_title")}
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t("sihr_intro_desc")}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="border-2 border-primary/30 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8 space-y-6">
                <h3 className="text-2xl font-[family-name:var(--font-cinzel)] font-bold text-primary">
                  {t("sihr_def_title")}
                </h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    {t("sihr_def_text")}
                  </p>
                  <blockquote className="border-l-4 border-primary pl-4 italic text-foreground/90">
                    &quot;{t("sihr_def_quote")}&quot;
                    <p className="text-sm text-primary mt-2">— {t("sihr_def_quote_src")}</p>
                  </blockquote>
                  <p>
                    {t("sihr_def_hadith")}
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/30 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8 space-y-6">
                <h3 className="text-2xl font-[family-name:var(--font-cinzel)] font-bold text-primary">{t("sihr_types_title")}</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="leading-relaxed">
                    <strong className="text-foreground">{t("sihr_type_1_label")}</strong> {t("sihr_type_1_text")}
                  </li>
                  <li className="leading-relaxed">
                    <strong className="text-foreground">{t("sihr_type_2_label")}</strong> {t("sihr_type_2_text")}
                  </li>
                  <li className="leading-relaxed">
                    <strong className="text-foreground">{t("sihr_type_3_label")}</strong> {t("sihr_type_3_text")}
                  </li>
                  <li className="leading-relaxed">
                    <strong className="text-foreground">{t("sihr_type_4_label")}</strong> {t("sihr_type_4_text")}
                  </li>
                  <li className="leading-relaxed">
                    <strong className="text-foreground">{t("sihr_type_5_label")}</strong> {t("sihr_type_5_text")}
                  </li>
                  <li className="leading-relaxed">
                    <strong className="text-foreground">{t("sihr_type_6_label")}</strong> {t("sihr_type_6_text")}
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/30 bg-card/50 backdrop-blur-sm lg:col-span-2">
              <CardContent className="p-8 space-y-6">
                <h3 className="text-2xl font-[family-name:var(--font-cinzel)] font-bold text-primary">
                  {t("sihr_symp_title")}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-muted-foreground">
                  <div>
                    <p className="font-semibold text-foreground mb-3">{t("sihr_symp_phys_title")}</p>
                    <ul className="space-y-2 text-sm">
                      <li>• {t("sihr_symp_phys_l1")}</li>
                      <li>• {t("sihr_symp_phys_l2")}</li>
                      <li>• {t("sihr_symp_phys_l3")}</li>
                      <li>• {t("sihr_symp_phys_l4")}</li>
                      <li>• {t("sihr_symp_phys_l5")}</li>
                      <li>• {t("sihr_symp_phys_l6")}</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-3">{t("sihr_symp_psych_title")}</p>
                    <ul className="space-y-2 text-sm">
                      <li>• {t("sihr_symp_psych_l1")}</li>
                      <li>• {t("sihr_symp_psych_l2")}</li>
                      <li>• {t("sihr_symp_psych_l3")}</li>
                      <li>• {t("sihr_symp_psych_l4")}</li>
                      <li>• {t("sihr_symp_psych_l5")}</li>
                      <li>• {t("sihr_symp_psych_l6")}</li>
                    </ul>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-sm italic text-foreground/70">
                      {t("sihr_symp_note")}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Evil Eye Research */}
      <section ref={addToRefs} className="container mx-auto px-4 py-20 opacity-0">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-[family-name:var(--font-cinzel)] font-bold text-balance">
              {t("eye_intro_title")}
            </h2>
          </div>

          <Card className="border-2 border-primary/30 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-8 lg:p-12 space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-[family-name:var(--font-cinzel)] font-bold text-primary">
                  {t("eye_def_title")}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t("eye_def_text")}
                </p>
                <blockquote className="border-l-4 border-primary pl-6 italic text-foreground/90 my-6">
                  &quot;{t("eye_def_quote")}&quot;
                  <p className="text-sm text-primary mt-2">— {t("eye_def_quote_src")}</p>
                </blockquote>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-[family-name:var(--font-cinzel)] font-bold text-primary">{t("eye_how_title")}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t("eye_how_text")}
                </p>
                <ul className="space-y-2 text-muted-foreground ml-6">
                  <li>• {t("eye_how_l1")}</li>
                  <li>• {t("eye_how_l2")}</li>
                  <li>• {t("eye_how_l3")}</li>
                  <li>• {t("eye_how_l4")}</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-[family-name:var(--font-cinzel)] font-bold text-primary">
                  {t("eye_symp_title")}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-muted-foreground">
                  <ul className="space-y-2 text-sm">
                    <li>• {t("eye_symp_l1")}</li>
                    <li>• {t("eye_symp_l2")}</li>
                    <li>• {t("eye_symp_l3")}</li>
                    <li>• {t("eye_symp_l4")}</li>
                  </ul>
                  <ul className="space-y-2 text-sm">
                    <li>• {t("eye_symp_l5")}</li>
                    <li>• {t("eye_symp_l6")}</li>
                    <li>• {t("eye_symp_l7")}</li>
                    <li>• {t("eye_symp_l8")}</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-[family-name:var(--font-cinzel)] font-bold text-primary">
                  {t("eye_prot_title")}
                </h3>
                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <p className="font-semibold text-foreground mb-3">{t("eye_prev_title")}</p>
                    <ul className="space-y-2 text-sm">
                      <li>• {t("eye_prev_l1")}</li>
                      <li>• {t("eye_prev_l2")}</li>
                      <li>• {t("eye_prev_l3")}</li>
                      <li>• {t("eye_prev_l4")}</li>
                      <li>• {t("eye_prev_l5")}</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-3">{t("eye_treat_title")}</p>
                    <ul className="space-y-2 text-sm">
                      <li>• {t("eye_treat_l1")}</li>
                      <li>
                        • {t("eye_treat_l2")}
                      </li>
                      <li>• {t("eye_treat_l3")}</li>
                      <li>• {t("eye_treat_l4")}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <SectionDivider />

      {/* Research Methodology */}
      <section ref={addToRefs} className="container mx-auto px-4 py-20 opacity-0">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-4xl font-[family-name:var(--font-cinzel)] font-bold text-center text-balance">
            {t("meth_title")}
          </h2>

          <Card className="border-2 border-border bg-card/50 backdrop-blur-sm">
            <CardContent className="p-8 space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                {t("meth_desc")}
              </p>
              <ol className="space-y-4 text-muted-foreground">
                <li className="leading-relaxed">
                  <strong className="text-foreground">1. {t("meth_l1_label")}</strong> {t("meth_l1_text")}
                </li>
                <li className="leading-relaxed">
                  <strong className="text-foreground">2. {t("meth_l2_label")}</strong> {t("meth_l2_text")}
                </li>
                <li className="leading-relaxed">
                  <strong className="text-foreground">3. {t("meth_l3_label")}</strong> {t("meth_l3_text")}
                </li>
                <li className="leading-relaxed">
                  <strong className="text-foreground">4. {t("meth_l4_label")}</strong> {t("meth_l4_text")}
                </li>
                <li className="leading-relaxed">
                  <strong className="text-foreground">5. {t("meth_l5_label")}</strong> {t("meth_l5_text")}
                </li>
                <li className="leading-relaxed">
                  <strong className="text-foreground">6. {t("meth_l6_label")}</strong> {t("meth_l6_text")}
                </li>
              </ol>
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
