import { routing } from '@/i18n/routing';
import { DOMAINS } from '@/lib/constants';
import type { MetadataRoute } from 'next';

const staticRoutes = ['', '/assistant'];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const localizedStatic = routing.locales.flatMap((locale) => {
    const domain = DOMAINS[locale as keyof typeof DOMAINS];
    return staticRoutes.map((route) => ({
      url: `${domain}${route}`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly' as const,
      priority: route === '' ? 1.0 : 0.8,
    }));
  });

  return [...localizedStatic];
}
