import { Link } from '@/i18n/navigation';
import { cn } from '@/lib/cn';
import { ArrowRight, BookOpen, BotIcon, FolderGit2, User } from 'lucide-react';
import { useTranslations } from 'next-intl';

interface QuickLink {
  title: string;
  description: string;
  href: string;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  '/projects': FolderGit2,
  '/blog': BookOpen,
  '/about': User,
  '/chat': BotIcon,
};

export function QuickLinks() {
  const t = useTranslations('sections.home');
  const quickLinks: QuickLink[] = t.raw('quickLinks');

  return (
    <section className="grid sm:grid-cols-3 gap-4 mt-16">
      {quickLinks.map((item, index) => (
        <QuickLink
          key={item.href}
          title={item.title}
          description={item.description}
          href={item.href}
          className={index === 0 ? 'sm:col-span-3' : undefined}
        />
      ))}
    </section>
  );
}

function QuickLink({
  title,
  description,
  href,
  className,
}: {
  title: string;
  description: string;
  href: string;
  className?: string;
}) {
  const Icon = iconMap[href] || FolderGit2;

  return (
    <Link
      href={href}
      className={cn(
        'group block p-6 btn-primary rounded-lg border border-border hover:scale-[1.02] active:scale-[0.99] transition-transform duration-100 space-y-4',
        className,
      )}
    >
      <Icon className="w-5 h-5 text-background transition-colors" />
      <div className="flex items-start gap-4">
        <div className="flex-1">
          <h3 className="text-background text-sm font-semibold transition-colors">{title}</h3>
          <p className="mt-2 text-sm text-background/50">{description}</p>
        </div>
      </div>
      <div className="w-full flex justify-end">
        <ArrowRight className="size-4 text-background/50 transition-colors" />
      </div>
    </Link>
  );
}
