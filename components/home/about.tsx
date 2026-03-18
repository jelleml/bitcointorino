import { BookOpen, ShieldCheck, Megaphone, Handshake } from "lucide-react"
import { useTranslations } from 'next-intl'

export function About() {
  const t = useTranslations('About');

  return (
    <section id="chi-siamo" className="py-20 bg-gray-50 dark:bg-black scroll-mt-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* What We Do */}
          <div className="bg-white dark:bg-gray-900 rounded-lg p-8 md:p-12 border-2 border-gray-200 dark:border-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[50px]">
              <div className="group text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-lg bg-bitcoin-blue/10 group-hover:scale-110 transition-transform duration-300">
                    <BookOpen className="h-8 w-8 text-bitcoin-blue" aria-hidden="true" />
                  </div>
                </div>
                <h4 className="font-bold mb-2 group-hover:text-bitcoin-blue transition-colors">
                  {t('divulgation.title')}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {t('divulgation.description')}
                </p>
              </div>
              <div className="group text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-lg bg-bitcoin-blue/10 group-hover:scale-110 transition-transform duration-300">
                    <ShieldCheck className="h-8 w-8 text-bitcoin-blue" aria-hidden="true" />
                  </div>
                </div>
                <h4 className="font-bold mb-2 group-hover:text-bitcoin-blue transition-colors">
                  {t('adoption.title')}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {t('adoption.description')}
                </p>
              </div>
              <div className="group text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-lg bg-bitcoin-blue/10 group-hover:scale-110 transition-transform duration-300">
                    <Megaphone className="h-8 w-8 text-bitcoin-blue" aria-hidden="true" />
                  </div>
                </div>
                <h4 className="font-bold mb-2 group-hover:text-bitcoin-blue transition-colors">
                  {t('promotion.title')}
                </h4>
                <p className="text-sm text-muted-foreground">
                   {t('promotion.description')}
                </p>
              </div>
              <div className="group text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-lg bg-bitcoin-blue/10 group-hover:scale-110 transition-transform duration-300">
                    <Handshake className="h-8 w-8 text-bitcoin-blue" aria-hidden="true" />
                  </div>
                </div>
                <h4 className="font-bold mb-2 group-hover:text-bitcoin-blue transition-colors">
                  {t('connection.title')}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {t('connection.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
