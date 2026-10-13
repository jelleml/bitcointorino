'use client'

import { Link } from "@/i18n/navigation"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTranslations } from 'next-intl'
import { HeroBackground } from "@/components/home/hero-background"

export function Hero() {
  const t = useTranslations('Hero');
  const tEvent = useTranslations('NextEvent');

  return (
    <section
      className="noise relative isolate overflow-hidden min-h-[calc(100svh-4rem)] flex items-center pt-16 pb-28 md:pt-20 md:pb-36"
      style={{ background: 'linear-gradient(to bottom, #00020C 0%, #00052E 45%, #00138E 100%)' }}
    >
      <HeroBackground />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center flex flex-col items-center">

          {/* Badge prossimo evento */}
          <a
            href="https://luma.com/fdgrol0p"
            target="_blank"
            rel="noopener noreferrer"
            className="glass group mb-10 inline-flex max-w-full items-center gap-3 rounded-full py-2 pl-3 pr-4 sm:py-1.5 sm:pl-2 text-sm text-white/90 animate-fade-up hover:bg-white/15 transition-colors"
          >
            <span className="relative flex h-6 shrink-0 items-center gap-2 rounded-full bg-white/10 px-2 sm:px-2.5 text-xs font-semibold uppercase tracking-wider">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[#E55414] animate-ping-soft" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#E55414]" />
              </span>
              <span className="hidden sm:inline">{tEvent('title')}</span>
            </span>
            <span className="flex flex-col items-start text-left leading-tight sm:block sm:leading-normal font-medium">
              {/* Su mobile l'etichetta sta in piccolo sopra al titolo, su desktop è nel badge a sinistra */}
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/60 sm:hidden">{tEvent('title')}</span>
              {tEvent('eventName')}
              <span className="hidden sm:inline text-white/60"> · {tEvent('date')}</span>
            </span>
            <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </a>

          <div className="relative mb-12 w-full max-w-5xl flex justify-center animate-fade-up [animation-delay:150ms]">
            {/* Alone dietro al logo */}
            <div aria-hidden="true" className="absolute inset-x-[10%] inset-y-[15%] -z-10 rounded-full bg-[#0955A5]/40 blur-[80px]" />
            <Image
              src="/hero-logo-new.png"
              alt="Bitcoin Torino Logo"
              width={2400}
              height={900}
              className="hidden md:block w-full h-auto object-contain brightness-0 invert drop-shadow-[0_0_40px_rgba(147,194,247,0.35)]"
              priority
            />
            {/* Su mobile il logo compatto (pittogramma + scritta), più leggibile a larghezze ridotte */}
            <img
              src="/bitcoin-torino-logo-small-dark.svg"
              alt="Bitcoin Torino Logo"
              className="md:hidden -my-[12%] w-[118%] max-w-lg shrink-0 h-auto drop-shadow-[0_0_40px_rgba(147,194,247,0.35)]"
            />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up [animation-delay:300ms]">
            <Button asChild size="lg" className="btn-shine btn-orange group h-14 rounded-full px-9 text-base hover:bg-transparent">
              <Link href="/sportello">
                <span className="relative z-10 inline-flex items-center">
                  {t('getSupport')}
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="glass h-14 rounded-full px-9 text-base text-white border-white/25 hover:bg-white/15 hover:text-white hover:border-white/50 transition-all hover:-translate-y-0.5">
              <Link href="/soci">
                {t('becomeMember')}
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Linea luminosa di chiusura */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#93C2F7]/60 to-transparent" />
    </section>
  )
}
