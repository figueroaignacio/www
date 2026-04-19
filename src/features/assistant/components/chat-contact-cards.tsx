import { GitHubIcon } from '@/components/tech-icons/github-icon';
import { LinkedInLogoIcon } from '@radix-ui/react-icons';
import { File, Mail } from 'lucide-react';

export function ChatContactCards() {
  const contacts = [
    {
      id: 'github',
      label: 'GitHub',
      icon: GitHubIcon,
      href: 'https://github.com/figueroaignacio',
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      icon: LinkedInLogoIcon,
      href: 'https://www.linkedin.com/in/figueroa-ignacio',
    },
    {
      id: 'email',
      label: 'Email',
      icon: Mail,
      href: 'mailto:ignaciofigueroadev@gmail.com',
    },
    {
      id: 'cv-en',
      label: 'CV (English)',
      icon: File,
      href: 'https://ignaciofigueroa.vercel.app/pdf/CV_Ignacio_Figueroa_Fullstack_Developer.pdf',
    },
    {
      id: 'cv-es',
      label: 'CV (Español)',
      icon: File,
      href: 'https://ignaciofigueroa.vercel.app/pdf/CV_Ignacio_Figueroa_Desarrollador_Fullstack.pdf',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-3">
      {contacts.map((contact) => {
        const Icon = contact.icon;
        return (
          <a
            key={contact.id}
            href={contact.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg border border-border/40 bg-card/40 hover:bg-card hover:border-border text-muted-foreground hover:text-foreground transition-colors duration-150"
          >
            <Icon className="size-4 shrink-0" />
            <span className="text-xs font-medium">{contact.label}</span>
          </a>
        );
      })}
    </div>
  );
}
