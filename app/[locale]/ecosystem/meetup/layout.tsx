import type { ReactNode } from 'react'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'

/** La pagina Meetup è un componente client (filtro): le passiamo solo i suoi testi. */
export default async function MeetupLayout({ children }: { children: ReactNode }) {
  const messages = await getMessages()
  const ecosystem = messages.Ecosystem as Record<string, unknown>

  return (
    <NextIntlClientProvider messages={{ Ecosystem: { Meetup: ecosystem.Meetup } }}>
      {children}
    </NextIntlClientProvider>
  )
}
