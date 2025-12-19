"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { SectionDivider } from "@/components/section-divider"
import { CheckCircle, Users, Globe, BookMarked, GraduationCap, Heart } from "lucide-react"
import { ORG_CONFIG } from "@/lib/constants"

export default function AboutPageClient() {
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
            About <span className="text-primary">{ORG_CONFIG.name}</span>
          </h1>
          <p className="text-xl text-muted-foreground animate-fade-in-up [animation-delay:200ms] opacity-0 [animation-fill-mode:forwards]">
            {ORG_CONFIG.tagline}
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
              Our Mission & Vision
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                We are dedicated to providing authentic Islamic knowledge and services related to spiritual protection,
                paranormal phenomena, and Ruqyah healing. Our organization was founded on the principle that all
                spiritual matters must be understood and addressed through the lens of Qur'an and authentic Sunnah.
              </p>
              <p>
                Our organization bridges the gap between traditional Islamic scholarship and contemporary understanding
                of spiritual afflictions, always maintaining strict adherence to Qur&apos;an and Sunnah. We believe that
                the unseen world, including Jinn and spiritual afflictions, is a reality acknowledged in Islam, but must
                be approached with knowledge, wisdom, and faith—never with superstition or innovation.
              </p>
              <p>
                We work closely with Islamic scholars, medical professionals, and psychologists to provide holistic care
                that addresses both spiritual and physical dimensions of wellbeing. Our approach is evidence-based,
                rooted in scripture, and informed by years of practical experience in dealing with various forms of
                spiritual afflictions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      <section ref={addToRefs} className="container mx-auto px-4 py-20 opacity-0">
        <h2 className="text-4xl font-[family-name:var(--font-cinzel)] font-bold text-center text-balance mb-16">
          What We Do
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Users,
              title: "Direct Spiritual Care",
              description:
                "We provide one-on-one consultations and Ruqyah sessions for individuals suffering from spiritual afflictions including evil eye, black magic, and Jinn possession. Each case is assessed individually with care and confidentiality.",
            },
            {
              icon: BookMarked,
              title: "Islamic Research",
              description:
                "We conduct extensive research into Islamic texts regarding the unseen world, compiling authentic hadiths, scholarly opinions, and practical applications. Our research is peer-reviewed by qualified Islamic scholars.",
            },
            {
              icon: GraduationCap,
              title: "Education & Training",
              description:
                "We offer educational programs teaching Muslims how to protect themselves spiritually through daily adhkar, understanding the reality of Jinn, and recognizing genuine spiritual afflictions versus psychological conditions.",
            },
            {
              icon: Heart,
              title: "Family Support",
              description:
                "We provide counseling and support for families dealing with spiritual afflictions, helping them understand the condition, maintain patience, and support their loved ones through recovery with Islamic guidance.",
            },
            {
              icon: Globe,
              title: "Community Outreach",
              description:
                "We organize lectures, workshops, and seminars to educate the Muslim community about authentic Islamic practices regarding spiritual protection, dispelling myths and cultural superstitions.",
            },
            {
              icon: CheckCircle,
              title: "Verification Services",
              description:
                "We help people distinguish between genuine spiritual issues and psychological conditions, working with medical professionals to ensure individuals receive appropriate care—whether spiritual, medical, or both.",
            },
          ].map((item, index) => (
            <Card
              key={item.title}
              className="group border-2 border-border hover:border-primary/50 bg-card/30 backdrop-blur-sm transition-all duration-500 hover:shadow-lg hover:shadow-primary/20"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <CardContent className="p-6 space-y-4">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300 group-hover:scale-110 transform">
                  <item.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-[family-name:var(--font-cinzel)] font-bold">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </CardContent>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Card>
          ))}
        </div>
      </section>

      <SectionDivider />

      {/* Islamic Principles */}
      <section ref={addToRefs} className="container mx-auto px-4 py-20 opacity-0">
        <h2 className="text-4xl font-[family-name:var(--font-cinzel)] font-bold text-center text-balance mb-12">
          Our Islamic Principles
        </h2>

        <div className="max-w-4xl mx-auto space-y-6">
          {[
            {
              title: "Qur'an and Sunnah Only",
              description:
                "All our practices are derived exclusively from authentic Islamic sources, with no innovations or cultural superstitions. We follow the methodology of the righteous predecessors (Salaf) in understanding and applying Islamic teachings. Every practice we employ has direct evidence from Qur'an or authentic hadith.",
            },
            {
              title: "No Shirk or Forbidden Practices",
              description:
                "We strictly avoid all forms of shirk (associating partners with Allah), magic, fortune-telling, astrology, and any prohibited methods. Our work is purely seeking Allah's protection and healing through His words. We never use talismans, amulets with unclear text, or any practices that contradict Tawheed.",
            },
            {
              title: "Medical Awareness & Integration",
              description:
                "We recognize the distinction between spiritual afflictions and psychological/medical conditions. We work collaboratively with qualified medical professionals, psychiatrists, and psychologists. We never tell patients to stop prescribed medication, and we encourage comprehensive medical evaluation alongside spiritual treatment.",
            },
            {
              title: "Education and Awareness",
              description:
                "We educate the community about genuine Islamic teachings versus cultural myths and misconceptions about the unseen world. We help people understand the reality of Jinn as described in Qur'an and Sunnah, without exaggeration or minimization. We emphasize that protection from evil is through regular Islamic practices, not superstitions.",
            },
            {
              title: "Scholarly Consultation",
              description:
                "Our methodologies are reviewed by qualified Islamic scholars to ensure compliance with authentic teachings. We maintain relationships with scholars of different schools of thought while adhering to evidences from Qur'an and Sunnah. We regularly update our knowledge through studying classical and contemporary Islamic scholarship.",
            },
            {
              title: "Ethical Standards",
              description:
                "We maintain strict ethical standards including patient confidentiality, professional boundaries, and refusing payment for Ruqyah itself (though administrative costs may apply). We never exploit vulnerable people or make false promises. We emphasize that all healing comes from Allah alone.",
            },
          ].map((principle, index) => (
            <Card
              key={principle.title}
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
            Foundations in Revelation
          </h2>
          <p className="text-center text-muted-foreground leading-relaxed">
            Our work is firmly grounded in the verses of the Qur&apos;an and authentic teachings of Prophet Muhammad ﷺ.
            Here are some of the foundational texts that guide our understanding:
          </p>

          <div className="space-y-6">
            <Card className="border-2 border-primary/30 bg-gradient-to-br from-card/80 to-primary/5 backdrop-blur-sm hover:border-primary/50 transition-all duration-500 hover:shadow-lg hover:shadow-primary/20">
              <CardContent className="p-8 space-y-4">
                <blockquote className="text-lg text-foreground/90 italic leading-relaxed">
                  &quot;And We send down of the Qur&apos;an that which is healing and mercy for the believers, but it
                  does not increase the wrongdoers except in loss.&quot;
                </blockquote>
                <p className="text-primary font-semibold">Surah Al-Isra (17:82)</p>
                <p className="text-sm text-muted-foreground">
                  This verse establishes the Qur&apos;an as a source of healing—both spiritual and sometimes physical.
                  It is the foundation of Ruqyah practice in Islam.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/30 bg-gradient-to-br from-card/80 to-primary/5 backdrop-blur-sm hover:border-primary/50 transition-all duration-500 hover:shadow-lg hover:shadow-primary/20">
              <CardContent className="p-8 space-y-4">
                <blockquote className="text-lg text-foreground/90 italic leading-relaxed">
                  &quot;Say: I seek refuge in the Lord of daybreak, from the evil of that which He created, and from the
                  evil of darkness when it settles, and from the evil of the blowers in knots, and from the evil of an
                  envier when he envies.&quot;
                </blockquote>
                <p className="text-primary font-semibold">Surah Al-Falaq (113:1-5)</p>
                <p className="text-sm text-muted-foreground">
                  One of the protective chapters (Mu&apos;awwidhatayn) that specifically mentions seeking refuge from
                  magic (&quot;blowers in knots&quot;) and evil eye (&quot;envier&quot;).
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/30 bg-gradient-to-br from-card/80 to-primary/5 backdrop-blur-sm hover:border-primary/50 transition-all duration-500 hover:shadow-lg hover:shadow-primary/20">
              <CardContent className="p-8 space-y-4">
                <blockquote className="text-lg text-foreground/90 italic leading-relaxed">
                  &quot;And if an evil whisper from Shaitan tries to turn you away, then seek refuge in Allah. Verily,
                  He is the All-Hearer, the All-Knower.&quot;
                </blockquote>
                <p className="text-primary font-semibold">Surah Fussilat (41:36)</p>
                <p className="text-sm text-muted-foreground">
                  Allah instructs us to seek refuge in Him when facing spiritual attacks or whispers from Shaytan,
                  establishing the Islamic method of spiritual protection.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/30 bg-gradient-to-br from-card/80 to-primary/5 backdrop-blur-sm hover:border-primary/50 transition-all duration-500 hover:shadow-lg hover:shadow-primary/20">
              <CardContent className="p-8 space-y-4">
                <blockquote className="text-lg text-foreground/90 italic leading-relaxed">
                  &quot;And He created the jinn from a smokeless flame of fire.&quot;
                </blockquote>
                <p className="text-primary font-semibold">Surah Ar-Rahman (55:15)</p>
                <p className="text-sm text-muted-foreground">
                  The Qur&apos;an clearly establishes the existence of Jinn as a creation of Allah, made from fire, with
                  their own will and ability to believe or disbelieve.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/30 bg-gradient-to-br from-card/80 to-primary/5 backdrop-blur-sm hover:border-primary/50 transition-all duration-500 hover:shadow-lg hover:shadow-primary/20">
              <CardContent className="p-8 space-y-4">
                <blockquote className="text-lg text-foreground/90 italic leading-relaxed">
                  &quot;They followed what the devils gave out (falsely of the magic) in the lifetime of Sulaiman. But
                  neither did Sulaiman disbelieve, nor did the devils teach men magic, but it was the devils who
                  disbelieved, teaching men magic...&quot;
                </blockquote>
                <p className="text-primary font-semibold">Surah Al-Baqarah (2:102)</p>
                <p className="text-sm text-muted-foreground">
                  This verse confirms the reality of magic (Sihr), clarifies that Prophet Sulaiman never practiced it,
                  and explains its origins with the devils.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <SectionDivider />

      <section ref={addToRefs} className="container mx-auto px-4 py-20 opacity-0">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-4xl font-[family-name:var(--font-cinzel)] font-bold text-center text-balance">
            Our Approach to Spiritual Healing
          </h2>

          <Card className="border-2 border-border bg-card/50 backdrop-blur-sm">
            <CardContent className="p-8 space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-[family-name:var(--font-cinzel)] font-bold text-primary">
                  1. Comprehensive Assessment
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We begin with a detailed consultation to understand the symptoms, medical history, and spiritual
                  practices of the individual. We assess whether the condition may be spiritual, medical, psychological,
                  or a combination. This includes reviewing any previous medical diagnoses and current treatments.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-[family-name:var(--font-cinzel)] font-bold text-primary">
                  2. Diagnostic Ruqyah
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  If spiritual affliction is suspected, we perform diagnostic Ruqyah by reciting specific verses from
                  the Qur&apos;an and observing reactions. This helps confirm or rule out spiritual causes. We never
                  rely solely on reactions but consider the complete picture of symptoms and circumstances.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-[family-name:var(--font-cinzel)] font-bold text-primary">
                  3. Treatment Protocol
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Treatment involves regular Ruqyah sessions with specific Qur&apos;anic verses, prophetic supplications
                  (du&apos;a), and prescribed self-care including listening to Ruqyah audio, performing daily adhkar,
                  and maintaining ritual prayers. We also advise on Islamic lifestyle practices that strengthen
                  spiritual protection.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-[family-name:var(--font-cinzel)] font-bold text-primary">
                  4. Medical Collaboration
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We maintain open communication with the individual&apos;s healthcare providers when appropriate. If we
                  suspect psychological or medical conditions, we strongly recommend professional medical evaluation. We
                  never position spiritual treatment as a replacement for necessary medical care.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-[family-name:var(--font-cinzel)] font-bold text-primary">
                  5. Follow-up & Prevention
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Recovery is monitored through regular follow-ups. We educate individuals on preventive measures
                  including daily adhkar, regular Qur&apos;an recitation, maintaining prayers, and understanding Islamic
                  spiritual protection. We emphasize building a strong relationship with Allah as the ultimate
                  protection.
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
