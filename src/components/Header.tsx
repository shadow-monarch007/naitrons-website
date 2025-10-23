"use client";
import Link from 'next/link';
import { useState } from 'react';

export function Header() {
  const [open, setOpen] = useState(false);
  
  // Header is scoped to the Hero section and not fixed site-wide

  return (
    <header className="absolute top-0 left-0 right-0 w-full z-50">
      {/* Height tightened and unified across breakpoints */}
      <div className="container relative flex items-center h-16 sm:h-18 md:h-20">
        {/* Brand at far left */}
        <Link href="/" aria-label="Home" className="flex items-center">
          {/* Mobile: show compact wordmark at left; avoid center overlap */}
          <span className="md:hidden block leading-none select-none text-xl font-extrabold tracking-tight">
            <span className="text-[#D7BFA4]">n</span>
            <span className="text-[#8C4513]">AI</span>
            <span className="text-[#D7BFA4]">trons</span>
          </span>
          {/* Desktop: show icon slightly larger for visibility */}
          <img
            src="/logo-icon.png"
            alt="Naitrons logo"
            className="hidden md:block h-10 lg:h-11 w-auto object-contain flex-shrink-0"
          />
        </Link>

        {/* Centered Title (desktop only to keep mobile uncluttered) */}
        <div className="absolute left-1/2 -translate-x-1/2 hidden md:block">
          <span className="block text-2xl md:text-3xl font-extrabold tracking-tight leading-none select-none">
            <span className="text-[#D7BFA4]">n</span>
            <span className="text-[#8C4513]">AI</span>
            <span className="text-[#D7BFA4]">trons</span>
          </span>
        </div>

        {/* Desktop Navigation on the right */}
        <nav aria-label="Main navigation" className="ml-auto hidden md:flex items-center gap-8 text-[15px]">
          <Link href="#process" className="text-[#2B1A16]/70 hover:text-[#8C4513] transition-colors font-medium">Process</Link>
          <Link href="#work" className="text-[#2B1A16]/70 hover:text-[#8C4513] transition-colors font-medium">Work</Link>
          <Link href="#about" className="text-[#2B1A16]/70 hover:text-[#8C4513] transition-colors font-medium">About</Link>
        </nav>

        {/* Mobile Menu Button (right) */}
        <button
          type="button"
          className="ml-auto md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg hover:bg-[#2B1A16]/10 transition-colors text-[#2B1A16] bg-transparent"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(o => !o)}
        >
          <span className="sr-only">Toggle navigation</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {open ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-[#2B1A16]/10 bg-[#FAF4EE]/95 backdrop-blur-md">
          <nav className="container py-6 flex flex-col gap-4" aria-label="Mobile navigation">
            <Link href="#process" className="py-2 text-[#2B1A16]/70 hover:text-[#8C4513] transition-colors font-medium" onClick={() => setOpen(false)}>Process</Link>
            <Link href="#work" className="py-2 text-[#2B1A16]/70 hover:text-[#8C4513] transition-colors font-medium" onClick={() => setOpen(false)}>Work</Link>
            <Link href="#about" className="py-2 text-[#2B1A16]/70 hover:text-[#8C4513] transition-colors font-medium" onClick={() => setOpen(false)}>About</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
