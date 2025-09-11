import React from 'react'

// Components
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'

// next-intl
import { routing } from '@/i18n/routing'
import { hasLocale, Locale, NextIntlClientProvider } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'

// Font
import { manrope } from '@/lib/fonts'

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

type LocaleLayoutProps = {
  children: React.ReactNode
  params: Promise<{ locale: Locale }>
}

export default async function RootLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  setRequestLocale(locale)

  return (
    <html lang="en">
      <body className={`${manrope.className} antialiased`}>
        <NextIntlClientProvider>
          <div className="grid grid-rows-[auto_1fr_auto] gap-y-5 min-h-lvh">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
