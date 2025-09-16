import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { ServicesSection } from '@/components/ServicesSection';
import { PortfolioSection } from '@/components/PortfolioSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { GlobeClientWrapper } from '@/components/GlobeClientWrapper';
import { ValuePropsSection } from '@/components/ValuePropsSection';
import { MetricsBand } from '@/components/MetricsBand';
import { ProcessSection } from '@/components/ProcessSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { CTASection } from '@/components/CTASection';

export default function Home() {
  return (
    <>
      <a href="#hero" className="skip-link">Skip to content</a>
      <Header />
      <main id="main" role="main">
        <Hero />
        <section className="section" aria-label="Global visualization demo">
          <div className="container flex flex-col gap-4">
            <h2 className="text-xl md:text-2xl font-semibold tracking-tight">A Global Perspective</h2>
            <p className="text-sm md:text-base text-foreground/70 max-w-2xl">Interactive 3D experiences can surface complex, geospatial or network-centric data intuitively. This lightweight demo illustrates an embeddable canvas capability.</p>
            <GlobeClientWrapper />
          </div>
        </section>
        <ValuePropsSection />
        <MetricsBand />
        <ProcessSection />
        <ServicesSection />
        <TestimonialsSection />
        <CTASection />
        <PortfolioSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
