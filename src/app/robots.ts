import { DOMAINS } from '@/lib/constants';
import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/(payload)/', '/admin/'],
    },
    sitemap: [
      `${DOMAINS.en}/sitemap.xml`,
      `${DOMAINS.es}/sitemap.xml`,
    ],
  };
}
