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

export default function ResearchClientPage() {
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
            Islamic <span className="text-primary">Research</span>
          </h1>
          <p className="text-xl text-muted-foreground animate-fade-in-up [animation-delay:200ms] opacity-0 [animation-fill-mode:forwards]">
            Scholarly investigation into the unseen world through Qur&apos;an and Sunnah
          </p>
        </div>
      </section>

      <SectionDivider />

      {/* Research Areas */}
      <section ref={addToRefs} className="container mx-auto px-4 py-20 opacity-0">
        <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-cinzel)] font-bold text-center text-balance mb-16">
          Areas of Research
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Moon,
              title: "Jinn & Their Nature",
              description: "Understanding the creation, abilities, and limitations of Jinn according to Islamic texts",
            },
            {
              icon: Zap,
              title: "Sihr (Magic)",
              description: "The reality of magic in Islam, its types, effects, and proper Islamic responses",
            },
            {
              icon: Eye,
              title: "Evil Eye (Ayn)",
              description: "Scientific and Islamic perspective on the evil eye, its impact, and prevention",
            },
            {
              icon: Flame,
              title: "Jinn Possession",
              description: "Authentic Islamic stance on possession, symptoms, and treatment methodologies",
            },
            {
              icon: Brain,
              title: "Psychology vs Spirituality",
              description: "Distinguishing between mental health conditions and genuine spiritual afflictions",
            },
            {
              icon: BookOpen,
              title: "Ruqyah Methodology",
              description: "Evidence-based Ruqyah practices from Qur'an, Sunnah, and scholarly consensus",
            },
            {
              icon: ScrollText,
              title: "Prophetic Medicine",
              description: "Spiritual healing practices taught by Prophet Muhammad ﷺ and their applications",
            },
            {
              icon: Users2,
              title: "Case Studies",
              description: "Documented cases with analysis of symptoms, treatments, and outcomes",
            },
          ].map((area, index) => (
            <Card
              key={area.title}
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
              Understanding Jinn in Islam
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Jinn are a fundamental part of Islamic belief, mentioned extensively in the Qur&apos;an and Hadith. Our
              research compiles authentic Islamic knowledge about these unseen beings.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="border-2 border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-500">
              <CardContent className="p-8 space-y-4">
                <h3 className="text-2xl font-[family-name:var(--font-cinzel)] font-bold text-primary">
                  Creation & Nature
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="leading-relaxed">• Created from smokeless fire (Surah Ar-Rahman 55:15)</li>
                  <li className="leading-relaxed">
                    • Possess free will and intellect, capable of belief and disbelief
                  </li>
                  <li className="leading-relaxed">
                    • Live in a parallel world invisible to humans under normal circumstances
                  </li>
                  <li className="leading-relaxed">• Have communities, families, and religions similar to humans</li>
                  <li className="leading-relaxed">• Accountable for their actions on the Day of Judgment</li>
                  <li className="leading-relaxed">
                    • Can take various forms but their natural state is invisible to human eyes
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-500">
              <CardContent className="p-8 space-y-4">
                <h3 className="text-2xl font-[family-name:var(--font-cinzel)] font-bold text-primary">Types of Jinn</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="leading-relaxed">
                    <strong className="text-foreground">Believer Jinn:</strong> Muslims among Jinn who worship Allah and
                    follow Islamic teachings
                  </li>
                  <li className="leading-relaxed">
                    <strong className="text-foreground">Disbeliever Jinn:</strong> Kafir Jinn who reject faith and may
                    harm humans
                  </li>
                  <li className="leading-relaxed">
                    <strong className="text-foreground">Shayateen:</strong> Devils among Jinn, followers of Iblis who
                    actively mislead humans
                  </li>
                  <li className="leading-relaxed">
                    <strong className="text-foreground">Marid:</strong> Powerful and rebellious Jinn mentioned in
                    Islamic texts
                  </li>
                  <li className="leading-relaxed">
                    <strong className="text-foreground">Ifrit:</strong> Strong and cunning Jinn with significant power
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-500">
              <CardContent className="p-8 space-y-4">
                <h3 className="text-2xl font-[family-name:var(--font-cinzel)] font-bold text-primary">
                  Abilities & Limitations
                </h3>
                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <p className="font-semibold text-foreground mb-2">What Jinn Can Do:</p>
                    <ul className="space-y-2">
                      <li>• Move at extremely high speeds</li>
                      <li>• Take various physical forms (animals, humans, etc.)</li>
                      <li>• Enter human bodies under certain conditions</li>
                      <li>• Whisper suggestions and doubts into human hearts</li>
                      <li>• Carry information from one place to another</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-2">What Jinn Cannot Do:</p>
                    <ul className="space-y-2">
                      <li>• Know the unseen (only Allah has complete knowledge of Ghayb)</li>
                      <li>• Force humans to sin (they can only suggest)</li>
                      <li>• Harm those under Allah&apos;s protection</li>
                      <li>• Access the heavens to eavesdrop (guarded by angels)</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-500">
              <CardContent className="p-8 space-y-4">
                <h3 className="text-2xl font-[family-name:var(--font-cinzel)] font-bold text-primary">
                  Qur&apos;anic Evidence
                </h3>
                <div className="space-y-4">
                  <blockquote className="border-l-4 border-primary pl-4 italic text-foreground/90">
                    &quot;And I did not create the jinn and mankind except to worship Me.&quot;
                    <p className="text-sm text-primary mt-2">— Surah Adh-Dhariyat (51:56)</p>
                  </blockquote>
                  <blockquote className="border-l-4 border-primary pl-4 italic text-foreground/90">
                    &quot;Say: It has been revealed to me that a company of Jinn listened and said: We have heard a
                    wonderful Qur&apos;an!&quot;
                    <p className="text-sm text-primary mt-2">— Surah Al-Jinn (72:1)</p>
                  </blockquote>
                  <blockquote className="border-l-4 border-primary pl-4 italic text-foreground/90">
                    &quot;And there were men among mankind who sought refuge in men among the jinn, so they increased
                    them in burden.&quot;
                    <p className="text-sm text-primary mt-2">— Surah Al-Jinn (72:6)</p>
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
              The Reality of Sihr (Magic) in Islam
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Sihr (magic/sorcery) is explicitly acknowledged and condemned in Islam. Understanding its reality helps
              believers protect themselves and respond appropriately.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="border-2 border-primary/30 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8 space-y-6">
                <h3 className="text-2xl font-[family-name:var(--font-cinzel)] font-bold text-primary">
                  Definition & Islamic Ruling
                </h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Sihr is defined as deception and manipulation through forbidden means, often involving seeking help
                    from Jinn and devils. It is one of the major sins in Islam and can nullify one&apos;s faith if not
                    repented from.
                  </p>
                  <blockquote className="border-l-4 border-primary pl-4 italic text-foreground/90">
                    &quot;And they followed what the devils recited during the reign of Solomon. It was not Solomon who
                    disbelieved, but the devils disbelieved, teaching people magic...&quot;
                    <p className="text-sm text-primary mt-2">— Surah Al-Baqarah (2:102)</p>
                  </blockquote>
                  <p>
                    The Prophet ﷺ said: &quot;Avoid the seven destructive sins.&quot; The people asked, &quot;What are
                    they, O Messenger of Allah?&quot; He replied: &quot;Associating partners with Allah, magic...&quot;
                    (Bukhari & Muslim)
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/30 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8 space-y-6">
                <h3 className="text-2xl font-[family-name:var(--font-cinzel)] font-bold text-primary">Types of Sihr</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="leading-relaxed">
                    <strong className="text-foreground">Sihr of Separation:</strong> Magic to cause division between
                    spouses, family members, or friends
                  </li>
                  <li className="leading-relaxed">
                    <strong className="text-foreground">Sihr of Love:</strong> Creating false attraction or obsession
                  </li>
                  <li className="leading-relaxed">
                    <strong className="text-foreground">Sihr of Illness:</strong> Causing physical or mental symptoms
                  </li>
                  <li className="leading-relaxed">
                    <strong className="text-foreground">Sihr of Blocking:</strong> Preventing marriage, pregnancy, or
                    success
                  </li>
                  <li className="leading-relaxed">
                    <strong className="text-foreground">Sihr of Madness:</strong> Affecting mental stability and clarity
                  </li>
                  <li className="leading-relaxed">
                    <strong className="text-foreground">Sihr in Food/Drink:</strong> Magic consumed unknowingly
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/30 bg-card/50 backdrop-blur-sm lg:col-span-2">
              <CardContent className="p-8 space-y-6">
                <h3 className="text-2xl font-[family-name:var(--font-cinzel)] font-bold text-primary">
                  Common Symptoms of Sihr
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-muted-foreground">
                  <div>
                    <p className="font-semibold text-foreground mb-3">Physical Symptoms:</p>
                    <ul className="space-y-2 text-sm">
                      <li>• Unexplained pains that move around the body</li>
                      <li>• Headaches that don&apos;t respond to medication</li>
                      <li>• Stomach problems without medical cause</li>
                      <li>• Extreme fatigue and lethargy</li>
                      <li>• Tightness in chest, especially during prayer</li>
                      <li>• Unusual dreams or nightmares</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-3">Psychological & Behavioral:</p>
                    <ul className="space-y-2 text-sm">
                      <li>• Sudden personality changes</li>
                      <li>• Unexplained anger or aggression</li>
                      <li>• Depression and anxiety without clear cause</li>
                      <li>• Aversion to worship (Quran, prayer, dhikr)</li>
                      <li>• Marital problems appearing suddenly</li>
                      <li>• Feeling of being watched or followed</li>
                    </ul>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-sm italic text-foreground/70">
                      Note: These symptoms can also indicate medical or psychological conditions. Professional medical
                      evaluation is essential before concluding spiritual causation.
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
              The Evil Eye (Al-Ayn) - Islamic Perspective
            </h2>
          </div>

          <Card className="border-2 border-primary/30 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-8 lg:p-12 space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-[family-name:var(--font-cinzel)] font-bold text-primary">
                  Definition & Evidence
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  The evil eye (Al-Ayn) is a genuine phenomenon recognized in Islam, where a person&apos;s
                  admiration—whether out of envy or even unintentional—can cause harm to the one being looked at. The
                  Prophet Muhammad ﷺ said: &quot;The evil eye is real, and if anything were to overtake the divine
                  decree, it would be the evil eye.&quot; (Sahih Muslim)
                </p>
                <blockquote className="border-l-4 border-primary pl-6 italic text-foreground/90 my-6">
                  &quot;And indeed, those who disbelieve would almost make you slip with their eyes when they hear the
                  message...&quot;
                  <p className="text-sm text-primary mt-2">— Surah Al-Qalam (68:51)</p>
                </blockquote>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-[family-name:var(--font-cinzel)] font-bold text-primary">How It Occurs</h3>
                <p className="text-muted-foreground leading-relaxed">
                  The evil eye can occur when someone looks at a blessing (health, wealth, children, success) with
                  intense admiration without saying &quot;MashaAllah&quot; or &quot;Barakallah.&quot; It can come from:
                </p>
                <ul className="space-y-2 text-muted-foreground ml-6">
                  <li>• Envious individuals who wish they had what you have</li>
                  <li>• People who admire intensely, even without bad intentions</li>
                  <li>• Even from oneself when admiring one&apos;s own blessings without gratitude</li>
                  <li>• Can affect adults, children, property, and even animals</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-[family-name:var(--font-cinzel)] font-bold text-primary">
                  Common Symptoms
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-muted-foreground">
                  <ul className="space-y-2 text-sm">
                    <li>• Sudden illness without medical explanation</li>
                    <li>• Loss of appetite and weight</li>
                    <li>• Restlessness and insomnia</li>
                    <li>• Headaches and body pains</li>
                  </ul>
                  <ul className="space-y-2 text-sm">
                    <li>• Sudden business or financial losses</li>
                    <li>• Marital discord appearing suddenly</li>
                    <li>• Loss of interest in work or activities</li>
                    <li>• General feeling of being &quot;off&quot;</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-[family-name:var(--font-cinzel)] font-bold text-primary">
                  Islamic Protection & Treatment
                </h3>
                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <p className="font-semibold text-foreground mb-3">Prevention:</p>
                    <ul className="space-y-2 text-sm">
                      <li>• Regular recitation of morning and evening adhkar</li>
                      <li>• Saying &quot;MashaAllah&quot; when admiring blessings</li>
                      <li>• Keeping blessings private when possible</li>
                      <li>• Regular recitation of Surah Al-Falaq and An-Nas</li>
                      <li>• Ayat al-Kursi daily and before sleep</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-3">Treatment if Affected:</p>
                    <ul className="space-y-2 text-sm">
                      <li>• Ruqyah with specific Quranic verses</li>
                      <li>
                        • If the envious person is known, they perform wudu and the water is poured over the victim
                      </li>
                      <li>• Reciting protective supplications taught by the Prophet ﷺ</li>
                      <li>• Increasing in worship, prayer, and seeking Allah&apos;s protection</li>
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
            Our Research Methodology
          </h2>

          <Card className="border-2 border-border bg-card/50 backdrop-blur-sm">
            <CardContent className="p-8 space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Our research approach combines classical Islamic scholarship with contemporary understanding, always
                maintaining strict adherence to authentic sources:
              </p>
              <ol className="space-y-4 text-muted-foreground">
                <li className="leading-relaxed">
                  <strong className="text-foreground">1. Primary Source Analysis:</strong> Direct study of Qur&apos;an
                  and authentic Hadith collections regarding spiritual matters
                </li>
                <li className="leading-relaxed">
                  <strong className="text-foreground">2. Classical Scholarship:</strong> Reviewing interpretations and
                  methodologies of renowned Islamic scholars throughout history
                </li>
                <li className="leading-relaxed">
                  <strong className="text-foreground">3. Contemporary Application:</strong> Understanding how classical
                  knowledge applies to modern contexts and conditions
                </li>
                <li className="leading-relaxed">
                  <strong className="text-foreground">4. Medical Integration:</strong> Collaborating with medical
                  professionals to distinguish spiritual from psychological/medical conditions
                </li>
                <li className="leading-relaxed">
                  <strong className="text-foreground">5. Case Documentation:</strong> Carefully documenting cases (with
                  confidentiality) to build empirical understanding
                </li>
                <li className="leading-relaxed">
                  <strong className="text-foreground">6. Peer Review:</strong> All research is reviewed by qualified
                  Islamic scholars before publication
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
