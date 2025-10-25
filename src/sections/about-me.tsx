// Hooks
import { useTranslations } from 'next-intl';

// Icons
import { EnvelopeOpenIcon, GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';

// Components
import { AnimateIn } from '@/components/animate-in';

export function AboutMe() {
  const t = useTranslations('sections.me');
  const about: { content: string }[] = t.raw('items');
  const githubUsername = 'figueroaignacio';
  const avatarUrl = `https://github.com/${githubUsername}.png`;

  const socialLinks = [
    {
      href: `https://github.com/${githubUsername}`,
      label: `github.com/${githubUsername}`,
      icon: GitHubLogoIcon,
    },
    {
      href: 'https://www.linkedin.com/in/figueroa-ignacio',
      label: 'linkedin.com/in/figueroa-ignacio',
      icon: LinkedInLogoIcon,
    },
    {
      href: 'mailto:ignaciofigeuroadev@gmail.com',
      label: 'figueroa.ignacio.dev@gmail.com',
      icon: EnvelopeOpenIcon,
    },
  ];

  return (
    <div className="space-y-8 mt-12">
      <AnimateIn variant="scale" delay={0}>
        <div className="flex items-center gap-4 pb-6 border-b border-border">
          <img
            src={avatarUrl}
            alt="Ignacio Figueroa"
            className="w-14 h-14 rounded-full ring-1 ring-border"
            loading="eager"
          />
          <div>
            <h2 className="text-base font-semibold">Ignacio Figueroa</h2>
            <p className="text-xs text-muted-foreground">{t('headline')}</p>
          </div>
        </div>
      </AnimateIn>

      <div className="space-y-4">
        {about.map((section, index) => {
          const delay = 0.1 + index * 0.08;
          return (
            <AnimateIn key={index} variant="scale" delay={delay}>
              <p className="text-sm text-foreground/80 leading-relaxed">{section.content}</p>
            </AnimateIn>
          );
        })}
      </div>

      <AnimateIn variant="scale" delay={0.4}>
        <div className="flex items-center flex-wrap gap-2 text-xs text-muted-foreground">
          {socialLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <div key={link.href} className="flex items-center">
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors"
                >
                  <Icon className="w-3.5 h-3.5" />
                  {link.label}
                </a>
                {index < socialLinks.length - 1 && (
                  <span className="mx-2 text-muted-foreground/60">/</span>
                )}
              </div>
            );
          })}
        </div>
      </AnimateIn>
    </div>
  );
}
