"use client";
import { testimonials } from '@/lib/data';
import { useState, useEffect, useRef } from 'react';

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      // Reset progress
      setProgress(0);
      
      // Progress bar animation
      progressIntervalRef.current = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) return 0;
          return prev + (100 / 50); // 5000ms / 100ms intervals
        });
      }, 100);

      // Auto-advance testimonials
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        setProgress(0);
      }, 5000);
    } else {
      // Pause when not visible
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    };
  }, [isVisible]);

  if (!testimonials.length) return null;

  const currentTestimonial = testimonials[currentIndex];

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    setProgress(0);
    // Restart intervals
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    
    if (isVisible) {
      progressIntervalRef.current = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) return 0;
          return prev + (100 / 50);
        });
      }, 100);

      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        setProgress(0);
      }, 5000);
    }
  };

  return (
    <section ref={sectionRef} className="section bg-[#A8C2B2]" id="testimonials" aria-labelledby="testimonials-heading">
      <div className="container">
        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto text-center">
          <div 
            key={currentIndex}
            className="animate-fade-in"
          >
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-medium text-[#2B1A16] leading-relaxed mb-8">
              &ldquo;{currentTestimonial.quote}&rdquo;
            </blockquote>
            
            {/* Author */}
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#8C4513] overflow-hidden flex items-center justify-center">
                <svg className="w-6 h-6 text-[#FAF4EE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div className="text-left">
                <p className="font-semibold text-[#2B1A16]">{currentTestimonial.author}</p>
                <p className="text-sm text-[#2B1A16]/70">{currentTestimonial.role}</p>
              </div>
            </div>
          </div>

          {/* Pagination Dots with Progress */}
          <div className="flex items-center justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => handleDotClick(index)}
                className="relative group"
                aria-label={`Go to testimonial ${index + 1}`}
                suppressHydrationWarning
              >
                <div className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-[#8C4513] scale-125' : 'bg-[#2B1A16]/30'
                }`} />
                {index === currentIndex && (
                  <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-[#2B1A16]/20 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-[#8C4513] transition-all duration-100 ease-linear"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
