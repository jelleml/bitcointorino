import { ArrowRight, LifeBuoy } from "lucide-react"
import { useTranslations } from 'next-intl'
import { Link } from "@/i18n/navigation"
import { Button } from "@/components/ui/button"

export function SportelloCta() {
  const t = useTranslations('SportelloCta');

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-bitcoin-blue to-bitcoin-blue-dark text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white/10 p-4 rounded-full">
              <LifeBuoy className="h-10 w-10" aria-hidden="true" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('title')}
          </h2>
          <p className="text-lg md:text-xl text-gray-100 leading-relaxed mb-8">
            {t('description')}
          </p>
          <Button asChild size="lg" className="text-base text-black bg-white hover:bg-gray-300">
            <Link href="/sportello">
              {t('cta')}
              <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
