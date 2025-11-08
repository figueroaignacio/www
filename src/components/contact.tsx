// Components
import { EnvelopeOpenIcon, GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
import { AnimateIn } from './animate-in';

const githubUsername = 'figueroaignacio';

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
    label: 'ignaciofigueroadev@gmail.com',
    icon: EnvelopeOpenIcon,
  },
];

export function Contact() {
  return (
    <ul className="flex gap-x-5 mt-5">
      <AnimateIn variant="fadeLeft" delay={0.4}>
        <ul className="flex items-center flex-wrap gap-2 text-xs text-muted-foreground">
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
        </ul>
      </AnimateIn>
    </ul>
  );
}
