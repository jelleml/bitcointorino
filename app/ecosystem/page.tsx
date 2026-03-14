import { Metadata } from "next"
import Link from "next/link"
import { Users, Building2, Store, MapPin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Ecosistema - Bitcoin Torino",
  description: "Esplora l'ecosistema Bitcoin di Torino: meetup, aziende, attività e spazi che accettano Bitcoin",
}

const ecosystemSections = [
  {
    title: "Persone",
    description: "Community e gruppi Bitcoin attivi a Torino e in Piemonte.",
    icon: Users,
    href: "/ecosystem/meetup",
    external: false,
    color: "text-bitcoin-blue",
    bgColor: "bg-bitcoin-blue/10",
  },
  {
    title: "Attività",
    description: "Negozi e attività commerciali che accettano Bitcoin.",
    icon: Store,
    href: "https://btcmap.org/map#13/45.07013/7.67146",
    external: true,
    color: "text-bitcoin-blue",
    bgColor: "bg-bitcoin-blue/10",
  },
  {
    title: "Spazi",
    description: "Location e coworking Bitcoin-friendly a Torino.",
    icon: MapPin,
    href: "/ecosystem/spazi",
    external: false,
    color: "text-bitcoin-blue",
    bgColor: "bg-bitcoin-blue/10",
  },
]

export default function EcosystemPage() {
  return (
    <main className="min-h-screen">
      {/* Ecosystem Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {ecosystemSections.map((section) => {
              const Icon = section.icon
              const Content = (
                <>
                  <div className="flex flex-col items-center flex-1 w-full relative z-10">
                    <div className={`${section.bgColor} p-6 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`h-12 w-12 ${section.color}`} aria-hidden="true" />
                    </div>
                    <h2 className="text-3xl font-bold mb-4 group-hover:text-bitcoin-blue transition-colors">
                      {section.title}
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8">
                      {section.description}
                    </p>
                  </div>
                  <div className="flex justify-center items-center text-bitcoin-blue font-medium text-lg mt-auto pb-4">
                    Esplora
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" aria-hidden="true" />
                  </div>
                </>
              )

              return section.external ? (
                <a
                  key={section.href}
                  href={section.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white rounded-xl p-12 border-2 border-gray-200 hover:border-bitcoin-blue transition-all duration-300 hover:shadow-xl text-center flex flex-col items-center justify-between"
                >
                  {Content}
                </a>
              ) : (
                <Link
                  key={section.href}
                  href={section.href}
                  className="group bg-white rounded-xl p-12 border-2 border-gray-200 hover:border-bitcoin-blue transition-all duration-300 hover:shadow-xl text-center flex flex-col items-center justify-between"
                >
                  {Content}
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Vuoi far parte dell&apos;ecosistema?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Se gestisci una community, un&apos;attività o uno spazio e vuoi essere inserito
              nella nostra mappa dell&apos;ecosistema Bitcoin di Torino, contattaci!
            </p>
            <Button asChild size="lg">
              <a href="mailto:info@bitcointorino.org">
                Contattaci
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

