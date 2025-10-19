// Hooks
import { useTranslations } from 'next-intl';

// Components
import { AnimateIn } from '@/components/animate-in';

export default function AboutMe() {
  const t = useTranslations('sections.me');
  const about: { content: string }[] = t.raw('items');

  return (
    <div>
      {about.map((section, index) => {
        const delay = 0.1 + index * 0.15;
        return (
          <AnimateIn key={index} variant="scale" delay={delay}>
            <section className="mb-8">
              <p className="text-sm">{section.content}</p>
            </section>
          </AnimateIn>
        );
      })}
    </div>
  );
}
