'use client';

// Hooks
import { useTranslations } from 'next-intl';

// Components
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

// Types
import type { CategoryWithCount } from '@/features/blog/api/categories';

interface CategoriesProps {
  categories: CategoryWithCount[];
  currentCategory: string | null;
  onCategoryChange: (categorySlug: string | null) => void;
}

export function Categories({ categories, currentCategory, onCategoryChange }: CategoriesProps) {
  const selectedCategory = categories.find((cat) => cat.slug === currentCategory);
  const t = useTranslations('components.categoryFilter');
  const displayText = selectedCategory ? selectedCategory.name : `${t('allCategories')}`;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>{displayText}</DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="min-w-[200px]">
        <DropdownMenuItem
          onClick={() => onCategoryChange(null)}
          className={`font-light tracking-wide ${
            !currentCategory ? 'text-foreground font-medium' : 'text-muted-foreground'
          }`}
        >
          {t('allCategories')}
        </DropdownMenuItem>
        {categories.map((category) => {
          const hasNoPosts = category.postCount === 0;

          return (
            <DropdownMenuItem
              key={category.slug}
              onClick={() => !hasNoPosts && onCategoryChange(category.slug)}
              disabled={hasNoPosts}
              className={`font-light tracking-wide ${
                currentCategory === category.slug
                  ? 'text-foreground font-medium'
                  : hasNoPosts
                    ? 'text-muted-foreground/50 cursor-not-allowed'
                    : 'text-muted-foreground'
              }`}
            >
              <span className="flex items-center justify-between w-full">
                <span>{category.name.charAt(0).toUpperCase() + category.name.slice(1)}</span>
                <span className="text-xs text-muted-foreground/70 ml-2">
                  ({category.postCount})
                </span>
              </span>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
