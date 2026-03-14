import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users, ArrowRight } from "lucide-react"

export function NextEvent() {
  return (
    <section className="py-16 md:pt-[114px] md:pb-[164px] bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Prossimo Evento
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-[100px] items-center">
            {/* Locandina Evento - Sinistra */}
            <div className="relative">
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow border-2 border-gray-100 dark:border-gray-800">
                <Image
                  src="/bitcuneo-2026.jpg"
                  alt="BitCuneo 2026 Locandina"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Contenuto Evento - Destra */}
            <div className="space-y-6">
              <div>
                <span className="inline-block px-3 py-1 bg-bitcoin-blue/10 text-bitcoin-blue text-sm font-bold rounded-full mb-4">
                  Conferenza
                </span>
                <h4 className="text-xl md:text-2xl font-bold mb-4">
                  BitCuneo 2026
                </h4>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Il più grande evento in provincia di Cuneo per raccontare il protocollo Bitcoin ed il cambiamento che porta con se. Talk, panel, networking e momenti di apprendimento per curiosi, studenti e professionisti.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Calendar className="h-5 w-5 text-bitcoin-blue flex-shrink-0" aria-hidden="true" />
                  <div>
                    <div className="font-medium">13-14 Marzo 2026</div>
                    <div className="text-sm">Ore 9:30 - 18:00</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="h-5 w-5 text-bitcoin-blue flex-shrink-0" aria-hidden="true" />
                  <div>
                    <div className="font-medium">Centro Incontri della Provincia</div>
                    <div className="text-sm">Corso Dante, 41, Cuneo</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Users className="h-5 w-5 text-bitcoin-blue flex-shrink-0" aria-hidden="true" />
                  <div>
                    <div className="font-medium">300 partecipanti</div>
                    <div className="text-sm">Posti disponibili</div>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Button asChild size="lg" className="w-full sm:w-auto">
                  <a 
                    href="https://www.eventbrite.com/e/biglietti-bitcuneo2026-1982966015733" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Registrati all&apos;Evento
                    <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

