import { useTranslations } from 'next-intl';

// Components
import { ViewCvButton } from './view-cv-button';

export function CvCta() {
  const t = useTranslations('components.viewCvButton.cta');

  return (
    <div className="space-y-4 my-12">
      <div>
        <h2 className="font-bold">{t('title')}</h2>
        <p className="text-sm text-muted-foreground">{t('text')}</p>
      </div>
      <ViewCvButton />
    </div>
  );
}
