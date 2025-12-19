import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ScrollToTop } from "@/components/scroll-to-top"
import { SectionDivider } from "@/components/section-divider"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock, MessageSquare, Send } from "lucide-react"
import Image from "next/image"
import { ORG_CONFIG } from "@/lib/constants"

export const metadata = {
  title: `Contact Us - ${ORG_CONFIG.name}`,
  description:
    "Contact us for Islamic spiritual healing, Ruqyah services, and paranormal consultations. Available 24/7 for emergency spiritual assistance. Professional guidance based on Quran and Sunnah.",
  keywords: [
    "contact ruqyah",
    "spiritual healing consultation",
    "Islamic exorcist contact",
    "Ruqyah appointment",
    "jinn removal help",
    "sihr treatment contact",
  ],
  openGraph: {
    title: `Contact ${ORG_CONFIG.name}`,
    description:
      "Reach out for professional Islamic spiritual healing and Ruqyah services. Emergency consultations available.",
    type: "website",
  },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-[family-name:var(--font-cinzel)] font-bold text-primary mb-6 animate-fade-in-up text-balance">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed animate-fade-in-up delay-100 text-pretty">
              Reach out for consultations, appointments, or inquiries about our services
            </p>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Contact Information & Form Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Information */}
            <div className="space-y-8 animate-slide-in-left">
              <div>
                <h2 className="text-3xl font-[family-name:var(--font-cinzel)] font-bold text-primary mb-6">
                  Get In Touch
                </h2>
                <p className="text-foreground/70 leading-relaxed mb-8">
                  We are here to help you with spiritual healing, Ruqyah services, and guidance. All consultations are
                  conducted with complete confidentiality and Islamic principles. Feel free to reach out through any of
                  the methods below.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-6">
                <Card className="p-6 md:p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-500 hover:scale-[1.02] group">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-[family-name:var(--font-cinzel)] font-bold text-primary mb-2">
                        Phone
                      </h3>
                      <p className="text-foreground/80">{ORG_CONFIG.phone}</p>
                      <p className="text-sm text-foreground/60 mt-1">Available 24/7 for emergencies</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 md:p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-500 hover:scale-[1.02] group">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <MessageSquare className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-[family-name:var(--font-cinzel)] font-bold text-primary mb-2">
                        WhatsApp
                      </h3>
                      <p className="text-foreground/80">{ORG_CONFIG.whatsapp.number}</p>
                      <p className="text-sm text-foreground/60 mt-1">Fastest response for urgent matters</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 md:p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-500 hover:scale-[1.02] group">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-[family-name:var(--font-cinzel)] font-bold text-primary mb-2">
                        Email
                      </h3>
                      <p className="text-foreground/80">{ORG_CONFIG.email}</p>
                      <p className="text-sm text-foreground/60 mt-1">Response within 24-48 hours</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 md:p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-500 hover:scale-[1.02] group">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-[family-name:var(--font-cinzel)] font-bold text-primary mb-2">
                        Location
                      </h3>
                      <p className="text-foreground/80">{ORG_CONFIG.address}</p>
                      <p className="text-sm text-foreground/60 mt-1">By appointment only</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 md:p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-500 hover:scale-[1.02] group">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-[family-name:var(--font-cinzel)] font-bold text-primary mb-2">
                        Office Hours
                      </h3>
                      <div className="space-y-1 text-foreground/80">
                        <p>Saturday - Thursday: 9:00 AM - 9:00 PM</p>
                        <p>Friday: 2:00 PM - 10:00 PM</p>
                        <p className="text-sm text-primary mt-2">Emergency consultations available 24/7</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Image */}
              <div className="relative h-64 md:h-80 rounded-xl overflow-hidden animate-float shadow-2xl shadow-primary/20">
                <Image
                  src="/muslim-family-praying-together-peaceful-islamic-en.jpg"
                  alt="Muslim family in peaceful prayer environment"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-slide-in-right">
              <Card className="p-6 md:p-10 bg-card/50 backdrop-blur-sm border-primary/30 animate-glow-border">
                <h2 className="text-3xl font-[family-name:var(--font-cinzel)] font-bold text-primary mb-6">
                  Send us a Message
                </h2>
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-medium text-foreground/80">
                        First Name *
                      </label>
                      <Input
                        id="firstName"
                        placeholder="Enter your first name"
                        className="bg-background/50 border-border/50 focus:border-primary transition-colors"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-medium text-foreground/80">
                        Last Name *
                      </label>
                      <Input
                        id="lastName"
                        placeholder="Enter your last name"
                        className="bg-background/50 border-border/50 focus:border-primary transition-colors"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground/80">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      className="bg-background/50 border-border/50 focus:border-primary transition-colors"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-foreground/80">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      className="bg-background/50 border-border/50 focus:border-primary transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-foreground/80">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      placeholder="How can we help you?"
                      className="bg-background/50 border-border/50 focus:border-primary transition-colors"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground/80">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Please describe your situation or inquiry in detail..."
                      rows={6}
                      className="bg-background/50 border-border/50 focus:border-primary transition-colors resize-none"
                      required
                    />
                    <p className="text-xs text-foreground/50">All information is kept strictly confidential</p>
                  </div>

                  <Button className="w-full bg-primary text-background hover:bg-primary/90 text-base md:text-lg py-5 md:py-6 group transition-all duration-300 hover:shadow-lg hover:shadow-primary/30">
                    <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </Button>
                </form>
              </Card>

              {/* Privacy Notice */}
              <Card className="mt-6 p-6 bg-primary/5 border-primary/30 animate-fade-in-up delay-200">
                <h3 className="text-lg font-[family-name:var(--font-cinzel)] font-bold text-primary mb-3">
                  Privacy & Confidentiality
                </h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  We take your privacy seriously. All consultations and communications are kept completely confidential
                  in accordance with Islamic principles and professional ethics. Your personal information will never be
                  shared with third parties without your explicit consent.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-background/50 to-background">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-cinzel)] font-bold text-primary mb-4 animate-fade-in-up text-balance">
              Frequently Asked Questions
            </h2>
            <p className="text-base md:text-lg text-foreground/70 max-w-2xl mx-auto animate-fade-in-up delay-100 text-pretty">
              Quick answers to common questions about our services
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "How do I book an appointment?",
                answer:
                  "You can book an appointment by calling us, sending a WhatsApp message, or filling out the contact form above. We will respond within 24 hours to schedule a convenient time. Emergency cases are prioritized and can be accommodated immediately.",
              },
              {
                question: "Do you offer remote/online Ruqyah sessions?",
                answer:
                  "Yes, we offer remote Ruqyah sessions via video call for those who cannot visit in person. The effectiveness of Ruqyah is not diminished by distance. We will guide you through the process and provide personalized treatment plans.",
              },
              {
                question: "Is the consultation free?",
                answer:
                  "Initial consultations (15-20 minutes) are free. We discuss your situation and determine the best course of action. Full Ruqyah sessions and treatments have fees which will be discussed during the consultation. We never turn away anyone due to financial constraints.",
              },
              {
                question: "What information should I prepare for my consultation?",
                answer:
                  "Please prepare details about your symptoms, when they started, any recurring patterns, dreams you've had, and any relevant medical history. If you suspect magic or evil eye, provide context about when you believe it started and any potential sources.",
              },
              {
                question: "How long does treatment usually take?",
                answer:
                  "Treatment duration varies greatly depending on the condition. Simple cases may resolve in 1-3 sessions, while severe cases of possession or magic may require several months of treatment. We provide realistic timelines during your consultation.",
              },
              {
                question: "Do you work with other medical professionals?",
                answer:
                  "Yes, we strongly encourage patients to continue any medical treatment they are receiving. Ruqyah complements but does not replace medical care. We work alongside doctors and mental health professionals when appropriate.",
              },
            ].map((faq, index) => (
              <Card
                key={index}
                className="p-6 md:p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-500 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-lg font-[family-name:var(--font-cinzel)] font-bold text-primary mb-3">
                  {faq.question}
                </h3>
                <p className="text-foreground/70 leading-relaxed">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Map Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-cinzel)] font-bold text-primary mb-4 animate-fade-in-up text-balance">
              Find Us
            </h2>
            <p className="text-base md:text-lg text-foreground/70 max-w-2xl mx-auto animate-fade-in-up delay-100 text-pretty">
              Visit us at our office for in-person consultations
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <Card className="overflow-hidden border-primary/30 animate-scale-in shadow-2xl shadow-primary/10">
              <div className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537353159042!3d-37.81720974201459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2s!4v1647586734716!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-700"
                  title="Office Location Map"
                />
              </div>
              <div className="p-6 md:p-8 bg-card/80 backdrop-blur-sm">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-[family-name:var(--font-cinzel)] font-bold text-primary mb-2">
                      Office Location
                    </h3>
                    <p className="text-foreground/80 mb-4">{ORG_CONFIG.address}</p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button className="bg-primary text-background hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/30">
                        <MapPin className="mr-2 h-4 w-4" />
                        Get Directions
                      </Button>
                      <Button
                        variant="outline"
                        className="border-primary text-primary hover:bg-primary/10 transition-all duration-300 bg-transparent"
                      >
                        <Phone className="mr-2 h-4 w-4" />
                        Call Before Visit
                      </Button>
                    </div>
                    <p className="text-sm text-foreground/60 mt-4">
                      Please schedule an appointment before visiting. Walk-ins may experience wait times.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Emergency Contact Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <Card className="p-8 md:p-12 bg-gradient-to-br from-destructive/10 to-background border-destructive/30 text-center animate-scale-in">
            <h2 className="text-3xl font-[family-name:var(--font-cinzel)] font-bold text-destructive mb-4">
              Emergency Situations
            </h2>
            <p className="text-lg text-foreground/70 mb-6 max-w-2xl mx-auto">
              If you are experiencing a spiritual emergency (severe possession symptoms, immediate danger, or acute
              distress), please contact us immediately
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-destructive text-white hover:bg-destructive/90 text-base md:text-lg px-6 md:px-8 py-5 md:py-6 transition-all duration-300 hover:shadow-lg hover:shadow-destructive/30">
                <Phone className="mr-2 h-5 w-5" />
                Call Emergency Line
              </Button>
              <Button
                variant="outline"
                className="border-destructive text-destructive hover:bg-destructive/10 text-base md:text-lg px-6 md:px-8 py-5 md:py-6 bg-transparent transition-all duration-300"
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                WhatsApp Emergency
              </Button>
            </div>
            <p className="text-sm text-foreground/50 mt-6">Available 24/7 for critical situations</p>
          </Card>
        </div>
      </section>

      <SectionDivider />

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  )
}
