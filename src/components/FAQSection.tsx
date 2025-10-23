"use client";
import { useState } from 'react';
import { faqs } from '@/lib/data';

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="section bg-[#D7BFA4]" aria-labelledby="faq-heading">
      <div className="container max-w-5xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-6 sm:mb-8 md:mb-12">
          <h2 id="faq-heading" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#2B1A16]">
            FAQ
          </h2>
        </div>

        {/* FAQ List */}
        <div className="flex flex-col gap-3 sm:gap-4 mb-8 sm:mb-10 md:mb-12">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className="glass-card cursor-pointer transition-all hover:border-[#8C4513]/60 bg-[#8C4513] border-[#8C4513]/40 !p-4 sm:!p-5 md:!p-6"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className="flex items-start justify-between gap-3 sm:gap-4">
                <h3 className="text-base sm:text-lg md:text-xl font-medium text-[#FAF4EE] leading-snug">{faq.question}</h3>
                <button
                  type="button"
                  className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center text-[#FAF4EE] hover:text-[#D7BFA4] transition-colors"
                  aria-label={openIndex === index ? 'Collapse answer' : 'Expand answer'}
                  aria-expanded={openIndex === index}
                  suppressHydrationWarning
                >
                  <svg
                    className={`w-5 h-5 sm:w-6 sm:h-6 transition-transform ${openIndex === index ? 'rotate-45' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </button>
              </div>
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'grid-rows-[1fr] opacity-100 mt-3 sm:mt-4' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <div className="pt-3 sm:pt-4 border-t border-[#FAF4EE]/20">
                    <p className="text-sm sm:text-base text-[#FAF4EE]/90 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center px-4">
          <a href="/contact" className="btn-primary w-full sm:w-auto justify-center text-base sm:text-lg py-4 sm:py-5 md:py-6 px-8 sm:px-10 md:px-12">
            Get started
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
