import { formatRange } from '@/lib/utils';
import { TimelineItem } from './timeline';

type EducationCardProps = {
  title: string;
  institution: string;
  location?: string;
  description?: string;
  startDate: string;
  endDate?: string;
  isCurrent?: boolean;
  certificateUrl?: string;
  isLast?: boolean;
};

export function EducationCard({
  title,
  institution,
  location,
  description,
  startDate,
  endDate,
  isCurrent,
  certificateUrl,
  isLast = false,
}: EducationCardProps) {
  return (
    <TimelineItem isLast={isLast}>
      <div className="text-muted-foreground text-sm font-medium">
        {formatRange(startDate, endDate, isCurrent)}
      </div>
      <div className="space-y-1">
        <h3 className="text-foreground text-lg font-semibold">{title}</h3>
        <div className="text-foreground text-base font-medium">
          <span className="underline decoration-2 underline-offset-2 decoration-primary">
            {institution}
          </span>
        </div>
        {location ? <div className="text-muted-foreground text-sm">{location}</div> : null}
      </div>
      {description ? (
        <p className="text-sm text-muted-foreground sm:text-base">{description}</p>
      ) : null}
    </TimelineItem>
  );
}
