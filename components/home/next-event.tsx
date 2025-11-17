import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users, ArrowRight } from "lucide-react"

export function NextEvent() {
  return (
    <section className="py-16 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Prossimo Evento
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Locandina Evento - Sinistra */}
            <div className="relative">
              <div className="bg-gradient-to-br from-bitcoin-blue to-bitcoin-blue-dark rounded-lg p-8 text-white shadow-lg hover:shadow-xl transition-shadow">
                {/* Grafica provvisoria locandina */}
                <div className="aspect-[3/4] flex flex-col items-center justify-center border-2 border-white/20 rounded-lg bg-white/10 backdrop-blur-sm">
                  <div className="text-center p-6">
                    <div className="text-6xl font-bold mb-4">₿</div>
                    <div className="text-2xl font-bold mb-2">BITCOIN</div>
                    <div className="text-xl font-medium mb-6">TORINO</div>
                    <div className="border-t border-white/30 pt-4">
                      <div className="text-lg font-semibold mb-2">MEETUP MENSILE</div>
                      <div className="text-sm opacity-90">15 Novembre 2025</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contenuto Evento - Destra */}
            <div className="space-y-6">
              <div>
                <span className="inline-block px-3 py-1 bg-bitcoin-blue/10 text-bitcoin-blue text-sm font-bold rounded-full mb-4">
                  Meetup
                </span>
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  Bitcoin Meetup Mensile
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Incontro mensile della community Bitcoin di Torino. Discuteremo delle ultime 
                  novità nell&apos;ecosistema, presenteremo progetti locali e faremo networking 
                  tra appassionati, sviluppatori e imprenditori.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Calendar className="h-5 w-5 text-bitcoin-blue flex-shrink-0" aria-hidden="true" />
                  <div>
                    <div className="font-medium">15 Novembre 2025</div>
                    <div className="text-sm">Ore 19:00 - 21:30</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="h-5 w-5 text-bitcoin-blue flex-shrink-0" aria-hidden="true" />
                  <div>
                    <div className="font-medium">Toolbox Coworking</div>
                    <div className="text-sm">Via Agostino da Montefeltro, 2, Torino</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Users className="h-5 w-5 text-bitcoin-blue flex-shrink-0" aria-hidden="true" />
                  <div>
                    <div className="font-medium">50 partecipanti</div>
                    <div className="text-sm">Posti disponibili</div>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Button asChild size="lg" className="w-full sm:w-auto">
                  <a 
                    href="https://luma.com/user/bitcointorino" 
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

