import { ReactNode } from 'react';

import '@/styles/animations.css';
import '@/styles/globals.css';

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return children;
}
