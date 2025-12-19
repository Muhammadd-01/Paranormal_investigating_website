import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ScrollToTop } from "@/components/scroll-to-top"
import { SectionDivider } from "@/components/section-divider"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { BookOpen, Download, Video, FileText, Headphones, Shield } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "Islamic Resources - Ruqyah, Quranic Protection & Spiritual Healing",
  description:
    "Free Islamic resources for spiritual protection and healing. Download Quranic verses, Ruqyah audio, protection supplications, Islamic books on Jinn, and daily adhkar. Authentic resources based on Quran and Sunnah for self-treatment and spiritual growth.",
  keywords: [
    "Ruqyah resources",
    "Quranic protection verses",
    "Islamic healing downloads",
    "free Ruqyah audio",
    "adhkar protection",
    "Islamic spiritual books",
    "Ayat al-Kursi",
  ],
  openGraph: {
    title: "Free Islamic Resources for Spiritual Protection & Healing",
    description:
      "Comprehensive collection of Quranic verses, Ruqyah audio, and Islamic books for spiritual protection.",
    type: "website",
  },
}

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-[family-name:var(--font-cinzel)] font-bold text-primary mb-6 animate-fade-in-up">
              Islamic Resources
            </h1>
            <p className="text-xl text-foreground/80 leading-relaxed animate-fade-in-up delay-100">
              Comprehensive collection of authentic Islamic resources for spiritual protection, healing, and knowledge
            </p>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Quranic Resources Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-[family-name:var(--font-cinzel)] font-bold text-primary mb-4 animate-fade-in-up">
              Quranic Resources
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto animate-fade-in-up delay-100">
              Essential Quranic verses and chapters for protection and healing
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-500 hover:scale-105 animate-scale-in">
              <BookOpen className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-[family-name:var(--font-cinzel)] font-bold text-primary mb-3">
                Ayat al-Kursi
              </h3>
              <p className="text-foreground/70 mb-4 leading-relaxed">
                The Throne Verse (Quran 2:255) - The most powerful verse in the Quran. Recite for protection from
                Shaytan, Jinn, and all forms of evil. Prophet Muhammad (ﷺ) said whoever recites this at night will be
                protected until morning.
              </p>
              <Button variant="outline" className="w-full group hover:bg-primary hover:text-background bg-transparent">
                <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                Download PDF
              </Button>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-500 hover:scale-105 animate-scale-in delay-100">
              <BookOpen className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-[family-name:var(--font-cinzel)] font-bold text-primary mb-3">
                Surah Al-Falaq
              </h3>
              <p className="text-foreground/70 mb-4 leading-relaxed">
                Chapter 113 - Seeking refuge from external evil, magic (Sihr), envy (Hasad), and harmful beings.
                Essential for morning and evening protection. The Prophet (ﷺ) used this daily for spiritual protection.
              </p>
              <Button variant="outline" className="w-full group hover:bg-primary hover:text-background bg-transparent">
                <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                Download PDF
              </Button>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-500 hover:scale-105 animate-scale-in delay-200">
              <BookOpen className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-[family-name:var(--font-cinzel)] font-bold text-primary mb-3">
                Surah An-Nas
              </h3>
              <p className="text-foreground/70 mb-4 leading-relaxed">
                Chapter 114 - Protection from internal evil, whispers of Shaytan, and Jinn. Combined with Al-Falaq,
                forms the strongest shield against all spiritual harm. Recite three times morning and evening.
              </p>
              <Button variant="outline" className="w-full group hover:bg-primary hover:text-background bg-transparent">
                <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                Download PDF
              </Button>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-500 hover:scale-105 animate-scale-in delay-300">
              <BookOpen className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-[family-name:var(--font-cinzel)] font-bold text-primary mb-3">
                Surah Al-Baqarah
              </h3>
              <p className="text-foreground/70 mb-4 leading-relaxed">
                Chapter 2 - The longest Surah that drives Shaytan away from homes. Last two verses provide comprehensive
                protection. Playing it in your home prevents Jinn from entering for three days, as mentioned in
                authentic Hadith.
              </p>
              <Button variant="outline" className="w-full group hover:bg-primary hover:text-background bg-transparent">
                <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                Download PDF
              </Button>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-500 hover:scale-105 animate-scale-in delay-400">
              <BookOpen className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-[family-name:var(--font-cinzel)] font-bold text-primary mb-3">
                Surah Al-Ikhlas
              </h3>
              <p className="text-foreground/70 mb-4 leading-relaxed">
                Chapter 112 - Equals one-third of the Quran in reward. Powerful for spiritual cleansing and affirming
                Tawhid (pure monotheism). Essential component of Ruqyah and daily protection routine.
              </p>
              <Button variant="outline" className="w-full group hover:bg-primary hover:text-background bg-transparent">
                <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                Download PDF
              </Button>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-500 hover:scale-105 animate-scale-in delay-500">
              <BookOpen className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-[family-name:var(--font-cinzel)] font-bold text-primary mb-3">
                Complete Ruqyah Collection
              </h3>
              <p className="text-foreground/70 mb-4 leading-relaxed">
                Comprehensive compilation of all essential verses used in Islamic exorcism and healing. Includes proper
                pronunciation guides, translations, and detailed instructions for self-ruqyah and treating others.
              </p>
              <Button variant="outline" className="w-full group hover:bg-primary hover:text-background bg-transparent">
                <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                Download Complete PDF
              </Button>
            </Card>
          </div>

          {/* Quran Image */}
          <div className="relative h-80 rounded-xl overflow-hidden animate-fade-in-up">
            <Image
              src="/open-quran-with-islamic-calligraphy-soft-light-spi.jpg"
              alt="Open Quran with beautiful Islamic calligraphy"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <p className="text-2xl font-[family-name:var(--font-cinzel)] text-primary text-center">
                "And We send down of the Quran that which is healing and mercy for the believers"
              </p>
              <p className="text-center text-foreground/60 mt-2">(Quran 17:82)</p>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Audio Resources Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-background to-background/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-[family-name:var(--font-cinzel)] font-bold text-primary mb-4 animate-fade-in-up">
              Audio & Video Resources
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto animate-fade-in-up delay-100">
              Listen and learn from authentic Ruqyah recitations and educational content
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-500 animate-slide-in-left">
              <Headphones className="w-16 h-16 text-primary mb-6 animate-float" />
              <h3 className="text-2xl font-[family-name:var(--font-cinzel)] font-bold text-primary mb-4">
                Ruqyah Audio Collection
              </h3>
              <p className="text-foreground/70 mb-6 leading-relaxed">
                Professional Ruqyah recitations by renowned scholars. These audio files can be played for
                self-treatment, home protection, and spiritual cleansing. Includes various lengths from 30 minutes to 3
                hours for different needs.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-foreground/80">
                  <Shield className="w-5 h-5 text-primary mr-3" />
                  Complete Ruqyah Treatment (2 hours)
                </li>
                <li className="flex items-center text-foreground/80">
                  <Shield className="w-5 h-5 text-primary mr-3" />
                  Short Ruqyah for Daily Protection (30 min)
                </li>
                <li className="flex items-center text-foreground/80">
                  <Shield className="w-5 h-5 text-primary mr-3" />
                  Ruqyah for Home and Family (1 hour)
                </li>
                <li className="flex items-center text-foreground/80">
                  <Shield className="w-5 h-5 text-primary mr-3" />
                  Ruqyah for Sleep and Dreams (45 min)
                </li>
              </ul>
              <Button className="w-full bg-primary text-background hover:bg-primary/90 group">
                <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                Download Audio Pack
              </Button>
            </Card>

            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-500 animate-slide-in-right">
              <Video className="w-16 h-16 text-primary mb-6 animate-float" />
              <h3 className="text-2xl font-[family-name:var(--font-cinzel)] font-bold text-primary mb-4">
                Educational Videos
              </h3>
              <p className="text-foreground/70 mb-6 leading-relaxed">
                In-depth video lectures on recognizing spiritual ailments, performing self-ruqyah, and understanding the
                Islamic perspective on the unseen world. Learn from experienced practitioners and scholars.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-foreground/80">
                  <Shield className="w-5 h-5 text-primary mr-3" />
                  How to Perform Self-Ruqyah
                </li>
                <li className="flex items-center text-foreground/80">
                  <Shield className="w-5 h-5 text-primary mr-3" />
                  Signs of Jinn Possession
                </li>
                <li className="flex items-center text-foreground/80">
                  <Shield className="w-5 h-5 text-primary mr-3" />
                  Understanding Sihr (Magic)
                </li>
                <li className="flex items-center text-foreground/80">
                  <Shield className="w-5 h-5 text-primary mr-3" />
                  Protection from Evil Eye
                </li>
              </ul>
              <Button className="w-full bg-primary text-background hover:bg-primary/90 group">
                <Video className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                Watch Videos
              </Button>
            </Card>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Books & Articles Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-[family-name:var(--font-cinzel)] font-bold text-primary mb-4 animate-fade-in-up">
              Books & Articles
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto animate-fade-in-up delay-100">
              Authentic Islamic literature on spiritual matters and paranormal phenomena
            </p>
          </div>

          <div className="relative h-96 rounded-xl overflow-hidden mb-12 animate-scale-in">
            <Image
              src="/islamic-books-and-manuscripts-with-arabic-calligra.jpg"
              alt="Islamic books and manuscripts with beautiful Arabic calligraphy"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "The World of the Jinn and Devils",
                author: "Dr. Umar al-Ashqar",
                description:
                  "Comprehensive study on Jinn from Quran and Hadith. Explores their creation, abilities, interaction with humans, and how to protect yourself from their harm.",
              },
              {
                title: "Weapon of the Believer",
                author: "Imam Al-Qahtani",
                description:
                  "Collection of authentic supplications (Du'as) from Quran and Sunnah for every situation. Essential daily protection and spiritual armor.",
              },
              {
                title: "Kitab al-Tawheed",
                author: "Muhammad ibn Abdul Wahhab",
                description:
                  "Foundation of Islamic monotheism. Understanding pure Tawhid is the strongest protection against all spiritual harm and the basis of Ruqyah effectiveness.",
              },
              {
                title: "The Evil Eye",
                author: "Sheikh Dr. Waheed ibn Abdus Salaam Baali",
                description:
                  "In-depth study of Hasad (envy) and the Evil Eye from Islamic perspective. Includes symptoms, protection methods, and treatment protocols.",
              },
              {
                title: "Magic and Witchcraft in Islam",
                author: "Various Scholars",
                description:
                  "Islamic ruling on magic (Sihr), types of sorcery, how it affects people, and authentic methods of breaking spells through Ruqyah and proper Islamic practices.",
              },
              {
                title: "Fortress of the Muslim",
                author: "Sa'eed ibn Wahf al-Qahtani",
                description:
                  "Pocket-sized collection of daily adhkar and supplications. Your daily shield against Shaytan, evil eye, and spiritual harm. Available in multiple languages.",
              },
            ].map((book, index) => (
              <Card
                key={index}
                className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-500 hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <FileText className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-[family-name:var(--font-cinzel)] font-bold text-primary mb-2">
                  {book.title}
                </h3>
                <p className="text-sm text-foreground/60 mb-3 italic">by {book.author}</p>
                <p className="text-foreground/70 mb-4 leading-relaxed text-sm">{book.description}</p>
                <Button
                  variant="outline"
                  className="w-full group hover:bg-primary hover:text-background bg-transparent"
                >
                  <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                  Download
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Daily Protection Guide */}
      <section className="py-20 px-4 bg-gradient-to-b from-background/50 to-background">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-[family-name:var(--font-cinzel)] font-bold text-primary mb-8 text-center animate-fade-in-up">
              Daily Protection Routine
            </h2>
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/30 animate-glow-border">
              <div className="space-y-6">
                <div className="animate-slide-in-left">
                  <h3 className="text-2xl font-[family-name:var(--font-cinzel)] text-primary mb-3">
                    Morning Protection
                  </h3>
                  <ul className="space-y-2 text-foreground/80 leading-relaxed">
                    <li className="flex items-start">
                      <span className="text-primary mr-3">•</span>
                      Recite Ayat al-Kursi once
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-3">•</span>
                      Recite the last three Surahs (Al-Ikhlas, Al-Falaq, An-Nas) three times each
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-3">•</span>
                      Say: "Bismillahi alladhi la yadurru ma'asmihi shay'un fil-ardi wala fis-sama'i wahuwa
                      as-sami'ul-'alim" (3 times)
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-3">•</span>
                      Recite morning adhkar from authentic sources
                    </li>
                  </ul>
                </div>

                <div className="animate-slide-in-right delay-200">
                  <h3 className="text-2xl font-[family-name:var(--font-cinzel)] text-primary mb-3">
                    Evening Protection
                  </h3>
                  <ul className="space-y-2 text-foreground/80 leading-relaxed">
                    <li className="flex items-start">
                      <span className="text-primary mr-3">•</span>
                      Repeat morning adhkar in the evening
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-3">•</span>
                      Recite first four verses and last three verses of Surah Al-Kahf on Friday
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-3">•</span>
                      Say evening adhkar before Maghrib prayer
                    </li>
                  </ul>
                </div>

                <div className="animate-slide-in-left delay-400">
                  <h3 className="text-2xl font-[family-name:var(--font-cinzel)] text-primary mb-3">Before Sleep</h3>
                  <ul className="space-y-2 text-foreground/80 leading-relaxed">
                    <li className="flex items-start">
                      <span className="text-primary mr-3">•</span>
                      Perform Wudu (ablution)
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-3">•</span>
                      Recite Ayat al-Kursi
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-3">•</span>
                      Recite last two verses of Surah Al-Baqarah
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-3">•</span>
                      Blow into cupped hands after reciting the last three Surahs and wipe over body three times
                    </li>
                  </ul>
                </div>
              </div>

              <Button className="w-full mt-8 bg-primary text-background hover:bg-primary/90 text-lg py-6 group">
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Download Complete Daily Routine PDF
              </Button>
            </Card>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <Card className="p-12 bg-gradient-to-br from-primary/10 to-background border-primary/30 text-center animate-scale-in">
            <h2 className="text-3xl font-[family-name:var(--font-cinzel)] font-bold text-primary mb-4">
              Need Personalized Guidance?
            </h2>
            <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
              Contact us for customized resource recommendations based on your specific situation
            </p>
            <Link href="/contact">
              <Button className="bg-primary text-background hover:bg-primary/90 text-lg px-8 py-6 group">
                Contact Us
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Button>
            </Link>
          </Card>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  )
}
