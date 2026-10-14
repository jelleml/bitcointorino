import { Hero } from "@/components/home/hero"
import { Partners } from "@/components/home/partners"
import { About } from "@/components/home/about"
import { NextEvent } from "@/components/home/next-event"
import { SportelloCta } from "@/components/home/sportello-cta"
import { TorinoBitcoinCity } from "@/components/home/torino-bitcoin-city"
import { generateOrganizationStructuredData } from "@/lib/seo"
import type { Metadata } from "next"
import { pageMetadata } from "@/lib/seo"
import { setRequestLocale } from 'next-intl/server'

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  return pageMetadata(locale, 'Meta.home', '/')
}

export default function Home({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale)
  const structuredData = generateOrganizationStructuredData()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="relative">
        <Hero />
        <About />
        <NextEvent />
        <SportelloCta />
        <TorinoBitcoinCity />
        <Partners />
      </div>
    </>
  )
}
