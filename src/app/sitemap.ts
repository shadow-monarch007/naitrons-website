import { MetadataRoute } from 'next';

// Generates sitemap.xml at build time / on-demand depending on route type.
// Customize the base URL via NEXT_PUBLIC_SITE_URL env var.
export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://example.com';
  const now = new Date();
  return [
    {
      url: `${base}/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
    },
  ];
}
