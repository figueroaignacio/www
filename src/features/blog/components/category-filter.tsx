'use client';

// Hooks
import { usePathname, useRouter } from 'next/navigation';
import { useTransition } from 'react';

// Components
import { Categories } from './categories';

// Types
import type { CategoryWithCount } from '@/features/blog/api/categories';

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
    <div className="mb-12">
      <Categories
        categories={categories}
        currentCategory={currentCategory}
        onCategoryChange={handleCategoryChange}
      />
    </div>
  );
}
