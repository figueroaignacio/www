import { Badge } from '@/components/ui/badge';
import type { Education } from '@/payload-types';
import { ExternalLink, GraduationCap } from 'lucide-react';
import { getLocale, getTranslations } from 'next-intl/server';
import { getEducation } from '../api/education';
import { AnimatedEducationList } from './animated-education-list';
import { AnimatedSectionHeader } from './animated-section-header';

function formatDate(dateString: string, locale: string): string {
  return new Date(dateString).toLocaleDateString(locale, {
    month: 'short',
    year: 'numeric',
  });
}

export async function EducationSection() {
  const t = await getTranslations('sections.education');
  const locale = await getLocale();
  const education: Education[] = await getEducation(locale);

  if (!education || education.length === 0) return null;

  return (
    <section className="space-y-6" aria-labelledby="education-title">
      <AnimatedSectionHeader title={t('title')} description={t('description')} />
      <AnimatedEducationList>
        {education.map((item) => (
          <EducationItem key={item.id} item={item} locale={locale} />
        ))}
      </AnimatedEducationList>
    </section>
  );
}

interface EducationItemProps {
  item: Education;
  locale: string;
}

function EducationItem({ item, locale }: EducationItemProps) {
  return (
    <article className="group">
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="space-y-3">
        <div className="flex items-start gap-3">
          <div className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg border border-border/60 bg-secondary/50 transition-colors duration-300 group-hover:border-primary/30 group-hover:bg-primary/10">
            <GraduationCap className="size-4 text-muted-foreground transition-colors duration-300 group-hover:text-primary" />
          </div>
          <div className="min-w-0 space-y-1">
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="font-semibold text-foreground leading-tight group-hover:text-primary transition-colors duration-300">
                {item.title}
              </h3>
              {item.isCurrent && (
                <Badge
                  variant="default"
                  className="text-[10px] px-1.5 py-0 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
                >
                  {locale === 'es' ? 'En curso' : 'In progress'}
                </Badge>
              )}
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-muted-foreground">{item.institution}</span>
              {item.location && (
                <>
                  <span className="text-muted-foreground/40">·</span>
                  <span className="text-muted-foreground">{item.location}</span>
                </>
              )}
            </div>
            <p className="text-xs text-muted-foreground/70">
              {formatDate(item.startDate, locale)} —{' '}
              {item.endDate
                ? formatDate(item.endDate, locale)
                : locale === 'es'
                  ? 'Presente'
                  : 'Present'}
            </p>
          </div>
        </div>
        {item.description && (
          <p className="text-sm text-muted-foreground leading-relaxed pl-11">{item.description}</p>
        )}
        {item.certificateUrl && (
          <div className="pl-11">
            <a
              href={item.certificateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              {locale === 'es' ? 'Ver certificado' : 'View certificate'}
              <ExternalLink className="size-3" />
            </a>
          </div>
        )}
      </div>
    </article>
  );
}
