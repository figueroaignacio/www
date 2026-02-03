'use client';

import { useTranslations } from 'next-intl';

export function Bio() {
  const t = useTranslations('sections.aboutMe');
  const items = t.raw('items') as { content: string }[];

  return (
    <section className="space-y-6">
      {items.map((item, index) => (
        <p key={index} className={index === 0 ? 'text-foreground' : 'text-muted-foreground'}>
          {t.rich(`items.${index}.content`, {
            b: (chunks) => <strong className="font-medium text-foreground">{chunks}</strong>,
          })}
        </p>
      ))}
    </section>
  );
}
