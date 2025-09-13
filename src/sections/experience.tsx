// Utils
import { getExperience } from '@/lib/api'
import { getLocale, getTranslations } from 'next-intl/server'

// Types
import { ExperienceCard } from '@/components/experience-item'
import { Timeline } from '@/components/ui/timeline'
import { type Experience } from '@/payload-types'

export async function Experience() {
  const locale = await getLocale()
  const experience: Experience[] = await getExperience(locale)
  const t = await getTranslations('sections')

  return (
    <section className="scape-y-3">
      <h2 className="text-lg font-bold mb-3">{t('experience.heading')}</h2>
      <Timeline>
        {experience.map((item, index) => (
          <ExperienceCard
            key={item.id}
            title={item.title}
            description={item.description}
            company={item.company}
            startDate={item.startDate}
            endDate={item.endDate || ''}
            isLast={index === experience.length - 1}
          />
        ))}
      </Timeline>
    </section>
  )
}
