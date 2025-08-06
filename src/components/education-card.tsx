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
}) => {
  const formatDate = (date: string) =>
    new Date(date).toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'short',
    });

  return (
    <div className="bg-card border border-border rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow border-t-primary border-t-4">
      <div className="flex flex-col gap-1">
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm">{institution}</p>
        {location && <p className="text-sm text-muted-foreground">{location}</p>}
      </div>

      <div className="text-sm mt-2 text-muted-foreground">
        <span>
          {formatDate(startDate)} – {isCurrent ? 'Present' : endDate ? formatDate(endDate) : 'N/A'}
        </span>
      </div>

      {description && (
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>
      )}

      {certificateUrl && (
        <a
          href={certificateUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 text-sm font-medium text-primary hover:underline"
        >
          Ver certificado →
        </a>
      )}
    </div>
  );
};
