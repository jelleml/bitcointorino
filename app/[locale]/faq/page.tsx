'use client'

import { Metadata } from "next"
import { Plus, Minus } from "lucide-react"
import { useTranslations, useLocale } from 'next-intl'
import { PageHero } from "@/components/layout/page-hero"
import { ContactCta } from "@/components/layout/contact-cta"
import { Reveal } from "@/components/fx/reveal"

const LUMA_URL = "https://luma.com/bitcoin-torino-calendar"
const TELEGRAM_URL = "https://t.me/bitcointorinochannel"
const EMAIL_URL = "mailto:bitcoin.torino@proton.me"

function FaqLink({ href, children }: { href: string; children: React.ReactNode }) {
  const external = href.startsWith("http")
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="font-medium text-bitcoin-blue underline underline-offset-4 hover:no-underline dark:text-bitcoin-blue-light"
    >
      {children}
    </a>
  )
}

export default function FAQPage() {
  const t = useTranslations('FAQ');
  const locale = useLocale();

  const faqs = [
    {
      category: locale === 'it' ? "Generale" : "General",
      questions: [
        {
          question: locale === 'it' ? "Cos'è Bitcoin Torino?" : "What is Bitcoin Torino?",
          answer: locale === 'it'
            ? "Bitcoin Torino è un'associazione dedicata alla promozione e sviluppo dell'ecosistema Bitcoin nella città di Torino e dintorni. Supportiamo la crescita della community locale e fungiamo da aggregatore dei progetti presenti sul territorio. Mettiamo in contatto imprese e istituzioni della città con realtà del settore, italiane ed estere."
            : "Bitcoin Torino is an association dedicated to the promotion and development of the Bitcoin ecosystem in the city of Turin and its surroundings. We support the growth of the local community and act as an aggregator of the projects active in the area. We connect the city's businesses and institutions with industry players, both Italian and international.",
        },
        {
          question: locale === 'it' ? "Come posso partecipare agli eventi?" : "How can I participate in the events?",
          answer: locale === 'it'
            ? <>Tutti i nostri eventi e dei nostri partner sono pubblicati su <FaqLink href={LUMA_URL}>Luma</FaqLink>. Puoi iscriverti gratuitamente visitando il nostro <FaqLink href={LUMA_URL}>calendario eventi</FaqLink>. La maggior parte degli eventi sono gratuiti e aperti a tutti.</>
            : <>All our events and our partners' events are published on <FaqLink href={LUMA_URL}>Luma</FaqLink>. You can register for free by visiting our <FaqLink href={LUMA_URL}>event calendar</FaqLink>. Most events are free and open to everyone.</>,
        },
        {
          question: locale === 'it' ? "Devo essere un esperto di Bitcoin per partecipare?" : "Do I need to be a Bitcoin expert to participate?",
          answer: locale === 'it'
            ? <>Dipende, i nostri eventi e dei nostri partner sono pensati sia per principianti che per esperti. Controlla il <FaqLink href={LUMA_URL}>calendario Luma</FaqLink>, nella descrizione di ogni evento è sempre specificato a chi si rivolge.</>
            : <>It depends: our events and our partners' events are designed for both beginners and experts. Check the <FaqLink href={LUMA_URL}>Luma calendar</FaqLink>, where each event description always states who it is for.</>,
        },
        {
          question: locale === 'it' ? "Come posso unirmi alla community?" : "How can I join the community?",
          answer: locale === 'it'
            ? <>Puoi unirti al nostro <FaqLink href={TELEGRAM_URL}>gruppo Telegram</FaqLink> per rimanere aggiornato su tutte le novità, e seguire il <FaqLink href={LUMA_URL}>calendario Luma</FaqLink> per essere informato su tutti gli eventi.</>
            : <>You can join our <FaqLink href={TELEGRAM_URL}>Telegram group</FaqLink> to stay updated on all the news, and follow the <FaqLink href={LUMA_URL}>Luma calendar</FaqLink> to be informed about all events.</>,
        },
        {
          question: locale === 'it' ? "Come posso diventare partner di Bitcoin Torino?" : "How can I become a partner of Bitcoin Torino?",
          answer: locale === 'it'
            ? <>Se sei un'azienda, un'associazione o un'organizzazione interessata a collaborare con noi, <FaqLink href={EMAIL_URL}>contattaci via email</FaqLink>. Valutiamo diverse forme di partnership per supportare e promuovere l'ecosistema Bitcoin.</>
            : <>If you are a company, an association, or an organization interested in collaborating with us, <FaqLink href={EMAIL_URL}>contact us by email</FaqLink>. We evaluate various forms of partnership to support and promote the Bitcoin ecosystem.</>,
        },
      ],
    },
    {
      category: locale === 'it' ? "Aziende e Attività" : "Businesses and Activities",
      questions: [
        {
          question: locale === 'it' ? "Come posso iniziare ad accettare Bitcoin nella mia attività?" : "How can I start accepting Bitcoin in my business?",
          answer: locale === 'it'
            ? <>Ti possiamo aiutare a integrare i pagamenti Bitcoin e Lightning Network nella tua attività. <FaqLink href={EMAIL_URL}>Contattaci via email</FaqLink> per ricevere supporto gratuito e per essere inserito nella directory delle attività che accettano bitcoin.</>
            : <>We can help you integrate Bitcoin and Lightning Network payments into your business. <FaqLink href={EMAIL_URL}>Contact us by email</FaqLink> to receive free support and to be included in the directory of businesses that accept bitcoin.</>,
        },
        {
          question: locale === 'it' ? "Quali sono i vantaggi per un'attività che accetta Bitcoin?" : "What are the advantages for a business accepting Bitcoin?",
          answer: locale === 'it'
            ? "I principali vantaggi includono: commissioni ridotte rispetto ai circuiti tradizionali, pagamenti istantanei con Lightning Network, nessun rischio di chargeback, accesso a una community di clienti appassionati e visibilità attraverso il nostro network."
            : "Key benefits include: lower fees compared to traditional circuits, instant payments with Lightning Network, no risk of chargebacks, access to a community of passionate customers, and visibility through our network.",
        },
        {
          question: locale === 'it' ? "Come posso essere inserito nella directory attività?" : "How can I be included in the business directory?",
          answer: locale === 'it'
            ? <><FaqLink href={EMAIL_URL}>Inviaci una email</FaqLink> con il nome della tua attività, indirizzo, tipologia di servizi e informazioni su come accetti Bitcoin. Verificheremo i dettagli e ti inseriremo nella mappa delle attività che accettano bitcoin.</>
            : <><FaqLink href={EMAIL_URL}>Send us an email</FaqLink> with your business name, address, type of services, and information on how you accept Bitcoin. We will verify the details and add you to the map of businesses that accept bitcoin.</>,
        },
        {
          question: locale === 'it' ? "Offrite supporto tecnico per wallet e sicurezza?" : "Do you offer technical support for wallets and security?",
          answer: locale === 'it'
            ? "Sì, offriamo supporto gratuito su come utilizzare Bitcoin in sicurezza. Per questioni più specifiche e avanzate, ti orientiamo verso partner e soluzioni di terze parti."
            : "Yes, we offer free support on how to use Bitcoin safely. For more specific and advanced matters, we direct you to partners and third-party solutions.",
        },
        {
          question: locale === 'it' ? "Offrite supporto per la gestione fiscale di bitcoin?" : "Do you offer support with bitcoin tax matters?",
          answer: locale === 'it'
            ? "Non direttamente, rigiriamo la questione ai nostri partner specializzati in questi temi."
            : "Not directly: we refer the matter to our partners who specialize in these topics.",
        },
      ],
    },
    {
      category: locale === 'it' ? "Eventi e Meetup" : "Events and Meetups",
      questions: [
        {
          question: locale === 'it' ? "Con che frequenza organizzate eventi?" : "How often do you organize events?",
          answer: locale === 'it'
            ? <>L’associazione organizza eventi occasionalmente. L’unico evento fisso è quello dedicato ai soci di fine anno. I nostri partner, invece, organizzano eventi molto più spesso, alcuni su base settimanale. Segui il <FaqLink href={LUMA_URL}>calendario Luma</FaqLink> per ricevere aggiornamenti su tutti gli eventi in programma.</>
            : <>The association organizes events occasionally. The only recurring event is the end-of-year event for members. Our partners, on the other hand, organize events much more often, some on a weekly basis. Follow the <FaqLink href={LUMA_URL}>Luma calendar</FaqLink> to get updates on all upcoming events.</>,
        },
        {
          question: locale === 'it' ? "Dove si svolgono gli eventi?" : "Where do the events take place?",
          answer: locale === 'it'
            ? <>Gli eventi si svolgono in diverse location di Torino. L'indirizzo specifico viene comunicato al momento della pubblicazione dell'evento, controlla nella descrizione sul <FaqLink href={LUMA_URL}>calendario Luma</FaqLink>.</>
            : <>Events take place in various locations in Turin. The specific address is announced when the event is published: check the description on the <FaqLink href={LUMA_URL}>Luma calendar</FaqLink>.</>,
        },
        {
          question: locale === 'it' ? "Posso proporre un intervento o un workshop?" : "Can I propose a talk or a workshop?",
          answer: locale === 'it'
            ? <>Sì, siamo felici di dare spazio a speaker e relatori competenti. <FaqLink href={EMAIL_URL}>Contattaci via email</FaqLink>, valuteremo la tua richiesta e procederemo ad organizzare insieme l’evento.</>
            : <>Yes, we are happy to give space to knowledgeable speakers and presenters. <FaqLink href={EMAIL_URL}>Contact us by email</FaqLink>: we will evaluate your request and organize the event together.</>,
        },
        {
          question: locale === 'it' ? "Gli eventi sono a pagamento?" : "Are the events paid?",
          answer: locale === 'it'
            ? <>La maggior parte dei nostri eventi e di quelli dei nostri partner sono gratuiti, ma alcuni potrebbero richiedere un contributo per coprire i costi organizzativi. Il costo è sempre indicato nella descrizione dell'evento su <FaqLink href={LUMA_URL}>Luma</FaqLink>.</>
            : <>Most of our events and our partners' events are free, but some may require a contribution to cover organizational costs. The cost is always indicated in the event description on <FaqLink href={LUMA_URL}>Luma</FaqLink>.</>,
        },
        {
          question: locale === 'it' ? "Posso sponsorizzare un evento?" : "Can I sponsor an event?",
          answer: locale === 'it'
            ? <>No, non accettiamo sponsorizzazioni, solamente donazioni. Tuttavia, offriamo visibilità ai partner che sposano i nostri obiettivi e contribuiscono portando contenuti di valore. <FaqLink href={EMAIL_URL}>Contattaci via email</FaqLink> per conoscere le opportunità disponibili.</>
            : <>No, we do not accept sponsorships, only donations. However, we offer visibility to partners who share our goals and contribute valuable content. <FaqLink href={EMAIL_URL}>Contact us by email</FaqLink> to learn about available opportunities.</>,
        },
      ],
    },
  ];

  return (
    <main className="min-h-screen">
      <PageHero
        title={t('title')}
        subtitle={t('description')}
      />

      {/* FAQ Sections */}
      <section className="section-alt py-16 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-16">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <Reveal>
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
                    <span className="text-gradient">{category.category}</span>
                  </h2>
                </Reveal>
                <div className="space-y-4">
                  {category.questions.map((faq, faqIndex) => (
                    <Reveal key={faqIndex} delay={faqIndex * 60}>
                      <details className="spotlight-card group">
                        <summary className="flex items-center justify-between cursor-pointer p-6 font-semibold text-lg list-none [&::-webkit-details-marker]:hidden">
                          <span className="pr-4">{faq.question}</span>
                          <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-bitcoin-blue/10 text-bitcoin-blue transition-all duration-300 group-open:rotate-180 group-open:bg-gradient-to-br group-open:from-bitcoin-blue-light group-open:to-bitcoin-blue-dark group-open:text-white dark:bg-white/10">
                            <Plus className="h-5 w-5 group-open:hidden" aria-hidden="true" />
                            <Minus className="h-5 w-5 hidden group-open:block" aria-hidden="true" />
                          </span>
                        </summary>
                        <div className="px-6 pb-6 text-muted-foreground leading-relaxed border-t pt-5">
                          <p>{faq.answer}</p>
                        </div>
                      </details>
                    </Reveal>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCta
        title={t('ctaTitle')}
        description={t('ctaDescription')}
        label={t('sendEmail')}
        extra={
          <a
            href="https://t.me/bitcointorino"
            target="_blank"
            rel="noopener noreferrer"
            className="glass inline-flex h-14 items-center justify-center rounded-full px-9 text-base font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-white/15"
          >
            {t('joinTelegram')}
          </a>
        }
      />
    </main>
  )
}
