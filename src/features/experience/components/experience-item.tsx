import { formatMonthYear } from '@/lib/cn';
import { type Experience } from '@/payload-types';
import { useLocale } from 'next-intl';
import { Badge } from './ui/badge';
import {
  TimelineContent,
  TimelineDescription,
  TimelineHeader,
  TimelineItem,
  TimelineTitle,
} from './ui/timeline';

interface ExperienceItemProps extends Omit<Partial<Experience>, 'technologies'> {
  technologies?: { name?: string | null; id?: string | null }[];
}

export function ExperienceItem({
  title,
  company,
  description,
  technologies = [],
  startDate,
  endDate,
  isCurrent,
}: ExperienceItemProps) {
  const locale = useLocale();

  const formattedStart = startDate ? formatMonthYear(startDate, locale) : null;
  const formattedEnd = isCurrent
    ? locale === 'es'
      ? 'Actualidad'
      : 'Present'
    : endDate
      ? formatMonthYear(endDate, locale)
      : null;

  return (
    <TimelineItem>
      <TimelineHeader>
        <TimelineTitle>{title}</TimelineTitle>
        <TimelineDescription>{company}</TimelineDescription>
      </TimelineHeader>
      <TimelineContent>
        {formattedStart && (
          <div className="text-muted-foreground text-xs font-medium">
            {formattedStart}
            {formattedEnd && ` — ${formattedEnd}`}
          </div>
        )}
        {description && <p className="text-sm text-muted-foreground pt-1">{description}</p>}
        {technologies.length > 0 && (
          <div className="flex gap-2 flex-wrap pt-2">
            {technologies.map((tech) => (
              <Badge key={tech.id} label={tech.name || ''} />
            ))}
          </div>
        )}
      </TimelineContent>
    </TimelineItem>
  );
}
