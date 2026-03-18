'use client'

import { useState } from "react"
import { Users, ExternalLink, MessageCircle, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTranslations } from 'next-intl'
import Image from "next/image"

export default function MeetupPage() {
  const t = useTranslations('Ecosystem.Meetup');
  const [filter, setFilter] = useState<string | null>(null)

  const communities = [
    {
      id: "bitpolito",
      members: "50",
      image: "/pfp-bitpolito.jpg",
      links: [{ type: "telegram", label: "Join on Telegram", url: "https://t.me/bitpolito" }],
    },
    {
      id: "satoshi_torino",
      members: "800",
      image: "/pfp-satoshi-spritz-torino.jpg",
      links: [{ type: "telegram", label: "Join on Telegram", url: "https://t.me/satoshispritztorino" }],
    },
    {
      id: "satoshi_bardonecchia",
      members: "30",
      image: "/pfp-satoshi-spritz-bardonecchia.jpg",
      links: [{ type: "telegram", label: "Join on Telegram", url: "https://t.me/satoshispritztorino" }], // Fallback if specific missing
    },
    {
      id: "satoshi_valsusa",
      members: "35",
      image: "/pfp-satoshi-spritz-valsusa.jpg",
      links: [{ type: "telegram", label: "Join on Telegram", url: "https://t.me/SatoshiSpritzValSusa" }],
    },
    {
      id: "bitcoin_alba",
      members: "125",
      image: "/pfp-bitcoin-alba-asti-cuneo.jpg",
      links: [{ type: "telegram", label: "Join on Telegram", url: "https://t.me/bitcoinalbacuneo" }],
    },
    {
      id: "bitdevs",
      members: "50",
      image: "/pfp-bitdevs-torino.jpg",
      links: [{ type: "telegram", label: "Join on Telegram", url: "https://t.me/bitdevstorino" }],
    },
    {
      id: "bitcoin_bitches",
      members: "100",
      image: "/pfp-bitcoin-bitches-piemonte.jpg",
      links: [{ type: "telegram", label: "Join on Telegram", url: "https://t.me/btctorinopiemonte" }],
    },
  ]

  const mappedCommunities = communities.map(c => ({
    ...c,
    name: t(`communities.${c.id}.name`),
    description: t(`communities.${c.id}.description`),
    type: t(`communities.${c.id}.type`),
    frequency: t(`communities.${c.id}.frequency`),
  }))

  const filterOptions = Array.from(new Set(mappedCommunities.map(c => c.type)))

  const filteredCommunities = filter
    ? mappedCommunities.filter(c => c.type === filter)
    : mappedCommunities

  return (
    <main className="min-h-screen">
      <div className="pt-12 pb-6">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">{t('title')}</h1>

          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant={filter === null ? "default" : "outline"}
              onClick={() => setFilter(null)}
              className={`rounded-full transition-colors ${filter === null
                  ? "bg-bitcoin-blue text-white hover:bg-bitcoin-blue/90"
                  : "hover:bg-bitcoin-blue/10 hover:text-bitcoin-blue hover:border-bitcoin-blue/30"
                }`}
            >
              {t('filterAll')}
            </Button>
            {filterOptions.map((option) => (
              <Button
                key={option}
                variant={filter === option ? "default" : "outline"}
                onClick={() => setFilter(option)}
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
                  <div className="flex items-start justify-between mb-4 gap-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-4">
                        <span className="inline-block px-3 py-1 bg-bitcoin-blue/10 text-bitcoin-blue text-sm font-bold rounded-full">
                          {community.type}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold">{community.name}</h3>
                    </div>
                    {community.image && (
                      <div className="relative h-16 w-16 md:h-20 md:w-20 rounded-full overflow-hidden border border-gray-100 dark:border-gray-800 flex-shrink-0">
                        <Image
                          src={community.image}
                          alt={community.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-4">
                    {community.description}
                  </p>

                  {/* Stats */}
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4 pb-4 border-b">
                    <div className="flex items-center">
                      <Users className="mr-2 h-4 w-4" aria-hidden="true" />
                      <span>{community.members} {t('members')}</span>
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
            <h2 className="text-3xl font-bold mb-4">{t('ctaTitle')}</h2>
            <p className="text-lg text-muted-foreground mb-6">
              {t('ctaDescription')}
            </p>
            <Button asChild size="lg" className="bg-bitcoin-blue hover:bg-bitcoin-blue/90 text-white">
              <a href="mailto:info@bitcointorino.org">
                {t('contactUs')}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
