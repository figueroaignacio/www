// Hooks
import { useTranslations } from 'next-intl';

// Components
import { Button } from '@/components/ui/button/button';

export default function CVCallToAction() {
  const t = useTranslations('components');

  return (
    <section className="w-full my-16">
      <div className="rounded-2xl border-border border bg-card p-6 shadow-sm">
        <div className="space-y-4 sm:space-y-5">
          <h2 className="font-semibold tracking-tight text-xl">{t('cvcta.title')}</h2>
          <p className="text-sm text-muted-foreground sm:text-base">{t('cvcta.description')}</p>
          <div>
            <Button>
              <a
                href={t('cvcta.url')}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abrir CV en una nueva pestaña"
              >
                {t('cvcta.action')}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
