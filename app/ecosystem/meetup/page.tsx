import { Metadata } from "next"
import Link from "next/link"
"use client"

import { useState } from "react"
import { Users, ExternalLink, MessageCircle, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"


const communities = [
  {
    name: "BitPolito",
    description: "Team studentesco del Politecnico di Torino dedicato a sviluppo e divulgazione su Bitcoin, puntando a creare un ponte tra università e industria.",
    type: "Team Studentesco",
    members: "50",
    frequency: "Attivo quotidianamente",
    links: [{ type: "telegram", label: "Join on Telegram", url: "https://t.me/bitpolito" }],
  },
  {
    name: "Satoshi Spritz Torino",
    description: "Il più grande Bitcoin meetup italiano, si riunisce ogni giovedì per ospitare brevi talk, cineforum, book-club e incentivare il networking.",
    type: "Meetup",
    members: "800",
    frequency: "Ogni giovedì",
    links: [{ type: "telegram", label: "Join on Telegram", url: "https://t.me/satoshispritztorino" }],
  },
  {
    name: "Satoshi Spritz Bardonecchia",
    description: "Meetup con frequenza irregolare che riunisce gli appassionati di Bitcoin a Bardonecchia e dintorni.",
    type: "Meetup",
    members: "30",
    frequency: "Occasionale",
    links: [{ type: "telegram", label: "Join on Telegram", url: "https://t.me/satoshispritzbardonecchia" }],
  },
  {
    name: "Satoshi Spritz Val Susa",
    description: "Meetup con frequenza irregolare che riunisce gli appassionati di Bitcoin in tutta la Val di Susa.",
    type: "Meetup",
    members: "35",
    frequency: "Occasionale",
    links: [{ type: "telegram", label: "Join on Telegram", url: "https://t.me/SatoshiSpritzValSusa" }],
  },
  {
    name: "Bitcoin Alba-Asti-Cuneo",
    description: "Meetup con frequenza irregolare che riunisce gli appassionati di Bitcoin nella zona di Alba, Asti e Cuneo.",
    type: "Community",
    members: "125",
    frequency: "Occasionale",
    links: [{ type: "telegram", label: "Join on Telegram", url: "https://t.me/bitcoinalbacuneo" }],
  },
  {
    name: "BitDevs",
    description: "Rete globale di sviluppatori Bitcoin focalizzata su discussioni tecniche avanzate, principalmente sulle ultime novità nell’industria.",
    type: "Meetup",
    members: "50",
    frequency: "Ogni mese",
    links: [{ type: "telegram", label: "Join on Telegram", url: "https://t.me/bitdevstorino" }],
  },
  {
    name: "BitcoinBitches",
    description: "Community italiana, con forte presenza a Torino, che aggrega ragazze di tutte le età appassionate di Bitcoin.",
    type: "Community",
    members: "100",
    frequency: "Occasionale",
    links: [{ type: "telegram", label: "Join on Telegram", url: "https://t.me/btctorinopiemonte" }],
  },
]

export default function MeetupPage() {
  const [filter, setFilter] = useState<string | null>(null)

  const filterOptions = ["Meetup", "Community", "Team studenteschi"]

  const filteredCommunities = filter
    ? communities.filter(c => c.type === filter)
    : communities

  return (
    <main className="min-h-screen">
      <div className="pt-12 pb-6">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Incontra altri Bitcoiner</h1>

          <div className="flex flex-wrap justify-center gap-4">
            {filterOptions.map((option) => (
              <Button
                key={option}
                variant={filter === option ? "default" : "outline"}
                onClick={() => setFilter(filter === option ? null : option)}
                className={`rounded-full transition-colors ${filter === option
                    ? "bg-bitcoin-blue text-white hover:bg-bitcoin-blue/90"
                    : "hover:bg-bitcoin-blue/10 hover:text-bitcoin-blue hover:border-bitcoin-blue/30"
                  }`}
              >
                {option}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Communities Grid */}
      <section className="py-16 bg-white dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredCommunities.map((community, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-950 rounded-lg p-6 border-2 border-gray-200 dark:border-gray-700 hover:border-bitcoin-blue transition-all duration-300 hover:shadow-lg"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-4">
                        <span className="inline-block px-3 py-1 bg-bitcoin-blue/10 text-bitcoin-blue text-sm font-bold rounded-full">
                          {community.type}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold">{community.name}</h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-4">
                    {community.description}
                  </p>

                  {/* Stats */}
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4 pb-4 border-b">
                    <div className="flex items-center">
                      <Users className="mr-2 h-4 w-4" aria-hidden="true" />
                      <span>{community.members} membri</span>
                    </div>
                    <div className="flex items-center">
                      <MessageCircle className="mr-2 h-4 w-4" aria-hidden="true" />
                      <span>{community.frequency}</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    {community.links.map((link, linkIndex) => (
                      <Button
                        key={linkIndex}
                        asChild={!!link.url}
                        disabled={!link.url}
                        variant={linkIndex === 0 ? "default" : "outline"}
                        size="sm"
                        className="w-full"
                      >
                        {link.url ? (
                          <a href={link.url} target="_blank" rel="noopener noreferrer">
                            {link.type === "telegram" && <MessageCircle className="mr-2 h-4 w-4" aria-hidden="true" />}
                            {link.type === "website" && <Globe className="mr-2 h-4 w-4" aria-hidden="true" />}
                            {link.type === "luma" && <ExternalLink className="mr-2 h-4 w-4" aria-hidden="true" />}
                            {link.label}
                          </a>
                        ) : (
                          <span className="flex items-center">
                            {link.type === "telegram" && <MessageCircle className="mr-2 h-4 w-4" aria-hidden="true" />}
                            {link.type === "website" && <Globe className="mr-2 h-4 w-4" aria-hidden="true" />}
                            {link.type === "luma" && <ExternalLink className="mr-2 h-4 w-4" aria-hidden="true" />}
                            {link.label}
                          </span>
                        )}
                      </Button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Create Community Section */}
      <section className="py-16 bg-gray-50 dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Users className="h-12 w-12 text-bitcoin-blue mx-auto mb-4" aria-hidden="true" />
            <h2 className="text-3xl font-bold mb-4">Vuoi creare una nuova community?</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Se stai pensando di avviare una nuova community Bitcoin a Torino o in Piemonte,
              possiamo aiutarti a promuoverla e metterti in contatto con altri organizzatori.
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
