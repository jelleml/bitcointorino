/**
 * Attività che accettano Bitcoin a Torino, dai dati pubblici di BTC Map (OpenStreetMap).
 * API senza chiave: https://api.btcmap.org/v4/places/search/
 */

// Centro di Torino e raggio di ricerca (comprende l'area metropolitana: cintura, collina, Chieri, Pianezza…)
const CENTER = { lat: 45.0703, lon: 7.6869 }
export const RADIUS_KM = 20
// Dati aggiornati al massimo una volta al giorno (la pagina resta statica, servita dal CDN)
const REVALIDATE_SECONDS = 60 * 60 * 24

export type BtcMapPlace = {
  id: number
  lat: number
  lon: number
  icon: string
  name: string
  osm_id: string
  address?: string
  description?: string
  website?: string
  phone?: string
  instagram?: string
  opening_hours?: string
  verified_at?: string | null
}

/** Categorie mostrate sul sito, ricavate dall'icona che BTC Map assegna a ogni luogo. */
export type PlaceCategory = 'food' | 'bars' | 'shops' | 'wellness' | 'professional' | 'services' | 'leisure' | 'stays'

const CATEGORY_BY_ICON: Record<string, PlaceCategory> = {
  restaurant: 'food', lunch_dining: 'food', local_pizza: 'food', bakery_dining: 'food', fastfood: 'food',
  local_cafe: 'bars', sports_bar: 'bars', wine_bar: 'bars', local_bar: 'bars', nightlife: 'bars',
  storefront: 'shops', hardware: 'shops', diamond: 'shops', shopping_bag: 'shops', checkroom: 'shops', local_grocery_store: 'shops',
  chair: 'shops', local_florist: 'shops',
  medical_services: 'wellness', fitness_center: 'wellness', content_cut: 'wellness', spa: 'wellness', local_pharmacy: 'wellness',
  balance: 'professional', business: 'professional', computer: 'professional',
  car_repair: 'services', build: 'services', local_shipping: 'services', visibility: 'services',
  scuba_diving: 'leisure', mic: 'leisure', sports: 'leisure', theater_comedy: 'leisure',
  hotel: 'stays', bed: 'stays',
}

// Correzioni puntuali, per luoghi la cui icona su BTC Map non rispecchia l'attività (chiave = ID BTC Map)
const CATEGORY_OVERRIDES: Record<number, PlaceCategory> = {
  17841: 'wellness', // De Natura: segnato come fiorista, è salute e benessere
}

// Un'icona non ancora mappata finisce tra i negozi: se capita, aggiungerla a CATEGORY_BY_ICON
export const categoryOf = (place: BtcMapPlace): PlaceCategory =>
  CATEGORY_OVERRIDES[place.id] ?? CATEGORY_BY_ICON[place.icon] ?? 'shops'

// Community e spazi di aggregazione (es. Satoshi Spritz, coworking) non sono attività commerciali:
// hanno già le loro pagine (Meetup, Spazi)
const isCommunity = (place: BtcMapPlace) => place.icon === 'group' || /satoshi\s*spritz/i.test(place.name)
const isAtm = (place: BtcMapPlace) => place.icon === 'local_atm'

/** Link alla scheda del luogo su BTC Map. */
export const btcMapUrl = (place: BtcMapPlace) => `https://btcmap.org/merchant/${place.osm_id}`

/** Indicazioni stradali su Google Maps verso il luogo. */
export const directionsUrl = (place: BtcMapPlace) =>
  `https://www.google.com/maps/dir/?api=1&destination=${place.lat},${place.lon}`

/** Prima le schede verificate più di recente, in fondo quelle mai verificate. */
const byVerification = (a: BtcMapPlace, b: BtcMapPlace) => (b.verified_at ?? '').localeCompare(a.verified_at ?? '')

/**
 * Attività e ATM nel raggio di Torino. Restituisce `null` se BTC Map non risponde,
 * così la pagina può mostrare un rimando alla mappa invece di un elenco vuoto.
 */
export async function getTorinoPlaces(): Promise<{ merchants: BtcMapPlace[]; atms: BtcMapPlace[] } | null> {
  try {
    const url = `https://api.btcmap.org/v4/places/search/?lat=${CENTER.lat}&lon=${CENTER.lon}&radius_km=${RADIUS_KM}`
    const res = await fetch(url, { next: { revalidate: REVALIDATE_SECONDS } })
    if (!res.ok) return null
    const places = ((await res.json()) as BtcMapPlace[]).filter((p) => p.name && !isCommunity(p))

    return {
      merchants: places.filter((p) => !isAtm(p)).sort(byVerification),
      atms: places.filter(isAtm).sort(byVerification),
    }
  } catch {
    return null
  }
}

/** Mappa BTC Map centrata su Torino. */
export const BTCMAP_TORINO_URL = 'https://btcmap.org/map#13/45.07013/7.67146'
