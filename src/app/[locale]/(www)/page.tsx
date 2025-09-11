// React
import { use } from 'react'

// Sections
import { About } from '@/sections/about'
import { Hero } from '@/sections/hero'

// next-intl
import { type Locale } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'

type HomePageProps = {
  params: Promise<{ locale: Locale }>
}

export default function HomePage({ params }: HomePageProps) {
  const { locale } = use(params)
  setRequestLocale(locale)

  return (
    <div className="container space-y-12">
      <Hero />
      <About />
    </div>
  )
}
