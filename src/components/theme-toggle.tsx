'use client';

import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { useEffect, useState } from 'react';
import { useTheme } from './theme-provider';
import { Button } from './ui/button';

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <Button variant="ghost" size="icon" className="bg-muted animate-pulse" />;
  }

  const isDark = resolvedTheme === 'dark';

  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <Button size="icon" variant="ghost" onClick={toggleTheme} aria-label="Toggle theme">
      {isDark ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
    </Button>
  );
}
