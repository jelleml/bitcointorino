import type { Metadata, Viewport } from "next"
import "./globals.css"
import { Navbar } from "@/components/layout/navbar"
import { ScrollProgress } from "@/components/fx/scroll-progress"
import { SpotlightTracker } from "@/components/fx/spotlight-tracker"
import { Footer } from "@/components/layout/footer"
import { SkipToContent } from "@/components/accessibility/skip-to-content"
import { ThemeProvider } from "@/components/theme/theme-provider"

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL("https://bitcointorino.it"),
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

export default async function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col" suppressHydrationWarning>
        <NextIntlClientProvider messages={messages}>
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
