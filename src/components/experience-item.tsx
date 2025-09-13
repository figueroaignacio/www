'use client'

// Hooks
import { useTranslations } from 'next-intl'
import { useState } from 'react'

// Utils
import { formatRange } from '@/lib/utils'

// Components
import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons'
import { TimelineItem } from './ui/timeline'

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
  const t = useTranslations('components')
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <TimelineItem isLast={isLast}>
      <div className="text-muted-foreground text-sm font-medium">
        {formatRange(startDate, endDate, isCurrent)}
      </div>
      <div className="space-y-1">
        <h3 className="text-foreground text-lg font-semibold">
          {title} - <span>{company}</span>
        </h3>
        {contractType ? <div className="text-muted-foreground text-sm">{contractType}</div> : null}
      </div>
      {description ? (
        <div className="space-y-2">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-1 text-sm text-primary hover:text-primary/80 transition-colors duration-200 font-medium"
          >
            {isExpanded
              ? t('experienceCard.actions.viewLessDetails')
              : t('experienceCard.actions.viewMoreDetails')}
            {isExpanded ? (
              <ChevronUpIcon className="h-4 w-4" />
            ) : (
              <ChevronDownIcon className="h-4 w-4" />
            )}
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out  ${
              isExpanded ? 'max-h-96 opacity-100 bg-card p-5 rounded-xl' : 'max-h-0 opacity-0'
            }`}
          >
            <p className="text-sm text-muted-foreground sm:text-base pt-1">{description}</p>
          </div>
        </div>
      ) : null}
      {technologies.length > 0 ? (
        <div className="flex gap-2 flex-wrap pt-2">
          {technologies.map((technology) => (
            <span
              key={technology.id}
              className="text-xs px-3 py-1 rounded-full border border-border"
            >
              {technology.name}
            </span>
          ))}
        </div>
      ) : null}
    </TimelineItem>
  )
}
