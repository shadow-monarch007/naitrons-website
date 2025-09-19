"use client";
import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';
import { useState, useEffect } from 'react';

export function Header() {
  const [open, setOpen] = useState(false);
  // Close on route hash navigation
  useEffect(() => {
    const handler = () => setOpen(false);
    window.addEventListener('hashchange', handler);
    return () => window.removeEventListener('hashchange', handler);
  }, []);

  return (
    <header className="w-full border-b border-black/10 dark:border-white/15 backdrop-blur supports-[backdrop-filter]:bg-background/70 sticky top-0 z-40">
      <div className="container flex items-center justify-between h-14 gap-3">
        <div className="flex items-center gap-3">
          <Link href="/" className="font-semibold tracking-tight text-lg">
            <span className="bg-clip-text text-transparent text-gradient">n</span>
            <span className="brand-ai">AI</span>
            <span className="bg-clip-text text-transparent text-gradient">tronS</span>
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <nav aria-label="Main navigation" className="hidden md:flex gap-6 text-sm">
            <Link href="#services" className="hover:underline underline-offset-4">Services</Link>
            <Link href="#portfolio" className="hover:underline underline-offset-4">Portfolio</Link>
            <Link href="#contact" className="hover:underline underline-offset-4">Contact</Link>
          </nav>
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-md border border-black/20 dark:border-white/15 hover:bg-foreground/5 dark:hover:bg-foreground/10"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen(o => !o)}
          >
            <span className="sr-only">Toggle navigation</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {open ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M3 6h18M3 12h18M3 18h18" />
              )}
            </svg>
          </button>
          <ThemeToggle />
        </div>
      </div>
      {/* Mobile panel */}
      <div
        className={`${open ? 'grid' : 'hidden'} md:hidden border-t border-black/10 dark:border-white/15 bg-background/95 backdrop-blur`}
      >
        <nav className="container py-4 flex flex-col gap-3 text-sm" aria-label="Mobile navigation">
          <Link href="#services" className="py-1" onClick={() => setOpen(false)}>Services</Link>
          <Link href="#portfolio" className="py-1" onClick={() => setOpen(false)}>Portfolio</Link>
            <Link href="#contact" className="py-1" onClick={() => setOpen(false)}>Contact</Link>
        </nav>
      </div>
    </header>
  );
}
