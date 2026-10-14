import { Metadata } from "next"
import {
  Download,
  Globe,
  Mail,
  Send,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react"
import { useTranslations } from 'next-intl'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { PageHero } from "@/components/layout/page-hero"
import { SectionHeading } from "@/components/layout/section-heading"
import { CopyButton } from "@/components/media-kit/copy-button"
import { pageMetadata } from "@/lib/seo"

const ASSETS_PATH = "/media-kit"
const KIT_ZIP = `${ASSETS_PATH}/bitcoin-torino-media-kit.zip`
const PRESS_EMAIL = "bitcoin.torino@proton.me"

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  return pageMetadata(locale, 'MediaKit.meta', '/media-kit')
}

type Background = "dark" | "light"

// Colori effettivi dei file logo, per i pallini delle varianti
const ORANGE = "#E55414"
const WHITE = "#FFFFFF"
const DARK_GREY = "#262626"
const BLACK = "#000000"

const swatchStyle = (colors: string[]) => ({
  background: colors.length === 1
    ? colors[0]
    : `linear-gradient(135deg, ${colors[0]} 50%, ${colors[1]} 50%)`,
})

const logos: {
  key: "large" | "small" | "pictogram"
  preview: string
  // Anteprima su sfondo nero in dark mode
  previewDark: string
  files: { variant: string; bg: Background; file: string; swatch: string[] }[]
}[] = [
  {
    key: "large",
    preview: "bitcoin-torino-logo-large-orange-black.png",
    previewDark: "bitcoin-torino-logo-large-orange-white.png",
    files: [
      { variant: "orangeWhite", bg: "dark", file: "bitcoin-torino-logo-large-orange-white.png", swatch: [ORANGE, WHITE] },
      { variant: "orangeBlack", bg: "light", file: "bitcoin-torino-logo-large-orange-black.png", swatch: [ORANGE, DARK_GREY] },
      { variant: "white", bg: "dark", file: "bitcoin-torino-logo-large-white.png", swatch: [WHITE] },
      { variant: "black", bg: "light", file: "bitcoin-torino-logo-large-black.png", swatch: [BLACK] },
      { variant: "svg", bg: "dark", file: "bitcoin-torino-logo-large.svg", swatch: [ORANGE, WHITE] },
    ],
  },
  {
    key: "small",
    preview: "bitcoin-torino-logo-small-orange-black.png",
    previewDark: "bitcoin-torino-logo-small-orange-white.png",
    files: [
      { variant: "orangeWhite", bg: "dark", file: "bitcoin-torino-logo-small-orange-white.png", swatch: [ORANGE, WHITE] },
      { variant: "orangeBlack", bg: "light", file: "bitcoin-torino-logo-small-orange-black.png", swatch: [ORANGE, DARK_GREY] },
      { variant: "white", bg: "dark", file: "bitcoin-torino-logo-small-white.png", swatch: [WHITE] },
      { variant: "black", bg: "light", file: "bitcoin-torino-logo-small-black.png", swatch: [BLACK] },
      { variant: "svg", bg: "light", file: "bitcoin-torino-logo-small.svg", swatch: [ORANGE, DARK_GREY] },
    ],
  },
  {
    key: "pictogram",
    preview: "bitcoin-torino-pictogram-orange.png",
    previewDark: "bitcoin-torino-pictogram-orange.png",
    files: [
      { variant: "orange", bg: "dark", file: "bitcoin-torino-pictogram-orange.png", swatch: [ORANGE] },
      { variant: "white", bg: "dark", file: "bitcoin-torino-pictogram-white.png", swatch: [WHITE] },
      { variant: "black", bg: "light", file: "bitcoin-torino-pictogram-black.png", swatch: [BLACK] },
      { variant: "favicon", bg: "light", file: "bitcoin-torino-favicon-rounded-orange.png", swatch: [ORANGE, WHITE] },
      { variant: "svg", bg: "dark", file: "bitcoin-torino-pictogram.svg", swatch: [ORANGE] },
    ],
  },
]

const colors = [
  { key: "orange", hex: "#E55414", textClass: "text-white" },
  { key: "blue", hex: "#07458D", textClass: "text-white" },
  { key: "blueDark", hex: "#053666", textClass: "text-white" },
  { key: "blueLight", hex: "#0955A5", textClass: "text-white" },
  { key: "black", hex: "#0D0D0D", textClass: "text-white" },
  { key: "white", hex: "#FEFEFE", textClass: "text-gray-900" },
]

const WEBSITE = "bitcointorino.to"

const socials = [
  { label: "Telegram", handle: "t.me/bitcointorinochannel", Icon: Send },
  { label: "X", handle: "@BitcoinTorino", Icon: Twitter },
  { label: "Instagram", handle: "@bitcointorino", Icon: Instagram },
  { label: "LinkedIn", handle: "Bitcoin Torino", Icon: Linkedin },
]

export default function MediaKitPage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale)
  const t = useTranslations('MediaKit')

  const facts = t.raw('facts.items') as { label: string; value: string }[]
  const editorial = t.raw('editorial.items') as { use: string; avoid: string }[]
  const contacts = [
    { label: t('press.email'), handle: PRESS_EMAIL, Icon: Mail },
    { label: t('press.website'), handle: WEBSITE, Icon: Globe },
    ...socials,
  ]

  return (
    <main className="min-h-screen">
      <PageHero
        title={t('hero.title')}
        subtitle={t('hero.subtitle')}
      >
        <a href={KIT_ZIP} download className="btn-shine btn-orange group inline-flex h-14 items-center justify-center rounded-full px-9 text-base font-bold">
          <span className="relative z-10 inline-flex items-center">
            <Download className="mr-2 h-5 w-5" aria-hidden="true" />
            {t('hero.cta')}
          </span>
        </a>
      </PageHero>

      {/* Chi siamo / boilerplate */}
      <section className="section-alt py-16 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SectionHeading title={t('about.title')} />

            <div className="space-y-6">
              {(['short', 'long'] as const).map((length) => (
                <div
                  key={length}
                  className="spotlight-card p-6 md:p-8"
                >
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <h3 className="text-xl font-bold">{t(`about.${length}.title`)}</h3>
                    <CopyButton
                      value={t(`about.${length}.text`)}
                      label={t('copy')}
                      copiedLabel={t('copied')}
                    />
                  </div>
                  <p className="text-muted-foreground whitespace-pre-line">{t(`about.${length}.text`)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Dati chiave */}
      <section className="py-16 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SectionHeading title={t('facts.title')} />
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {facts.map((fact, index) => (
                <div
                  key={index}
                  className="spotlight-card p-6"
                >
                  <dt className="text-sm uppercase tracking-wide text-muted-foreground mb-1">{fact.label}</dt>
                  <dd className="flex items-start justify-between gap-4">
                    <span className="text-lg font-medium">{fact.value}</span>
                    <CopyButton
                      value={fact.value}
                      label={t('copy')}
                      copiedLabel={t('copied')}
                      className="flex-shrink-0"
                    />
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Logo */}
      <section className="section-alt py-16 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <SectionHeading title={t('logos.title')} />

            <div className="space-y-8">
              {logos.map((logo) => (
                <div
                  key={logo.key}
                  className="spotlight-card"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div
                      className="bg-white dark:bg-black flex items-center justify-center p-10 md:p-14 min-h-[220px]"
                    >
                      <img
                        src={`${ASSETS_PATH}/${logo.preview}`}
                        alt={t(`logos.${logo.key}.title`)}
                        className={`dark:hidden ${logo.key === "pictogram" ? "h-28 w-auto" : "max-h-32 w-full object-contain"}`}
                      />
                      <img
                        src={`${ASSETS_PATH}/${logo.previewDark}`}
                        alt={t(`logos.${logo.key}.title`)}
                        className={`hidden dark:block ${logo.key === "pictogram" ? "h-28 w-auto" : "max-h-32 w-full object-contain"}`}
                      />
                    </div>
                    <div className="p-6 md:p-8">
                      <h3 className="text-xl font-bold mb-2">{t(`logos.${logo.key}.title`)}</h3>
                      <p className="text-muted-foreground mb-6">{t(`logos.${logo.key}.description`)}</p>
                      <ul className="space-y-2">
                        {logo.files.map((file) => (
                          <li key={file.file}>
                            <a
                              href={`${ASSETS_PATH}/${file.file}`}
                              download
                              className="group flex items-center justify-between gap-4 rounded-xl border border-border px-4 py-3 transition-all duration-300 hover:border-bitcoin-blue/50 hover:bg-bitcoin-blue/5 dark:hover:border-[#93C2F7]/40 dark:hover:bg-white/5"
                            >
                              <span className="flex items-center gap-3 min-w-0">
                                <span
                                  className="h-4 w-4 flex-shrink-0 rounded-full border border-gray-400"
                                  style={swatchStyle(file.swatch)}
                                  aria-hidden="true"
                                />
                                <span className="flex flex-wrap items-baseline gap-x-3 min-w-0">
                                  <span className="font-medium">{t(`logos.variants.${file.variant}`)}</span>
                                  <span className="text-sm text-muted-foreground">
                                    {t(`logos.backgrounds.${file.bg}`)}
                                  </span>
                                </span>
                              </span>
                              <span className="flex flex-shrink-0 items-center gap-2 text-sm text-bitcoin-blue font-medium">
                                {file.file.split('.').pop()?.toUpperCase()}
                                <Download className="h-4 w-4 transition-transform group-hover:translate-y-0.5" aria-hidden="true" />
                              </span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Colori e tipografia */}
      <section className="py-16 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <SectionHeading title={t('colors.title')} />

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {colors.map((color) => (
                <div
                  key={color.key}
                  className="spotlight-card"
                >
                  <div
                    className={`relative h-28 md:h-36 flex items-end p-4 ${color.textClass}`}
                    style={{ backgroundColor: color.hex }}
                  >
                    <span className="font-mono text-sm">{color.hex}</span>
                    <CopyButton
                      value={color.hex}
                      label={t('copyHex')}
                      copiedLabel={t('copied')}
                      className="absolute top-3 right-3 bg-transparent border border-current text-current opacity-70 hover:opacity-100 hover:border-current hover:text-current"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold mb-1">{t(`colors.items.${color.key}.name`)}</h3>
                    <p className="text-sm text-muted-foreground">{t(`colors.items.${color.key}.usage`)}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 spotlight-card p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-xl font-bold mb-2">{t('typography.title')}</h3>
                  <p className="text-muted-foreground mb-4 max-w-sm">{t('typography.description')}</p>
                  <a
                    href="https://fonts.google.com/specimen/Inter"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-link inline-block py-1 text-bitcoin-blue font-medium dark:text-[#93C2F7]"
                  >
                    {t('typography.link')}
                  </a>
                </div>
                <div>
                  <p className="text-6xl md:text-7xl font-bold tracking-tight mb-2">Aa</p>
                  <p className="text-base md:text-lg">
                    <span className="font-light">Light 300</span> · <span>Regular 400</span> ·{' '}
                    <span className="font-medium">Medium 500</span> · <span className="font-bold">Bold 700</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Linee guida editoriali */}
      <section className="section-alt py-16 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SectionHeading title={t('editorial.title')} />
            <div className="spotlight-card">
              <table className="w-full table-fixed text-left">
                <thead className="bg-bitcoin-blue/5 dark:bg-white/5">
                  <tr>
                    <th scope="col" className="px-4 md:px-6 py-4 font-bold">{t('editorial.use')}</th>
                    <th scope="col" className="px-4 md:px-6 py-4 font-bold">{t('editorial.avoid')}</th>
                  </tr>
                </thead>
                <tbody>
                  {editorial.map((row, index) => (
                    <tr key={index} className="border-t border-border">
                      <td className="px-4 md:px-6 py-4 break-words">{row.use}</td>
                      <td className="px-4 md:px-6 py-4 break-words text-muted-foreground">{row.avoid}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Contatti */}
      <section className="py-16 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <SectionHeading
              title={t('press.title')}
              className="mb-10 md:mb-12"
            />
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              {contacts.map(({ label, handle, Icon }) => (
                <li key={label}>
                  <div className="spotlight-card group flex items-center gap-4 p-4">
                    <span className="icon-tile h-10 w-10 rounded-xl"><Icon className="h-5 w-5" aria-hidden="true" /></span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-medium">{label}</span>
                      <span className="block truncate text-sm text-muted-foreground">{handle}</span>
                    </span>
                    <CopyButton
                      value={handle}
                      label={t('copy')}
                      copiedLabel={t('copied')}
                      className="shrink-0 rounded-full border p-2"
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}
