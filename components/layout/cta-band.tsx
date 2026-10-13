import type { ReactNode } from 'react'
import { Reveal } from '@/components/fx/reveal'
import { cn } from '@/lib/utils'

type CtaBandProps = {
  title?: ReactNode
  description?: ReactNode
  icon?: ReactNode
  children?: ReactNode
  /** Larghezza massima del pannello */
  width?: 'md' | 'lg'
  className?: string
}

/** Fascia blu notte con pannello in vetro: la stessa della sezione Sportello in home. */
export function CtaBand({ title, description, icon, children, width = 'md', className }: CtaBandProps) {
  return (
    <section className={cn('band-night relative isolate overflow-hidden py-16 md:py-32 text-white', className)}>
      <div aria-hidden="true" className="band-night-mesh absolute inset-0 -z-20 bg-[length:300%_300%] animate-gradient-pan" />
      <div aria-hidden="true" className="absolute -top-32 -right-32 -z-10 h-96 w-96 rounded-full bg-[#93C2F7]/20 blur-3xl animate-aurora" />
      <div aria-hidden="true" className="absolute -bottom-40 -left-24 -z-10 h-[28rem] w-[28rem] rounded-full bg-[#00138E]/70 blur-3xl animate-aurora [animation-delay:-8s]" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />

      <div className="container mx-auto px-4">
        <Reveal className={cn('glass glass-panel mx-auto rounded-[2rem] px-6 py-12 text-center shadow-2xl shadow-black/30 md:px-16 md:py-16', width === 'lg' ? 'max-w-4xl' : 'max-w-3xl')}>
          {icon && (
            <div className="mb-8 flex justify-center">
              <div className="relative h-20 w-20 animate-float">
                <div aria-hidden="true" className="ring-conic absolute -inset-[3px] rounded-full animate-spin-slow" />
                <div className="relative flex h-full w-full items-center justify-center rounded-full bg-[#00052E]">{icon}</div>
              </div>
            </div>
          )}
          {title && (
            <h2 className="text-[1.75rem] leading-tight md:text-5xl font-bold tracking-tight mb-6">
              <span className="bg-gradient-to-b from-white to-[#93C2F7] bg-clip-text text-transparent">{title}</span>
            </h2>
          )}
          {description && (
            <p className="text-base md:text-xl text-white/80 leading-relaxed mb-10 max-w-2xl mx-auto">{description}</p>
          )}
          {children}
        </Reveal>
      </div>
    </section>
  )
}
