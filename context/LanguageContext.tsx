"use client"

import React, { createContext, useContext, useState, useEffect } from "react"
import { translations, Language } from "@/lib/translations"

type LanguageContextType = {
    language: Language
    setLanguage: (lang: Language) => void
    t: (key: keyof (typeof translations)["en"]) => string
    dir: "ltr" | "rtl"
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [language, setLanguageState] = useState<Language>("en")

    useEffect(() => {
        const savedLanguage = localStorage.getItem("language") as Language
        if (savedLanguage && (savedLanguage === "en" || savedLanguage === "ur" || savedLanguage === "ar")) {
            setLanguageState(savedLanguage)
        }
    }, [])

    useEffect(() => {
        document.documentElement.lang = language
        document.documentElement.dir = (language === "ur" || language === "ar") ? "rtl" : "ltr"
    }, [language])

    const setLanguage = (lang: Language) => {
        setLanguageState(lang)
        localStorage.setItem("language", lang)
    }

    const t = (key: keyof (typeof translations)["en"]) => {
        return translations[language][key] || translations["en"][key] || key
    }

    const dir = (language === "ur" || language === "ar") ? "rtl" : "ltr"

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
            <div dir={dir}>{children}</div>
        </LanguageContext.Provider>
    )
}

export const useLanguage = () => {
    const context = useContext(LanguageContext)
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider")
    }
    return context
}
