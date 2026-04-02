import { getPosts } from '@/features/blog/api/posts';
import { routing } from '@/i18n/routing';
import { SITE_URL } from '@/lib/constants';
import type { Post } from '@/payload-types';
import type { MetadataRoute } from 'next';

const staticRoutes = ['', '/blog', '/assistant'];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const localizedStatic = routing.locales.flatMap((locale) =>
    staticRoutes.map((route) => ({
      url: `${SITE_URL}/${locale}${route}`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly' as const,
    })),
  );

  const postsPerLocale = await Promise.all(routing.locales.map((locale) => getPosts(locale)));

  const localizedPosts = postsPerLocale.flatMap((posts, index) => {
    const locale = routing.locales[index];

    return posts.map((post: Post) => ({
      url: `${SITE_URL}/${locale}/blog/${post.slug}`,
      lastModified: post.updatedAt ?? post.createdAt ?? new Date().toISOString(),
      changeFrequency: 'monthly' as const,
    }));
  });

  return [...localizedStatic, ...localizedPosts];
}
