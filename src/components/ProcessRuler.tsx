"use client";
import { useEffect, useRef } from 'react';

export function ProcessRuler() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const linesRef = useRef<HTMLDivElement[]>([]);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
  const container = containerRef.current;
  if (!container) return;

    // Only run on large screens for performance
    if (window.innerWidth < 1024) return;

    function buildLines() {
      const root = containerRef.current as HTMLDivElement;
      if (!root) return;
      root.innerHTML = '';
      // attempt to size to the steps block so ruler covers all steps including final
  const stepsWrapper = document.querySelector('.space-y-32') as HTMLElement | null;
  const height = stepsWrapper ? stepsWrapper.getBoundingClientRect().height + 200 : root.getBoundingClientRect().height;
      const lineHeight = 2; // px
      const gap = 12; // px
      // extend count slightly beyond visible height so ruler continues past launch
      const visibleCount = Math.floor(height / (lineHeight + gap));
      const count = Math.max(visibleCount + 6, 14);

      linesRef.current = [];

      for (let i = 0; i < count; i++) {
        const el = document.createElement('div');
        el.className = 'process-line';
        el.style.height = `${lineHeight}px`;
        el.style.width = '32px';
        el.style.marginBottom = `${gap}px`;
        el.style.backgroundColor = 'rgba(255,255,255,0.08)';
        el.style.transition = 'width 120ms linear, background-color 160ms linear';
        el.style.position = 'relative';
        root.appendChild(el);
        linesRef.current.push(el);
      }
    }

    function updateLines() {
      const centerY = window.innerHeight / 2;
      linesRef.current.forEach((line) => {
        const rect = line.getBoundingClientRect();
        const distance = Math.abs(rect.top + rect.height / 2 - centerY);
        // choose width based on distance
        const widths = [32, 34, 38, 46, 62, 94];
        const idx = Math.max(0, Math.min(widths.length - 1, Math.floor((200 - distance) / 40)));
        const w = widths[idx] || 32;
        line.style.width = w + 'px';

        // color ramp
        const colors = ['rgba(255,255,255,0.08)', '#3D2B29', '#5C2F29', '#9A372A', '#F63A22'];
        const colorIdx = Math.max(0, Math.min(colors.length - 1, Math.floor((200 - distance) / 50)));
        line.style.backgroundColor = colors[colorIdx] || 'rgba(255,255,255,0.08)';

        // hide labels if any
        line.classList.remove('show-label');
        const existing = line.querySelector('.step-label');
        if (existing) existing.remove();
      });
    }

    function onScrollStop() {
      // find line closest to center
      const centerY = window.innerHeight / 2;
      let closest: HTMLDivElement | null = null;
      let minDistance = Infinity;
      linesRef.current.forEach((line) => {
        const rect = line.getBoundingClientRect();
        const d = Math.abs(rect.top + rect.height / 2 - centerY);
        if (d < minDistance) {
          minDistance = d;
          closest = line;
        }
      });

  if (!closest) return;

      // find nearest step element (use headings inside steps)
  const steps = Array.from(document.querySelectorAll<HTMLElement>('[data-process-step]')) as HTMLElement[];
      if (!steps.length) return;

      let currentStep: HTMLElement | null = null;
      let smallest = Infinity;
      steps.forEach((s: HTMLElement) => {
        const r = s.getBoundingClientRect();
        const stepCenter = r.top + r.height / 2;
        const d = Math.abs(stepCenter - centerY);
        if (d < smallest) {
          smallest = d;
          currentStep = s;
        }
      });

    if (!currentStep) return;
    const stepEl = currentStep as HTMLElement;
    // extract heading text inside step (prefer h3)
  const heading = (stepEl.querySelector('h3')?.textContent || stepEl.textContent || 'Step').trim().split('\n')[0] || 'Step';
      const label = document.createElement('span');
      label.className = 'step-label';
      label.textContent = heading.trim();
      label.style.position = 'absolute';
      label.style.left = '100%';
      label.style.top = '50%';
      label.style.transform = 'translateY(-50%)';
      label.style.marginLeft = '10px';
      label.style.fontFamily = 'system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial';
      label.style.fontSize = '12px';
      label.style.color = '#F63A22';

  const closestEl = closest as HTMLDivElement;
  closestEl.appendChild(label);
  closestEl.classList.add('show-label');
    }

    function onScroll() {
      updateLines();
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = window.setTimeout(onScrollStop, 120);
    }

    buildLines();
    updateLines();

    window.addEventListener('scroll', onScroll);
    const onResize = () => { buildLines(); updateLines(); };
    window.addEventListener('resize', onResize);

    // Rebuild once DOM has fully painted (in case fonts/layout change)
    setTimeout(() => {
      buildLines();
      updateLines();
    }, 300);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, []);

  return <div ref={containerRef} className="absolute left-8 top-0 bottom-0 w-20 hidden lg:block" aria-hidden="true" />;
}
