import { Metadata } from "next"
import Link from "next/link"
import { Store, ArrowLeft, Coffee, ShoppingBag, Utensils, Map } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Attività - Ecosistema Bitcoin Torino",
  description: "Negozi e attività commerciali che accettano Bitcoin a Torino",
}

const merchants = [
  {
    name: "Bar Bitcoin",
    category: "Bar & Caffetteria",
    icon: Coffee,
    address: "Via esempio 1, Torino",
    description: "Caffè, colazioni e aperitivi pagabili in Bitcoin e Lightning",
    accepts: ["Bitcoin", "Lightning"],
  },
  {
    name: "Negozio Crypto",
    category: "Retail",
    icon: ShoppingBag,
    address: "Corso esempio 2, Torino",
    description: "Prodotti tecnologici e gadget Bitcoin",
    accepts: ["Bitcoin", "Lightning"],
  },
  {
    name: "Ristorante Lightning",
    category: "Ristorazione",
    icon: Utensils,
    address: "Piazza esempio 3, Torino",
    description: "Cucina tradizionale con pagamenti innovativi",
    accepts: ["Bitcoin", "Lightning"],
  },
]

export default function MerchantPage() {
  return (
    <main className="min-h-screen">
      <div className="pt-12 pb-6">
        <div className="container mx-auto px-4 text-center">
            <Link
              href="/ecosystem"
              className="inline-flex items-center text-bitcoin-blue hover:underline mb-6 transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
              Torna all&apos;Ecosistema
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Attività</h1>
            <p className="text-xl text-muted-foreground">
              Negozi e attività commerciali che accettano Bitcoin a Torino
            </p>
        </div>
      </div>

      {/* Merchants List */}
      <section className="py-16 bg-white dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {merchants.map((merchant, index) => {
                const Icon = merchant.icon
                return (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-950 rounded-lg p-6 border-2 border-gray-200 dark:border-gray-700 hover:border-bitcoin-blue transition-colors"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="bg-bitcoin-blue/10 p-3 rounded-lg">
                        <Icon className="h-6 w-6 text-bitcoin-blue" aria-hidden="true" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="text-2xl font-bold mb-1">{merchant.name}</h3>
                            <p className="text-sm text-muted-foreground">{merchant.category}</p>
                          </div>
                        </div>
                        <p className="text-muted-foreground mb-3">{merchant.description}</p>
                        <div className="flex items-center text-sm text-muted-foreground mb-3">
                          <Map className="mr-2 h-4 w-4" aria-hidden="true" />
                          <span>{merchant.address}</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {merchant.accepts.map((method, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-bitcoin-blue/10 text-bitcoin-blue text-sm font-medium rounded-full"
                            >
                              ₿ {method}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50 dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Accetti Bitcoin nella tua attività?
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Entra a far parte della rete di attività Bitcoin-friendly di Torino
              e raggiungi una community di clienti appassionati e innovatori.
            </p>
            <Button asChild size="lg">
              <a href="mailto:info@bitcointorino.org">
                Registra la tua attività
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
