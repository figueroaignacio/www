import { getProjects } from '@/features/projects/api/projects';
import { routing } from '@/i18n/routing';
import { DOMAINS } from '@/lib/constants';
import type { MetadataRoute } from 'next';

const staticRoutes = ['', '/contact', '/about'];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const entries: MetadataRoute.Sitemap = [];

  for (const route of staticRoutes) {
    for (const locale of routing.locales) {
      const domain = DOMAINS[locale as keyof typeof DOMAINS];
      entries.push({
        url: `${domain}${route}`,
        lastModified: new Date('2026-04-30'),
        changeFrequency: route === '' ? 'weekly' : 'monthly',
        priority: route === '' ? 1.0 : 0.7,
        alternates: {
          languages: {
            en: `${DOMAINS.en}${route}`,
            es: `${DOMAINS.es}${route}`,
          },
        },
      });
    }
  }

  for (const locale of routing.locales) {
    try {
      const projects = await getProjects(locale as 'en' | 'es');
      const domain = DOMAINS[locale as keyof typeof DOMAINS];

      for (const project of projects) {
        if (!project.slug) continue;
        entries.push({
          url: `${domain}/projects/${project.slug}`,
          lastModified: new Date(project.updatedAt),
          changeFrequency: 'monthly',
          priority: 0.6,
          alternates: {
            languages: {
              en: `${DOMAINS.en}/projects/${project.slug}`,
              es: `${DOMAINS.es}/projects/${project.slug}`,
            },
          },
        });
      }
    } catch (error) {
      console.warn(`Sitemap: failed to fetch projects for ${locale}:`, error);
    }
  }

  return entries;
}
