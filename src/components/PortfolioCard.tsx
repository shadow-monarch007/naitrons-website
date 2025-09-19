import type { PortfolioItem } from '@/lib/data';

export function PortfolioCard({ item }: { item: PortfolioItem }) {
  return (
  <article className="rounded-lg border border-black/25 dark:border-white/15 p-5 flex flex-col gap-3 bg-background/60 backdrop-blur-sm">
      <header className="flex flex-col gap-1">
        <h3 className="font-medium text-lg tracking-tight">{item.title}</h3>
        <p className="text-[13px] text-foreground/60">{item.summary}</p>
      </header>
      <p className="text-sm text-foreground/70"><strong className="font-medium">Problem:</strong> {item.problem}</p>
      <p className="text-sm text-foreground/70"><strong className="font-medium">Solution:</strong> {item.solution}</p>
      {item.impact && <p className="text-sm text-foreground/70"><strong className="font-medium">Impact:</strong> {item.impact}</p>}
      <ul className="flex flex-wrap gap-1.5 pt-2 mt-auto">
        {item.technologies.map(t => (
          <li key={t} className="text-[11px] px-2 py-1 rounded bg-foreground/5 dark:bg-foreground/10">
            {t}
          </li>
        ))}
      </ul>
    </article>
  );
}
