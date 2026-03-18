"use client"

import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import { Send, Mail, Twitter, Instagram, Linkedin } from "lucide-react"
import { useTranslations } from 'next-intl'

export function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer 
      className="relative z-20 text-white"
      style={{
        background: 'linear-gradient(to bottom, #00138E, #00020C)'
      }}
    >
      <div className="container mx-auto px-4 pt-8 md:pt-[100px] pb-6 md:pb-12">

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 mb-8 md:justify-items-center text-center md:text-left justify-items-center">
          {/* About */}
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="inline-block mb-2 md:mb-4 md:ml-[-18px] hover:opacity-80 transition-opacity">
              <img src="/bitcoin-torino-logo-small.svg" alt="Bitcoin Torino" className="h-24 w-auto brightness-0 invert" />
            </Link>
            <p className="text-white/80">
              {t('description')}
            </p>

          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-bold mb-4">{t('links')}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white/80 hover:text-white transition-colors">
                  {t('home')}
                </Link>
              </li>
              <li>
                <Link href="/ecosystem" className="text-white/80 hover:text-white transition-colors">
                  {t('ecosystem')}
                </Link>
              </li>
              <li>
                <Link href="#chi-siamo" className="text-white/80 hover:text-white transition-colors">
                  {t('about')}
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-white/80 hover:text-white transition-colors">
                  {t('privacy')}
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="text-white/80 hover:text-white transition-colors">
                  {t('cookie')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contatti */}
          <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-4">{t('contact')}</h3>
            <div className="flex space-x-4 justify-center md:justify-start flex-wrap gap-y-4">
              <a
                href="https://t.me/bitcointorinochannel"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                aria-label="Telegram"
              >
                <Send className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href="https://x.com/BitcoinTorino"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                aria-label="X (Twitter)"
              >
                <Twitter className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href="https://instagram.com/bitcointorino"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href="https://linkedin.com/company/bitcoin-torino"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href="mailto:bitcoin.torino@proton.me"
                className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <Separator className="bg-white/20 mt-8 md:mt-[100px] mb-6" />

        {/* Copyright */}
        <div className="text-center text-white/60">
          <p>&copy; {new Date().getFullYear()} Bitcoin Torino. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
