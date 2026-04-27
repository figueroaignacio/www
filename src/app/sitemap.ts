import { routing } from '@/i18n/routing';
import { SITE_URL } from '@/lib/constants';
import type { MetadataRoute } from 'next';

const staticRoutes = ['', '/assistant'];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const localizedStatic = routing.locales.flatMap((locale) =>
    staticRoutes.map((route) => ({
      url: `${SITE_URL}/${locale}${route}`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly' as const,
    })),
  );

  return [...localizedStatic];
}
