// React
import { use } from 'react'

// next-intl
import { useTranslations, type Locale } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'

type HomePageProps = {
  params: Promise<{ locale: Locale }>
}

export default function HomePage({ params }: HomePageProps) {
  const { locale } = use(params)
  setRequestLocale(locale)

  const t = useTranslations('HomePage')

  return <div className="flex justify-center items-center min-h-dvh text-2xl">{t('title')}</div>
}
