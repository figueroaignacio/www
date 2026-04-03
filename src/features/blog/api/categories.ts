import config from '@payload-config';
import { Locale } from 'next-intl';
import { getPayload } from 'payload';

import type { PostCategory } from '@/payload-types';

export interface CategoryWithCount extends PostCategory {
  postCount: number;
}

export async function getCategories(locale: Locale): Promise<CategoryWithCount[]> {
  const payload = await getPayload({ config });

  const result = await payload.find({
    collection: 'post-categories',
    where: {
      locale: { equals: locale },
    },
  });

  const categories = result.docs;

  const categoriesWithCount = await Promise.all(
    categories.map(async (category) => {
      const postsResult = await payload.find({
        collection: 'posts',
        where: {
          locale: { equals: locale },
          'categories.slug': { equals: category.slug },
          _status: { equals: 'published' },
        },
        limit: 0,
      });

      return {
        ...category,
        postCount: postsResult.totalDocs,
      };
    }),
  );

  return categoriesWithCount;
}
