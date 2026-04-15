import { ArrowRight } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import { Fragment } from 'react/jsx-runtime';
import { getNachUiComponents } from '../api/get-nach-ui-components';

export default async function NachUICTA() {
  const t = await getTranslations('sections.nachUiCta');
  const components = await getNachUiComponents();
  const count = components.length;

  const actions = [
    {
      label: t('actions.viewComponents'),
      href: t('href.components'),
      icon: <ArrowRight />,
      className: 'btn btn-primary',
    },
    {
      label: t('actions.viewDocumentation'),
      href: t('href.documentation'),
      icon: <ArrowRight />,
      className: 'btn btn-outline',
    },
  ];

  const stats = [
    {
      value: count,
      label: t('stats.components'),
    },
    {
      value: '100%',
      label: t('stats.openSource'),
    },
  ];

  return (
    <div>
      <div className="card-outline text-center">
        <div className="inline-flex items-center gap-2 bg-secondary border border-border rounded-full px-4 py-1 text-xs text-muted-foreground mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
          {t('badge')}
        </div>
        <h2 className="text-xl font-semibold text-foreground mb-3 leading-tight">
          {t('title', { count })}
        </h2>
        <p className="text-muted-foreground text-sm max-w-sm mx-auto mb-8 leading-relaxed">
          {t('description')}
        </p>
        <div className="flex gap-3 justify-center flex-wrap">
          {actions.map((action) => (
            <a
              key={action.label}
              href={action.href}
              target="_blank"
              rel="noopener noreferrer"
              className={action.className}
            >
              {action.label}
              {action.icon}
            </a>
          ))}
        </div>
        <div className="flex gap-6 justify-center mt-8 pt-6 border-t border-border">
          {stats.map((stat, index) => (
            <Fragment key={stat.label}>
              <div className="text-center">
                <p className="text-xl font-semibold text-foreground">{stat.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
              </div>
              {index < stats.length - 1 && <div className="w-px bg-border" />}
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
