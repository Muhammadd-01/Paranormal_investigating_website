"use client"

import { useState, useEffect, useRef } from "react"
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
  MapPin,
  Calendar,
  Clock,
  CheckCircle,
  AlertCircle,
  FileText,
  Shield,
  Home,
  Building2,
  ChevronRight,
  Filter,
} from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"

export function CasesClientPage() {
  const { t } = useLanguage()
  const [activeFilter, setActiveFilter] = useState("all")

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

  const cases = [
    {
      id: 1,
      title: t("case_1_title"),
      category: "residential",
      location: t("case_1_loc"),
      duration: t("case_1_dur"),
      date: t("case_1_date"),
      image: "/haunted-house-with-dark-atmosphere-paranormal-inves.jpg",
      symptoms: [
        t("case_1_symp_1"),
        t("case_1_symp_2"),
        t("case_1_symp_3"),
        t("case_1_symp_4"),
        t("case_1_symp_5"),
      ],
      investigation: [
        t("case_1_inv_1"),
        t("case_1_inv_2"),
        t("case_1_inv_3"),
        t("case_1_inv_4"),
        t("case_1_inv_5"),
      ],
      solution: [
        t("case_1_sol_1"),
        t("case_1_sol_2"),
        t("case_1_sol_3"),
        t("case_1_sol_4"),
        t("case_1_sol_5"),
      ],
      outcome: t("case_1_out"),
      status: t("status_resolved"),
    },
    {
      id: 2,
      title: t("case_2_title"),
      category: "commercial",
      location: t("case_2_loc"),
      duration: t("case_2_dur"),
      date: t("case_2_date"),
      image: "/old-office-building-dark-mysterious-atmosphere-para.jpg",
      symptoms: [
        t("case_2_symp_1"),
        t("case_2_symp_2"),
        t("case_2_symp_3"),
        t("case_2_symp_4"),
        t("case_2_symp_5"),
      ],
      investigation: [
        t("case_2_inv_1"),
        t("case_2_inv_2"),
        t("case_2_inv_3"),
        t("case_2_inv_4"),
        t("case_2_inv_5"),
      ],
      solution: [
        t("case_2_sol_1"),
        t("case_2_sol_2"),
        t("case_2_sol_3"),
        t("case_2_sol_4"),
        t("case_2_sol_5"),
      ],
      outcome: t("case_2_out"),
      status: t("status_resolved"),
    },
    {
      id: 3,
      title: t("case_3_title"),
      category: "sihr",
      location: t("case_3_loc"),
      duration: t("case_3_dur"),
      date: t("case_3_date"),
      image: "/spiritual-consultation-room-peaceful-islamic-setting.jpg",
      symptoms: [
        t("case_3_symp_1"),
        t("case_3_symp_2"),
        t("case_3_symp_3"),
        t("case_3_symp_4"),
        t("case_3_symp_5"),
      ],
      investigation: [
        t("case_3_inv_1"),
        t("case_3_inv_2"),
        t("case_3_inv_3"),
        t("case_3_inv_4"),
        t("case_3_inv_5"),
      ],
      solution: [
        t("case_3_sol_1"),
        t("case_3_sol_2"),
        t("case_3_sol_3"),
        t("case_3_sol_4"),
        t("case_3_sol_5"),
        t("case_3_sol_6"),
      ],
      outcome: t("case_3_out"),
      status: t("status_resolved"),
    },
    {
      id: 4,
      title: t("case_4_title"),
      category: "location",
      location: t("case_4_loc"),
      duration: t("case_4_dur"),
      date: t("case_4_date"),
      image: "/historic-building-with-islamic-architecture-mysterio.jpg",
      symptoms: [
        t("case_4_symp_1"),
        t("case_4_symp_2"),
        t("case_4_symp_3"),
        t("case_4_symp_4"),
        t("case_4_symp_5"),
      ],
      investigation: [
        t("case_4_inv_1"),
        t("case_4_inv_2"),
        t("case_4_inv_3"),
        t("case_4_inv_4"),
        t("case_4_inv_5"),
      ],
      solution: [
        t("case_4_sol_1"),
        t("case_4_sol_2"),
        t("case_4_sol_3"),
        t("case_4_sol_4"),
        t("case_4_sol_5"),
        t("case_4_sol_6"),
      ],
      outcome: t("case_4_out"),
      status: t("status_resolved"),
    },
    {
      id: 5,
      title: t("case_5_title"),
      category: "evil-eye",
      location: t("case_5_loc"),
      duration: t("case_5_dur"),
      date: t("case_5_date"),
      image: "/small-business-office-with-islamic-decor-peaceful-pr.jpg",
      symptoms: [
        t("case_5_symp_1"),
        t("case_5_symp_2"),
        t("case_5_symp_3"),
        t("case_5_symp_4"),
        t("case_5_symp_5"),
      ],
      investigation: [
        t("case_5_inv_1"),
        t("case_5_inv_2"),
        t("case_5_inv_3"),
        t("case_5_inv_4"),
        t("case_5_inv_5"),
      ],
      solution: [
        t("case_5_sol_1"),
        t("case_5_sol_2"),
        t("case_5_sol_3"),
        t("case_5_sol_4"),
        t("case_5_sol_5"),
        t("case_5_sol_6"),
      ],
      outcome: t("case_5_out"),
      status: t("status_resolved"),
    },
    {
      id: 6,
      title: t("case_6_title"),
      category: "possession",
      location: t("case_6_loc"),
      duration: t("case_6_dur"),
      date: t("case_6_date"),
      image: "/peaceful-islamic-prayer-room-spiritual-healing-atmos.jpg",
      symptoms: [
        t("case_6_symp_1"),
        t("case_6_symp_2"),
        t("case_6_symp_3"),
        t("case_6_symp_4"),
        t("case_6_symp_5"),
      ],
      investigation: [
        t("case_6_inv_1"),
        t("case_6_inv_2"),
        t("case_6_inv_3"),
        t("case_6_inv_4"),
        t("case_6_inv_5"),
      ],
      solution: [
        t("case_6_sol_1"),
        t("case_6_sol_2"),
        t("case_6_sol_3"),
        t("case_6_sol_4"),
        t("case_6_sol_5"),
        t("case_6_sol_6"),
      ],
      outcome: t("case_6_out"),
      status: t("status_resolved"),
    },
  ]

  const categories = [
    { id: "all", label: t("cases_cat_all"), icon: FileText },
    { id: "residential", label: t("cases_cat_res"), icon: Home },
    { id: "commercial", label: t("cases_cat_com"), icon: Building2 },
    { id: "possession", label: t("cases_cat_poss"), icon: AlertCircle },
    { id: "sihr", label: t("cases_cat_sihr"), icon: Shield },
    { id: "evil-eye", label: t("cases_cat_eye"), icon: AlertCircle },
    { id: "location", label: t("cases_cat_loc"), icon: MapPin },
  ]

  const filteredCases = activeFilter === "all" ? cases : cases.filter((c) => c.category === activeFilter)

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 container mx-auto px-4 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <Image
            src="/islamic-books-and-documents-investigation-research-.jpg"
            alt="Case Studies Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-[family-name:var(--font-cinzel)] font-bold text-balance animate-fade-in-up">
            {t("cases_title")}
          </h1>
          <p className="text-xl text-muted-foreground animate-fade-in-up [animation-delay:200ms] opacity-0 [animation-fill-mode:forwards] text-pretty">
            {t("cases_subtitle")}
          </p>
          <p className="text-sm text-muted-foreground/80 animate-fade-in-up [animation-delay:400ms] opacity-0 [animation-fill-mode:forwards] max-w-2xl mx-auto">
            All cases presented with permission and identifying details anonymized to protect client privacy
          </p>
        </div>

      </section>

      <SectionDivider />

      {/* Statistics */}
      <section ref={addToRefs} className="container mx-auto px-4 py-12 opacity-0">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            { number: "500+", label: t("cases_stat_resolved") },
            { number: "95%", label: t("cases_stat_rate") },
            { number: "15+", label: t("cases_stat_exp") },
            { number: "24/7", label: t("cases_stat_support") },
          ].map((stat, index) => (
            <Card
              key={stat.label}
              className="border-2 border-primary/30 bg-gradient-to-br from-card/80 to-primary/10 backdrop-blur-sm hover:shadow-lg hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-2"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <CardContent className="p-6 text-center space-y-2">
                <p className="text-4xl md:text-5xl font-[family-name:var(--font-cinzel)] font-bold text-primary">
                  {stat.number}
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <SectionDivider />

      {/* Filter */}
      <section ref={addToRefs} className="container mx-auto px-4 py-8 opacity-0">
        <div className="flex items-center gap-3 mb-6">
          <Filter className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-[family-name:var(--font-cinzel)] font-bold">{t("cases_filter_title")}</h2>
        </div>
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeFilter === category.id ? "default" : "outline"}
              onClick={() => setActiveFilter(category.id)}
              className="group transition-all duration-300"
            >
              <category.icon className="h-4 w-4 mr-2" />
              {category.label}
            </Button>
          ))}
        </div>
      </section>

      {/* Cases Grid */}
      <section ref={addToRefs} className="container mx-auto px-4 py-12 opacity-0">
        <div className="space-y-12">
          {filteredCases.map((caseItem, index) => (
            <Card
              key={caseItem.id}
              className="group border-2 border-border hover:border-primary/50 bg-card/30 backdrop-blur-sm transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 overflow-hidden"
              style={{
                animationDelay: `${index * 150}ms`,
              }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-3">
                {/* Image */}
                <div className="relative h-64 lg:h-auto">
                  <Image
                    src={caseItem.image || "/placeholder.svg"}
                    alt={caseItem.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span
                      className={`px-4 py-2 rounded-full text-sm font-bold backdrop-blur-md ${caseItem.status === "Resolved"
                        ? "bg-green-500/20 text-green-300 border border-green-500/50"
                        : "bg-yellow-500/20 text-yellow-300 border border-yellow-500/50"
                        }`}
                    >
                      {caseItem.status}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <CardContent className="lg:col-span-2 p-8 lg:p-12 space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-2xl md:text-3xl font-[family-name:var(--font-cinzel)] font-bold text-balance group-hover:text-primary transition-colors duration-300">
                      {caseItem.title}
                    </h3>

                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" />
                        {caseItem.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-primary" />
                        {caseItem.duration}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-primary" />
                        {caseItem.date}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-[family-name:var(--font-cinzel)] font-bold text-primary mb-3">
                        {t("label_symptoms")}
                      </h4>
                      <ul className="space-y-2">
                        {caseItem.symptoms.slice(0, 3).map((symptom, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <AlertCircle className="h-4 w-4 text-orange-500 flex-shrink-0 mt-0.5" />
                            {symptom}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-[family-name:var(--font-cinzel)] font-bold text-primary mb-3">
                        {t("label_findings")}
                      </h4>
                      <ul className="space-y-2">
                        {caseItem.investigation.slice(0, 3).map((finding, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <FileText className="h-4 w-4 text-blue-500 flex-shrink-0 mt-0.5" />
                            {finding}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-[family-name:var(--font-cinzel)] font-bold text-primary mb-3">
                        {t("label_treatment")}
                      </h4>
                      <ul className="space-y-2">
                        {caseItem.solution.slice(0, 3).map((solution, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                            {solution}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-border/50">
                      <h4 className="text-lg font-[family-name:var(--font-cinzel)] font-bold text-green-500 mb-2">
                        {t("label_outcome")}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{caseItem.outcome}</p>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <SectionDivider />

      {/* Methodology */}
      <section ref={addToRefs} className="container mx-auto px-4 py-20 opacity-0">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-[family-name:var(--font-cinzel)] font-bold text-center text-balance mb-12">
            {t("cases_meth_title")}
          </h2>

          <Card className="border-2 border-primary/30 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-8 lg:p-12 space-y-8">
              {[
                {
                  title: t("cases_meth_1_title"),
                  description:
                    t("cases_meth_1_desc"),
                },
                {
                  title: t("cases_meth_2_title"),
                  description:
                    t("cases_meth_2_desc"),
                },
                {
                  title: t("cases_meth_3_title"),
                  description:
                    t("cases_meth_3_desc"),
                },
                {
                  title: t("cases_meth_4_title"),
                  description:
                    t("cases_meth_4_desc"),
                },
                {
                  title: t("cases_meth_5_title"),
                  description:
                    t("cases_meth_5_desc"),
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-[family-name:var(--font-cinzel)] font-bold">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
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
              {t("cases_cta_title")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
              {t("cases_cta_desc")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg" className="group">
                <Link href="/contact">
                  {t("cases_btn_schedule")}
                  <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="group bg-transparent">
                <Link href="/services">
                  {t("view_all_services")}
                  <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      <WhatsAppButton />
      <ScrollToTop />
      <Footer />
    </div>
  )
}
