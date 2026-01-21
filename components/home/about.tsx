import { GraduationCap, Users, Rocket } from "lucide-react"

export function About() {
  return (
    <section id="chi-siamo" className="py-20 bg-gray-50 dark:bg-black scroll-mt-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* What We Do */}
          <div className="bg-white dark:bg-gray-900 rounded-lg p-8 md:p-12 border-2 border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">
              Cosa Facciamo
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-lg bg-bitcoin-blue/10">
                    <GraduationCap className="h-8 w-8 text-bitcoin-blue" aria-hidden="true" />
                  </div>
                </div>
                <h4 className="font-bold mb-2">Formazione</h4>
                <p className="text-sm text-muted-foreground">
                  Workshop, seminari e corsi per tutti i livelli di conoscenza
                </p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-lg bg-bitcoin-blue/10">
                    <Users className="h-8 w-8 text-bitcoin-blue" aria-hidden="true" />
                  </div>
                </div>
                <h4 className="font-bold mb-2">Networking</h4>
                <p className="text-sm text-muted-foreground">
                  Meetup mensili per connettere professionisti e appassionati
                </p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-lg bg-bitcoin-blue/10">
                    <Rocket className="h-8 w-8 text-bitcoin-blue" aria-hidden="true" />
                  </div>
                </div>
                <h4 className="font-bold mb-2">Progetti</h4>
                <p className="text-sm text-muted-foreground">
                  Supporto a iniziative locali che integrano Bitcoin
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
