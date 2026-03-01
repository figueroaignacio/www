'use client';

import { ThemeProvider } from 'nach-themes';

export function Providers({ children }: { children: React.ReactNode }) {
  return <ThemeProvider disableTransitionOnChange>{children}</ThemeProvider>;
}
