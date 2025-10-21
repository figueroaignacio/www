'use client';

import React, { createContext, use, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';
interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const isNextJS = typeof window !== 'undefined' && 'next' in window;

function getInitialThemeCSR(): Theme {
  if (typeof window === 'undefined') return 'dark';

  const stored = localStorage.getItem('theme') as Theme;
  const theme = stored || 'dark';

  document.documentElement.classList.remove('light', 'dark');
  document.documentElement.classList.add(theme);

  return theme;
}

function getInitialThemeSSR(): Theme {
  if (typeof window === 'undefined') return 'dark';
  return (localStorage.getItem('theme') as Theme) || 'dark';
}

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(isNextJS ? getInitialThemeSSR : getInitialThemeCSR);

  useEffect(() => {
    if (isNextJS) {
      const stored = (localStorage.getItem('theme') as Theme) || 'dark';
      setTheme(stored);
      document.documentElement.classList.remove('light', 'dark');
      document.documentElement.classList.add(stored);
    }
  }, []);

  const toggleTheme = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(next);
    localStorage.setItem('theme', next);

    if (isNextJS) {
      document.cookie = `theme=${next};path=/;max-age=31536000;SameSite=Lax`;

      import('next/navigation')
        .then(({ useRouter }) => {
          const router = useRouter();
          router.refresh();
        })
        .catch(() => {});
    }
  };

  return <ThemeContext value={{ theme, toggleTheme }}>{children}</ThemeContext>;
};

export const useTheme = () => {
  const ctx = use(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
};
