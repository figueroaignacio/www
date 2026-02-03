'use client';

import type { CategoryWithCount } from '@/features/blog/api/categories';
import { usePathname, useRouter } from 'next/navigation';
import { useTransition } from 'react';
import { Categories } from './categories';

interface CategoryFilterProps {
  categories: CategoryWithCount[];
  currentCategory: string | null;
}

export function CategoryFilter({ categories, currentCategory }: CategoryFilterProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [_, startTransition] = useTransition();

  const handleCategoryChange = (categorySlug: string | null) => {
    startTransition(() => {
      if (categorySlug) {
        router.push(`${pathname}?category=${categorySlug}`);
      } else {
        router.push(pathname);
      }
    });
  };

  return (
    <div>
      <Categories
        categories={categories}
        currentCategory={currentCategory}
        onCategoryChange={handleCategoryChange}
      />
    </div>
  );
}
