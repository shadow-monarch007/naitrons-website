export function MissionSection() {
  return (
    <section id="mission" className="section relative overflow-hidden bg-gradient-to-br from-[#FAF4EE] via-[#FAF4EE] to-[#F5E1C8]/20" aria-labelledby="mission-heading">
      {/* Decorative flower/mandala in the background */}
      <div className="mission-decor" aria-hidden="true">
        <svg className="mission-flower" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="mf-grad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#C06C43" stopOpacity="0.22" />
              <stop offset="60%" stopColor="#8C4513" stopOpacity="0.14" />
              <stop offset="100%" stopColor="#2B1A16" stopOpacity="0.06" />
            </radialGradient>
            <filter id="mf-blur" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2" />
            </filter>
          </defs>
          {/* Soft filled base to make the motif visible */}
          <circle cx="300" cy="300" r="260" fill="url(#mf-grad)" opacity="0.18" />

          <g filter="url(#mf-blur)" fill="none" stroke="url(#mf-grad)" strokeWidth="1.6">
            {Array.from({ length: 12 }).map((_, i) => (
              <path key={i} d={`M300 60
                C ${300 + 80*Math.cos((i*30)*Math.PI/180)} ${300 + 80*Math.sin((i*30)*Math.PI/180)}
                  ${300 + 180*Math.cos(((i*30)+15)*Math.PI/180)} ${300 + 180*Math.sin(((i*30)+15)*Math.PI/180)}
                  300 540`} />
            ))}
            <circle cx="300" cy="300" r="120" strokeOpacity="0.25" />
            <circle cx="300" cy="300" r="200" strokeOpacity="0.15" />
          </g>
        </svg>
      </div>

      <div className="container flex justify-center relative z-10 px-4 sm:px-6">
        <div className="glass-card max-w-4xl w-full !bg-[#F5E1C8] border-[#8C4513]/20">
          {/* Mission Label */}
          <div className="mb-4 sm:mb-6">
            <span className="text-[#C06C43] text-xs sm:text-sm font-semibold uppercase tracking-wider">Mission</span>
          </div>

          {/* Mission Statement */}
          <div className="flex flex-col gap-4 sm:gap-6 mb-6 sm:mb-8">
            <h2 id="mission-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2B1A16] leading-tight">
              Bringing AI innovation to every business.
            </h2>

            <p className="text-base sm:text-lg text-[#2B1A16]/70 leading-relaxed">
              Generic solutions and one-size-fits-all approaches leave businesses struggling to leverage AI effectively.
            </p>

            <p className="text-base sm:text-lg text-[#2B1A16]/70 leading-relaxed">
              Our approach is different: tailored AI solutions that understand your unique challenges and deliver
              measurable results.
            </p>
          </div>

          {/* Value Points */}
          <div className="mb-8">
            <p className="text-[#2B1A16] font-semibold mb-4">We help businesses:</p>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-3 text-[#2B1A16]/70">
                <span className="text-[#8C4513] text-xl mt-0.5">+</span>
                <span>Automate workflows</span>
              </li>
              <li className="flex items-start gap-3 text-[#2B1A16]/70">
                <span className="text-[#8C4513] text-xl mt-0.5">+</span>
                <span>Harness data insights</span>
              </li>
              <li className="flex items-start gap-3 text-[#2B1A16]/70">
                <span className="text-[#8C4513] text-xl mt-0.5">+</span>
                <span>Scale with AI</span>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <p className="text-base sm:text-lg text-[#2B1A16]/70 mb-6 sm:mb-8">
            If that sounds like what you&apos;re looking for, let&apos;s talk.
          </p>

          {/* Profile & Buttons */}
          <div className="flex flex-col items-center gap-4 sm:gap-6 pt-4 sm:pt-6 border-t border-[#8C4513]/20">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#8C4513] overflow-hidden flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1589656966895-2f33e7653819?w=100&h=100&fit=crop&q=80" 
                  alt="Brown Bear"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-semibold text-[#2B1A16] text-sm sm:text-base">Naitrons Designer</p>
                <p className="text-xs sm:text-sm text-[#2B1A16]/70">Creative Lead</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 justify-center">
              <a href="/contact" className="btn-primary hover-lift">
                Get started
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="/contact" className="btn-secondary hover-lift">
                Book a call
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
