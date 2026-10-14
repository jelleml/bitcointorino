import { Link } from "@/i18n/navigation"
import { getImageProps } from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTranslations } from 'next-intl'
import { HeroBackground } from "@/components/home/hero-background"

export function Hero() {
  const t = useTranslations('Hero');
  const tEvent = useTranslations('NextEvent');
  const { props: desktopLogo } = getImageProps({
    src: '/hero-logo-new.png',
    alt: '',
    width: 2400,
    height: 900,
    sizes: '(min-width: 1024px) 1024px, 100vw',
    priority: true,
  })

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
            className="glass group mb-10 inline-flex max-w-full items-center gap-3 rounded-full py-2 pl-3 pr-4 sm:py-1.5 sm:pl-2 text-sm text-white/90 animate-[fade-up_0.5s_cubic-bezier(0.22,1,0.36,1)_both] hover:bg-white/15 transition-colors"
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

          <div className="relative mb-12 w-full max-w-5xl flex justify-center">
            {/* Alone dietro al logo */}
            <div aria-hidden="true" className="absolute inset-x-[10%] inset-y-[15%] -z-10 bg-[radial-gradient(ellipse_at_center,rgba(9,85,165,0.45),transparent_70%)]" />
            {/* Un solo <picture>: su mobile il logo compatto (pittogramma + scritta) in SVG, su desktop il logo esteso ottimizzato.
                Il browser scarica solo la versione che mostra. */}
            <picture className="contents">
              <source media="(max-width: 767px)" srcSet="/bitcoin-torino-logo-small-dark.svg" width={2016} height={894} />
              <img
                {...desktopLogo}
                alt="Bitcoin Torino Logo"
                className="h-auto shrink-0 md:drop-shadow-[0_0_40px_rgba(147,194,247,0.35)] max-md:-my-[12%] max-md:w-[118%] max-md:max-w-lg md:w-full md:object-contain md:brightness-0 md:invert"
              />
            </picture>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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
