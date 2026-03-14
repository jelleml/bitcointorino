import { Metadata } from "next"
import Link from "next/link"
import { MapPin, ArrowLeft, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Spazi - Ecosistema Bitcoin Torino",
  description: "Location e coworking Bitcoin-friendly a Torino",
}

const spaces = [
  {
    name: "Blox Space",
    type: "Coworking",
    address: "Via Pietro Micca, 21/B, Torino",
    description: "Spazio multifunzionale nel centro di Torino pensato per freelance e startup attivi nel mondo Bitcoin e delle freedom technology.",
    features: ["Hot Desks", "Sale Riunioni", "Sale Uffici", "Eventi"],
    availability: "Postazioni disponibili",
  },
  {
    name: "Politecnico di Torino",
    type: "Università",
    address: "Corso Castelfidardo, 122, Torino",
    description: "Una delle principali università d'ingegneria a livello mondiale, conta diversi percorsi formativi, gruppi di ricerca e team studenteschi attivi in ambito Bitcoin.",
    features: ["Formazione", "Sale Studio", "Eventi"],
    availability: "Aperto al pubblico",
  },
  {
    name: "Plan B",
    type: "Bar",
    address: "Corso Valdocco, 3C, Torino",
    description: "Locale informale in centro a Torino allestito a tema Bitcoin che combina caffetteria di giorno e cocktail bar la sera.",
    features: ["Ristorazione", "Eventi"],
    availability: "Aperto al pubblico",
  },
]

export default function SpaziPage() {
  return (
    <main className="min-h-screen">
      <div className="pt-12 pb-2 md:pb-6">
        <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Costruisci con altri Bitcoiner</h1>
        </div>
      </div>

      {/* Spaces List */}
      <section className="py-16 bg-white dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {spaces.map((space, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-950 rounded-lg p-6 border-2 border-gray-200 dark:border-gray-700 hover:border-bitcoin-blue transition-colors"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-4">
                        <span className="px-3 py-1 bg-bitcoin-blue/10 text-bitcoin-blue text-sm font-medium rounded-full">
                          {space.type}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold">{space.name}</h3>
                      <div className="flex items-center text-sm text-muted-foreground mb-3">
                        <MapPin className="mr-2 h-4 w-4" aria-hidden="true" />
                        <span>{space.address}</span>
                      </div>
                      <p className="text-muted-foreground mb-4">{space.description}</p>
                    </div>
                  </div>
                  <div className="border-t pt-4">
                    <p className="text-sm font-semibold mb-2">Servizi disponibili:</p>
                    <div className="flex flex-wrap gap-2">
                      {space.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50 dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Hai uno spazio da condividere?
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Se gestisci un coworking, una location per eventi o uno spazio
              che potrebbe ospitare la community Bitcoin di Torino, parliamone!
            </p>
            <Button asChild size="lg" className="bg-bitcoin-blue hover:bg-bitcoin-blue/90 text-white">
              <a href="mailto:bitcoin.torino@proton.me">
                Contattaci
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
