export function SEOJsonLd() {
  const org = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'nAItronS',
    url: 'https://naitrons.example.com',
    description: 'Applied AI, automation, and data visualization consultancy & portfolio.',
    logo: 'https://naitrons.example.com/icon.png',
    sameAs: [
      'https://www.linkedin.com/company/naitrons',
      'https://x.com/naitrons'
    ],
    contactPoint: [{
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: 'contact@naitrons.example.com'
    }],
    founder: {
      '@type': 'Person',
      name: 'nAItronS Team'
    }
  };

  return (
    <script
      type="application/ld+json"
      // We stringify small object; ensure no user input injection here.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }}
    />
  );
}
