'use client'

import { Metadata } from "next"
import { HelpCircle, Plus, Minus } from "lucide-react"
import { useTranslations, useLocale } from 'next-intl'

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
            ? "Bitcoin Torino è un'associazione dedicata alla promozione e sviluppo dell'ecosistema Bitcoin nella città di Torino e dintorni. Organizziamo eventi, meetup, workshop e supportiamo la crescita della community locale."
            : "Bitcoin Torino is an association dedicated to the promotion and development of the Bitcoin ecosystem in the city of Turin and its surroundings. We organize events, meetups, workshops, and support the growth of the local community.",
        },
        {
          question: locale === 'it' ? "Come posso partecipare agli eventi?" : "How can I participate in the events?",
          answer: locale === 'it'
            ? "Tutti i nostri eventi sono pubblicati su Luma. Puoi iscriverti gratuitamente visitando il nostro calendario eventi su luma.com/user/bitcointorino. La maggior parte degli eventi sono gratuiti e aperti a tutti."
            : "All our events are published on Luma. You can register for free by visiting our event calendar at luma.com/user/bitcointorino. Most events are free and open to everyone.",
        },
        {
          question: locale === 'it' ? "Devo essere un esperto di Bitcoin per partecipare?" : "Do I need to be a Bitcoin expert to participate?",
          answer: locale === 'it'
            ? "Assolutamente no! I nostri eventi sono aperti a tutti, dai principianti agli esperti. Organizziamo workshop specifici per chi si avvicina per la prima volta a Bitcoin e meetup per discussioni più tecniche."
            : "Absolutely not! Our events are open to everyone, from beginners to experts. We organize specific workshops for those approaching Bitcoin for the first time and meetups for more technical discussions.",
        },
        {
          question: locale === 'it' ? "Come posso unirmi alla community?" : "How can I join the community?",
          answer: locale === 'it'
            ? "Puoi unirti al nostro gruppo Telegram per rimanere aggiornato su eventi e novità, seguirci su Luma per gli eventi, e partecipare ai nostri meetup mensili. Trova tutti i link nella homepage."
            : "You can join our Telegram group to stay updated on events and news, follow us on Luma for events, and participate in our monthly meetups. Find all the links on the homepage.",
        },
      ],
    },
    {
      category: locale === 'it' ? "Per Aziende e Attività" : "For Businesses and Activities",
      questions: [
        {
          question: locale === 'it' ? "Come posso iniziare ad accettare Bitcoin nella mia attività?" : "How can I start accepting Bitcoin in my business?",
          answer: locale === 'it'
            ? "Ti possiamo aiutare a integrare i pagamenti Bitcoin e Lightning Network nella tua attività. Contattaci a info@bitcointorino.org per una consulenza gratuita e per essere inserito nella directory delle attività Bitcoin-friendly di Torino."
            : "We can help you integrate Bitcoin and Lightning Network payments into your business. Contact us at info@bitcointorino.org for a free consultation and to be included in the Turin Bitcoin-friendly business directory.",
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
            ? "Invia una email a info@bitcointorino.org con il nome della tua attività, indirizzo, tipologia di servizi e informazioni su come accetti Bitcoin. Verificheremo i dettagli e ti inseriremo nella nostra mappa delle attività Bitcoin-friendly."
            : "Send an email to info@bitcointorino.org with your business name, address, type of services, and information on how you accept Bitcoin. We will verify the details and include you in our map of Bitcoin-friendly businesses.",
        },
        {
          question: locale === 'it' ? "La mia azienda vuole integrare Bitcoin nel proprio business. Chi posso contattare?" : "My company wants to integrate Bitcoin into its business. Who can I contact?",
          answer: locale === 'it'
            ? "Contattaci a info@bitcointorino.org. Possiamo metterti in contatto con esperti della community per consulenze su Lightning Network, Bitcoin treasury, pagamenti B2B e altre soluzioni enterprise."
            : "Contact us at info@bitcointorino.org. We can put you in touch with community experts for advice on Lightning Network, Bitcoin treasury, B2B payments, and other enterprise solutions.",
        },
      ],
    },
    {
      category: locale === 'it' ? "Eventi e Meetup" : "Events and Meetups",
      questions: [
        {
          question: locale === 'it' ? "Con che frequenza organizzate eventi?" : "How often do you organize events?",
          answer: locale === 'it'
            ? "Organizziamo un meetup mensile principale (generalmente il primo giovedì del mese) e vari workshop ed eventi speciali durante l'anno. Consulta il calendario Luma per gli eventi aggiornati."
            : "We organize a main monthly meetup (generally the first Thursday of the month) and various workshops and special events throughout the year. Check the Luma calendar for updated events.",
        },
        {
          question: locale === 'it' ? "Dove si svolgono gli eventi?" : "Where do the events take place?",
          answer: locale === 'it'
            ? "Gli eventi si svolgono in diverse location di Torino. L'indirizzo specifico viene comunicato al momento della pubblicazione dell'evento su Luma. Stiamo anche costruendo una rete di spazi Bitcoin-friendly."
            : "Events take place in various locations in Turin. The specific address is communicated when the event is published on Luma. We are also building a network of Bitcoin-friendly spaces.",
        },
        {
          question: locale === 'it' ? "Posso proporre un intervento o un workshop?" : "Can I propose a talk or a workshop?",
          answer: locale === 'it'
            ? "Certamente! Siamo sempre alla ricerca di speaker e relatori. Se hai competenze da condividere con la community, contattaci a info@bitcointorino.org con una proposta del tuo intervento."
            : "Certainly! We are always looking for speakers and presenters. If you have skills to share with the community, contact us at info@bitcointorino.org with a proposal for your talk.",
        },
        {
          question: locale === 'it' ? "Gli eventi sono a pagamento?" : "Are the events paid?",
          answer: locale === 'it'
            ? "La maggior parte dei nostri eventi sono gratuiti. Alcuni workshop specialistici potrebbero richiedere un contributo per coprire i costi organizzativi. Il costo è sempre indicato nella descrizione dell'evento su Luma."
            : "Most of our events are free. Some specialized workshops may require a contribution to cover organizational costs. The cost is always indicated in the event description on Luma.",
        },
      ],
    },
    {
      category: locale === 'it' ? "Tecnico" : "Technical",
      questions: [
        {
          question: locale === 'it' ? "Cos'è Lightning Network?" : "What is Lightning Network?",
          answer: locale === 'it'
            ? "Lightning Network è un protocollo di secondo livello costruito su Bitcoin che permette transazioni istantanee a costi minimi. È ideale per micropagamenti e uso quotidiano. Organizziamo workshop dedicati per imparare a usarlo."
            : "Lightning Network is a second-layer protocol built on top of Bitcoin that allows for instant transactions at minimal costs. It is ideal for micropayments and daily use. We organize dedicated workshops to learn how to use it.",
        },
        {
          question: locale === 'it' ? "Offrite supporto tecnico per wallet e sicurezza?" : "Do you offer technical support for wallets and security?",
          answer: locale === 'it'
            ? "Durante i nostri workshop e meetup offriamo supporto e consigli su wallet, best practices di sicurezza e utilizzo di Bitcoin. Per questioni specifiche, puoi chiedere nel gruppo Telegram dove la community è sempre disponibile ad aiutare."
            : "During our workshops and meetups, we offer support and advice on wallets, security best practices, and the use of Bitcoin. For specific questions, you can ask in the Telegram group where the community is always available to help.",
        },
        {
          question: locale === 'it' ? "Posso contribuire tecnicamente al progetto?" : "Can I contribute technically to the project?",
          answer: locale === 'it'
            ? "Sì! Siamo sempre alla ricerca di sviluppatori, designer e volontari che vogliano contribuire. Contattaci per sapere come puoi aiutare a far crescere l'ecosistema Bitcoin a Torino."
            : "Yes! We are always looking for developers, designers, and volunteers who want to contribute. Contact us to find out how you can help grow the Bitcoin ecosystem in Turin.",
        },
      ],
    },
    {
      category: locale === 'it' ? "Partnership e Collaborazioni" : "Partnerships and Collaborations",
      questions: [
        {
          question: locale === 'it' ? "Come posso diventare partner di Bitcoin Torino?" : "How can I become a partner of Bitcoin Torino?",
          answer: locale === 'it'
            ? "Se sei un'azienda, un'associazione o un'organizzazione interessata a collaborare con noi, contattaci a info@bitcointorino.org. Valutiamo diverse forme di partnership per supportare e promuovere l'ecosistema Bitcoin."
            : "If you are a company, an association, or an organization interested in collaborating with us, contact us at info@bitcointorino.org. We evaluate various forms of partnership to support and promote the Bitcoin ecosystem.",
        },
        {
          question: locale === 'it' ? "Collaborate con università o enti di formazione?" : "Do you collaborate with universities or educational institutions?",
          answer: locale === 'it'
            ? "Sì, siamo aperti a collaborazioni con università, scuole e centri di formazione per organizzare corsi, seminari e workshop su Bitcoin e blockchain technology. Contattaci per discutere possibili progetti."
            : "Yes, we are open to collaborations with universities, schools, and training centers to organize courses, seminars, and workshops on Bitcoin and blockchain technology. Contact us to discuss possible projects.",
        },
        {
          question: locale === 'it' ? "Posso sponsorizzare un evento?" : "Can I sponsor an event?",
          answer: locale === 'it'
            ? "Sì, accettiamo sponsorizzazioni per i nostri eventi. Le sponsorizzazioni ci aiutano a organizzare eventi di qualità e a far crescere la community. Contattaci per conoscere le opportunità disponibili."
            : "Yes, we accept sponsorships for our events. Sponsorships help us organize high-quality events and grow the community. Contact us to learn about available opportunities.",
        },
      ],
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-bitcoin-blue to-bitcoin-blue-dark text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/10 p-4 rounded-full">
                <HelpCircle className="h-12 w-12" aria-hidden="true" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t('title')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-100">
              {t('description')}
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-bitcoin-blue">
                  {category.category}
                </h2>
                <div className="space-y-4">
                  {category.questions.map((faq, faqIndex) => (
                    <details
                      key={faqIndex}
                      className="group bg-white rounded-lg border-2 border-gray-200 hover:border-bitcoin-blue transition-colors overflow-hidden"
                    >
                      <summary className="flex items-center justify-between cursor-pointer p-6 font-semibold text-lg list-none">
                        <span className="pr-4">{faq.question}</span>
                        <span className="flex-shrink-0 text-bitcoin-blue">
                          <Plus className="h-5 w-5 group-open:hidden" aria-hidden="true" />
                          <Minus className="h-5 w-5 hidden group-open:block" aria-hidden="true" />
                        </span>
                      </summary>
                      <div className="px-6 pb-6 text-muted-foreground border-t pt-4">
                        <p>{faq.answer}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              {t('ctaTitle')}
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              {t('ctaDescription')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:info@bitcointorino.org"
                className="inline-flex items-center justify-center px-6 py-3 bg-bitcoin-blue text-white font-medium rounded-lg hover:bg-bitcoin-blue-dark transition-colors"
              >
                {t('sendEmail')}
              </a>
              <a
                href="https://t.me/bitcointorino"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-bitcoin-blue text-bitcoin-blue font-medium rounded-lg hover:bg-bitcoin-blue hover:text-white transition-colors"
              >
                {t('joinTelegram')}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

