import { formatRange } from "@/lib/utils";
import { TimelineItem } from "./timeline";
import Badge from "./ui/badge/badge";

type Technology = { id: string | number; name: string }

export type ExperienceCardProps = {
  title?: string
  company?: string
  description?: string
  contractType?: string
  technologies?: Technology[]
  startDate?: string
  endDate?: string
  isCurrent?: boolean
  isLast?: boolean
}

export function ExperienceCard({
  title,
  company,
  description,
  contractType,
  technologies = [],
  startDate,
  endDate,
  isCurrent,
  isLast = false,
}: ExperienceCardProps) {
  return (
    <TimelineItem isLast={isLast}>
      <div className="text-muted-foreground text-sm font-medium">
        {formatRange(startDate, endDate, isCurrent)}
      </div>
      <div className="space-y-1">
        <h3 className="text-foreground text-lg font-semibold">
          {title} {"at"}{" "}
          <span className="underline decoration-2 underline-offset-2 decoration-primary">
            {company}
          </span>
        </h3>
        {contractType ? (
          <div className="text-muted-foreground text-sm">{contractType}</div>
        ) : null}
      </div>
      {description ? (
        <p className="text-sm text-muted-foreground sm:text-base">{description}</p>
      ) : null}
      {technologies.length > 0 ? (
        <div className="flex gap-2 flex-wrap pt-2">
          {technologies.map((technology) => (
            <Badge
              key={technology.id}
              variant="outline"
              className="text-xs px-3 py-1 rounded-full border border-border"
            >
              {technology.name}
            </Badge>
          ))}
        </div>
      ) : null}
    </TimelineItem>
  )
}
