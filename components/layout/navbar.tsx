"use client"

import {Link} from "@/i18n/navigation"
import type { Pathname } from "@/i18n/routing"
import { useState, useRef, useEffect } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import { LanguageSelector, LanguageSegmented } from "@/components/theme/language-selector"
import { ThemeToggle } from "@/components/theme/theme-toggle"
import { useTranslations } from 'next-intl'

export function Navbar() {
  const t = useTranslations('Navbar');
  const [isOpen, setIsOpen] = useState(false)
  const [ecosystemOpen, setEcosystemOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const toggleMenu = () => setIsOpen(!isOpen)

  const handleEcosystemEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setEcosystemOpen(true)
  }

  const handleEcosystemLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setEcosystemOpen(false)
    }, 200)
  }

  const ecosystemLinks = [
    { href: "/ecosystem/meetup", label: t('people'), external: false },
    { href: "/ecosystem/merchant", label: t('activities'), external: false },
    { href: "/ecosystem/spazi", label: t('spaces'), external: false },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`sticky top-0 z-50 w-full border-b transition-all duration-500 ${
        scrolled
          ? 'bg-white/90 supports-[backdrop-filter]:bg-white/80 dark:bg-[#00052E]/90 dark:supports-[backdrop-filter]:bg-[#00052E]/30 backdrop-blur-2xl backdrop-saturate-[1.8] border-white/40 dark:border-white/10 shadow-[0_8px_32px_-12px_rgba(7,69,141,0.3),inset_0_1px_0_rgba(255,255,255,0.5)] dark:shadow-[0_8px_32px_-12px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.08)]'
          : 'bg-background border-transparent'
      }`}
    >
      {/* Riga luminosa sotto la navbar */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-bitcoin-blue/60 to-transparent transition-opacity duration-500 dark:via-[#93C2F7]/50 ${scrolled ? 'opacity-100' : 'opacity-0'}`}
      />
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <div className="flex items-center">
              {/* Su mobile solo il pittogramma: il logo completo sta nella hero */}
              <img src="/bitcoin-torino-pictogram.svg" alt="Bitcoin Torino" className="h-7 w-auto md:hidden" />
              <img src="/bitcoin-torino-logo-small.svg" alt="Bitcoin Torino" className="h-[56px] w-auto hidden md:block dark:md:hidden" />
              <img src="/bitcoin-torino-logo-small-dark.svg" alt="Bitcoin Torino" className="h-[56px] w-auto hidden dark:md:block" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <div
              className="relative"
              onMouseEnter={handleEcosystemEnter}
              onMouseLeave={handleEcosystemLeave}
            >
              <Link
                href="/ecosystem"
                className="nav-link text-foreground font-medium hover:text-bitcoin-blue transition-colors inline-flex items-center py-2"
              >
                {t('ecosystem')}
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${ecosystemOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
              </Link>

              {ecosystemOpen && (
                <div
                  className="absolute top-full left-0 pt-2"
                  onMouseEnter={handleEcosystemEnter}
                  onMouseLeave={handleEcosystemLeave}
                >
                  <div className="w-52 bg-popover/95 backdrop-blur-xl rounded-xl shadow-2xl shadow-bitcoin-blue/15 border border-border p-1.5 animate-in fade-in-0 zoom-in-95 slide-in-from-top-2 duration-200 [&>*]:rounded-lg">
                    {ecosystemLinks.map((link) => (
                      link.external ? (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-4 py-2 text-foreground hover:bg-bitcoin-blue/10 hover:text-bitcoin-blue transition-colors"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          key={link.href}
                          href={link.href as Pathname}
                          className="block px-4 py-2 text-foreground hover:bg-bitcoin-blue/10 hover:text-bitcoin-blue transition-colors"
                        >
                          {link.label}
                        </Link>
                      )
                    ))}
                  </div>
                </div>
              )}
            </div>

            <a
              href="https://luma.com/bitcoin-torino-calendar"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link text-foreground font-medium hover:text-bitcoin-blue transition-colors py-2"
            >
              {t('events')}
            </a>

            <Link
              href="/faq"
              className="nav-link text-foreground font-medium hover:text-bitcoin-blue transition-colors py-2"
            >
              {t('faq')}
            </Link>


            <div className="flex items-center gap-2 ml-4 pl-4 border-l border-border">
              <LanguageSelector />
              <ThemeToggle />
            </div>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md hover:bg-accent transition-colors"
              aria-label={isOpen ? "Chiudi menu" : "Apri menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t py-4 space-y-4 animate-in fade-in-0 slide-in-from-top-2 duration-300">
            <div>
              <button
                onClick={() => setEcosystemOpen(!ecosystemOpen)}
                className="flex items-center justify-between w-full py-2 text-foreground font-medium hover:text-bitcoin-blue transition-colors"
              >
                {t('ecosystem')}
                <ChevronDown className={`h-4 w-4 transition-transform ${ecosystemOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
              </button>
              {ecosystemOpen && (
                <div className="pl-4 mt-2 space-y-2">
                  {ecosystemLinks.map((link) => (
                    link.external ? (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block py-2 text-sm text-muted-foreground hover:text-bitcoin-blue transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        key={link.href}
                        href={link.href as Pathname}
                        className="block py-2 text-sm text-muted-foreground hover:text-bitcoin-blue transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.label}
                      </Link>
                    )
                  ))}
                </div>
              )}
            </div>

            <a
              href="https://luma.com/bitcoin-torino-calendar"
              target="_blank"
              rel="noopener noreferrer"
              className="block py-2 text-foreground font-medium hover:text-bitcoin-blue transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {t('events')}
            </a>

            <Link
              href="/faq"
              className="block py-2 text-foreground font-medium hover:text-bitcoin-blue transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {t('faq')}
            </Link>

            {/* Lingua e tema: su mobile stanno nel menu */}
            <div className="flex items-center justify-between gap-3 border-t pt-4">
              <LanguageSegmented onChange={() => setIsOpen(false)} />
              <ThemeToggle bordered />
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
