"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { SectionDivider } from "@/components/section-divider"
import {
  Shield,
  BookOpen,
  Users,
  Phone,
  Video,
  Home,
  GraduationCap,
  HeartHandshake,
  FileText,
  ChevronRight,
  CheckCircle,
} from "lucide-react"
import { ORG_CONFIG } from "@/lib/constants"
import { useLanguage } from "@/context/LanguageContext"


export function ServicesClientPage() {
  const { t, dir } = useLanguage()
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
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <Image
            src="/islamic-healing-hands-holding-glowing-light-spirit.jpg"
            alt="Services Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-[family-name:var(--font-cinzel)] font-bold text-balance animate-fade-in-up">
            {t("services_title")}
          </h1>
          <p className="text-xl text-muted-foreground animate-fade-in-up [animation-delay:200ms] opacity-0 [animation-fill-mode:forwards]">
            {t("services_subtitle")}
          </p>
        </div>
      </section>


      <SectionDivider />

      {/* Core Services */}
      <section ref={addToRefs} className="container mx-auto px-4 py-20 opacity-0">
        <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-cinzel)] font-bold text-center text-balance mb-16">
          {t("core_services")}
        </h2>

        <div className="space-y-12">
          {/* Service 1 */}
          <Card className="group border-2 border-border hover:border-primary/50 bg-card/30 backdrop-blur-sm transition-all duration-500 hover:shadow-lg hover:shadow-primary/20 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto">
                <Image
                  src="/muslim-person-in-consultation-spiritual-counseling.jpg"
                  alt="Spiritual Assessment"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <CardContent className="p-8 lg:p-12 space-y-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-3xl font-[family-name:var(--font-cinzel)] font-bold">
                  {t("service_assessment_detailed")}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t("service_assessment_detailed_desc")}
                </p>
                <ul className="space-y-3">
                  {[
                    t("assessment_item_1"),
                    t("assessment_item_2"),
                    t("assessment_item_3"),
                    t("assessment_item_4"),
                    t("assessment_item_5"),
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </div>
          </Card>

          {/* Service 2 */}
          <Card className="group border-2 border-border hover:border-primary/50 bg-card/30 backdrop-blur-sm transition-all duration-500 hover:shadow-lg hover:shadow-primary/20 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto order-2 lg:order-1">
                <Image
                  src="/open-quran-with-soft-light-islamic-healing-session.jpg"
                  alt="Ruqyah Treatment"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <CardContent className="p-8 lg:p-12 space-y-6 order-1 lg:order-2">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-3xl font-[family-name:var(--font-cinzel)] font-bold">{t("service_ruqyah_detailed")}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t("service_ruqyah_detailed_desc")}
                </p>
                <ul className="space-y-3">
                  {[
                    t("ruqyah_item_1"),
                    t("ruqyah_item_2"),
                    t("ruqyah_item_3"),
                    t("ruqyah_item_4"),
                    t("ruqyah_item_5"),
                    t("ruqyah_item_6"),
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </div>
          </Card>

          {/* Service 3 */}
          <Card className="group border-2 border-border hover:border-primary/50 bg-card/30 backdrop-blur-sm transition-all duration-500 hover:shadow-lg hover:shadow-primary/20 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto">
                <Image
                  src="/muslim-family-support-group-counseling-peaceful-is.jpg"
                  alt="Family Support"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <CardContent className="p-8 lg:p-12 space-y-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-3xl font-[family-name:var(--font-cinzel)] font-bold">
                  {t("service_family_detailed")}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t("service_family_detailed_desc")}
                </p>
                <ul className="space-y-3">
                  {[
                    t("family_item_1"),
                    t("family_item_2"),
                    t("family_item_3"),
                    t("family_item_4"),
                    t("family_item_5"),
                    t("family_item_6"),
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      <SectionDivider />

      {/* Paranormal Investigation & Site Analysis Services */}
      <section ref={addToRefs} className="container mx-auto px-4 py-20 opacity-0">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-cinzel)] font-bold text-balance">
              {t("paranormal_investigation_title")}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t("paranormal_investigation_desc")}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card className="group border-2 border-border hover:border-primary/50 bg-card/30 backdrop-blur-sm transition-all duration-500 hover:shadow-xl hover:shadow-primary/20">
              <CardContent className="p-8 space-y-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-[family-name:var(--font-cinzel)] font-bold">{t("residential_investigation")}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t("residential_investigation_desc")}
                </p>
                <ul className="space-y-3">
                  {[
                    t("res_investigation_item_1"),
                    t("res_investigation_item_2"),
                    t("res_investigation_item_3"),
                    t("res_investigation_item_4"),
                    t("res_investigation_item_5"),
                    t("res_investigation_item_6"),
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="group border-2 border-border hover:border-primary/50 bg-card/30 backdrop-blur-sm transition-all duration-500 hover:shadow-xl hover:shadow-primary/20">
              <CardContent className="p-8 space-y-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-[family-name:var(--font-cinzel)] font-bold">
                  {t("commercial_investigation")}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t("commercial_investigation_desc")}
                </p>
                <ul className="space-y-3">
                  {[
                    t("com_investigation_item_1"),
                    t("com_investigation_item_2"),
                    t("com_investigation_item_3"),
                    t("com_investigation_item_4"),
                    t("com_investigation_item_5"),
                    t("com_investigation_item_6"),
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="border-2 border-primary/30 bg-gradient-to-br from-card/80 to-primary/5 backdrop-blur-sm">
            <CardContent className="p-8 lg:p-12 space-y-8">
              <h3 className="text-3xl font-[family-name:var(--font-cinzel)] font-bold text-center">
                Our Investigation Process
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    step: "1",
                    title: t("inv_step_1_title"),
                    description: t("inv_step_1_desc"),
                  },
                  {
                    step: "2",
                    title: t("inv_step_2_title"),
                    description: t("inv_step_2_desc"),
                  },
                  {
                    step: "3",
                    title: t("inv_step_3_title"),
                    description: t("inv_step_3_desc"),
                  },
                  {
                    step: "4",
                    title: t("inv_step_4_title"),
                    description: t("inv_step_4_desc"),
                  },
                ].map((item, index) => (
                  <div
                    key={item.step}
                    className="relative space-y-4 p-6 rounded-lg bg-background/50 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:-translate-y-2"
                    style={{
                      animationDelay: `${index * 100}ms`,
                    }}
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-2xl font-bold text-primary font-[family-name:var(--font-cinzel)]">
                      {item.step}
                    </div>
                    <h4 className="text-lg font-[family-name:var(--font-cinzel)] font-bold">{item.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-6 mt-12 pt-12 border-t border-border/50">
                <h4 className="text-2xl font-[family-name:var(--font-cinzel)] font-bold text-center">
                  {t("why_hire_title")}
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      title: t("why_item_1_title"),
                      description: t("why_item_1_desc"),
                    },
                    {
                      title: t("why_item_2_title"),
                      description: t("why_item_2_desc"),
                    },
                    {
                      title: t("why_item_3_title"),
                      description: t("why_item_3_desc"),
                    },
                    {
                      title: t("why_item_4_title"),
                      description: t("why_item_4_desc"),
                    },
                    {
                      title: t("why_item_5_title"),
                      description: t("why_item_5_desc"),
                    },
                    {
                      title: t("why_item_6_title"),
                      description: t("why_item_6_desc"),
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex gap-4 p-4 rounded-lg bg-background/30 border border-border/30 hover:border-primary/30 transition-all duration-300"
                    >
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div className="space-y-1">
                        <h5 className="font-bold text-foreground">{item.title}</h5>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center pt-8">
                <Button asChild size="lg" className="group">
                  <Link href="/cases">
                    View Our Case Studies
                    <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <SectionDivider />

      {/* Service Formats */}
      <section ref={addToRefs} className="container mx-auto px-4 py-20 opacity-0">
        <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-cinzel)] font-bold text-center text-balance mb-16">
          {t("service_formats_title")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Home,
              title: t("format_inperson_title"),
              description: t("format_inperson_desc"),
              features: [t("format_inperson_f1"), t("format_inperson_f2"), t("format_inperson_f3")],
            },
            {
              icon: Video,
              title: t("format_online_title"),
              description: t("format_online_desc"),
              features: [t("format_online_f1"), t("format_online_f2"), t("format_online_f3")],
            },
            {
              icon: Phone,
              title: t("format_emergency_title"),
              description: t("format_emergency_desc"),
              features: [t("format_emergency_f1"), t("format_emergency_f2"), t("format_emergency_f3")],
            },
          ].map((format, index) => (
            <Card
              key={index}
              className="group border-2 border-border hover:border-primary/50 bg-card/30 backdrop-blur-sm transition-all duration-500 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-3"
              style={{
                animationDelay: `${index * 150}ms`,
              }}
            >
              <CardContent className="p-8 space-y-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300 group-hover:scale-110 transform">
                  <format.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-[family-name:var(--font-cinzel)] font-bold">{format.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{format.description}</p>
                <ul className="space-y-2">
                  {format.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Card>
          ))}
        </div>
      </section>

      <SectionDivider />

      {/* Additional Services */}
      <section ref={addToRefs} className="container mx-auto px-4 py-20 opacity-0">
        <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-cinzel)] font-bold text-center text-balance mb-16">
          {t("additional_services_title")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[
            {
              icon: GraduationCap,
              title: t("add_service_education_title"),
              description: t("add_service_education_desc"),
            },
            {
              icon: HeartHandshake,
              title: t("add_service_workshops_title"),
              description: t("add_service_workshops_desc"),
            },
            {
              icon: FileText,
              title: t("add_service_consultations_title"),
              description: t("add_service_consultations_desc"),
            },
            {
              icon: BookOpen,
              title: t("add_service_training_title"),
              description: t("add_service_training_desc"),
            },
          ].map((service, index) => (
            <Card
              key={index}
              className="group border-2 border-border hover:border-primary/50 bg-card/30 backdrop-blur-sm transition-all duration-500 hover:shadow-lg hover:shadow-primary/20 hover:translate-x-2"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <CardContent className="p-8 space-y-4">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300 group-hover:scale-110 transform">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-2xl font-[family-name:var(--font-cinzel)] font-bold">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <SectionDivider />

      {/* What to Expect */}
      <section ref={addToRefs} className="container mx-auto px-4 py-20 opacity-0">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-4xl font-[family-name:var(--font-cinzel)] font-bold text-center text-balance">
            {t("expect_title")}
          </h2>

          <Card className="border-2 border-primary/30 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-8 lg:p-12 space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-[family-name:var(--font-cinzel)] font-bold text-primary">
                  {t("expect_before_title")}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t("expect_before_desc")}
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-[family-name:var(--font-cinzel)] font-bold text-primary">
                  {t("expect_during_title")}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t("expect_during_desc")}
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-[family-name:var(--font-cinzel)] font-bold text-primary">
                  {t("expect_after_title")}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t("expect_after_desc")}
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-[family-name:var(--font-cinzel)] font-bold text-primary">
                  {t("expect_ethics_title")}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t("expect_ethics_desc")}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <SectionDivider />

      {/* CTA */}
      <section ref={addToRefs} className="container mx-auto px-4 py-20 opacity-0">
        <Card className="border-2 border-primary/30 bg-gradient-to-br from-card/80 to-primary/5 backdrop-blur-sm overflow-hidden relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(209,213,219,0.1),transparent)]" />

          <CardContent className="relative z-10 p-12 text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-cinzel)] font-bold text-balance">
              {t("cta_ready_title")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {t("cta_ready_desc")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                asChild
                size="lg"
                className="group bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
              >
                <Link href="/contact">
                  {t("cta_schedule")}
                  <ChevronRight className={`ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform ${dir === 'rtl' ? 'rotate-180' : ''}`} />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-primary/50 hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:scale-105 bg-transparent"
              >
                <Link href="/resources">{t("cta_view_resources")}</Link>
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

export default ServicesClientPage
