import { defineRouting } from 'next-intl/routing';

export const locales = ['en', 'es'] as const;

export const routing = defineRouting({
  locales: ['en', 'es'],
  defaultLocale: 'en',
  localePrefix: 'never',
  domains: [
    {
      domain: 'ignaciofigueroa.me',
      locales: ['es'],
      defaultLocale: 'es',
    },
    {
      domain: 'es.ignaciofigueroa.me',
      locales: ['es'],
      defaultLocale: 'es',
    },
    {
      domain: 'en.ignaciofigueroa.me',
      locales: ['en'],
      defaultLocale: 'en',
    },
  ],
});
