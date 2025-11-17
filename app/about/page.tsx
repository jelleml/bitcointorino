import { Metadata } from "next"
import { Target, Lightbulb, Heart, Zap, GraduationCap, Users, Rocket, Shield, Globe, Handshake } from "lucide-react"

export const metadata: Metadata = {
  title: "About - Bitcoin Torino",
  description: "Scopri la missione, gli obiettivi, le attività e i valori dell'Associazione Bitcoin Torino",
}

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "Mission",
      description: "Promuovere l'adozione e lo sviluppo dell'ecosistema Bitcoin a Torino e dintorni, creando una community solida e inclusiva che favorisca l'educazione, l'innovazione e la collaborazione tra appassionati, sviluppatori e imprenditori."
    },
    {
      icon: Lightbulb,
      title: "Educazione",
      description: "Diffondere la conoscenza su Bitcoin, Lightning Network e le tecnologie blockchain attraverso workshop, seminari e materiali educativi accessibili a tutti i livelli di competenza."
    },
    {
      icon: Heart,
      title: "Community",
      description: "Costruire e mantenere una rete di persone appassionate di Bitcoin, facilitando il networking, lo scambio di idee e la collaborazione tra membri della community locale."
    },
    {
      icon: Zap,
      title: "Innovazione",
      description: "Supportare progetti, startup e iniziative che utilizzano Bitcoin e Lightning Network per creare valore e innovazione nel territorio torinese e piemontese."
    },
    {
      icon: Shield,
      title: "Sovranità Finanziaria",
      description: "Promuovere l'importanza della sovranità finanziaria individuale e l'adozione di strumenti finanziari decentralizzati che restituiscono il controllo ai cittadini."
    },
    {
      icon: Globe,
      title: "Open Source",
      description: "Sostenere i principi dell'open source, della trasparenza e della collaborazione, valori fondamentali dell'ecosistema Bitcoin."
    }
  ]

  const objectives = [
    {
      icon: GraduationCap,
      title: "Formazione Continua",
      description: "Organizzare eventi formativi mensili, workshop tecnici e seminari per tutti i livelli di conoscenza, dai principianti agli esperti."
    },
    {
      icon: Users,
      title: "Crescita della Community",
      description: "Ampliare la base di membri attivi, creando opportunità di networking e collaborazione tra professionisti, sviluppatori e appassionati."
    },
    {
      icon: Rocket,
      title: "Supporto all'Ecosistema",
      description: "Mappare e supportare aziende, merchant e spazi che utilizzano Bitcoin, creando una directory completa dell'ecosistema Bitcoin torinese."
    },
    {
      icon: Handshake,
      title: "Partnership Strategiche",
      description: "Stabilire collaborazioni con altre associazioni, istituzioni e realtà imprenditoriali per promuovere l'adozione di Bitcoin a livello locale e nazionale."
    }
  ]

  const activities = [
    {
      title: "Meetup Mensili",
      description: "Organizziamo incontri mensili per discutere di Bitcoin, Lightning Network, sviluppi tecnologici e casi d'uso pratici. Ogni meetup include presentazioni, Q&A e momenti di networking."
    },
    {
      title: "Workshop Tecnici",
      description: "Workshop pratici su temi come sviluppo su Lightning Network, gestione di nodi Bitcoin, sicurezza delle chiavi private e best practices per wallet e pagamenti."
    },
    {
      title: "Eventi Educativi",
      description: "Seminari introduttivi per principianti, corsi avanzati per sviluppatori e sessioni di formazione per aziende interessate ad adottare Bitcoin."
    },
    {
      title: "Networking e Collaborazioni",
      description: "Facilitiamo l'incontro tra professionisti, imprenditori e sviluppatori per favorire la nascita di progetti e partnership nell'ecosistema Bitcoin."
    },
    {
      title: "Supporto a Progetti Locali",
      description: "Offriamo supporto e visibilità a startup, aziende e iniziative locali che integrano Bitcoin nelle loro attività o prodotti."
    },
    {
      title: "Advocacy e Divulgazione",
      description: "Promuoviamo la conoscenza di Bitcoin attraverso contenuti, articoli, podcast e partecipazione a eventi per sensibilizzare l'opinione pubblica."
    }
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-bitcoin-blue to-bitcoin-blue-dark text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Chi Siamo</h1>
            <p className="text-xl text-gray-100">
              L&apos;Associazione Bitcoin Torino è una realtà no-profit dedicata alla promozione 
              e allo sviluppo dell&apos;ecosistema Bitcoin nel territorio torinese.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center p-4 rounded-lg bg-bitcoin-blue/10 mb-6">
                <Target className="h-12 w-12 text-bitcoin-blue" aria-hidden="true" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">La Nostra Missione</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Promuoviamo l&apos;adozione e lo sviluppo dell&apos;ecosistema Bitcoin a Torino e dintorni, 
                creando una community solida e inclusiva che favorisca l&apos;educazione, l&apos;innovazione 
                e la collaborazione. Crediamo che Bitcoin rappresenti una tecnologia rivoluzionaria per 
                la sovranità finanziaria individuale e vogliamo contribuire alla sua diffusione nel nostro territorio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">I Nostri Valori</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 border-2 border-gray-200 hover:border-bitcoin-blue hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-bitcoin-blue/10 flex-shrink-0">
                      <value.icon className="h-6 w-6 text-bitcoin-blue" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">I Nostri Obiettivi</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {objectives.map((objective, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-lg p-8 border-2 border-gray-200 hover:border-bitcoin-blue transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-bitcoin-blue/10 flex-shrink-0">
                      <objective.icon className="h-6 w-6 text-bitcoin-blue" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3">{objective.title}</h3>
                      <p className="text-muted-foreground">{objective.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Le Nostre Attività</h2>
            <div className="space-y-6">
              {activities.map((activity, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 border-2 border-gray-200 hover:border-bitcoin-blue transition-all duration-300"
                >
                  <h3 className="text-xl font-bold mb-3 text-bitcoin-blue">{activity.title}</h3>
                  <p className="text-muted-foreground">{activity.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-bitcoin-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Vuoi Far Parte della Community?
            </h2>
            <p className="text-xl text-gray-100 mb-8">
              Unisciti a noi e contribuisci a costruire l&apos;ecosistema Bitcoin di Torino
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://t.me/bitcointorino"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-bitcoin-blue font-bold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Unisciti su Telegram
              </a>
              <a
                href="mailto:info@bitcointorino.it"
                className="inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors"
              >
                Contattaci
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

