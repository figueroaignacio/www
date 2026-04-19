'use client';

import { Badge } from '@/components/ui/badge';
import type { Experience } from '@/payload-types';
import { Briefcase, ExternalLink } from 'lucide-react';
import { useLocale } from 'next-intl';
import { useEffect, useState } from 'react';
import { getChatExperience } from '../actions/get-chat-experience';

function formatDate(dateString: string, locale: string): string {
  return new Date(dateString).toLocaleDateString(locale, {
    month: 'short',
    year: 'numeric',
  });
}

export function ChatExperienceCards() {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [loading, setLoading] = useState(true);
  const locale = useLocale();

  useEffect(() => {
    async function fetchExperience() {
      try {
        const data = await getChatExperience();
        setExperiences(data);
      } catch (error) {
        console.error('Failed to fetch experience for chat', error);
      } finally {
        setLoading(false);
      }
    }
    fetchExperience();
  }, []);

  if (loading) {
    return (
      <div className="space-y-6 mt-4">
        {[1, 2].map((i) => (
          <div
            key={i}
            className="h-[120px] rounded-xl bg-card border border-border animate-pulse"
          />
        ))}
      </div>
    );
  }

  if (experiences.length === 0) return null;

  return (
    <div className="mt-4">
      <ol className="relative space-y-0">
        <div className="absolute left-[11px] top-2 bottom-2 w-px bg-border" />

        {experiences.map((experience) => (
          <li key={experience.id} className="relative pl-10 pb-8 last:pb-0">
            <div
              className={`absolute left-0 top-1.5 size-[23px] rounded-full border-2 flex items-center justify-center ${
                experience.isCurrent ? 'border-foreground bg-foreground' : 'border-border bg-card'
              }`}
            >
              <Briefcase
                className={`size-3 ${experience.isCurrent ? 'text-background' : 'text-muted-foreground'}`}
              />
            </div>

            <article className="space-y-3">
              <div className="space-y-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="font-semibold text-foreground">{experience.title}</h3>
                  {experience.isCurrent && (
                    <Badge variant="default" className="text-[10px] px-1.5 py-0">
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

              {experience.tasks && experience.tasks.length > 0 && (
                <ul className="space-y-1.5">
                  {experience.tasks.map((task) => (
                    <li
                      key={task.id}
                      className="text-sm text-muted-foreground leading-relaxed flex gap-2"
                    >
                      <span className="text-muted-foreground/40 mt-0.5 shrink-0">▸</span>
                      {task.item}
                    </li>
                  ))}
                </ul>
              )}

              {experience.technologies && experience.technologies.length > 0 && (
                <div className="flex flex-wrap gap-1.5">
                  {experience.technologies.map((tech) => (
                    <Badge key={tech.id} variant="secondary" className="text-[11px]">
                      {tech.name}
                    </Badge>
                  ))}
                </div>
              )}
            </article>
          </li>
        ))}
      </ol>
    </div>
  );
}
