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
      domain: 'en.ignaciofigueroa.dev',
      locales: ['en'],
      defaultLocale: 'en',
    },
    {
      domain: 'es.ignaciofigueroa.dev',
      locales: ['es'],
      defaultLocale: 'es',
    },
  ],
});
