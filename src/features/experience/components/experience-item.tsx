// Hooks
import { useLocale } from 'next-intl';

// Components
import { Badge } from '@/components/ui/badge';
import {
  TimelineContent,
  TimelineDescription,
  TimelineHeader,
  TimelineItem,
  TimelineList,
  TimelineListItem,
  TimelineMeta,
  TimelineTitle,
} from '@/components/ui/timeline';

// Utils
import { formatMonthYear } from '@/lib/format-date';

// Types
import { type Experience } from '@/payload-types';

interface ExperienceItemProps extends Partial<Experience> {
  technologies?: { name?: string | null; id?: string | null }[];
  active?: boolean;
}

export function ExperienceItem({
  title,
  company,
  tasks,
  technologies = [],
  startDate,
  endDate,
  isCurrent,
  active = false,
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

  const dateRange =
    formattedStart && formattedEnd ? `${formattedStart} — ${formattedEnd}` : formattedStart || null;

  return (
    <TimelineItem active={active}>
      <TimelineHeader>
        <TimelineTitle>{title}</TimelineTitle>
        <TimelineDescription>{company}</TimelineDescription>
        {dateRange && (
          <TimelineMeta>
            <span>{dateRange}</span>
          </TimelineMeta>
        )}
      </TimelineHeader>

      {(tasks?.length || technologies.length > 0) && (
        <TimelineContent>
          {tasks && tasks.length > 0 && (
            <TimelineList>
              {tasks.map((task) => (
                <TimelineListItem key={task.id}>{task.item}</TimelineListItem>
              ))}
            </TimelineList>
          )}
          {technologies.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {technologies.map((tech) =>
                tech.name ? <Badge key={tech.id} label={tech.name} /> : null,
              )}
            </div>
          )}
        </TimelineContent>
      )}
    </TimelineItem>
  );
}
