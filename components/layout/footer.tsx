"use client"

import { Link } from "@/i18n/navigation"
import { Separator } from "@/components/ui/separator"
import { Send, Mail, Twitter, Instagram, Linkedin } from "lucide-react"
import { useTranslations } from 'next-intl'

export function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer 
      className="noise relative isolate z-20 overflow-hidden text-white"
      style={{
        background: 'linear-gradient(to bottom, #00138E, #00020C)'
      }}
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#93C2F7]/70 to-transparent" />
      <div aria-hidden="true" className="pointer-events-none absolute -top-48 left-1/2 -z-10 h-96 w-[70rem] -translate-x-1/2 bg-[radial-gradient(closest-side,rgba(9,85,165,0.4),transparent)] animate-aurora" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:linear-gradient(to_bottom,black,transparent_70%)]" />
      <div className="container mx-auto px-4 pt-12 md:pt-[100px] pb-6 md:pb-12">

        {/* Footer Content: su mobile tutto centrato; da md le tre colonne sono centrate verticalmente sulla stessa linea orizzontale e centrate nel loro spazio, con i contenuti allineati a sinistra */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:items-center gap-10 md:gap-12 mb-8">
          {/* About */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left md:justify-self-center">
            {/* Il file del logo ha ampi margini trasparenti: lo ingrandiamo e compensiamo con margini negativi
                così il marchio visibile occupa la stessa riga (h-12) delle intestazioni delle altre colonne */}
            <Link href="/" className="mb-4 flex h-12 items-center hover:opacity-80 transition-opacity">
              <img src="/bitcoin-torino-logo-small.svg" alt="Bitcoin Torino" loading="lazy" decoding="async" className="-my-[31px] -mx-[25px] md:mr-0 h-[110px] w-auto max-w-none brightness-0 invert" />
            </Link>
            <p className="max-w-xs text-white/80">
              {t('description')}
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left md:justify-self-center">
            <h3 className="mb-4 flex h-12 items-center text-xl font-bold">{t('links')}</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://luma.com/bitcoin-torino-calendar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/75 hover:text-white transition-all hover:translate-x-1 inline-block"
                >
                  {t('events')}
                </a>
              </li>
              <li>
                <Link href="/soci" className="text-white/75 hover:text-white transition-all hover:translate-x-1 inline-block">
                  {t('onboarding')}
                </Link>
              </li>
              <li>
                <Link href="/sportello" className="text-white/75 hover:text-white transition-all hover:translate-x-1 inline-block">
                  {t('sportello')}
                </Link>
              </li>
              <li>
                <Link href="/ecosystem" className="text-white/75 hover:text-white transition-all hover:translate-x-1 inline-block">
                  {t('ecosystem')}
                </Link>
              </li>
              <li>
                <Link href="/media-kit" className="text-white/75 hover:text-white transition-all hover:translate-x-1 inline-block">
                  {t('mediaKit')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contatti */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left md:justify-self-center">
            <h3 className="mb-4 flex h-12 items-center text-xl font-bold">{t('contact')}</h3>
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              <a
                href="https://t.me/bitcointorinochannel"
                target="_blank"
                rel="noopener noreferrer"
                className="glass group/social p-3 rounded-full transition-all duration-300 hover:-translate-y-1 hover:bg-white/20 hover:shadow-[0_10px_30px_-8px_rgba(147,194,247,0.7)]"
                aria-label="Telegram"
              >
                <Send className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href="https://x.com/BitcoinTorino"
                target="_blank"
                rel="noopener noreferrer"
                className="glass group/social p-3 rounded-full transition-all duration-300 hover:-translate-y-1 hover:bg-white/20 hover:shadow-[0_10px_30px_-8px_rgba(147,194,247,0.7)]"
                aria-label="X (Twitter)"
              >
                <Twitter className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href="https://instagram.com/bitcointorino"
                target="_blank"
                rel="noopener noreferrer"
                className="glass group/social p-3 rounded-full transition-all duration-300 hover:-translate-y-1 hover:bg-white/20 hover:shadow-[0_10px_30px_-8px_rgba(147,194,247,0.7)]"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href="https://linkedin.com/company/bitcoin-torino"
                target="_blank"
                rel="noopener noreferrer"
                className="glass group/social p-3 rounded-full transition-all duration-300 hover:-translate-y-1 hover:bg-white/20 hover:shadow-[0_10px_30px_-8px_rgba(147,194,247,0.7)]"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href="mailto:bitcoin.torino@proton.me"
                className="glass group/social p-3 rounded-full transition-all duration-300 hover:-translate-y-1 hover:bg-white/20 hover:shadow-[0_10px_30px_-8px_rgba(147,194,247,0.7)]"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <Separator className="bg-white/20 mt-8 md:mt-[100px] mb-6" />

        {/* Su mobile centrati e impilati, con il copyright più piccolo sotto le note legali; da sm copyright a sinistra, note legali a destra */}
        <div className="flex flex-col items-center text-center sm:flex-row sm:justify-between sm:text-left gap-y-2 text-white/60">
          <p className="order-last mt-4 text-xs sm:order-none sm:mt-0 sm:text-base md:text-sm">&copy; {new Date().getFullYear()} Bitcoin Torino. All rights reserved.</p>
          <div className="flex gap-x-6">
            <Link href="/privacy" className="text-sm hover:text-white transition-colors">
              {t('privacy')}
            </Link>
            <Link href="/cookie-policy" className="text-sm hover:text-white transition-colors">
              {t('cookie')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
