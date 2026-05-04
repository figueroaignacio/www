'use client';

import { Moon02Icon, Sun01Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import { useTheme } from 'nach-themes';
import { useEffect, useState } from 'react';
import { Button } from './ui/button';

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
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
      {isDark ? (
        <HugeiconsIcon icon={Sun01Icon} className="size-3" />
      ) : (
        <HugeiconsIcon icon={Moon02Icon} className="size-3" />
      )}
    </Button>
  );
}
