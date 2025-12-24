"use client"

import React from "react"
import { useLanguage } from "@/context/LanguageContext"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"

const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "ur", name: "Urdu", flag: "🇵🇰" },
    { code: "ar", name: "Arabic", flag: "🇸🇦" },
]


export function LanguageSwitcher() {
    const { language, setLanguage, t } = useLanguage()

    const currentLanguage = languages.find((lang) => lang.code === language) || languages[0]

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="flex items-center gap-2 text-foreground/80 hover:text-primary">
                    <span className="text-lg">{currentLanguage.flag}</span>
                    <span className="hidden sm:inline-block">{currentLanguage.name}</span>
                    <Globe className="h-4 w-4 ml-1 opacity-50" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-background/95 backdrop-blur-md border-primary/20">
                {languages.map((lang) => (
                    <DropdownMenuItem
                        key={lang.code}
                        className={`flex items-center gap-2 cursor-pointer ${language === lang.code ? "bg-primary/10 text-primary" : ""
                            }`}
                        onClick={() => setLanguage(lang.code as any)}
                    >
                        <span className="text-lg">{lang.flag}</span>
                        <span>{lang.name}</span>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
