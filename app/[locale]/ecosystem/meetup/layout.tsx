import type { ReactNode } from 'react'
import { setRequestLocale } from 'next-intl/server'
import type { Metadata } from "next"
import { pageMetadata } from "@/lib/seo"

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  return pageMetadata(locale, 'Meta.meetup', '/ecosystem/meetup')
}

export default function MeetupLayout({ children, params: { locale } }: { children: ReactNode; params: { locale: string } }) {
  setRequestLocale(locale)
  return children
}
