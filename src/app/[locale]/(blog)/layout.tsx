import React from 'react';

// Components

// next-intl
import { routing } from '@/i18n/routing';
import { hasLocale, Locale } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';

interface BlogLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}

export default async function BlogLayout({ children, params }: BlogLayoutProps) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return <div>{children}</div>;
}
