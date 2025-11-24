import { getPosts } from '@/features/blog/api/posts';
import { routing } from '@/i18n/routing';
import { SITE_URL } from '@/lib/constants';
import type { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = ['', '/blog', '/projects', 'experience', 'stack'];

  const localizedStatic = routing.locales.flatMap((locale) =>
    staticRoutes.map((route) => ({
      url: `${SITE_URL}/${locale}${route}`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly' as const,
    })),
  );

  let localizedPosts: MetadataRoute.Sitemap = [];

  for (const locale of routing.locales) {
    const posts = await getPosts(locale);

    const localeEntries = posts.map((post: any) => ({
      url: `${SITE_URL}/${locale}/blog/${post.slug}`,
      lastModified: post.updatedAt ?? post.createdAt ?? new Date().toISOString(),
      changeFrequency: 'monthly' as const,
    }));

    localizedPosts = [...localizedPosts, ...localeEntries];
  }

  return [...localizedStatic, ...localizedPosts];
}
