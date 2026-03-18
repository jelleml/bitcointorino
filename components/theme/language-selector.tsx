"use client"

import * as React from "react"
import { Globe, ChevronDown } from "lucide-react"
import { useState, useRef, useEffect } from "react"
import { useRouter, usePathname } from 'next/navigation'
import { useParams } from 'next/navigation'

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
    
    // Costruiamo il nuovo path sostituendo il locale
    const segments = pathname.split('/')
    segments[1] = lang.code // Assumendo che il locale sia sempre il primo segmento
    
    router.push(segments.join('/'))
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
        <div className="absolute right-0 top-full mt-2 w-48 bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-2 z-50">
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
