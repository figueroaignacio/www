'use client';

import { AnimatedSectionHeader } from '@/features/home/components/animated-section-header';
import { useTranslations } from 'next-intl';
import { ContactForm } from './contact-form';

export function ContactSection() {
  const t = useTranslations('components.contactForm');

  return (
    <section id="contact" className="space-y-8 " aria-labelledby="contact-title">
      <div className="max-w-lg">
        <AnimatedSectionHeader title={t('title')} description={t('description')} />
      </div>
      <div className="flex justify-start">
        <ContactForm />
      </div>
    </section>
  );
}
