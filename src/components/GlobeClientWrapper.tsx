"use client";
import dynamic from 'next/dynamic';
import React, { useEffect, useRef, useState } from 'react';

const GlobeScene = dynamic(() => import('./GlobeScene').then(m => m.GlobeScene), {
  ssr: false,
  loading: () => (
    <div className="h-72 w-full grid place-items-center text-sm text-foreground/60">
      Loading globe...
    </div>
  ),
});

export function GlobeClientWrapper() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current || visible) return;
    const obs = new IntersectionObserver((entries) => {
      if (entries.some(e => e.isIntersecting)) {
        setVisible(true);
        obs.disconnect();
      }
    }, { rootMargin: '200px 0px' });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [visible]);

  return <div ref={ref}>{visible ? <GlobeScene /> : (
    <div className="h-72 w-full grid place-items-center text-sm text-foreground/50">Preparing visualization…</div>
  )}</div>;
}
