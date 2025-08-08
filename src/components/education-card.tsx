import React from 'react';

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

export const EducationCard: React.FC<EducationCardProps> = ({
  title,
  institution,
  location,
  description,
  startDate,
  endDate,
  isCurrent,
  certificateUrl,
  isLast = false,
}) => {
  const formatDate = (date: string) =>
    new Date(date).toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'long',
    });

  return (
    <div className="relative pl-8">
      <div className="absolute left-0 top-1 size-4 bg-primary rounded-full z-10"></div>
      <div className="space-y-3">
        <div className="text-muted-foreground text-sm font-medium">
          {formatDate(startDate)} - {isCurrent ? 'Present' : endDate ? formatDate(endDate) : 'N/A'}
        </div>
        <div className="space-y-1">
          <h3 className="text-foreground text-lg font-semibold">
            {title}
          </h3>
          <div className="text-foreground text-base font-medium">
            <span className="underline decoration-2 underline-offset-2 decoration-primary">
              {institution}
            </span>
          </div>
          {location && (
            <div className="text-muted-foreground text-sm">
              {location}
            </div>
          )}
        </div>
        {description && (
          <p className="text-sm text-muted-foreground sm:text-base">
            {description}
          </p>
        )}
        {certificateUrl && (
          <div className="pt-2">
            <a
              href={certificateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline transition-colors"
            >
              Ver certificado →
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
