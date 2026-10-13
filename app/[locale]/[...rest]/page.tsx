import { notFound } from "next/navigation"

// Qualsiasi URL non gestito mostra la 404 personalizzata di [locale]/not-found.tsx
export default function CatchAllPage() {
  notFound()
}
