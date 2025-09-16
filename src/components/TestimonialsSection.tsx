import React from 'react';
import { testimonials } from '@/lib/data';
import { Reveal } from './Reveal';

export function TestimonialsSection() {
  if (!testimonials.length) return null;
  return (
    <section className="section" id="testimonials" aria-labelledby="testimonials-heading">
      <div className="container flex flex-col gap-10">
        <div className="max-w-2xl">
          <h2 id="testimonials-heading" className="text-2xl md:text-3xl font-semibold tracking-tight">What stakeholders say</h2>
          <p className="text-sm md:text-base text-foreground/70 mt-3">Early validation and internal enablement matter as much as shipped code.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={t.id} delay={i * 0.05}>
              <figure className="p-6 rounded-lg border border-black/10 dark:border-white/15 bg-background/60 flex flex-col gap-4">
                <blockquote className="text-sm md:text-base leading-relaxed text-foreground/80">“{t.quote}”</blockquote>
                <figcaption className="text-xs text-foreground/60 font-medium tracking-wide">
                  {t.author}{t.role ? `, ${t.role}` : ''}{t.company ? ` — ${t.company}` : ''}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
