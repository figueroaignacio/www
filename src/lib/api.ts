const API_URL =
  process.env.NODE_ENV === 'production'
    ? process.env.NEXT_PUBLIC_API_URL_PROD
    : process.env.NEXT_PUBLIC_API_URL_DEV

export async function getExperience(locale: string) {
  const res = await fetch(`${API_URL}/api/experience?where[locale][equals]=${locale}`, {
    cache: 'no-store',
  })

  if (!res.ok) {
    throw new Error('Failed to fetch experiences')
  }

  const data = await res.json()
  return data.docs
}
