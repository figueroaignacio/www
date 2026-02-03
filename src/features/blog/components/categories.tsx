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
          inline-flex items-center px-3 py-1 rounded-full text-sm tracking-wide transition-colors
          ${
            !currentCategory
              ? 'bg-foreground text-background font-medium'
              : 'bg-muted text-muted-foreground hover:text-foreground'
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
              inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm tracking-wide transition-colors
              ${
                isSelected
                  ? 'bg-foreground text-background font-medium'
                  : hasNoPosts
                    ? 'bg-muted text-muted-foreground/50 cursor-not-allowed'
                    : 'bg-muted text-muted-foreground hover:text-foreground'
              }`}
          >
            <span>{category.name.charAt(0).toUpperCase() + category.name.slice(1)}</span>
            <span
              className={`text-xs ${isSelected ? 'text-background/60' : 'text-muted-foreground/60'}`}
            >
              ({category.postCount})
            </span>
          </button>
        );
      })}
    </div>
  );
}
