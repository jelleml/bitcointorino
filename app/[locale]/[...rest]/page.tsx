import { notFound } from "next/navigation"

// Il layout [locale] ha dynamicParams = false (solo it/en): qui va riattivato,
// altrimenti Next risponde con la 404 di default senza passare da not-found.tsx
export const dynamicParams = true

// Qualsiasi URL non gestito mostra la 404 personalizzata di [locale]/not-found.tsx
export default function CatchAllPage() {
  notFound()
}
