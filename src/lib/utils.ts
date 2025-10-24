import { clsx, type ClassValue } from 'clsx';
import type { Locale as DateFnsLocale } from 'date-fns';
import { format, formatDistanceToNow } from 'date-fns';
import { enUS, es } from 'date-fns/locale';
import { Locale } from 'next-intl';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const localeMap: Record<Locale, DateFnsLocale> = {
  es,
  en: enUS,
};

function getDateLocale(locale: Locale): DateFnsLocale {
  return localeMap[locale];
}

export function formatFullDateWithWeekday(date: string | Date, locale: Locale): string {
  const dateLocale = getDateLocale(locale);

  if (locale === 'es') {
    return format(new Date(date), "EEEE, d 'de' MMMM 'de' yyyy", {
      locale: dateLocale,
    });
  }

  return format(new Date(date), 'EEEE, MMMM d, yyyy', {
    locale: dateLocale,
  });
}

export function formatShortDate(date: string | Date, locale: Locale): string {
  const dateLocale = getDateLocale(locale);

  if (locale === 'es') {
    return format(new Date(date), 'dd/MM/yyyy', {
      locale: dateLocale,
    });
  }

  return format(new Date(date), 'MM/dd/yyyy', {
    locale: dateLocale,
  });
}

export function formatRelativeDate(date: string | Date, locale: Locale): string {
  const dateLocale = getDateLocale(locale);

  return formatDistanceToNow(new Date(date), {
    addSuffix: true,
    locale: dateLocale,
  });
}

/**
 * Solo fecha sin hora: "15 de septiembre de 2025"
 * EN: "September 15, 2025"
 */
export function formatDateOnly(date: string | Date, locale: Locale): string {
  const dateLocale = getDateLocale(locale);

  if (locale === 'es') {
    return format(new Date(date), "d 'de' MMMM 'de' yyyy", {
      locale: dateLocale,
    });
  }

  return format(new Date(date), 'MMMM d, yyyy', {
    locale: dateLocale,
  });
}

export function formatTimeOnly(date: string | Date, locale: Locale): string {
  const dateLocale = getDateLocale(locale);

  if (locale === 'es') {
    return format(new Date(date), 'HH:mm', {
      locale: dateLocale,
    });
  }

  return format(new Date(date), 'h:mm a', {
    locale: dateLocale,
  });
}

export function formatMonthYear(date: string | Date, locale: Locale): string {
  const dateLocale = getDateLocale(locale);

  if (locale === 'es') {
    return format(new Date(date), "MMMM 'de' yyyy", { locale: dateLocale });
  }

  return format(new Date(date), 'MMMM yyyy', { locale: dateLocale });
}

const gradients = [
  'bg-gradient-to-br from-blue-500 to-cyan-500',
  'bg-gradient-to-br from-purple-500 to-pink-500',
  'bg-gradient-to-br from-orange-500 to-red-500',
  'bg-gradient-to-br from-emerald-500 to-teal-500',
  'bg-gradient-to-br from-indigo-500 to-purple-500',
  'bg-gradient-to-br from-amber-500 to-orange-500',
  'bg-gradient-to-br from-rose-500 to-pink-500',
  'bg-gradient-to-br from-sky-500 to-blue-500',
];

export function getGradientForSlug(slug: string | undefined): string {
  if (!slug) return gradients[0];
  const hash = slug.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return gradients[hash % gradients.length];
}
