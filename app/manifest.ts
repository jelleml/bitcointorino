import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Bitcoin Torino',
    short_name: 'BTC Torino',
    description: 'Associazione dedicata alla promozione e sviluppo dell\'ecosistema Bitcoin a Torino e dintorni',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#800020',
    icons: [
      {
        src: '/bitcoin-torino-favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}

