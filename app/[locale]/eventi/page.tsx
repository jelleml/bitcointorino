import type { Metadata } from "next"
import { Calendar, MapPin, Users, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { PageHero } from "@/components/layout/page-hero"
import { SectionHeading } from "@/components/layout/section-heading"
import { ContactCta } from "@/components/layout/contact-cta"
import { Reveal } from "@/components/fx/reveal"
import { setRequestLocale } from 'next-intl/server'

export const metadata: Metadata = {
  title: "Eventi - Bitcoin Torino",
  description: "Scopri tutti gli eventi organizzati da Bitcoin Torino: meetup, workshop, conferenze e molto altro.",
}

// Mock events data
const upcomingEvents = [
  {
    id: 1,
    title: "Bitcoin Meetup Mensile",
    date: "2025-11-15",
    time: "19:00 - 22:00",
    location: "Toolbox Coworking, Via Agostino da Montefeltro 2, Torino",
    description: "Incontro mensile della community per discutere delle ultime novità nel mondo Bitcoin, fare networking e scambiare idee.",
    type: "Meetup",
    attendees: 45,
    maxAttendees: 80,
  },
  {
    id: 2,
    title: "Lightning Network Workshop",
    date: "2025-11-22",
    time: "15:00 - 18:00",
    location: "Online (Zoom)",
    description: "Workshop pratico su come utilizzare e configurare un nodo Lightning Network. Imparerai a creare canali, gestire liquidità e molto altro.",
    type: "Workshop",
    attendees: 32,
    maxAttendees: 50,
  },
  {
    id: 3,
    title: "Bitcoin Security Deep Dive",
    date: "2025-11-29",
    time: "14:00 - 18:00",
    location: "Politecnico di Torino, Aula Magna",
    description: "Conferenza sulla sicurezza Bitcoin con esperti del settore. Topics: multi-sig, hardware wallets, best practices per la custodia.",
    type: "Conferenza",
    attendees: 78,
    maxAttendees: 150,
  },
  {
    id: 4,
    title: "Bitcoin Pizza Party",
    date: "2025-12-06",
    time: "20:00 - 23:00",
    location: "Da annunciare",
    description: "Evento sociale per celebrare la community Bitcoin di Torino. Cena insieme pagando in Bitcoin!",
    type: "Social",
    attendees: 25,
    maxAttendees: 60,
  },
]

const pastEvents = [
  {
    id: 5,
    title: "Bitcoin Basics Workshop",
    date: "2025-10-18",
    location: "Toolbox Coworking, Torino",
    description: "Workshop introduttivo per chi vuole avvicinarsi al mondo Bitcoin.",
    attendees: 55,
  },
  {
    id: 6,
    title: "Meetup Settembre",
    date: "2025-09-20",
    location: "Toolbox Coworking, Torino",
    description: "Meetup mensile della community con presentazioni e networking.",
    attendees: 62,
  },
]

export default function EventiPage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale)
  return (
    <div className="min-h-screen">
      <PageHero
        title="Eventi Bitcoin Torino"
        subtitle="Partecipa ai nostri eventi per imparare, fare networking e contribuire alla crescita della community Bitcoin."
      >
        <a href="#upcoming-events" className="btn-shine btn-light group">
          <span className="relative z-10">Scopri i Prossimi Eventi</span>
        </a>
      </PageHero>

      {/* Luma Calendar Integration */}
      <section className="py-16 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <SectionHeading title="Calendario Completo" description={"Tutti gli eventi in un colpo d'occhio"} />
            {/* Luma Embed - In production this would be the actual embed */}
            <Reveal>
              <div className="spotlight-card p-8 text-center min-h-[400px] flex items-center justify-center hover:!translate-y-0">
                <div>
                  <p className="text-base md:text-lg text-muted-foreground mb-4">
                    📅 Calendario Luma integrato
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Qui verrà visualizzato il calendario completo degli eventi tramite Luma embed
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section id="upcoming-events" className="section-alt py-16 md:py-28 scroll-mt-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <SectionHeading title="Prossimi Eventi" />
            <div className="space-y-6">
              {upcomingEvents.map((event) => (
                <Reveal key={event.id}>
                  <Card>
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-3 mb-3">
                            <span className="chip">{event.type}</span>
                            <span className="flex items-center text-sm text-muted-foreground">
                              <Users className="h-4 w-4 mr-1" aria-hidden="true" />
                              {event.attendees}/{event.maxAttendees} partecipanti
                            </span>
                          </div>
                          <CardTitle className="text-2xl mb-2">{event.title}</CardTitle>
                          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 mr-2 text-bitcoin-blue" aria-hidden="true" />
                              <time dateTime={event.date}>
                                {new Date(event.date).toLocaleDateString('it-IT', {
                                  weekday: 'long',
                                  year: 'numeric',
                                  month: 'long',
                                  day: 'numeric'
                                })}
                              </time>
                            </div>
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-2 text-bitcoin-blue" aria-hidden="true" />
                              {event.time}
                            </div>
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 mr-2 text-bitcoin-blue" aria-hidden="true" />
                              {event.location}
                            </div>
                          </div>
                        </div>
                        <Button className="md:mt-0">
                          Registrati
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        {event.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-16 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <SectionHeading title="Eventi Passati" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pastEvents.map((event, index) => (
                <Reveal key={event.id} delay={(index % 2) * 100}>
                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle className="text-xl">{event.title}</CardTitle>
                      <div className="flex flex-col gap-1 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2 text-bitcoin-blue" aria-hidden="true" />
                          <time dateTime={event.date}>
                            {new Date(event.date).toLocaleDateString('it-IT', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </time>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-2 text-bitcoin-blue" aria-hidden="true" />
                          {event.location}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{event.description}</CardDescription>
                    </CardContent>
                    <CardFooter className="text-sm text-muted-foreground">
                      <Users className="h-4 w-4 mr-1" aria-hidden="true" />
                      {event.attendees} partecipanti
                    </CardFooter>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactCta
        title="Non perdere nessun evento"
        description="Iscriviti alla newsletter per ricevere aggiornamenti sui prossimi eventi e le ultime novità dalla community."
        label="Iscriviti Ora"
        href="#newsletter"
        icon={<Calendar className="h-9 w-9" aria-hidden="true" />}
      />
    </div>
  )
}
