import React from 'react';
import { valueProps } from '@/lib/data';
import { Reveal } from './Reveal';

export function ValuePropsSection() {
  return (
    <section className="section" id="value" aria-labelledby="value-heading">
      <div className="container flex flex-col gap-10">
        <div className="max-w-2xl">
          <h2 id="value-heading" className="text-2xl md:text-3xl font-semibold tracking-tight">Why teams engage nAItronS</h2>
          <p className="text-sm md:text-base text-foreground/70 mt-3">Focused, outcome-aligned delivery with transparent collaboration and sustainable handoff.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {valueProps.map((vp, i) => (
            <Reveal key={vp.id} delay={i * 0.05}>
              <div className="p-5 rounded-lg border border-black/20 dark:border-white/15 bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/40 flex flex-col gap-3 h-full">
                <h3 className="text-base font-semibold tracking-tight">{vp.title}</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">{vp.summary}</p>
                {vp.detail && <p className="text-xs text-foreground/50 leading-relaxed mt-auto">{vp.detail}</p>}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
