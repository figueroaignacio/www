import React from 'react'

// Components
import { Header } from '@/components/header'

// next-intl
import { routing } from '@/i18n/routing'
import { hasLocale, Locale, NextIntlClientProvider } from 'next-intl'
import { notFound } from 'next/navigation'

// Styles
import { manrope } from '@/lib/fonts'
import { setRequestLocale } from 'next-intl/server'

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
          <Header />
          <main>{children}</main>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
