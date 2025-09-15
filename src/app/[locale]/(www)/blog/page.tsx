import { use } from 'react'

// Sections
import { AllPosts } from '@/sections/all-posts'
import { Hero } from '@/sections/hero'

// next-intl
import { Locale, useTranslations } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'

type BlogPageProps = {
  params: Promise<{ locale: Locale }>
}

export default function BlogPage({ params }: BlogPageProps) {
  const { locale } = use(params)
  setRequestLocale(locale)
  const t = useTranslations('sections')

  return (
    <section className="container space-y-3">
      <Hero title="> Blog" description={t('blog.description')} />
      <AllPosts />
    </section>
  )
}
