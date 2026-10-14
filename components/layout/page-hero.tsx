import type { ReactNode } from 'react'
import { HeroBackground } from '@/components/home/hero-background'
import { cn } from '@/lib/utils'

type PageHeroProps = {
  title: ReactNode
  eyebrow?: ReactNode
  subtitle?: ReactNode
  /** Classi aggiuntive per il sottotitolo (es. per tenerlo su una riga) */
  subtitleClassName?: string
  /** Link "torna indietro" mostrato sopra al titolo */
  back?: ReactNode
  /** Icona o elemento decorativo sopra al titolo */
  icon?: ReactNode
  /** CTA sotto al sottotitolo */
  children?: ReactNode
  className?: string
}

/** Testata delle pagine interne: stesso sfondo blu notte e muro di mattoni della home, in formato compatto. */
export function PageHero({ title, eyebrow, subtitle, subtitleClassName, back, icon, children, className }: PageHeroProps) {
  return (
    <section
      className={cn('noise relative isolate overflow-hidden pt-20 pb-24 md:pt-28 md:pb-32 text-white', className)}
      style={{ background: 'linear-gradient(to bottom, #00020C 0%, #00052E 50%, #00138E 100%)' }}
    >
      <HeroBackground />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          {back && <div className="mb-8 animate-fade-up">{back}</div>}
          {icon && <div className="mb-8 animate-fade-up">{icon}</div>}
          {eyebrow && (
            <span className="glass mb-6 inline-flex items-center rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white/85 animate-fade-up">
              {eyebrow}
            </span>
          )}
          <h1 className="text-3xl md:text-6xl font-bold tracking-tight animate-fade-up [animation-delay:100ms]">
            <span className="bg-gradient-to-b from-white to-[#93C2F7] bg-clip-text text-transparent">{title}</span>
          </h1>
          {subtitle && (
            <p className={cn('mt-6 max-w-2xl text-base md:text-xl text-white/80 leading-relaxed animate-fade-up [animation-delay:200ms]', subtitleClassName)}>
              {subtitle}
            </p>
          )}
          {children && (
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up [animation-delay:300ms]">
              {children}
            </div>
          )}
        </div>
      </div>
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#93C2F7]/60 to-transparent" />
    </section>
  )
}
