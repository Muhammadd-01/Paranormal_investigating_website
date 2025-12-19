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

export function CasesClientPage() {
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
      title: "Residential Jinn Possession - Family Home in Suburban Area",
      category: "residential",
      location: "Private Residence, City Suburbs",
      duration: "3 weeks",
      date: "October 2024",
      image: "/haunted-house-with-dark-atmosphere-paranormal-inves.jpg",
      symptoms: [
        "Unexplained sounds and footsteps at night",
        "Objects moving on their own",
        "Family members experiencing nightmares",
        "Youngest child displaying unusual behavior",
        "Extreme negative energy in specific rooms",
      ],
      investigation: [
        "Initial consultation with family revealed 6-month history of phenomena",
        "On-site investigation conducted during evening hours",
        "Islamic environmental analysis detected strong Jinn presence",
        "Diagnostic Ruqyah confirmed possession of youngest child",
        "Previous history of Sihr (black magic) targeting the family",
      ],
      solution: [
        "Performed comprehensive Ruqyah sessions on affected child (5 sessions)",
        "Conducted full home spiritual cleansing with Quranic recitation",
        "Taught family daily protection adhkar and Surah Al-Baqarah routine",
        "Removed buried magical items found in backyard",
        "Implemented ongoing protection protocols",
      ],
      outcome:
        "Complete resolution within 3 weeks. Child returned to normal behavior, all paranormal activity ceased. Family maintains protective practices and reports no recurrence after 6 months of follow-up.",
      status: "Resolved",
    },
    {
      id: 2,
      title: "Commercial Property Investigation - Haunted Office Building",
      category: "commercial",
      location: "Downtown Office Complex",
      duration: "2 months",
      date: "August 2024",
      image: "/old-office-building-dark-mysterious-atmosphere-para.jpg",
      symptoms: [
        "Multiple employees reporting feelings of being watched",
        "Electronic equipment malfunctioning in specific areas",
        "Cold spots and temperature fluctuations",
        "Shadow figures seen by security cameras",
        "High employee turnover in certain departments",
      ],
      investigation: [
        "After-hours investigation conducted over 3 nights",
        "Interviewed 12 employees who experienced phenomena",
        "Review of historical building records revealed previous occult practices",
        "Energy mapping identified hotspots of spiritual activity",
        "Discovered hidden room used for non-Islamic rituals by previous occupants",
      ],
      solution: [
        "Performed comprehensive building-wide spiritual cleansing",
        "Recitation of Quranic verses in all affected areas",
        "Advised structural changes to seal hidden ritual room",
        "Provided employee education on spiritual protection",
        "Established regular maintenance protocols for spiritual hygiene",
      ],
      outcome:
        "All paranormal activity eliminated after 2 months of treatment and follow-up. Employee satisfaction improved, equipment functioning normally, no new incidents reported. Building management maintains quarterly spiritual maintenance.",
      status: "Resolved",
    },
    {
      id: 3,
      title: "Severe Sihr Case - Black Magic Targeting Marriage",
      category: "sihr",
      location: "Private Consultation",
      duration: "6 weeks",
      date: "September 2024",
      image: "/spiritual-consultation-room-peaceful-islamic-setting.jpg",
      symptoms: [
        "Sudden intense marital conflict after years of harmony",
        "Physical symptoms: severe headaches, unexplained pain",
        "Aversion to spouse and Islamic practices",
        "Nightmares featuring specific threatening figures",
        "Discovered suspicious items in home",
      ],
      investigation: [
        "Comprehensive spiritual and medical history assessment",
        "Diagnostic Ruqyah revealed strong reaction confirming Sihr",
        "Analysis of suspicious items confirmed magical preparation",
        "Investigation identified jealous family member as likely source",
        "Pattern matched classic separation magic (Tafriq)",
      ],
      solution: [
        "Intensive Ruqyah treatment program (twice weekly for 6 weeks)",
        "Removal and proper disposal of all magical items",
        "Hijama (cupping therapy) to assist in extracting magic",
        "Comprehensive home cleansing and protection",
        "Marriage counseling with Islamic spiritual perspective",
        "Daily self-Ruqyah protocol established",
      ],
      outcome:
        "Gradual improvement observed within 2 weeks. Complete recovery by week 6. Marriage restored to previous harmony. Couple continues protective practices and maintains strong spiritual routine. No recurrence after 8 months.",
      status: "Resolved",
    },
    {
      id: 4,
      title: "Haunted Historic Site - Community Center Investigation",
      category: "location",
      location: "Historic Community Building",
      duration: "1 month",
      date: "July 2024",
      image: "/historic-building-with-islamic-architecture-mysterio.jpg",
      symptoms: [
        "Building unusable due to intense paranormal activity",
        "Visitors experiencing severe anxiety and panic attacks",
        "Objects thrown by unseen forces",
        "Apparitions and voices heard throughout building",
        "History of tragic events at the location",
      ],
      investigation: [
        "Multi-day on-site investigation with full team",
        "Historical research revealed site's troubling past",
        "Documented evidence of poltergeist-like activity",
        "Islamic analysis confirmed multiple Jinn inhabiting the space",
        "Site had been neglected spiritually for decades",
      ],
      solution: [
        "Major spiritual reclamation project over 4 weeks",
        "Daily Quranic recitation throughout entire building",
        "Removed items connected to past occult practices",
        "Structural cleansing and spiritual fumigation",
        "Re-consecrated space with proper Islamic protocols",
        "Established permanent spiritual maintenance plan",
      ],
      outcome:
        "Site fully reclaimed and now serves as peaceful community center. All paranormal activity eliminated. Regular spiritual maintenance prevents recurrence. Building now used for Islamic education and community gatherings with no incidents.",
      status: "Resolved",
    },
    {
      id: 5,
      title: "Evil Eye and Hasad - Business Decline Investigation",
      category: "evil-eye",
      location: "Small Business Office",
      duration: "3 weeks",
      date: "November 2024",
      image: "/small-business-office-with-islamic-decor-peaceful-pr.jpg",
      symptoms: [
        "Sudden unexplainable business decline after success",
        "Owner experiencing severe fatigue and demotivation",
        "Equipment constantly breaking down",
        "Loss of key clients for no apparent reason",
        "Strong negative energy in business premises",
      ],
      investigation: [
        "Business and spiritual history assessment",
        "On-site evaluation of business environment",
        "Diagnostic Ruqyah indicated strong Evil Eye and Hasad (envy)",
        "Identified envious former business partner as likely source",
        "Pattern consistent with spiritual targeting of livelihood",
      ],
      solution: [
        "Comprehensive Ruqyah treatment for business owner (4 sessions)",
        "Full business premises spiritual cleansing",
        "Implemented daily protection adhkar and Quranic verses",
        "Business restructuring advice with spiritual considerations",
        "Protection protocols for business dealings",
        "Regular spiritual maintenance schedule established",
      ],
      outcome:
        "Business began recovering within 2 weeks. Owner's energy and motivation fully restored. New clients acquired, equipment functioning normally. Business now exceeds previous success level. Owner maintains consistent spiritual protection practices.",
      status: "Resolved",
    },
    {
      id: 6,
      title: "Demonic Oppression - Long-term Psychological Warfare",
      category: "possession",
      location: "Private Treatment",
      duration: "4 months",
      date: "June 2024",
      image: "/peaceful-islamic-prayer-room-spiritual-healing-atmos.jpg",
      symptoms: [
        "Years of unexplained depression and suicidal thoughts",
        "Hearing voices with blasphemous suggestions",
        "Physical paralysis during sleep (sleep paralysis)",
        "Intense aversion to Quran and prayer",
        "Multiple failed psychiatric treatments",
      ],
      investigation: [
        "Comprehensive medical and psychiatric history review",
        "Confirmed previous proper medical treatment with limited success",
        "Diagnostic Ruqyah revealed severe Jinn possession",
        "Pattern indicated long-term spiritual warfare",
        "Patient had weak spiritual foundation and protection",
      ],
      solution: [
        "Long-term intensive Ruqyah program (weekly sessions for 4 months)",
        "Coordinated care with psychiatrist (complementary approach)",
        "Rebuilt spiritual foundation through Islamic education",
        "Taught comprehensive self-Ruqyah techniques",
        "Family therapy and support system strengthening",
        "Gradual reduction of psychiatric medication under doctor supervision",
      ],
      outcome:
        "Complete spiritual liberation achieved after 4 months. Depression eliminated, voices ceased. Patient now prays regularly and maintains strong spiritual practice. Psychiatric medication discontinued with doctor approval. Now helps others facing similar struggles.",
      status: "Resolved",
    },
  ]

  const categories = [
    { id: "all", label: "All Cases", icon: FileText },
    { id: "residential", label: "Residential", icon: Home },
    { id: "commercial", label: "Commercial", icon: Building2 },
    { id: "possession", label: "Possession", icon: AlertCircle },
    { id: "sihr", label: "Black Magic", icon: Shield },
    { id: "evil-eye", label: "Evil Eye", icon: AlertCircle },
    { id: "location", label: "Locations", icon: MapPin },
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
            Case <span className="text-primary">Studies</span>
          </h1>
          <p className="text-xl text-muted-foreground animate-fade-in-up [animation-delay:200ms] opacity-0 [animation-fill-mode:forwards] text-pretty">
            Real investigations and successful resolutions of paranormal cases using authentic Islamic methodology
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
            { number: "500+", label: "Cases Resolved" },
            { number: "95%", label: "Success Rate" },
            { number: "15+", label: "Years Experience" },
            { number: "24/7", label: "Support Available" },
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
          <h2 className="text-xl font-[family-name:var(--font-cinzel)] font-bold">Filter by Category</h2>
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
                      className={`px-4 py-2 rounded-full text-sm font-bold backdrop-blur-md ${
                        caseItem.status === "Resolved"
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
                        Reported Symptoms
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
                        Investigation Findings
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
                        Treatment Applied
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
                        Final Outcome
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
            Our Investigation & Treatment Methodology
          </h2>

          <Card className="border-2 border-primary/30 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-8 lg:p-12 space-y-8">
              {[
                {
                  title: "Islamic Foundation",
                  description:
                    "All our investigations and treatments are firmly rooted in Qur'an and authentic Sunnah. We avoid all innovations, superstitions, and practices not sanctioned by Islamic scholarship.",
                },
                {
                  title: "Scientific Approach",
                  description:
                    "We combine spiritual knowledge with logical analysis, documentation, and systematic investigation methods. Medical and psychological factors are always considered.",
                },
                {
                  title: "Confidentiality & Ethics",
                  description:
                    "Complete client confidentiality is maintained. We never exploit vulnerable individuals, charge exploitative fees, or make unrealistic promises.",
                },
                {
                  title: "Comprehensive Care",
                  description:
                    "We address the spiritual, psychological, physical, and environmental aspects of each case, providing holistic solutions and ongoing support.",
                },
                {
                  title: "Evidence-Based",
                  description:
                    "Cases are thoroughly documented with written reports, evidence collection, and progress tracking. We maintain high professional standards.",
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
              Need Help with Your Case?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
              Every case is unique. Contact us for a confidential consultation to discuss your situation and how we can
              help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg" className="group">
                <Link href="/contact">
                  Schedule Consultation
                  <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="group bg-transparent">
                <Link href="/services">
                  View All Services
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
