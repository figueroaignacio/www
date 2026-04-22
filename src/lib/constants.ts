export const SITE_URL =
  process.env.NEXT_PUBLIC_API_URL_PROD && process.env.NODE_ENV === 'production'
    ? process.env.NEXT_PUBLIC_API_URL_PROD
    : process.env.NEXT_PUBLIC_API_URL_DEV;

export const MATE_UI_API = 'http://api-nach-ui.vercel.app';
