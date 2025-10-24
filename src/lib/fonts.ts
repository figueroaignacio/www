import { Inter, Playfair_Display } from 'next/font/google';

export const fontSans = Inter({
  subsets: ['latin'],
  weight: ['300', '400'],
  variable: '--font-sans',
});

export const fontHeading = Playfair_Display({ subsets: ['latin'], weight: ['600', '700'] });
