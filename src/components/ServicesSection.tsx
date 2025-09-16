import { services } from '@/lib/data';
import { ServiceCard } from './ServiceCard';

export function ServicesSection() {
  return (
    <section id="services" className="section" aria-labelledby="services-heading">
      <div className="container flex flex-col gap-8">
        <header className="flex flex-col gap-2 max-w-2xl">
          <h2 id="services-heading" className="text-2xl md:text-3xl font-semibold tracking-tight">Services</h2>
          <p className="text-sm md:text-base text-foreground/70">Full lifecycle support: strategic advisory, applied research, implementation, and operationalization.</p>
        </header>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map(s => <ServiceCard key={s.id} service={s} />)}
        </div>
      </div>
    </section>
  );
}
