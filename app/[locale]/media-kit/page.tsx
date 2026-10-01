import { Metadata } from "next"
import {
  Download,
  FileText,
  Mail,
  Send,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react"
import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import { Button } from "@/components/ui/button"
import { CopyButton } from "@/components/media-kit/copy-button"

const ASSETS_PATH = "/media-kit"
const KIT_ZIP = `${ASSETS_PATH}/bitcoin-torino-media-kit.zip`
const PRESS_EMAIL = "bitcoin.torino@proton.me"

export async function generateMetadata({
  params: { locale }
}: {
  params: { locale: string }
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'MediaKit.meta' })

  return {
    title: t('title'),
    description: t('description'),
  }
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

const socials = [
  { label: "Telegram", handle: "t.me/bitcointorinochannel", href: "https://t.me/bitcointorinochannel", Icon: Send },
  { label: "X", handle: "@BitcoinTorino", href: "https://x.com/BitcoinTorino", Icon: Twitter },
  { label: "Instagram", handle: "@bitcointorino", href: "https://instagram.com/bitcointorino", Icon: Instagram },
  { label: "LinkedIn", handle: "Bitcoin Torino", href: "https://linkedin.com/company/bitcoin-torino", Icon: Linkedin },
]

export default function MediaKitPage() {
  const t = useTranslations('MediaKit')

  const facts = t.raw('facts.items') as { label: string; value: string }[]
  const editorial = t.raw('editorial.items') as { use: string; avoid: string }[]

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-bitcoin-blue to-bitcoin-blue-dark dark:from-[#00138E] dark:to-[#00052E] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm md:text-base uppercase tracking-wide text-white/70 mb-4">
              {t('hero.eyebrow')}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-lg md:text-xl text-gray-100 mb-8">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-base text-black bg-white hover:bg-gray-300">
                <a href={KIT_ZIP} download>
                  <Download className="mr-2 h-5 w-5" aria-hidden="true" />
                  {t('hero.cta')}
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-base border-white text-white hover:bg-white hover:text-black">
                <a href={`mailto:${PRESS_EMAIL}`}>
                  <Mail className="mr-2 h-5 w-5" aria-hidden="true" />
                  {t('hero.contact')}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Chi siamo / boilerplate */}
      <section className="py-20 bg-gray-50 dark:bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('about.title')}</h2>
              <p className="text-lg text-muted-foreground">{t('about.description')}</p>
            </div>

            <div className="space-y-6">
              {(['short', 'long'] as const).map((length) => (
                <div
                  key={length}
                  className="bg-card rounded-lg p-6 md:p-8 border-2 border-border"
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
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">{t('facts.title')}</h2>
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {facts.map((fact, index) => (
                <div
                  key={index}
                  className="bg-card rounded-lg p-6 border-2 border-border"
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
      <section className="py-20 bg-gray-50 dark:bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('logos.title')}</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{t('logos.description')}</p>
            </div>

            <div className="space-y-8">
              {logos.map((logo) => (
                <div
                  key={logo.key}
                  className="bg-card rounded-lg border-2 border-border overflow-hidden"
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
                              className="flex items-center justify-between gap-4 rounded-md border-2 border-border px-4 py-2.5 hover:border-bitcoin-blue transition-colors"
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
                                <Download className="h-4 w-4" aria-hidden="true" />
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
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('colors.title')}</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{t('colors.description')}</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {colors.map((color) => (
                <div
                  key={color.key}
                  className="bg-card rounded-lg border-2 border-border overflow-hidden"
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
                      className="absolute top-3 right-3 bg-white text-gray-900 dark:bg-white dark:border-gray-200"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold mb-1">{t(`colors.items.${color.key}.name`)}</h3>
                    <p className="text-sm text-muted-foreground">{t(`colors.items.${color.key}.usage`)}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-card rounded-lg p-8 border-2 border-border">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-xl font-bold mb-2">{t('typography.title')}</h3>
                  <p className="text-muted-foreground mb-4 max-w-sm">{t('typography.description')}</p>
                  <a
                    href="https://fonts.google.com/specimen/Inter"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-bitcoin-blue font-medium hover:underline"
                  >
                    {t('typography.link')}
                  </a>
                </div>
                <div>
                  <p className="text-6xl md:text-7xl font-bold tracking-tight mb-2">Aa</p>
                  <p className="text-lg">
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
      <section className="py-20 bg-gray-50 dark:bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('editorial.title')}</h2>
              <p className="text-lg text-muted-foreground">{t('editorial.description')}</p>
            </div>
            <div className="bg-card rounded-lg border-2 border-border overflow-hidden">
              <table className="w-full table-fixed text-left">
                <thead className="bg-gray-50 dark:bg-white/5">
                  <tr>
                    <th scope="col" className="px-4 md:px-6 py-4 font-bold">{t('editorial.use')}</th>
                    <th scope="col" className="px-4 md:px-6 py-4 font-bold">{t('editorial.avoid')}</th>
                  </tr>
                </thead>
                <tbody>
                  {editorial.map((row, index) => (
                    <tr key={index} className="border-t-2 border-border">
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

      {/* Contatti stampa */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full bg-bitcoin-blue/10">
                <FileText className="h-8 w-8 text-bitcoin-blue" aria-hidden="true" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('press.title')}</h2>
            <p className="text-lg text-muted-foreground mb-8">{t('press.description')}</p>
            <a
              href={`mailto:${PRESS_EMAIL}`}
              className="inline-flex items-center justify-center px-6 py-3 bg-bitcoin-blue text-white font-medium rounded-lg hover:bg-bitcoin-blue-dark transition-colors"
            >
              <Mail className="mr-2 h-5 w-5" aria-hidden="true" />
              {PRESS_EMAIL}
            </a>
            <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              {socials.map(({ label, handle, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 bg-card rounded-lg p-4 border-2 border-border hover:border-bitcoin-blue transition-colors"
                  >
                    <Icon className="h-5 w-5 text-bitcoin-blue" aria-hidden="true" />
                    <span>
                      <span className="block font-medium">{label}</span>
                      <span className="block text-sm text-muted-foreground">{handle}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}
