// Components
import { TimelineItem } from './ui/timeline';

// Utils
import { formatRange } from '@/lib/utils';

// Types
import { type Education } from '@/payload-types';

interface EducationItemProps
  extends Pick<
    Education,
    'title' | 'institution' | 'location' | 'description' | 'startDate' | 'endDate' | 'isCurrent'
  > {
  isLast?: boolean;
}

export function EducationItem({
  title,
  institution,
  location,
  description,
  startDate,
  endDate,
  isCurrent,
  isLast = false,
}: EducationItemProps) {
  return (
    <TimelineItem isLast={isLast}>
      <div className="text-muted-foreground text-sm font-medium">
        {formatRange(startDate, endDate ?? undefined, isCurrent ?? undefined)}
      </div>
      <div className="space-y-1">
        <h3 className="text-foreground text-lg font-semibold">{title}</h3>
        <div className="text-foreground text-base font-medium">
          <span>{institution}</span>
        </div>
        {location ? <div className="text-muted-foreground text-sm">{location}</div> : null}
      </div>
      {description ? (
        <p className="text-sm text-muted-foreground sm:text-base">{description}</p>
      ) : null}
    </TimelineItem>
  );
}
