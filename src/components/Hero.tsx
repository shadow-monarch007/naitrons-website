import { Reveal } from './Reveal';
import { Header } from './Header';

export function Hero() {
  return (
    <section className="section pt-32 sm:pt-36 md:pt-40 lg:pt-44 pb-12 sm:pb-16 md:pb-20 relative overflow-hidden bg-gradient-to-br from-[#FAF4EE] via-[#FAF4EE] to-[#F5E1C8]/30" id="hero" aria-label="Hero">
      <Header />
      {/* Decorative background & border — purely visual */}
      <div className="hero-decor pointer-events-none" aria-hidden="true">
        {/* soft blurred blobs */}
        <div className="hero-blobs">
          <svg className="blob blob--one" viewBox="0 0 600 400" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="g1" cx="30%" cy="20%">
                <stop offset="0%" stopColor="#D7BFA4" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#C06C43" stopOpacity="0.6" />
              </radialGradient>
              <filter id="f1" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="40" />
              </filter>
            </defs>
            <rect x="-50" y="-50" width="700" height="500" rx="160" fill="url(#g1)" filter="url(#f1)" />
          </svg>

          <svg className="blob blob--two" viewBox="0 0 600 400" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="g2" cx="70%" cy="80%">
                <stop offset="0%" stopColor="#F5E1C8" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#8C4513" stopOpacity="0.45" />
              </radialGradient>
              <filter id="f2" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="36" />
              </filter>
            </defs>
            <rect x="-40" y="-20" width="680" height="420" rx="140" fill="url(#g2)" filter="url(#f2)" />
          </svg>
        </div>

        {/* ornate border SVG around the hero — thin, decorative strokes */}
        <svg className="hero-border" viewBox="0 0 1200 520" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="borderGrad" x1="0" x2="1">
              <stop offset="0%" stopColor="#C06C43" stopOpacity="0.18" />
              <stop offset="50%" stopColor="#8C4513" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#C06C43" stopOpacity="0.18" />
            </linearGradient>
          </defs>
          <rect x="12" y="12" width="1176" height="496" rx="28" fill="none" stroke="url(#borderGrad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          {/* ornamental corner accents */}
          <g fill="none" stroke="url(#borderGrad)" strokeWidth="1.6" opacity="0.9">
            <path d="M36 36c10-6 24-6 34 0" strokeLinecap="round" />
            <path d="M1164 36c-10-6-24-6-34 0" strokeLinecap="round" />
            <path d="M36 484c10 6 24 6 34 0" strokeLinecap="round" />
            <path d="M1164 484c-10 6-24 6-34 0" strokeLinecap="round" />
          </g>
        </svg>
      </div>
      <div className="container px-4 sm:px-6">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center gap-6 sm:gap-8">

          {/* Main Headline */}
          <Reveal delay={0.05}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.15] sm:leading-[1.1] text-[#2B1A16] px-4 max-w-5xl">
              Crafted websites for <span className="text-[#8C4513]">ambitious founders</span> & businesses
            </h1>
          </Reveal>

          {/* Subheading */}
          <Reveal delay={0.1}>
            <div className="max-w-2xl flex flex-col gap-2 text-sm sm:text-base md:text-lg lg:text-xl text-[#2B1A16]/70 px-4">
              <p>We help founders bring their stories to life online.</p>
              <p className="text-[#2B1A16] font-medium">
                One hand on design, one on development.
              </p>
            </div>
          </Reveal>

          {/* CTA Buttons */}
          <Reveal delay={0.15}>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2 sm:mt-4 w-full sm:w-auto px-4">
            <a href="/contact" className="btn-primary btn-slide hover-lift group text-sm sm:text-base md:text-lg py-3 sm:py-4 md:py-5 px-5 sm:px-6 md:px-8 justify-center">
              <span className="relative z-10">Get started</span>
              <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 relative z-10 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a href="#work" className="btn-secondary hover-lift font-bold shadow-md hover:shadow-lg transition-all group text-sm sm:text-base py-3 sm:py-4 px-5 sm:px-6 justify-center">
              <span>Learn more</span>
              <svg className="w-4 h-4 transition-transform group-hover:translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
