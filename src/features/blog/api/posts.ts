import type { Post } from '@/payload-types';
import config from '@payload-config';
import { Locale } from 'next-intl';
import { getPayload, type Where } from 'payload';

export async function getPosts(locale: Locale, categorySlug?: string): Promise<Post[]> {
  const payload = await getPayload({ config });

  const where: Where = {
    locale: { equals: locale },
    _status: { equals: 'published' },
  };

  if (categorySlug) {
    where['categories.slug'] = { equals: categorySlug };
  }

  const result = await payload.find({
    collection: 'posts',
    where,
  });

  return result.docs;
}

export async function getPaginatedPosts({
  locale,
  page = 1,
  limit = 6,
  categorySlug,
}: {
  locale: Locale;
  page?: number;
  limit?: number;
  categorySlug?: string;
}) {
  const payload = await getPayload({ config });

  const where: Where = {
    locale: { equals: locale },
    _status: { equals: 'published' },
  };

  if (categorySlug) {
    where['categories.slug'] = { equals: categorySlug };
  }

  const result = await payload.find({
    collection: 'posts',
    where,
    page,
    limit,
  });

  return result;
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const payload = await getPayload({ config });

  const result = await payload.find({
    collection: 'posts',
    where: {
      slug: { equals: slug },
    },
    limit: 1,
  });

  return result.docs?.[0] ?? null;
}

export async function getFeaturedPosts(locale: Locale): Promise<Post[]> {
  const payload = await getPayload({ config });

  const result = await payload.find({
    collection: 'posts',
    where: {
      featured: { equals: true },
      locale: { equals: locale },
      _status: { equals: 'published' },
    },
  });

  return result.docs ?? [];
}

export async function getRecentPosts(locale: Locale): Promise<Post[]> {
  const payload = await getPayload({ config });

  const result = await payload.find({
    collection: 'posts',
    where: {
      locale: { equals: locale },
      _status: { equals: 'published' },
    },
    sort: '-createdAt',
    limit: 2,
  });

  return result.docs;
}
