import { defineRouting } from 'next-intl/routing';

export const locales = ['en', 'es'] as const;

export const routing = defineRouting({
  locales: ['en', 'es'],
  defaultLocale: 'en',
  localePrefix: {
    mode: 'never',
  },
  domains: [
    {
      domain: 'en.ignaciofigueroa.me',
      locales: ['en'],
      defaultLocale: 'en',
    },
    {
      domain: 'es.ignaciofigueroa.me',
      locales: ['es'],
      defaultLocale: 'es',
    },
  ],
});
