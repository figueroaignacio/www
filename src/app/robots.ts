import type { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/(payload)/', '/admin/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
