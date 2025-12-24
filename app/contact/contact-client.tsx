"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ScrollToTop } from "@/components/scroll-to-top"
import { SectionDivider } from "@/components/section-divider"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, ChevronRight } from "lucide-react"
import Image from "next/image"
import { ORG_CONFIG } from "@/lib/constants"
import { useLanguage } from "@/context/LanguageContext"

export default function ContactClient() {
    const { t, dir } = useLanguage()

    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-4 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
                <div className="container mx-auto relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-[family-name:var(--font-cinzel)] font-bold text-primary mb-6 animate-fade-in-up text-balance">
                            {t("contact_title")}
                        </h1>
                        <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed animate-fade-in-up delay-100 text-pretty">
                            {t("contact_subtitle")}
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
                                    {t("get_in_touch")}
                                </h2>
                                <p className="text-foreground/70 leading-relaxed mb-8">
                                    {t("contact_desc")}
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
                                                {t("phone")}
                                            </h3>
                                            <p className="text-foreground/80" dir="ltr">{ORG_CONFIG.phone}</p>
                                            <p className="text-sm text-foreground/60 mt-1">{t("emergency_247")}</p>
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
                                                {t("whatsapp")}
                                            </h3>
                                            <p className="text-foreground/80" dir="ltr">{ORG_CONFIG.whatsapp.number}</p>
                                            <p className="text-sm text-foreground/60 mt-1">{t("fast_response")}</p>
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
                                                {t("email")}
                                            </h3>
                                            <p className="text-foreground/80">{ORG_CONFIG.email}</p>
                                            <p className="text-sm text-foreground/60 mt-1">{t("email_response")}</p>
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
                                                {t("location")}
                                            </h3>
                                            <p className="text-foreground/80">{ORG_CONFIG.address}</p>
                                            <p className="text-sm text-foreground/60 mt-1">{t("by_appointment")}</p>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="animate-slide-in-right">
                            <Card className="p-6 md:p-10 bg-card/50 backdrop-blur-sm border-primary/30 animate-glow-border mb-8">
                                <h2 className="text-3xl font-[family-name:var(--font-cinzel)] font-bold text-primary mb-6">
                                    {t("send_message")}
                                </h2>
                                <form className="space-y-6">
                                    <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                                        <div className="space-y-2">
                                            <label htmlFor="firstName" className="text-sm font-medium text-foreground/80">
                                                {t("first_name")} *
                                            </label>
                                            <Input
                                                id="firstName"
                                                placeholder={t("first_name")}
                                                className="bg-background/50 border-border/50 focus:border-primary transition-colors"
                                                required
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="lastName" className="text-sm font-medium text-foreground/80">
                                                {t("last_name")} *
                                            </label>
                                            <Input
                                                id="lastName"
                                                placeholder={t("last_name")}
                                                className="bg-background/50 border-border/50 focus:border-primary transition-colors"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium text-foreground/80">
                                            {t("email")} *
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
                                        <label htmlFor="subject" className="text-sm font-medium text-foreground/80">
                                            {t("subject")} *
                                        </label>
                                        <Input
                                            id="subject"
                                            placeholder={t("subject")}
                                            className="bg-background/50 border-border/50 focus:border-primary transition-colors"
                                            required
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-sm font-medium text-foreground/80">
                                            {t("message")} *
                                        </label>
                                        <Textarea
                                            id="message"
                                            placeholder={t("message")}
                                            rows={6}
                                            className="bg-background/50 border-border/50 focus:border-primary transition-colors resize-none"
                                            required
                                        />
                                    </div>

                                    <Button className="w-full bg-primary text-background hover:bg-primary/90 text-base md:text-lg py-5 md:py-6 group transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 font-bold">
                                        <Send className={`mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform ${dir === 'rtl' ? 'rotate-180' : ''}`} />
                                        {t("submit")}
                                    </Button>
                                </form>
                            </Card>
                        </div>
                    </div>

                    {/* Office Location Map */}
                    <div className="mt-12 animate-fade-in-up">
                        <Card className="overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm">
                            <div className="p-6 border-b border-border/50">
                                <h3 className="text-xl font-[family-name:var(--font-cinzel)] font-bold text-primary flex items-center gap-2">
                                    <MapPin className="w-5 h-5" />
                                    {t("office_location")}
                                </h3>
                            </div>
                            <div className="h-[600px] w-full grayscale contrast-125 opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937595!2d2.292292615509614!3d48.858373608622074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sEiffel%20Tower!5e0!3m2!1sen!2sfr!4v1647228000000!5m2!1sen!2sfr"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen={true}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title={t("office_location")}
                                />
                            </div>
                            <div className="p-6 bg-primary/5 flex items-center justify-between">
                                <div className="flex items-center gap-4 text-sm text-foreground/70">
                                    <Clock className="w-4 h-4 text-primary" />
                                    <span>{t("by_appointment")}</span>
                                </div>
                                <Button variant="outline" size="sm" className="bg-transparent border-primary/30 text-primary hover:bg-primary/10 transition-all duration-300">
                                    <span className="mr-2 h-4 w-4">
                                        <Send className={`w-full h-full ${dir === 'rtl' ? 'rotate-180' : ''}`} />
                                    </span>
                                    {t("get_directions")}
                                </Button>
                            </div>
                        </Card>
                    </div>
                </div >
            </section >


            <Footer />
            <WhatsAppButton />
            <ScrollToTop />
        </div >
    )
}
