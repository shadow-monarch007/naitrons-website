"use client";
import { portfolio } from '@/lib/data';

export function WorkShowcase() {
  return (
    <section id="work" className="section overflow-hidden bg-[#2B1A16]" aria-labelledby="work-heading">
      <div className="container">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 id="work-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-[#FAF4EE]">
            Featured Work
          </h2>
          <p className="text-[#FAF4EE]/70 text-lg max-w-2xl mx-auto">
            Showcasing AI solutions that deliver real business impact
          </p>
        </div>
      </div>

      {/* Horizontal Scrolling Carousel */}
      <div className="relative">
        <div className="flex gap-8 animate-scroll">
          {/* Duplicate items for seamless loop */}
          {[...portfolio.slice(0, 3), ...portfolio.slice(0, 3)].map((project, index) => (
            <a
              key={`${project.id}-${index}`}
              href="#contact"
              className="flex-shrink-0 w-[600px] lg:w-[800px] group"
            >
              {/* Project Card */}
              <div className="glass-card p-0 bg-[#2B1A16]/50 border-[#D7BFA4]/20 hover:border-[#C06C43] transition-all h-full backdrop-blur-sm overflow-hidden hover:scale-105 hover:shadow-2xl duration-300">
                {/* Project Visual - Tilted */}
                <div className="relative w-full aspect-[16/10] -rotate-1 group-hover:rotate-0 transition-transform duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#8C4513]/20 via-[#C06C43]/20 to-[#D7BFA4]/20 border border-[#D7BFA4]/30 shadow-2xl overflow-hidden flex flex-col">
                    {/* Browser Chrome */}
                    <div className="flex items-center gap-2 px-4 py-3 bg-[#2B1A16] border-b border-[#D7BFA4]/20 flex-shrink-0">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                      </div>
                      <div className="flex-1 ml-4">
                        <div className="h-6 bg-[#FAF4EE]/10 rounded-md w-2/3"></div>
                      </div>
                    </div>
                    {/* Project Screenshot Placeholder */}
                    <div className="relative flex-1 bg-gradient-to-br from-[#8C4513]/40 via-[#C06C43]/50 to-[#D7BFA4]/30 flex items-center justify-center group-hover:from-[#8C4513]/60 group-hover:via-[#C06C43]/70 transition-all duration-300 image-zoom-container overflow-hidden">
                      <div className="text-center p-8 transition-transform duration-300">
                        <div className="text-6xl mb-4">
                          {project.id === 'incredible-karnataka' ? '🏔️' : 
                           project.id === 'predictive-analytics-dashboard' ? '📊' : '⚡'}
                        </div>
                        <p className="text-[#FAF4EE] text-2xl font-bold">{project.title}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Project Title Bar */}
                <div className="p-6 bg-[#2B1A16]">
                  <h3 className="text-xl md:text-2xl font-bold text-[#FAF4EE] group-hover:text-[#C06C43] transition-colors">
                    {project.title}
                  </h3>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
