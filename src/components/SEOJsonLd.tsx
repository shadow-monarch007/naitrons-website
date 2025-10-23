export function SEOJsonLd() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://naitrons.tech';
  const org = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Naitrons',
    url: base,
    description: 'Applied AI, automation, and data visualization consultancy & portfolio.',
    logo: `${base}/naitrons-logo.png`,
    sameAs: [
      'https://www.linkedin.com/company/naitrons',
      'https://x.com/naitrons'
    ],
    contactPoint: [{
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: 'naitronsolutions@gmail.com'
    }],
    founder: {
      '@type': 'Person',
      name: 'Naitrons Team'
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
