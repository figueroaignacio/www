'use client';

import type { CategoryWithCount } from '@/features/blog/api/categories';
import { useTranslations } from 'next-intl';

interface CategoriesProps {
  categories: CategoryWithCount[];
  currentCategory: string | null;
  onCategoryChange: (categorySlug: string | null) => void;
}

export function Categories({ categories, currentCategory, onCategoryChange }: CategoriesProps) {
  const t = useTranslations('components.categoryFilter');

  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onCategoryChange(null)}
        className={`
          px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
          ${
            !currentCategory
              ? 'bg-foreground text-background shadow-md'
              : 'bg-muted/60 text-muted-foreground hover:bg-muted hover:text-foreground'
          }`}
      >
        {t('allCategories')}
      </button>

      {categories.map((category) => {
        const hasNoPosts = category.postCount === 0;
        const isSelected = currentCategory === category.slug;

        return (
          <button
            key={category.slug}
            disabled={hasNoPosts}
            onClick={() => onCategoryChange(category.slug)}
            className={`
              px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
              ${
                isSelected
                  ? 'bg-foreground text-background shadow-md'
                  : hasNoPosts
                    ? 'bg-muted/40 text-muted-foreground/50 cursor-not-allowed'
                    : 'bg-muted/60 text-muted-foreground hover:bg-muted hover:text-foreground'
              }`}
          >
            <span>{category.name.charAt(0).toUpperCase() + category.name.slice(1)}</span>
            <span
              className={`ml-1.5 text-xs ${isSelected ? 'text-background/70' : 'text-muted-foreground/70'}`}
            >
              {category.postCount}
            </span>
          </button>
        );
      })}
    </div>
  );
}
