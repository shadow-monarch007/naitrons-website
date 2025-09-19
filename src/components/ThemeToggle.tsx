"use client";
import React, { useEffect, useState } from 'react';
// Ensure React symbol remains in scope for test transforms that rely on classic runtime
void React;

type Theme = 'light' | 'dark' | 'system';

function getSystemTheme(): 'light' | 'dark' {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('system');
  const [mounted, setMounted] = useState(false);

  // On first server pass, we intentionally render neutral, deterministic markup to avoid hydration drift.
  useEffect(() => {
    setMounted(true);
    const saved = (typeof window !== 'undefined') ? (localStorage.getItem('theme-pref') as Theme | null) : null;
    if (saved) applyTheme(saved, false); else applyTheme('system', false);
    // Listen for system theme changes if user selected system
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = () => {
      if (localStorage.getItem('theme-pref') === 'system') applyTheme('system', false);
    };
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  function applyTheme(next: Theme, updateState = true) {
    if (updateState) setTheme(next);
    localStorage.setItem('theme-pref', next);
    const root = document.documentElement;
    // Clear both explicit classes first
    root.classList.remove('light');
    root.classList.remove('dark');
    const effective = next === 'system' ? getSystemTheme() : next;
    if (effective === 'dark') root.classList.add('dark');
    if (effective === 'light') root.classList.add('light');
  }

  function cycle() {
    const order: Theme[] = ['light', 'dark', 'system'];
    const idx = order.indexOf(theme);
    const next = order[(idx + 1) % order.length];
    setTheme(next);
    applyTheme(next);
  }

  const labelMap: Record<Theme, string> = {
    light: 'Light mode',
    dark: 'Dark mode',
    system: 'System theme'
  };

  const effectiveTheme = theme;
  const icon = !mounted ? '◎' : effectiveTheme === 'system' ? '◎' : effectiveTheme === 'dark' ? '🌙' : '☀️';

  return (
    <button
      type="button"
      onClick={cycle}
      aria-label={!mounted ? 'Toggle theme' : `Toggle theme (currently ${labelMap[effectiveTheme]})`}
      data-theme={mounted ? effectiveTheme : 'pending'}
  className="text-sm h-8 px-3 inline-flex items-center gap-1 rounded-md border border-black/20 dark:border-white/15 hover:bg-foreground/5 dark:hover:bg-foreground/10 transition-colors"
      suppressHydrationWarning
    >
      <span aria-hidden>{icon}</span>
      <span className="hidden sm:inline">{mounted ? labelMap[effectiveTheme] : 'Theme'}</span>
    </button>
  );
}
