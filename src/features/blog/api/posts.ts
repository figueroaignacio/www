import { API_URL } from '@/lib/constants';
import { Post } from '@/payload-types';
import { Locale } from 'next-intl';

export async function getPosts(locale: Locale, categorySlug?: string) {
  let url = `${API_URL}/api/posts`;
  const params = new URLSearchParams();
  params.append('where[locale][equals]', locale);

  if (categorySlug) {
    params.append('where[categories.slug][equals]', categorySlug);
  }

  const queryString = params.toString();
  if (queryString) {
    url += `?${queryString}`;
  }

  const res = await fetch(url, { cache: 'no-store' });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    console.error('Error fetching posts:', errorData);
    throw new Error('Error getting posts');
  }

  const data = await res.json();
  return data.docs;
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
  const params = new URLSearchParams();
  params.append('where[locale][equals]', locale);
  params.append('page', page.toString());
  params.append('limit', limit.toString());

  if (categorySlug) {
    params.append('where[categories.slug][equals]', categorySlug);
  }

  const url = `${API_URL}/api/posts?${params.toString()}`;

  const res = await fetch(url, { cache: 'no-store' });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    console.error('Error fetching posts:', errorData);
    throw new Error('Error getting posts');
  }

  const data = await res.json();
  return data;
}
export async function getPostBySlug(slug: string) {
  const res = await fetch(`${API_URL}/api/posts/?where[slug][equals]=${slug}`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch post by slug');
  }

  const data = await res.json();
  return data.docs?.[0] ?? null;
}

export async function getFeaturedPosts(locale: Locale) {
  const res = await fetch(
    `${API_URL}/api/posts?where[featured][equals]=true&where[locale][equals]=${locale}`,
  );

  if (!res.ok) {
    throw new Error('Failed to fetch featured posts');
  }

  const data = await res.json();
  return data.docs ?? [];
}

export async function getRecentPosts(locale: Locale): Promise<Post[]> {
  const posts: any[] = await getPosts(locale);
  if (!posts || posts.length === 0) return [];

  const getTimestamp = (p: any) => {
    const dateValue =
      p.publishedAt ?? p.published_at ?? p.createdAt ?? p.created_at ?? p.date ?? null;
    const t = dateValue ? Date.parse(dateValue) : 0;
    return Number.isNaN(t) ? 0 : t;
  };

  return posts
    .slice()
    .sort((a, b) => getTimestamp(b) - getTimestamp(a))
    .slice(0, 2);
}
