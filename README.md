# Bitcoin Torino - Sito Web Ufficiale

Sito web dell'Associazione Bitcoin Torino, dedicato alla promozione e sviluppo dell'ecosistema Bitcoin a Torino e dintorni.

## 🚀 Tecnologie Utilizzate

- **Framework:** Next.js 14 (App Router)
- **Linguaggio:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Shadcn/UI
- **Icons:** Lucide React

## 📋 Funzionalità

### Pagine Principali

- **Home:** Hero section, calendario eventi Luma, ultime notizie dal blog, partner
- **Eventi:** Lista completa degli eventi con integrazione calendario Luma
- **Blog:** Articoli, press release e aggiornamenti dall'associazione
- **Privacy:** Informativa sulla privacy

### Componenti Chiave

- Navbar responsive con menu mobile
- Footer con form newsletter
- Cards per eventi, blog post e partner
- Sistema di routing dinamico per i post del blog
- Pagina 404 personalizzata

## 🎨 Brand Identity

### Colori

- **Nero:** `#000000` - Testo principale
- **Bianco:** `#FFFFFF` - Sfondo
- **Bitcoin Blue:** `#07458D` - Colore primario (CTA, accenti)

### Tipografia

- **Font:** Inter (Google Fonts)
- **Peso:** Medium per testi, Bold per headline e CTA

### Stile

- Design minimal e tech-oriented
- Alto contrasto per accessibilità
- Cards con bordi arrotondati e shadow
- Effetti hover su elementi interattivi

## 🚀 Getting Started

### Installazione

```bash
# Installa le dipendenze
npm install

# Avvia il server di sviluppo
npm run dev

# Build per produzione
npm run build

# Avvia il server di produzione
npm start
```

Il sito sarà disponibile su [http://localhost:3000](http://localhost:3000)

## 📁 Struttura del Progetto

```
bitcoin-torino/
├── app/
│   ├── layout.tsx          # Layout principale
│   ├── page.tsx            # Home page
│   ├── globals.css         # Stili globali
│   ├── not-found.tsx       # Pagina 404
│   ├── eventi/
│   │   └── page.tsx        # Pagina eventi
│   ├── blog/
│   │   ├── page.tsx        # Lista blog
│   │   └── [slug]/
│   │       └── page.tsx    # Dettaglio post
│   └── privacy/
│       └── page.tsx        # Privacy policy
├── components/
│   ├── ui/                 # Componenti Shadcn/UI
│   ├── layout/
│   │   ├── navbar.tsx      # Navbar
│   │   └── footer.tsx      # Footer
│   └── home/
│       ├── hero.tsx        # Hero section
│       ├── luma-calendar.tsx
│       ├── blog-cards.tsx
│       └── partners.tsx
├── lib/
│   └── utils.ts            # Utilities
└── public/                 # Assets statici
```

## ♿ Accessibilità

Il sito è sviluppato seguendo le linee guida WCAG 2.1 AA:

- Contrasto colori conforme
- Navigazione da tastiera
- ARIA labels e roles appropriati
- Focus visible su elementi interattivi
- Semantica HTML corretta
- Responsive e mobile-first

## 📄 Licenza

Questo progetto è rilasciato con licenza MIT.

## 📞 Contatti

- **Email:** bitcoin.torino@proton.me
- **Twitter:** [@bitcointorino](https://twitter.com/bitcointorino)
- **Telegram:** [t.me/associazionebitcointorino](https://t.me/associazionebitcointorino)

---

Sviluppato con ❤️ per la community Bitcoin di Torino

