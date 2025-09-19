import React from 'react';
import { metrics } from '@/lib/data';
import { Reveal } from './Reveal';

export function MetricsBand() {
  return (
    <section className="py-14 md:py-20 bg-foreground/[0.03] dark:bg-foreground/[0.06] border-y border-black/5 dark:border-white/10" aria-labelledby="metrics-heading">
      <div className="container flex flex-col gap-10">
        <div className="max-w-2xl">
          <h2 id="metrics-heading" className="text-xl md:text-2xl font-semibold tracking-tight">Execution signals</h2>
          <p className="text-sm md:text-base text-foreground/70 mt-3">Operational qualities we aim to uphold across engagements.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-4">
          {metrics.map((m, i) => (
            <Reveal key={m.id} delay={i * 0.04}>
              <div className="p-5 rounded-lg border border-black/25 dark:border-white/15 bg-background/60 flex flex-col gap-2">
                <div className="text-2xl font-semibold tracking-tight">{m.value}</div>
                <div className="text-xs uppercase tracking-wide text-foreground/60">{m.label}</div>
                {m.help && <p className="text-[11px] leading-relaxed text-foreground/50">{m.help}</p>}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
