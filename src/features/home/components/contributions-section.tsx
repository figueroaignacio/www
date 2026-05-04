import type { Contribution } from '@/payload-types';
import { getLocale, getTranslations } from 'next-intl/server';
import { getContributions } from '../api/contributions';
import { AnimatedContributionList } from './animated-contribution-list';
import { AnimatedSectionHeader } from './animated-section-header';
import { ContributionCard } from './contribution-card';

export async function ContributionsSection() {
  const t = await getTranslations('sections.contributions');
  const locale = await getLocale();
  const contributions: Contribution[] = await getContributions(locale);

  if (!contributions || contributions.length === 0) return null;

  return (
    <section id="contributions" className="space-y-6" aria-labelledby="contributions-title">
      <AnimatedSectionHeader title={t('title')} description={t('description')} />
      <AnimatedContributionList>
        {contributions.map((contribution) => (
          <ContributionCard
            key={contribution.id}
            title={contribution.title}
            description={contribution.description}
            technologies={contribution.technologies}
            repository={contribution.repository}
          />
        ))}
      </AnimatedContributionList>
    </section>
  );
}
