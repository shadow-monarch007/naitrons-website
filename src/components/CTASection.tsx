import React from 'react';
import { ctaCopy } from '@/lib/data';
import { Reveal } from './Reveal';

export function CTASection() {
  return (
    <section className="py-20 md:py-28" aria-labelledby="cta-heading">
      <div className="container flex flex-col items-start gap-8 md:gap-10">
        <Reveal>
          <div className="max-w-2xl flex flex-col gap-6">
            <h2 id="cta-heading" className="text-3xl md:text-4xl font-semibold tracking-tight bg-clip-text text-gradient">{ctaCopy.heading}</h2>
            <p className="text-base md:text-lg text-foreground/70 leading-relaxed">{ctaCopy.body}</p>
            <div className="flex flex-wrap gap-4">
              <a href={ctaCopy.primaryHref} className="inline-flex items-center rounded-md bg-foreground text-background px-6 h-12 text-sm font-medium hover:opacity-90 focus:outline-none focus:ring ring-offset-2 ring-offset-background ring-foreground/40">
                {ctaCopy.primaryLabel}
              </a>
              <a href={ctaCopy.secondaryHref} className="inline-flex items-center rounded-md border border-foreground/25 px-6 h-12 text-sm font-medium hover:bg-foreground/5 focus:outline-none focus:ring ring-offset-2 ring-offset-background ring-foreground/30">
                {ctaCopy.secondaryLabel}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
