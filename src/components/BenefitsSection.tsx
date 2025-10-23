import { benefits } from '@/lib/data';
import { Reveal } from './Reveal';

export function BenefitsSection() {
  return (
    <section id="benefits" className="section bg-[#FAF4EE]" aria-labelledby="benefits-heading">
      <div className="container">
        {/* Section Header */}
        <Reveal>
        <div className="mb-12">
          <p className="text-[#8C4513] text-sm font-semibold uppercase tracking-wider mb-4">Benefits</p>
          <h2 id="benefits-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-4xl text-[#2B1A16]">
            Solutions that make <span className="text-[#C06C43]">your business</span> stand out in{' '}
            <span className="text-[#C06C43]">the digital era</span>.
          </h2>
        </div>
        </Reveal>

        {/* Benefits Grid */}
        <div className="glass-card relative !bg-[#F5E1C8] border-[#8C4513]/20">
          {/* Available Badge */}
          <div className="absolute -top-4 right-8">
            <div className="bg-[#C06C43] text-[#FAF4EE] px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 shadow-lg">
              <span className="w-2 h-2 bg-[#FAF4EE] rounded-full animate-pulse"></span>
              Available now
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
            {benefits.map((benefit, i) => (
              <Reveal key={benefit.id} delay={i * 0.05}>
              <div className="flex flex-col gap-4 hover-lift p-4 rounded-xl transition-all duration-300 hover:bg-white/50 hover:shadow-lg">
                {/* Icon */}
                <div className="icon-box bg-[#8C4513]/10 border-[#8C4513]/20 transition-all duration-300 group-hover:bg-[#8C4513]/20 group-hover:scale-110">
                  <svg className="w-6 h-6 text-[#8C4513]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={benefit.icon} />
                  </svg>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-bold text-[#2B1A16]">{benefit.title}</h3>
                  <p className="text-[#2B1A16]/70 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
