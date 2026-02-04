import { Geist, Geist_Mono } from 'next/font/google';

export const fontHeading = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-heading',
});

export const fontSans = Geist({
  subsets: ['latin'],
  variable: '--font-sans',
});
