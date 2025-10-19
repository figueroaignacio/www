// Hooks
import { useTranslations } from 'next-intl';

export default function AboutMe() {
  const t = useTranslations('sections.me');
  const about: { content: string }[] = t.raw('items');

  return (
    <div>
      {about.map((section, idx) => (
        <section key={idx} className="mb-8">
          <p className="text-sm">{section.content}</p>
        </section>
      ))}
    </div>
  );
}
