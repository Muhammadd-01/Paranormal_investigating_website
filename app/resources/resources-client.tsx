"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SectionDivider } from "@/components/section-divider"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
    BookOpen,
    Music,
    Video,
    FileText,
    Download,
    ExternalLink,
    ChevronRight,
    Shield,
    Moon,
    Sun
} from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/context/LanguageContext"

export default function ResourcesClient() {
    const { t } = useLanguage()

    const quranicResources = [
        {
            title: t("ayat_al_kursi"),
            description: t("ayat_al_kursi_desc"),
            icon: Shield,
        },
        {
            title: t("surah_al_falaq"),
            description: t("surah_al_falaq_desc"),
            icon: Shield,
        },
        {
            title: t("surah_an_nas"),
            description: t("surah_an_nas_desc"),
            icon: Shield,
        },
        {
            title: t("surah_al_baqarah"),
            description: t("surah_al_baqarah_desc"),
            icon: Shield,
        },
        {
            title: t("surah_al_ikhlas"),
            description: t("surah_al_ikhlas_desc"),
            icon: Shield,
        },
        {
            title: t("complete_ruqyah"),
            description: t("complete_ruqyah_desc"),
            icon: Shield,
        },
    ]

    const protectionGuide = [
        {
            title: t("morning_protection"),
            icon: Sun,
            items: [
                t("prot_item_ayat_1x"),
                t("prot_item_3quls_3x"),
                t("prot_item_morning_duas"),
            ],
        },
        {
            title: t("evening_protection"),
            icon: Moon,
            items: [
                t("prot_item_ayat_1x"),
                t("prot_item_3quls_3x"),
                t("prot_item_last2_baqarah"),
            ],
        },
        {
            title: t("before_sleep"),
            icon: Shield,
            items: [
                t("prot_item_ayat"),
                t("prot_item_last2_baqarah"),
                t("prot_item_cupping"),
            ],
        },
    ]

    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-4 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
                <div className="container mx-auto relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-[family-name:var(--font-cinzel)] font-bold text-primary mb-6 animate-fade-in-up text-balance">
                            {t("resources_title")}
                        </h1>
                        <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed animate-fade-in-up delay-100 text-pretty">
                            {t("resources_subtitle")}
                        </p>
                    </div>
                </div>
            </section>

            <SectionDivider />

            {/* Verse Quote */}
            <section className="py-12 px-4 container mx-auto">
                <div className="relative h-80 rounded-xl overflow-hidden animate-fade-in-up">
                    <Image
                        src="/open-quran-with-islamic-calligraphy-soft-light-spi.jpg"
                        alt="Open Quran"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                    <div className="absolute bottom-8 left-8 right-8 text-center">
                        <p className="text-2xl font-[family-name:var(--font-cinzel)] text-primary">
                            {t("faith_quote")}
                        </p>
                        <p className="text-foreground/60 mt-2">{t("faith_surah")}</p>
                    </div>
                </div>
            </section>

            {/* Quranic Resources */}
            <section className="py-20 px-4 container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-[family-name:var(--font-cinzel)] font-bold text-primary mb-4">
                        {t("resources_quranic")}
                    </h2>
                    <p className="text-foreground/60 max-w-2xl mx-auto">
                        {t("resources_quranic_desc")}
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {quranicResources.map((resource, index) => (
                        <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 group">
                            <CardContent className="p-8">
                                <resource.icon className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform" />
                                <h3 className="text-xl font-[family-name:var(--font-cinzel)] font-bold text-primary mb-4">
                                    {resource.title}
                                </h3>
                                <p className="text-foreground/70 leading-relaxed">
                                    {resource.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            <SectionDivider />

            {/* Audio & Video Section */}
            <section className="py-20 px-4 bg-primary/5">
                <div className="container mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-[family-name:var(--font-cinzel)] font-bold text-primary mb-4">
                            {t("audio_video_resources")}
                        </h2>
                        <p className="text-foreground/60 max-w-2xl mx-auto">
                            {t("audio_video_resources_desc")}
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                            <CardContent className="p-8">
                                <Music className="w-12 h-12 text-primary mb-6" />
                                <h3 className="text-2xl font-[family-name:var(--font-cinzel)] font-bold text-primary mb-4">
                                    {t("ruqyah_audio")}
                                </h3>
                                <p className="text-foreground/70 leading-relaxed mb-8">
                                    {t("ruqyah_audio_desc")}
                                </p>
                                <Button className="w-full group">
                                    <Download className="mr-2 h-5 w-5 group-hover:-translate-y-1 transition-transform" />
                                    {t("download_pdf")}
                                </Button>
                            </CardContent>
                        </Card>
                        <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                            <CardContent className="p-8">
                                <Video className="w-12 h-12 text-primary mb-6" />
                                <h3 className="text-2xl font-[family-name:var(--font-cinzel)] font-bold text-primary mb-4">
                                    {t("educational_videos")}
                                </h3>
                                <p className="text-foreground/70 leading-relaxed mb-8">
                                    {t("educational_videos_desc")}
                                </p>
                                <Button variant="outline" className="w-full group bg-transparent border-primary/30 text-primary hover:bg-primary/10">
                                    <Video className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                                    {t("watch_videos")}
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            <SectionDivider />

            {/* Daily Protection Guide */}
            <section className="py-20 px-4 container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-[family-name:var(--font-cinzel)] font-bold text-primary mb-4">
                        {t("daily_protection")}
                    </h2>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {protectionGuide.map((guide, index) => (
                        <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50">
                            <CardContent className="p-8">
                                <guide.icon className="w-12 h-12 text-primary mb-6" />
                                <h3 className="text-xl font-[family-name:var(--font-cinzel)] font-bold text-primary mb-6">
                                    {guide.title}
                                </h3>
                                <ul className="space-y-4">
                                    {guide.items.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-foreground/70 text-sm">
                                            <ChevronRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            <Footer />
            <WhatsAppButton />
            <ScrollToTop />
        </div>
    )
}
