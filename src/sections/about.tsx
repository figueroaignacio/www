import { useTranslations } from 'next-intl'

export function About() {
  const t = useTranslations('sections')

  const texts = [
    {
      text: t('about.first-paragraph'),
    },
    {
      text: t('about.second-paragraph'),
    },
  ]

  return (
    <section className="space-y-3">
      <h2 className="text-lg font-bold">{t('about.heading')}</h2>
      {texts.map((item) => (
        <p className="text-muted-foreground">{item.text}</p>
      ))}
    </section>
  )
}
