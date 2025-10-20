// Hooks
import { useLocale } from 'next-intl';

// Components
import { Badge } from './ui/badge';

// Utils
import { formatMonthYear } from '@/lib/utils';

// Types
import { type Experience } from '@/payload-types';

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
    <div>
      <div className="text-muted-foreground text-xs font-medium">
        {formattedStart && (
          <>
            {formattedStart}
            {formattedEnd && ` — ${formattedEnd}`}
          </>
        )}
      </div>
      <div>
        <h3 className="text-sm">
          {title} - <span>{company}</span>
        </h3>
      </div>
      {description && <p className="text-sm text-muted-foreground pt-1">{description}</p>}
      {technologies.length > 0 && (
        <div className="flex gap-2 flex-wrap pt-2">
          {technologies.map((technology) => (
            <Badge key={technology.id} label={technology.name || ''} />
          ))}
        </div>
      )}
    </div>
  );
}
