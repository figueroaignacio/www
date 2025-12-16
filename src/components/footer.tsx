// Hooks
import { useTranslations } from 'next-intl';

// Components
import { Contact } from '@/features/about/components/contact';
import Link from 'next/link';

interface Navigation {
  href: string;
  label: string;
}

export function Footer() {
  const t = useTranslations();
  const navigation: Navigation[] = t.raw('ui.navigation');

  return (
    <footer className="max-w-xl mx-auto w-full flex flex-col space-y-8 py-12">
      <div className="flex flex-col space-y-4 ">
        <div className="space-y-1">
          <h3 className="text-lg font-semibold">{t('components.footer.name')}</h3>
          <p className="text-sm text-muted-foreground">{t('components.footer.role')}</p>
        </div>

        <p className="text-muted-foreground pt-2">{t('components.footer.thanks')}</p>
      </div>
      <nav className="flex flex-col gap-x-6 gap-y-2 text-sm">
        {navigation.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-muted-foreground hover:text-foreground transition-colors capitalize"
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <Contact />
      <div className="text-muted-foreground">
        <p>
          © {new Date().getFullYear()} {t('components.footer.name')}.{' '}
          {t('components.footer.rights')}
        </p>
      </div>
    </footer>
  );
}
