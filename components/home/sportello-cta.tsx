import { ArrowRight, LifeBuoy } from "lucide-react"
import { useTranslations } from 'next-intl'
import { Link } from "@/i18n/navigation"
import { CtaBand } from "@/components/layout/cta-band"

export function SportelloCta() {
  const t = useTranslations('SportelloCta');

  return (
    <CtaBand
      width="lg"
      icon={<LifeBuoy className="h-9 w-9" aria-hidden="true" />}
      title={t('title')}
      description={t('description')}
    >
      <Link href="/sportello" className="btn-shine btn-light group">
        <span className="relative z-10 inline-flex items-center">
          {t('cta')}
          <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </span>
      </Link>
    </CtaBand>
  )
}
