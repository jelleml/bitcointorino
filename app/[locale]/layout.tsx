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

// Pagine generate in build per ogni lingua (servite dal CDN); qualsiasi altro primo segmento è una 404
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}
export const dynamicParams = false

// Valori di base: ogni pagina sovrascrive titolo, descrizione, canonical e anteprima social (vedi lib/seo.ts)
export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  return {
    metadataBase: new URL(SITE_URL),
    title: "Bitcoin Torino - Associazione Bitcoin Torino",
    description: "Associazione dedicata alla promozione e sviluppo dell'ecosistema Bitcoin a Torino e dintorni. Eventi, risorse e community.",
    authors: [{ name: "Bitcoin Torino" }],
    openGraph: {
      title: "Bitcoin Torino",
      description: "Associazione dedicata alla promozione e sviluppo dell'ecosistema Bitcoin a Torino",
      type: "website",
      locale: locale === "en" ? "en_US" : "it_IT",
      siteName: "Bitcoin Torino",
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Bitcoin Torino - Associazione" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Bitcoin Torino",
      description: "Associazione dedicata alla promozione e sviluppo dell'ecosistema Bitcoin a Torino",
      images: ["/og-image.png"],
    },
    robots: { index: true, follow: true },
    icons: { icon: "/bitcoin-torino-favicon.ico" },
  }
}

import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import { LOCALES, SITE_URL } from '@/lib/seo';
import { pick } from '@/lib/utils';

export default async function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Segmenti che non sono una lingua (es. /logo.png) danno una vera 404 invece di una pagina vuota
  if (!(LOCALES as readonly string[]).includes(locale)) notFound();
  setRequestLocale(locale);

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
