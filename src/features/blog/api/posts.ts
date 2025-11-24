import { API_URL } from '@/lib/constants';
import { Locale } from 'next-intl';

export async function getPosts(locale: Locale) {
  const res = await fetch(`${API_URL}/api/posts?where[locale][equals]=${locale}`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }

  const data = await res.json();
  return data.docs;
}

export async function getPostBySlug(slug: string) {
  const res = await fetch(`${API_URL}/api/posts/?where[slug][equals]=${slug}`);

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
