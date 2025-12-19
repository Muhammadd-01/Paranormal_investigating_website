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

export function ServicesClientPage() {
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
            Our <span className="text-primary">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground animate-fade-in-up [animation-delay:200ms] opacity-0 [animation-fill-mode:forwards]">
            Comprehensive Islamic spiritual care rooted in Qur&apos;an and Sunnah
          </p>
        </div>
      </section>

      <SectionDivider />

      {/* Core Services */}
      <section ref={addToRefs} className="container mx-auto px-4 py-20 opacity-0">
        <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-cinzel)] font-bold text-center text-balance mb-16">
          Core Services
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
                  Spiritual Assessment & Diagnosis
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our comprehensive assessment service helps identify whether symptoms are spiritual, psychological, or
                  medical in nature. We conduct detailed consultations reviewing medical history, current symptoms, and
                  spiritual practices. Through diagnostic Ruqyah and careful observation, we determine the appropriate
                  course of action.
                </p>
                <ul className="space-y-3">
                  {[
                    "Detailed consultation (60-90 minutes)",
                    "Medical and psychological history review",
                    "Diagnostic Ruqyah session",
                    "Comprehensive written assessment report",
                    "Personalized treatment recommendations",
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
                <h3 className="text-3xl font-[family-name:var(--font-cinzel)] font-bold">Ruqyah Treatment Sessions</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Authentic Islamic spiritual healing through recitation of Qur&apos;an and prophetic supplications. Our
                  Ruqyah sessions are conducted by trained practitioners who strictly adhere to Islamic guidelines,
                  avoiding all innovations and forbidden practices.
                </p>
                <ul className="space-y-3">
                  {[
                    "In-person Ruqyah sessions (45-60 minutes)",
                    "Recitation of selected Quranic verses",
                    "Prophetic supplications and prayers",
                    "Self-Ruqyah training and guidance",
                    "Customized audio recordings for home use",
                    "Follow-up progress monitoring",
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
                  Family Support & Counseling
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Dealing with spiritual afflictions affects entire families. We provide counseling and support for
                  family members, helping them understand the condition, maintain patience, support their loved ones,
                  and protect themselves spiritually.
                </p>
                <ul className="space-y-3">
                  {[
                    "Family education sessions",
                    "Coping strategies and emotional support",
                    "Islamic guidance on patience and trust in Allah",
                    "Home environment spiritual protection advice",
                    "Communication strategies",
                    "Support group referrals",
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

      {/* Service Formats */}
      <section ref={addToRefs} className="container mx-auto px-4 py-20 opacity-0">
        <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-cinzel)] font-bold text-center text-balance mb-16">
          Service Formats
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Home,
              title: "In-Person Sessions",
              description:
                "Face-to-face consultations and Ruqyah sessions at our center, providing the most comprehensive and effective treatment experience.",
              features: ["Private consultation rooms", "Professional environment", "Full diagnostic capabilities"],
            },
            {
              icon: Video,
              title: "Online Consultations",
              description:
                "Virtual consultations via secure video conferencing for initial assessments, follow-ups, and guidance when in-person visits are not possible.",
              features: ["Secure video platform", "Flexible scheduling", "Convenient for remote clients"],
            },
            {
              icon: Phone,
              title: "Emergency Support",
              description:
                "24/7 helpline for urgent spiritual concerns, providing immediate guidance and connecting you with appropriate resources during crisis situations.",
              features: ["24/7 availability", "Immediate guidance", "Crisis intervention"],
            },
          ].map((format, index) => (
            <Card
              key={format.title}
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
          Additional Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[
            {
              icon: GraduationCap,
              title: "Islamic Education Programs",
              description:
                "Comprehensive courses on spiritual protection, understanding the unseen world from an Islamic perspective, and practical application of daily adhkar and protective supplications.",
            },
            {
              icon: HeartHandshake,
              title: "Community Workshops",
              description:
                "Regular workshops and seminars for the Muslim community covering topics like evil eye protection, recognizing spiritual afflictions, and dispelling cultural superstitions.",
            },
            {
              icon: FileText,
              title: "Written Consultations",
              description:
                "Detailed written advice for specific situations, including review of symptoms, Islamic perspective on your case, and personalized recommendations for spiritual protection and healing.",
            },
            {
              icon: BookOpen,
              title: "Ruqyah Practitioner Training",
              description:
                "Training programs for those who wish to learn proper Ruqyah methodology according to Qur'an and Sunnah, with certification upon completion and ongoing mentorship.",
            },
          ].map((service, index) => (
            <Card
              key={service.title}
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
            What to Expect
          </h2>

          <Card className="border-2 border-primary/30 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-8 lg:p-12 space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-[family-name:var(--font-cinzel)] font-bold text-primary">
                  Before Your First Session
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  You&apos;ll complete a confidential intake form covering your medical history, current symptoms, and
                  spiritual practices. We recommend being in a state of wudu (ablution) and wearing modest, comfortable
                  clothing. Bring any relevant medical records or previous assessments.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-[family-name:var(--font-cinzel)] font-bold text-primary">
                  During the Session
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Sessions are conducted in a private, comfortable environment with appropriate gender considerations
                  (mahram requirements observed). We explain each step, answer your questions, and ensure you feel safe
                  and informed throughout the process. Sessions are conducted with respect, professionalism, and Islamic
                  etiquette.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-[family-name:var(--font-cinzel)] font-bold text-primary">
                  After the Session
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  You&apos;ll receive a personalized care plan including self-Ruqyah instructions, recommended
                  supplications, lifestyle guidance, and follow-up schedule. We provide ongoing support via phone or
                  email between sessions and adjust treatment plans based on your progress.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-[family-name:var(--font-cinzel)] font-bold text-primary">
                  Confidentiality & Ethics
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  All information shared is strictly confidential. We maintain professional boundaries, never exploit
                  vulnerable individuals, and follow Islamic ethical guidelines. We do not charge for Ruqyah itself (as
                  it is an act of worship), though administrative and facility costs may apply.
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
              Ready to Begin Your Healing Journey?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Contact us today to schedule your consultation. We&apos;re here to help you with compassion, knowledge,
              and authentic Islamic guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                asChild
                size="lg"
                className="group bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
              >
                <Link href="/contact">
                  Schedule Consultation
                  <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-primary/50 hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:scale-105 bg-transparent"
              >
                <Link href="/resources">View Resources</Link>
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
