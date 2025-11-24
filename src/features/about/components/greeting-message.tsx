'use client';

// Hooks
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';

// Utils
import { getTimeBasedGreeting } from '@/lib/greeting';

export function GreetingMessage() {
  const [greeting, setGreeting] = useState('');
  const t = useTranslations('sections.home');

  useEffect(() => {
    const key = getTimeBasedGreeting();
    setGreeting(t(`greeting.${key}`));
  }, [t]);

  return <>{greeting}</>;
}
