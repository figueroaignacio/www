// Components
import { Experience } from '@/lib/definitions';
import { Fragment } from 'react';

// Utils
import { formatDate } from '@/lib/utils';

interface ExperienceCardProps extends Partial<Experience> {
  isLast?: boolean;
}

export function ExperienceCard({
  title,
  company,
  description,
  contractType,
  technologies,
  startDate,
  endDate,
  isLast = false,
}: ExperienceCardProps) {
  return (
    <div className="relative pl-8">
      <div className="absolute left-0 top-1 size-4 bg-primary rounded-full z-10"></div>
      <div className="space-y-3">
        <div className="text-muted-foreground text-sm font-medium">
          {startDate && formatDate(startDate)} - {endDate ? formatDate(endDate) : 'Present'}
        </div>
        <div className="space-y-1">
          <h3 className="text-foreground text-xl font-semibold">
            {title} at{' '}
            <span className="underline decoration-2 underline-offset-2 decoration-primary">
              {company}
            </span>
          </h3>
          <div className="text-muted-foreground text-sm">
            {contractType}
          </div>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl">
          {description}
        </p>
        {technologies && technologies.length > 0 && (
          <div className="flex gap-2 flex-wrap pt-2">
            {technologies.map((technology) => (
              <Fragment key={technology.id}>
                <span className="text-xs bg-muted text-muted-foreground px-3 py-1 rounded-full border border-border">
                  {technology.name}
                </span>
              </Fragment>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
