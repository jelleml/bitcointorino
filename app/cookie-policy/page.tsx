import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Cookie Policy - Bitcoin Torino",
  description: "Informativa sui cookie dell'Associazione Bitcoin Torino",
  robots: {
    index: true,
    follow: true,
  },
}

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Button asChild variant="ghost" className="mb-6">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
              Torna alla Home
            </Link>
          </Button>

          <h1 className="text-4xl md:text-5xl font-bold mb-8">Cookie Policy</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground mb-8">
              Ultimo aggiornamento: 15 Novembre 2025
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">1. Cosa sono i Cookie</h2>
              <p className="mb-4">
                I cookie sono piccoli file di testo che vengono memorizzati sul tuo dispositivo 
                (computer, tablet o smartphone) quando visiti un sito web. I cookie permettono 
                al sito di ricordare le tue azioni e preferenze per un determinato periodo di tempo, 
                così non devi reinserirle ogni volta che torni sul sito o navighi da una pagina all&apos;altra.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">2. Come utilizziamo i Cookie</h2>
              <p className="mb-4">
                Il sito web di Bitcoin Torino utilizza i cookie per:
              </p>
              <ul className="list-disc ml-6 mb-4 space-y-2">
                <li>Garantire il corretto funzionamento del sito</li>
                <li>Migliorare l&apos;esperienza di navigazione</li>
                <li>Analizzare l&apos;utilizzo del sito per migliorare i nostri servizi</li>
                <li>Ricordare le tue preferenze e impostazioni</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">3. Tipi di Cookie che utilizziamo</h2>
              
              <h3 className="text-xl font-bold mb-3 mt-6">Cookie Tecnici (Necessari)</h3>
              <p className="mb-4">
                Questi cookie sono essenziali per il funzionamento del sito e non possono essere 
                disattivati. Includono cookie che permettono di ricordare le tue azioni durante 
                una sessione di navigazione o, su richiesta, da una sessione all&apos;altra.
              </p>

              <h3 className="text-xl font-bold mb-3 mt-6">Cookie di Prestazioni</h3>
              <p className="mb-4">
                Questi cookie ci aiutano a capire come i visitatori interagiscono con il nostro sito, 
                raccogliendo informazioni in forma anonima. Questo ci permette di migliorare il 
                funzionamento del sito.
              </p>

              <h3 className="text-xl font-bold mb-3 mt-6">Cookie di Funzionalità</h3>
              <p className="mb-4">
                Questi cookie permettono al sito di ricordare le scelte che fai (come il tuo nome 
                utente, la lingua o la regione) e forniscono funzionalità migliorate e più personali.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">4. Cookie di Terze Parti</h2>
              <p className="mb-4">
                Alcuni cookie sono impostati da servizi di terze parti che appaiono sulle nostre pagine. 
                Non abbiamo controllo su questi cookie, quindi ti consigliamo di controllare i siti 
                web delle terze parti per maggiori informazioni sui loro cookie e su come gestirli.
              </p>
              <p className="mb-4">
                I servizi di terze parti che potrebbero utilizzare cookie includono:
              </p>
              <ul className="list-disc ml-6 mb-4 space-y-2">
                <li>Servizi di analisi web (es. Google Analytics)</li>
                <li>Piattaforme di eventi (es. Luma)</li>
                <li>Servizi di social media</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">5. Gestione dei Cookie</h2>
              <p className="mb-4">
                Puoi controllare e/o eliminare i cookie come preferisci. Puoi eliminare tutti i 
                cookie che sono già sul tuo computer e puoi impostare la maggior parte dei browser 
                per impedire che vengano memorizzati.
              </p>
              <p className="mb-4">
                Tuttavia, se fai questo, potresti dover regolare manualmente alcune preferenze ogni 
                volta che visiti un sito e alcuni servizi e funzionalità potrebbero non funzionare.
              </p>
              <p className="mb-4">
                Per gestire i cookie, puoi utilizzare le impostazioni del tuo browser. Ecco i link 
                alle istruzioni per i browser più comuni:
              </p>
              <ul className="list-disc ml-6 mb-4 space-y-2">
                <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-bitcoin-blue hover:underline">Google Chrome</a></li>
                <li><a href="https://support.mozilla.org/it/kb/Attivare%20e%20disattivare%20i%20cookie" target="_blank" rel="noopener noreferrer" className="text-bitcoin-blue hover:underline">Mozilla Firefox</a></li>
                <li><a href="https://support.apple.com/it-it/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-bitcoin-blue hover:underline">Safari</a></li>
                <li><a href="https://support.microsoft.com/it-it/microsoft-edge/eliminare-i-cookie-in-microsoft-edge-63947406-40ac-c3aa-8b47-2ef1b1f8e496" target="_blank" rel="noopener noreferrer" className="text-bitcoin-blue hover:underline">Microsoft Edge</a></li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">6. Modifiche a questa Cookie Policy</h2>
              <p className="mb-4">
                Potremmo aggiornare questa cookie policy periodicamente per riflettere cambiamenti 
                nei cookie che utilizziamo o per altri motivi operativi, legali o normativi. 
                Ti consigliamo di rivedere questa pagina periodicamente per rimanere informato 
                sulla nostra utilizzo dei cookie.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">7. Contatti</h2>
              <p className="mb-4">
                Se hai domande sulla nostra utilizzo dei cookie, puoi contattarci a:
              </p>
              <p className="mb-2">
                <strong>Email:</strong>{" "}
                <a href="mailto:info@bitcointorino.it" className="text-bitcoin-blue hover:underline">
                  info@bitcointorino.it
                </a>
              </p>
              <p>
                <strong>Indirizzo:</strong> Associazione Bitcoin Torino, Torino, Italia
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

