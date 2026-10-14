/** Pulsanti che portano alle sezioni della pagina (ancore), con il numero di elementi di ciascuna. */
export function SectionNav({ items, label }: { items: { id: string; label: string; count?: number }[]; label: string }) {
  return (
    <nav aria-label={label} className="mb-12 md:mb-16 flex flex-wrap justify-center gap-3">
      {items.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className="inline-flex h-10 items-center gap-2 rounded-full border border-border bg-white px-5 text-sm font-semibold text-foreground transition-all duration-300 hover:border-bitcoin-blue/50 hover:text-bitcoin-blue dark:bg-card dark:hover:text-[#93C2F7]"
        >
          {item.label}
          {item.count !== undefined && <span className="text-muted-foreground font-medium">{item.count}</span>}
        </a>
      ))}
    </nav>
  )
}
