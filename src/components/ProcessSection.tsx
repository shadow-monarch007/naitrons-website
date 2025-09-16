import React from 'react';
import { processSteps } from '@/lib/data';
import { Reveal } from './Reveal';

export function ProcessSection() {
  return (
    <section className="section" id="process" aria-labelledby="process-heading">
      <div className="container flex flex-col gap-10">
        <div className="max-w-2xl">
          <h2 id="process-heading" className="text-2xl md:text-3xl font-semibold tracking-tight">Delivery approach</h2>
          <p className="text-sm md:text-base text-foreground/70 mt-3">A concise, outcome-driven sequence designed to derisk early and accelerate measurable value.</p>
        </div>
        <ol className="grid gap-6 md:grid-cols-4 list-none counter-reset-step">
          {processSteps.map((step, i) => (
            <Reveal key={step.id} delay={i * 0.05}>
              <li className="relative p-5 rounded-lg border border-black/10 dark:border-white/15 flex flex-col gap-3 bg-gradient-to-b from-background/70 to-background/40">
                <span className="text-xs font-medium tracking-wide text-foreground/60">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="text-base font-semibold tracking-tight">{step.title}</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">{step.summary}</p>
                {step.deliverable && <span className="mt-auto inline-block text-[11px] uppercase tracking-wide font-medium text-foreground/55 bg-foreground/5 px-2 py-1 rounded">{step.deliverable}</span>}
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
