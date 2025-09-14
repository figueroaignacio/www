// Components
import { EducationItem } from '@/components/education-item'
import { Timeline } from '@/components/ui/timeline'

// Utils
import { getEducation } from '@/lib/api'
import { getLocale, getTranslations } from 'next-intl/server'

// Types
import { type Education } from '@/payload-types'

export async function Education() {
  const locale = await getLocale()
  const education: Education[] = await getEducation(locale)
  const t = await getTranslations('sections')

  return (
    <section>
      <h2 className="text-lg font-bold mb-3">{t('education.heading')}</h2>
      <Timeline>
        {education.map((item, index) => (
          <EducationItem
            key={item.id}
            title={item.title}
            institution={item.institution}
            startDate={item.startDate}
            description={item.description ?? undefined}
            isCurrent={item.isCurrent ?? undefined}
            endDate={item.endDate || ''}
          />
        ))}
      </Timeline>
    </section>
  )
}
