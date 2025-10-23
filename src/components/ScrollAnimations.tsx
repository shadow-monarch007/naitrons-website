"use client";
import { useEffect } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type GSAPType = any;

export function ScrollAnimations() {
  useEffect(() => {
    // Wait for GSAP to load
    const initAnimations = () => {
      if (typeof window === 'undefined' || !(window as GSAPType).gsap) {
        setTimeout(initAnimations, 100);
        return;
      }

      const gsap = (window as GSAPType).gsap;
      const ScrollTrigger = (window as GSAPType).ScrollTrigger;
      
      if (!ScrollTrigger) {
        setTimeout(initAnimations, 100);
        return;
      }

      gsap.registerPlugin(ScrollTrigger);

      // Fade in sections on scroll
      const sections = document.querySelectorAll('.section');
      sections.forEach((section) => {
        gsap.from(section, {
          opacity: 0,
          y: 50,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'top 50%',
            toggleActions: 'play none none none',
          },
        });
      });

      // Fade in headings
      const headings = document.querySelectorAll('h1, h2, h3');
      headings.forEach((heading, index) => {
        gsap.from(heading, {
          opacity: 0,
          y: 30,
          duration: 0.6,
          delay: index * 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: heading,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        });
      });

      // Animate buttons
      const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
      buttons.forEach((button) => {
        gsap.from(button, {
          opacity: 0,
          scale: 0.9,
          duration: 0.4,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: button,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        });
      });

      // Parallax effect for images
      const images = document.querySelectorAll('img');
      images.forEach((img) => {
        if (img.closest('.image-zoom-container')) {
          gsap.to(img, {
            y: -20,
            ease: 'none',
            scrollTrigger: {
              trigger: img,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1,
            },
          });
        }
      });
    };

    // Start initialization after a short delay to ensure scripts are loaded
    setTimeout(initAnimations, 500);

    return () => {
      // Cleanup
      if ((window as GSAPType).ScrollTrigger) {
        (window as GSAPType).ScrollTrigger.getAll().forEach((trigger: GSAPType) => trigger.kill());
      }
    };
  }, []);

  return null;
}
