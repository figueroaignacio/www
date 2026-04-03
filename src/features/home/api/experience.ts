import config from '@payload-config';
import { Locale } from 'next-intl';
import { getPayload } from 'payload';

import type { Experience } from '@/payload-types';

export async function getExperiences(locale: Locale): Promise<Experience[]> {
  const payload = await getPayload({ config });

  const result = await payload.find({
    collection: 'experience',
    where: {
      locale: { equals: locale },
      _status: { equals: 'published' },
    },
    sort: 'order',
  });

  return result.docs;
}
