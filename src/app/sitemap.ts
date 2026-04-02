import { getPosts } from '@/features/blog/api/posts';
import { getPosts } from '@/features/blog/api/posts';
import { routing } from '@/i18n/routing';
import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/constants';
import type { Post } from '@/payload-types';
import type { MetadataRoute } from 'next';
  const staticRoutes = ['', '/blog', '/assistant'];

import { SITE_URL } from '@/lib/constants';
    staticRoutes.map((route) => ({
      url: `${SITE_URL}/${locale}${route}`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly' as const,
    })),
  );

  let localizedPosts: MetadataRoute.Sitemap = [];

  for (const locale of routing.locales) {
    const posts = await getPosts(locale);

    const localeEntries = posts.map((post: Post) => ({
      url: `${SITE_URL}/${locale}/blog/${post.slug}`,
      lastModified: post.updatedAt ?? post.createdAt ?? new Date().toISOString(),
      changeFrequency: 'monthly' as const,
    }));

    localizedPosts = [...localizedPosts, ...localeEntries];
  }

  return [...localizedStatic, ...localizedPosts];
}
