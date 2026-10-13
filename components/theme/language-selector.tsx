"use client"

import * as React from "react"
import { Globe, ChevronDown } from "lucide-react"
import { useState, useRef, useEffect } from "react"
import { useParams } from 'next/navigation'
import { useRouter, usePathname } from '@/i18n/navigation'

const languages = [
  { code: "it", label: "Italiano", flag: "🇮🇹" },
  { code: "en", label: "English", flag: "🇬🇧" },
]

export function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()
  const params = useParams()
  const dropdownRef = useRef<HTMLDivElement>(null)

  const currentLocale = params.locale as string || 'it'
  const selectedLang = languages.find(l => l.code === currentLocale) || languages[0]

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const handleLanguageChange = (lang: typeof languages[0]) => {
    setIsOpen(false)
    
    // usePathname di next-intl restituisce il path senza locale: il router antepone quello nuovo
    router.replace(pathname, { locale: lang.code as 'it' | 'en' })
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 p-2 rounded-md hover:bg-accent transition-colors"
        aria-label="Select language"
        aria-expanded={isOpen}
      >
        <Globe className="h-5 w-5" aria-hidden="true" />
        <span className="hidden sm:inline text-sm font-medium">{selectedLang.code.toUpperCase()}</span>
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-48 bg-popover rounded-lg shadow-lg border border-border py-2 z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang)}
              className={`w-full flex items-center gap-3 px-4 py-2 text-left hover:bg-accent transition-colors ${
                selectedLang.code === lang.code ? "bg-accent" : ""
              }`}
            >
              <span className="text-xl">{lang.flag}</span>
              <span className="text-sm font-medium">{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

/** Variante a pulsanti affiancati (IT | EN), usata nel menu mobile. */
export function LanguageSegmented({ onChange }: { onChange?: () => void }) {
  const router = useRouter()
  const pathname = usePathname()
  const params = useParams()
  const currentLocale = params.locale as string || 'it'

  const handleLanguageChange = (code: string) => {
    router.replace(pathname, { locale: code as 'it' | 'en' })
    onChange?.()
  }

  return (
    <div className="inline-flex items-center gap-1 rounded-full border border-border p-1" role="group" aria-label="Select language">
      <Globe className="ml-2 mr-1 h-4 w-4 text-muted-foreground" aria-hidden="true" />
      {languages.map((lang) => {
        const active = lang.code === currentLocale
        return (
          <button
            key={lang.code}
            type="button"
            onClick={() => handleLanguageChange(lang.code)}
            aria-pressed={active}
            className={`h-8 rounded-full px-3 text-sm font-semibold transition-colors ${
              active
                ? "bg-gradient-to-r from-bitcoin-blue to-bitcoin-blue-light text-white"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {lang.code.toUpperCase()}
          </button>
        )
      })}
    </div>
  )
}
