'use client';

import { Link } from '@/i18n/navigation';
import { cn } from '@/lib/cn';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useSearchParams } from 'next/navigation';

interface PaginationProps {
  totalPages: number;
  className?: string;
}

export function Pagination({ totalPages, className }: PaginationProps) {
  const t = useTranslations('components.pagination');
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    return `?${params.toString()}`;
  };

  if (totalPages <= 1) return null;

  return (
    <div className={cn('flex items-center justify-between space-x-6 my-10', className)}>
      <Link
        href={createPageURL(currentPage - 1)}
        className={cn(
          'flex items-center gap-1 text-sm font-medium transition-colors hover:text-foreground',
          currentPage <= 1
            ? 'pointer-events-none text-muted-foreground/30'
            : 'text-muted-foreground',
        )}
        aria-disabled={currentPage <= 1}
      >
        <ChevronLeft className="h-4 w-4" />
        {t('previous')}
      </Link>

      <span className="text-sm font-medium text-foreground">
        {t('info', { current: currentPage, total: totalPages })}
      </span>

      <Link
        href={createPageURL(currentPage + 1)}
        className={cn(
          'flex items-center gap-1 text-sm font-medium transition-colors hover:text-foreground',
          currentPage >= totalPages
            ? 'pointer-events-none text-muted-foreground/30'
            : 'text-muted-foreground',
        )}
        aria-disabled={currentPage >= totalPages}
      >
        {t('next')}
        <ChevronRight className="h-4 w-4" />
      </Link>
    </div>
  );
}
