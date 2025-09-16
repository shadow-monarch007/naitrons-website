import React from 'react';
import type { Service } from '@/lib/data';

export function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="rounded-lg border border-black/10 dark:border-white/15 p-5 flex flex-col gap-3 bg-background/60 backdrop-blur-sm">
      <h3 className="font-medium text-lg tracking-tight">{service.title}</h3>
      <p className="text-sm text-foreground/70 leading-relaxed">{service.description}</p>
      {service.highlights && (
        <ul className="mt-auto flex flex-wrap gap-1.5 pt-2">
          {service.highlights.map(h => (
            <li key={h} className="text-[11px] px-2 py-1 rounded bg-foreground/5 dark:bg-foreground/10">
              {h}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
