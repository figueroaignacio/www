import { GitHubIcon } from '@/components/tech-icons';
import { LinkedInLogoIcon } from '@radix-ui/react-icons';
import { Mail } from 'lucide-react';
import { useTranslations } from 'next-intl';

const contact = [
  {
    label: 'Email',
    href: 'mailto:ignaciofigueroadev@gmail.com',
    icon: <Mail />,
    target: '',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/figueroa-ignacio',
    icon: <LinkedInLogoIcon />,
    target: '_blank',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/figueroaignacio',
    icon: <GitHubIcon />,
    target: '_blank',
  },
];

export function CTAContact() {
  const t = useTranslations('components.ctaContact');

  return (
    <section className="p-8 rounded-lg border border-border space-y-6">
      <div className=" space-y-2">
        <h2 className="text-xl font-semibold">{t('title')}</h2>
        <p className="text-muted-foreground">{t('description')}</p>
      </div>
      <div className="flex flex-wrap gap-4">
        {contact.map((item) => (
          <a key={item.label} href={item.href} target={item.target} className="btn btn-outline">
            {item.icon}
            <span className="text-sm font-medium">{item.label}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
