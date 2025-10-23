"use client";
import { processSteps } from '@/lib/data';
import { useEffect, useRef } from 'react';
import { Reveal } from './Reveal';
import { ProcessRuler } from './ProcessRuler';

const processQuestions = [
  ["What does success look like?", "What's the primary goal of the new website?", "Who is your ideal customer?"],
  ["What information are users looking for?", "Are there any sites you admire?", "What does your brand in 3 words?"],
  ["Who will be involved in approvals or feedback?", "What pages do you expect the site to have?", "How do you want users to feel?"],
  ["Are there different types of users with different needs?", "What does your current analytics show?"]
];

export function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate progress based on section position
      const sectionHeight = section.offsetHeight;
      const scrollStart = -rect.top + windowHeight * 0.3;
      const scrollEnd = sectionHeight - windowHeight * 0.5;
      
      // Progress calculation for potential future use
      Math.max(0, Math.min(1, scrollStart / scrollEnd));
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="section bg-[#D7BFA4] text-[#2B1A16] relative overflow-hidden" id="process" aria-labelledby="process-heading">
      {/* Animated Ruler on Left (isolated component) */}
      <ProcessRuler />

  <div className="container px-4 sm:px-6">
        {/* Section Header */}
        <Reveal>
        <div className="mb-8 sm:mb-12 md:mb-16 text-center relative">
          <p className="text-[#C06C43] text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2 sm:mb-3 md:mb-4">Process</p>
          <h2 id="process-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight max-w-4xl mx-auto text-[#2B1A16] relative z-20 px-4">
            How we take you from <span className="text-[#8C4513]">zero</span> to launch
          </h2>

          {/* Decorative moving phrase cluster (4 rows) — stacked under heading within a constrained width */}
          <div className="phrase-wrap" aria-hidden="true">
            <div className="phrase-cluster">
              <div className="phrase-row row-1">
                {[
                  "What's the primary goal?","Who is your ideal customer?","What does success look like?","Are there sites you admire?","How should users feel?","What pages do you need?","What data do you have?"
                ].concat([
                  "What's the primary goal?","Who is your ideal customer?","What does success look like?","Are there sites you admire?","How should users feel?","What pages do you need?","What data do you have?"
                ]).map((t, i) => (
                  <span key={`r1-${i}`}>{t}</span>
                ))}
              </div>

              <div className="phrase-row row-2">
                {[
                  'Brand tone & personality','Technical constraints','SEO & content plan','Integrations & APIs','Launch checklist','User journeys','Success metrics'
                ].concat([
                  'Brand tone & personality','Technical constraints','SEO & content plan','Integrations & APIs','Launch checklist','User journeys','Success metrics'
                ]).map((t, i) => (
                  <span key={`r2-${i}`}>{t}</span>
                ))}
              </div>

              <div className="phrase-row row-3">
                {[
                  'Stakeholders','CMS structure','Design system','Accessibility','Performance budgets','Success criteria','Analytics events'
                ].concat([
                  'Stakeholders','CMS structure','Design system','Accessibility','Performance budgets','Success criteria','Analytics events'
                ]).map((t, i) => (
                  <span key={`r3-${i}`}>{t}</span>
                ))}
              </div>

              <div className="phrase-row row-4">
                {[
                  'Content hierarchy','Call-to-actions','Hero narrative','Navigation patterns','Form strategy','Security & auth','QA checklist'
                ].concat([
                  'Content hierarchy','Call-to-actions','Hero narrative','Navigation patterns','Form strategy','Security & auth','QA checklist'
                ]).map((t, i) => (
                  <span key={`r4-${i}`}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
        </Reveal>

        {/* Process Steps */}
        <div className="space-y-32 lg:ml-32">
          {processSteps.map((step, index) => (
            <Reveal key={step.id} delay={index * 0.05}>
            <div className="relative" id={`step${index + 1}`} data-process-step>
              {/* Step Content */}
              <div className="max-w-3xl mx-auto text-center">
                {/* Title Box */}
                <div className="flex justify-center mb-6 sm:mb-8">
                  <div className="inline-block px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-xl bg-white/50 border-2 border-[#8C4513]/20 transition-all duration-300 hover:bg-[#8C4513] hover:border-[#8C4513] hover:shadow-lg group cursor-pointer">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#2B1A16] group-hover:text-white transition-colors duration-300">{step.title}</h3>
                  </div>
                </div>

                {step.visual && (
                  <div className="mb-6 sm:mb-8 flex justify-center px-4">
                    <div className="aspect-[4/3] w-full max-w-md rounded-xl overflow-hidden bg-white/5 border border-white/10 shadow-2xl">
                      <img 
                        src={`https://images.unsplash.com/photo-${
                          index === 0 ? '1552664730-d307ca884978' : // Meeting/discussion
                          index === 1 ? '1561070791-2526d30994b5' : // Design/mockups
                          index === 2 ? '1498050108023-c5249f4df085' : // Development/coding
                          '1460925895917-afdab827c52f' // Launch/celebration
                        }?w=600&h=450&fit=crop&q=80`}
                        alt={`${step.title} illustration`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>
                )}
                
                <p className="text-base sm:text-lg text-[#2B1A16]/70 leading-relaxed mb-6 sm:mb-8 px-4">{step.summary}</p>

                {/* Questions Pills - moved after content */}
                {index < processQuestions.length && (
                  <div className="flex flex-wrap gap-2 sm:gap-3 justify-center px-2">
                    {processQuestions[index].map((question, qIndex) => (
                      <div
                        key={qIndex}
                        className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#FAF4EE] border border-[#8C4513] text-[#8C4513] text-xs sm:text-sm font-medium hover:bg-[#8C4513] hover:text-white transition-colors duration-300 cursor-pointer"
                      >
                        {question}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            </Reveal>
          ))}
        </div>

        {/* Final CTA */}
        <div className="mt-24 max-w-3xl mx-auto flex justify-center">
          <a href="/contact" className="btn-primary inline-flex items-center justify-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Let&apos;s chat
          </a>
        </div>
      </div>
    </section>
  );
}
