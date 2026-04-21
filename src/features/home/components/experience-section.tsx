import { Badge } from '@/components/ui/badge';
import type { Experience } from '@/payload-types';
import { Briefcase, ExternalLink } from 'lucide-react';
import { getLocale, getTranslations } from 'next-intl/server';
import { getExperiences } from '../api/experience';
import { AnimatedExperienceList } from './animated-experience-list';
import { AnimatedSectionHeader } from './animated-section-header';

function formatDate(dateString: string, locale: string): string {
  return new Date(dateString).toLocaleDateString(locale, {
    month: 'short',
    year: 'numeric',
  });
}

export async function ExperienceSection() {
  const t = await getTranslations('sections.experience');
  const locale = await getLocale();
  const experiences: Experience[] = await getExperiences(locale);

  if (!experiences || experiences.length === 0) return null;

  return (
    <section className="space-y-6" aria-labelledby="experience-title">
      <AnimatedSectionHeader title={t('title')} description={t('description')} />

      <AnimatedExperienceList>
        {experiences.map((experience) => (
          <div key={experience.id}>
            {/* Timeline dot */}
            <div
              className={`absolute left-0 top-1.5 size-[23px] rounded-full border-2 flex items-center justify-center z-10 transition-colors duration-500 ${
                experience.isCurrent
                  ? 'border-primary bg-primary'
                  : 'border-border bg-card group-hover:border-primary/50'
              }`}
            >
              <Briefcase
                className={`size-3 ${experience.isCurrent ? 'text-primary-foreground' : 'text-muted-foreground'}`}
              />
            </div>

            <article className="space-y-3 group">
              {/* Header */}
              <div className="space-y-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {experience.title}
                  </h3>
                  {experience.isCurrent && (
                    <Badge
                      variant="default"
                      className="text-[10px] px-1.5 py-0 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
                    >
                      {locale === 'es' ? 'Actual' : 'Current'}
                    </Badge>
                  )}
                </div>
                <div className="flex items-center gap-2 text-sm">
                  {experience.link ? (
                    <a
                      href={experience.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
                    >
                      {experience.company}
                      <ExternalLink className="size-3" />
                    </a>
                  ) : (
                    <span className="text-muted-foreground">{experience.company}</span>
                  )}
                  {experience.location && (
                    <>
                      <span className="text-muted-foreground/40">·</span>
                      <span className="text-muted-foreground">{experience.location}</span>
                    </>
                  )}
                </div>
                <p className="text-xs text-muted-foreground/70">
                  {formatDate(experience.startDate, locale)} —{' '}
                  {experience.endDate
                    ? formatDate(experience.endDate, locale)
                    : locale === 'es'
                      ? 'Presente'
                      : 'Present'}
                </p>
              </div>

              {/* Tasks */}
              {experience.tasks && experience.tasks.length > 0 && (
                <ul className="space-y-1.5">
                  {experience.tasks.map((task) => (
                    <li
                      key={task.id}
                      className="text-sm text-muted-foreground leading-relaxed flex gap-2"
                    >
                      <span className="text-primary/40 mt-0.5 shrink-0 group-hover:text-primary/70 transition-colors duration-300">
                        ▸
                      </span>
                      {task.item}
                    </li>
                  ))}
                </ul>
              )}

              {/* Technologies */}
              {experience.technologies && experience.technologies.length > 0 && (
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {experience.technologies.map((tech) => (
                    <Badge
                      key={tech.id}
                      variant="secondary"
                      className="text-[10px] bg-secondary/50 border-transparent hover:border-border transition-all"
                    >
                      {tech.name}
                    </Badge>
                  ))}
                </div>
              )}
            </article>
          </div>
        ))}
      </AnimatedExperienceList>
    </section>
  );
}
