'use client'

import { useState } from "react"
import { Users, ExternalLink, MessageCircle, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTranslations } from 'next-intl'
import Image from "next/image"
import { PageHero } from "@/components/layout/page-hero"
import { ContactCta } from "@/components/layout/contact-cta"
import { Reveal } from "@/components/fx/reveal"

export default function MeetupPage() {
  const t = useTranslations('Ecosystem.Meetup');
  const [filter, setFilter] = useState<string | null>(null)

  const communities = [
    {
      id: "bitpolito",
      members: "50",
      image: "/Community/pfp-bitpolito.jpg",
      links: [{ type: "telegram", label: "Join on Telegram", url: "https://t.me/bitpolito" }],
    },
    {
      id: "satoshi_torino",
      members: "800",
      image: "/Community/pfp-satoshi-spritz-torino.jpg",
      links: [{ type: "telegram", label: "Join on Telegram", url: "https://t.me/satoshispritztorino" }],
    },
    {
      id: "satoshi_bardonecchia",
      members: "30",
      image: "/Community/pfp-satoshi-spritz-bardonecchia.jpg",
      links: [{ type: "telegram", label: "Join on Telegram", url: "https://t.me/satoshispritzbardonecchia" }],
    },
    {
      id: "satoshi_valsusa",
      members: "35",
      image: "/Community/pfp-satoshi-spritz-valsusa.jpg",
      links: [{ type: "telegram", label: "Join on Telegram", url: "https://t.me/SatoshiSpritzValSusa" }],
    },
    {
      id: "bitcoin_alba",
      members: "125",
      image: "/Community/pfp-bitcoin-alba-asti-cuneo.jpg",
      links: [{ type: "telegram", label: "Join on Telegram", url: "https://t.me/bitcoinalbacuneo" }],
    },
    {
      id: "bitdevs",
      members: "50",
      image: "/Community/pfp-bitdevs-torino.jpg",
      links: [{ type: "telegram", label: "Join on Telegram", url: "https://t.me/bitdevstorino" }],
    },
    {
      id: "bitcoin_bitches",
      members: "100",
      image: "/Community/pfp-bitcoin-bitches-piemonte.jpg",
      links: [{ type: "telegram", label: "Join on Telegram", url: "https://t.me/btctorinopiemonte" }],
    },
    {
      id: "builder_torino",
      members: "62",
      image: "/Community/pfp-builder-torino.jpg",
      links: [{ type: "telegram", label: "Join on Telegram", url: "https://t.me/BitcoinBuilderTorino" }],
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
      <PageHero title={t('title')}>
        <div className="flex flex-wrap justify-center gap-3" role="group">
          {[null, ...filterOptions].map((option) => {
            const active = filter === option
            return (
              <button
                key={option ?? 'all'}
                type="button"
                onClick={() => setFilter(option)}
                aria-pressed={active}
                className={`h-10 rounded-full px-5 text-sm font-semibold transition-all duration-300 ${
                  active
                    ? 'bg-white text-[#00052E] shadow-lg shadow-black/30'
                    : 'glass text-white/85 hover:bg-white/15 hover:text-white'
                }`}
              >
                {option ?? t('filterAll')}
              </button>
            )
          })}
        </div>
      </PageHero>

      {/* Communities Grid */}
      <section className="section-alt py-16 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredCommunities.map((community, index) => (
                <Reveal key={community.id} delay={(index % 2) * 100}>
                  <div className="spotlight-card group flex h-full flex-col p-7">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-5 gap-4">
                      <div className="flex-1">
                        <span className="chip mb-4">{community.type}</span>
                        <h3 className="mt-4 text-2xl font-bold tracking-tight">{community.name}</h3>
                      </div>
                      {community.image && (
                        <div className="relative h-16 w-16 md:h-20 md:w-20 flex-shrink-0 overflow-hidden rounded-2xl ring-1 ring-border shadow-lg shadow-bitcoin-blue/10 transition-transform duration-500 group-hover:scale-105 group-hover:rotate-3">
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
                    <p className="text-muted-foreground leading-relaxed mb-5">
                      {community.description}
                    </p>

                    {/* Stats */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      <span className="chip-muted">
                        <Users className="mr-2 h-4 w-4" aria-hidden="true" />
                        {community.members} {t('members')}
                      </span>
                      <span className="chip-muted">
                        <MessageCircle className="mr-2 h-4 w-4" aria-hidden="true" />
                        {community.frequency}
                      </span>
                    </div>

                    <div className="mt-auto flex flex-col gap-2">
                      {community.links.map((link, linkIndex) => (
                        <Button
                          key={linkIndex}
                          asChild={!!link.url}
                          disabled={!link.url}
                          variant={linkIndex === 0 ? "default" : "outline"}
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
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactCta
        title={t('ctaTitle')}
        description={t('ctaDescription')}
        label={t('contactUs')}
        icon={<Users className="h-9 w-9" aria-hidden="true" />}
      />
    </main>
  )
}
