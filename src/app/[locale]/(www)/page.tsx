// React
import { use } from 'react'

// Sections
import { CVCta } from '@/components/cv-cta'
import { About } from '@/sections/about'
import { Education } from '@/sections/education'
import { Experience } from '@/sections/experience'
import { FeaturedPosts } from '@/sections/featured-posts'
import { FeaturesProjects } from '@/sections/featured-projects'
import { Hero } from '@/sections/hero'
import { TechStack } from '@/sections/tech-stack'

// next-intl
import { useTranslations, type Locale } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'

interface HomePageProps {
  params: Promise<{ locale: Locale }>
}

export default function HomePage({ params }: HomePageProps) {
  const { locale } = use(params)
  setRequestLocale(locale)
  const t = useTranslations('sections')

  return (
    <div className="container space-y-12">
      <Hero title="Ignacio Figueroa" description={t('hero.subtitle')} />
      <About />
      <Experience />
      <CVCta />
      <FeaturesProjects />
      <FeaturedPosts />
      <Education />
      <TechStack />
    </div>
  )
}
