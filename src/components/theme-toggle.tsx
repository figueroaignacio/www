'use client';

import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { useTheme } from 'i7a-themes';
import { useEffect, useState } from 'react';
import { Button } from './ui/button';

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
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
      {isDark ? <SunIcon className="size-3" /> : <MoonIcon className="size-3" />}
    </Button>
  );
}
