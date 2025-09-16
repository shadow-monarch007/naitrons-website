import { portfolio } from '@/lib/data';
import { PortfolioCard } from './PortfolioCard';

export function PortfolioSection() {
  return (
    <section id="portfolio" className="section" aria-labelledby="portfolio-heading">
      <div className="container flex flex-col gap-8">
        <header className="flex flex-col gap-2 max-w-2xl">
          <h2 id="portfolio-heading" className="text-2xl md:text-3xl font-semibold tracking-tight">Selected Work</h2>
          <p className="text-sm md:text-base text-foreground/70">Representative engagements highlighting applied AI and automation outcomes.</p>
        </header>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {portfolio.map(p => <PortfolioCard key={p.id} item={p} />)}
        </div>
      </div>
    </section>
  );
}
