import type { ReactNode } from 'react'
import { ArrowRight, Mail } from 'lucide-react'
import { CtaBand } from '@/components/layout/cta-band'

type ContactCtaProps = {
  title: ReactNode
  description: ReactNode
  label: ReactNode
  href?: string
  icon?: ReactNode
  /** Azioni aggiuntive accanto al bottone principale */
  extra?: ReactNode
}

/** Fascia finale "contattaci" comune alle pagine interne. */
export function ContactCta({
  title,
  description,
  label,
  href = 'mailto:bitcoin.torino@proton.me',
  icon = <Mail className="h-9 w-9" aria-hidden="true" />,
  extra,
}: ContactCtaProps) {
  return (
    <CtaBand title={title} description={description} icon={icon}>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <a href={href} className="btn-shine btn-light group">
          <span className="relative z-10 inline-flex items-center">
            {label}
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </span>
        </a>
        {extra}
      </div>
    </CtaBand>
  )
}
