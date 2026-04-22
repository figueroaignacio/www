import config from '@payload-config';
import { Locale } from 'next-intl';
import { getPayload } from 'payload';

import type { Education } from '@/payload-types';

export async function getEducation(locale: Locale): Promise<Education[]> {
  const payload = await getPayload({ config });

  const result = await payload.find({
    collection: 'education',
    where: {
      locale: { equals: locale },
      _status: { equals: 'published' },
    },
    sort: 'order',
  });

  return result.docs;
}
