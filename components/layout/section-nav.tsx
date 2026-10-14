/** Pulsanti che portano alle sezioni della pagina (ancore), con il numero di elementi di ciascuna. */
export function SectionNav({ items, label }: { items: { id: string; label: string; count?: number }[]; label: string }) {
  return (
    <nav aria-label={label} className="mb-12 md:mb-16 flex flex-wrap justify-center gap-3">
      {items.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className="group inline-flex h-10 items-center gap-2 rounded-full border border-border bg-white px-5 text-sm font-semibold text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-bitcoin-blue hover:bg-bitcoin-blue/10 hover:text-bitcoin-blue hover:shadow-md hover:shadow-bitcoin-blue/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bitcoin-blue focus-visible:ring-offset-2 dark:bg-card dark:hover:border-[#93C2F7] dark:hover:bg-[#93C2F7]/15 dark:hover:text-[#93C2F7] dark:hover:shadow-[#93C2F7]/10 dark:focus-visible:ring-[#93C2F7] dark:focus-visible:ring-offset-background"
        >
          {item.label}
          {item.count !== undefined && (
            <span className="font-medium text-muted-foreground transition-colors group-hover:text-bitcoin-blue dark:group-hover:text-[#93C2F7]">{item.count}</span>
          )}
        </a>
      ))}
    </nav>
  )
}
