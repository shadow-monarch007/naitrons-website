"use client";
import Link from 'next/link';
import { useState } from 'react';

export function Header() {
  const [open, setOpen] = useState(false);
  
  // Header is scoped to the Hero section and not fixed site-wide

  return (
    <header className="absolute top-0 left-0 right-0 w-full z-30">
      <div className="container flex items-center justify-between h-20 gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-0.5">
          <img 
            src="/logo-icon.png" 
            alt="Naitrons" 
            className="h-[36px] w-[36px] sm:h-[40px] sm:w-[40px] object-contain flex-shrink-0" 
          />
          <span className="text-[36px] sm:text-[40px] font-bold text-[#2B1A16] leading-none">Naitrons</span>
        </Link>

        {/* Desktop Navigation */}
        <nav aria-label="Main navigation" className="hidden md:flex items-center gap-8 text-[15px]">
          <Link href="#process" className="text-[#2B1A16]/70 hover:text-[#8C4513] transition-colors font-medium">Process</Link>
          <Link href="#work" className="text-[#2B1A16]/70 hover:text-[#8C4513] transition-colors font-medium">Work</Link>
          <Link href="#about" className="text-[#2B1A16]/70 hover:text-[#8C4513] transition-colors font-medium">About</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg hover:bg-[#2B1A16]/10 transition-colors text-[#2B1A16] bg-transparent"
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
