export function SEOJsonLd() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://naitrons.tech';
  const org = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'nAItronS',
    url: base,
    description: 'Applied AI, automation, and data visualization consultancy & portfolio.',
    logo: `${base}/favicon.ico`,
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
