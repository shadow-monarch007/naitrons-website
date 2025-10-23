import { Header } from '@/components/Header';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

export const metadata = {
  title: 'Contact Us',
  description: 'Get in touch with nAItronS for AI solutions and automation services.',
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <div className="section pt-32">
          <div className="container max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Let&apos;s build something <span className="brand-accent">amazing</span> together
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to transform your business with AI? Fill out the form below and we&apos;ll get back to you within 24 hours.
            </p>
          </div>
          <ContactSection />
        </div>
      </main>
      <Footer />
    </>
  );
}
