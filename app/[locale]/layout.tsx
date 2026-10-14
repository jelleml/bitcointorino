import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/layout/navbar"
import { ScrollProgress } from "@/components/fx/scroll-progress"
import { SpotlightTracker } from "@/components/fx/spotlight-tracker"
import { Footer } from "@/components/layout/footer"
import { SkipToContent } from "@/components/accessibility/skip-to-content"
import { ThemeProvider } from "@/components/theme/theme-provider"

// Font servito dal sito stesso e precaricato: niente catena di richieste verso Google Fonts
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bitcointorino.to"),
  title: "Bitcoin Torino - Associazione Bitcoin Torino",
  description: "Associazione dedicata alla promozione e sviluppo dell'ecosistema Bitcoin a Torino e dintorni. Eventi, risorse e community.",
  keywords: ["Bitcoin", "Torino", "Criptovalute", "Blockchain", "Associazione", "Eventi", "Community"],
  authors: [{ name: "Bitcoin Torino" }],
  openGraph: {
    title: "Bitcoin Torino",
    description: "Associazione dedicata alla promozione e sviluppo dell'ecosistema Bitcoin a Torino",
    type: "website",
    locale: "it_IT",
    siteName: "Bitcoin Torino",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Bitcoin Torino - Associazione",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bitcoin Torino",
    description: "Associazione dedicata alla promozione e sviluppo dell'ecosistema Bitcoin a Torino",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/bitcoin-torino-favicon.ico",
  },
}

import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { pick } from '@/lib/utils';

export default async function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Al client arrivano solo i testi usati dai componenti client presenti in tutte le pagine
  const messages = await getMessages();
  const clientMessages = pick(messages, ['Navbar', 'Footer', 'Partners']);

  return (
    <html lang={locale} className={inter.variable} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col" suppressHydrationWarning>
        <NextIntlClientProvider messages={clientMessages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <SkipToContent />
            <ScrollProgress />
            <SpotlightTracker />
            <Navbar />
            <main id="main-content" className="flex-1">
              {children}
            </main>
            <Footer />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
