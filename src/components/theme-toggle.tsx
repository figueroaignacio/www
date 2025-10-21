'use client';

// Hooks
import { useEffect, useState } from 'react';
import { useTheme } from './theme-provider';

// Components
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { Button } from './ui/button';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted)
    return <Button variant="ghost" size="icon" className="bg-muted animate-pulse"></Button>;

  const isDark = theme === 'dark';

  return (
    <Button size="icon" variant="ghost" onClick={() => toggleTheme()} aria-label="Toggle theme">
      {isDark ? <SunIcon /> : <MoonIcon />}
    </Button>
  );
}
