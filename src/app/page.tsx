import { Hero } from '@/components/Hero';
import { WorkShowcase } from '@/components/WorkShowcase';
import { MissionSection } from '@/components/MissionSection';
import { BenefitsSection } from '@/components/BenefitsSection';
import { ProcessSection } from '@/components/ProcessSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { FAQSection } from '@/components/FAQSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { ScrollAnimations } from '@/components/ScrollAnimations';

export default function Home() {
  return (
    <>
      <ScrollAnimations />
      <a href="#main" className="skip-link">Skip to content</a>
  <main id="main" role="main">
        <Hero />
        <WorkShowcase />
        <MissionSection />
        <BenefitsSection />
        <ProcessSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
