import { API_URL } from '@/lib/constants';
import { PostCategory } from '@/payload-types';
import { Locale } from 'next-intl';

export interface CategoryWithCount extends PostCategory {
  postCount: number;
}

export async function getCategories(locale: Locale): Promise<CategoryWithCount[]> {
  const params = new URLSearchParams();
  params.append('where[locale][equals]', locale);

  const res = await fetch(`${API_URL}/api/post-categories?${params.toString()}`);

  if (!res.ok) {
    throw new Error('Error getting categories');
  }

  const data = await res.json();
  const categories: PostCategory[] = data.docs;

  const categoriesWithCount = await Promise.all(
    categories.map(async (category) => {
      const postParams = new URLSearchParams();
      postParams.append('where[locale][equals]', locale);
      postParams.append('where[categories.slug][equals]', category.slug);
      postParams.append('limit', '0');

      const postsRes = await fetch(`${API_URL}/api/posts?${postParams.toString()}`);
      const postsData = await postsRes.json();

      return {
        ...category,
        postCount: postsData.totalDocs || 0,
      };
    }),
  );

  return categoriesWithCount;
}
