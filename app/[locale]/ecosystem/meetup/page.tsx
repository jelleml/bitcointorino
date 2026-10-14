import { Users, ExternalLink, MessageCircle, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTranslations } from 'next-intl'
import Image from "next/image"
import { PageHero } from "@/components/layout/page-hero"
import { ContactCta } from "@/components/layout/contact-cta"
import { Reveal } from "@/components/fx/reveal"
import { SectionNav } from "@/components/layout/section-nav"

// Sezioni della pagina, nell'ordine in cui compaiono (i team studenteschi per ultimi)
const GROUPS = ["meetup", "community", "student"] as const
type Group = (typeof GROUPS)[number]

export default function MeetupPage() {
  const t = useTranslations('Ecosystem.Meetup');

  const communities = [
    {
      id: "bitpolito",
      group: "student" as Group,
      members: "50",
      image: "/Community/pfp-bitpolito.jpg",
      links: [{ type: "telegram", label: "Join on Telegram", url: "https://t.me/bitpolito" }],
    },
    {
      id: "satoshi_torino",
      group: "meetup" as Group,
      members: "800",
      image: "/Community/pfp-satoshi-spritz-torino.jpg",
      links: [{ type: "telegram", label: "Join on Telegram", url: "https://t.me/satoshispritztorino" }],
    },
    {
      id: "satoshi_bardonecchia",
      group: "meetup" as Group,
      members: "30",
      image: "/Community/pfp-satoshi-spritz-bardonecchia.jpg",
      links: [{ type: "telegram", label: "Join on Telegram", url: "https://t.me/satoshispritzbardonecchia" }],
    },
    {
      id: "satoshi_valsusa",
      group: "meetup" as Group,
      members: "35",
      image: "/Community/pfp-satoshi-spritz-valsusa.jpg",
      links: [{ type: "telegram", label: "Join on Telegram", url: "https://t.me/SatoshiSpritzValSusa" }],
    },
    {
      id: "bitcoin_alba",
      group: "community" as Group,
      members: "125",
      image: "/Community/pfp-bitcoin-alba-asti-cuneo.jpg",
      links: [{ type: "telegram", label: "Join on Telegram", url: "https://t.me/bitcoinalbacuneo" }],
    },
    {
      id: "bitdevs",
      group: "meetup" as Group,
      members: "50",
      image: "/Community/pfp-bitdevs-torino.jpg",
      links: [{ type: "telegram", label: "Join on Telegram", url: "https://t.me/bitdevstorino" }],
    },
    {
      id: "bitcoin_bitches",
      group: "community" as Group,
      members: "100",
      image: "/Community/pfp-bitcoin-bitches-piemonte.jpg",
      links: [{ type: "telegram", label: "Join on Telegram", url: "https://t.me/btctorinopiemonte" }],
    },
    {
      id: "builder_torino",
      group: "community" as Group,
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

  type Community = (typeof mappedCommunities)[number]

  const CommunityCard = ({ community }: { community: Community }) => (
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
  )

  const groups = GROUPS
    .map((id) => ({ id, label: t(`groups.${id}`), communities: mappedCommunities.filter((c) => c.group === id) }))
    .filter((g) => g.communities.length)

  return (
    <main className="min-h-screen">
      <PageHero title={t('title')} subtitle={t('description')} />

      {/* Community raggruppate per tipo, con pulsanti per saltare alle sezioni */}
      <section className="section-alt py-16 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <SectionNav
              label={t('sectionsLabel')}
              items={groups.map((g) => ({ id: g.id, label: g.label, count: g.communities.length }))}
            />

            <div className="space-y-14 md:space-y-20">
              {groups.map((group) => (
                <div key={group.id} id={group.id} className="scroll-mt-24">
                  <Reveal>
                    <h2 className="mb-6 flex items-baseline gap-3 text-2xl md:text-3xl font-bold tracking-tight">
                      {group.label}
                      <span className="text-base font-medium text-muted-foreground">{group.communities.length}</span>
                    </h2>
                  </Reveal>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {group.communities.map((community, index) => (
                      <Reveal key={community.id} delay={(index % 2) * 100}>
                        <CommunityCard community={community} />
                      </Reveal>
                    ))}
                  </div>
                </div>
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
