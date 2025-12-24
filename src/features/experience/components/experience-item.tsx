import { Badge } from '@/components/ui/badge';
import { formatMonthYear } from '@/lib/format-date';
import { useLocale } from 'next-intl';

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
    <div className="flex flex-col gap-4">
      <div className="flex flex-col space-y-3">
        <div className="flex items-center gap-x-1">
          {title && <h3 className="text-lg font-semibold">{title}</h3>}
          <span className="text-lg font-semibold"> | </span>
          {company && <p className="text-lg font-semibold">@{company}</p>}
        </div>
        {dateRange && <p className="text-sm text-muted-foreground">{dateRange}</p>}
      </div>

      {(tasks?.length || technologies.length > 0) && (
        <div className="flex flex-col gap-4">
          {tasks && tasks.length > 0 && (
            <ul className="list-disc pl-5 space-y-1">
              {tasks.map((task) => (
                <li key={task.id} className="text-sm leading-relaxed">
                  {task.item}
                </li>
              ))}
            </ul>
          )}

          {technologies.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) =>
                tech.name ? (
                  <Badge key={tech.id} variant="secondary">
                    {tech.name}
                  </Badge>
                ) : null,
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
