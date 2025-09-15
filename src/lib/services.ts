const API_URL =
  process.env.NODE_ENV === 'production'
    ? process.env.NEXT_PUBLIC_API_URL_PROD
    : process.env.NEXT_PUBLIC_API_URL_DEV

import { Locale } from 'next-intl'

export async function getExperience(locale: Locale) {
  const res = await fetch(`${API_URL}/api/experience?where[locale][equals]=${locale}`, {
    cache: 'no-store',
  })

  if (!res.ok) {
    throw new Error('Failed to fetch experiences')
  }

  const data = await res.json()
  return data.docs
}

export async function getEducation(locale: Locale) {
  const res = await fetch(`${API_URL}/api/education?where[locale][equals]=${locale}`, {
    cache: 'no-store',
  })

  if (!res.ok) {
    throw new Error('Failed to fetch education')
  }

  const data = await res.json()
  return data.docs
}

export async function getPosts(locale: Locale) {
  const res = await fetch(`${API_URL}/api/posts?where[locale][equals]=${locale}`, {
    cache: 'no-store',
  })

  if (!res.ok) {
    throw new Error('Failed to fetch posts')
  }

  const data = await res.json()
  return data.docs
}
