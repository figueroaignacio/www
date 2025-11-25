'use client';

// Hooks
import { useMounted } from '@/hooks/use-mounted';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';

// Components
import { GreetingLoader } from './greeting-loader';

// Utils
import { getTimeBasedGreeting } from '@/lib/greeting';

export function GreetingMessage() {
  const [greeting, setGreeting] = useState('');
  const t = useTranslations('sections.home');
  const mounted = useMounted();

  useEffect(() => {
    const key = getTimeBasedGreeting();
    setGreeting(t(`greeting.${key}`));
  }, [t]);

  if (!mounted) {
    return <GreetingLoader />;
  }

  return <>{greeting}</>;
}
