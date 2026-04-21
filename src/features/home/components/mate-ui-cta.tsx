import { getTranslations } from 'next-intl/server';
import { getMateUiComponents } from '../api/get-mate-ui-components';
import { MateUICtaClient } from './mate-ui-cta-client';

export async function MateUICta() {
  const t = await getTranslations('sections.mateUiCta');
  const components = await getMateUiComponents();
  const count = components.length;

  const translations = {
    badge: t('badge'),
    title: t('title', { count }),
    description: t('description'),
    actions: {
      viewComponents: t('actions.viewComponents'),
      viewDocumentation: t('actions.viewDocumentation'),
    },
    href: {
      components: t('href.components'),
      documentation: t('href.documentation'),
    },
    stats: {
      components: t('stats.components'),
      openSource: t('stats.openSource'),
    },
  };

  return <MateUICtaClient t={translations} count={count} />;
}
