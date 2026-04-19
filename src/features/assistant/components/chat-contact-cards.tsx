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
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
      {contacts.map((contact) => {
        const Icon = contact.icon;
        return (
          <a
            key={contact.id}
            href={contact.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 rounded-xl border border-border bg-card hover:bg-accent hover:scale-[1.01] active:scale-[0.99] transition-transform duration-75"
          >
            <div className="size-8 flex items-center justify-center">
              <Icon className="size-4" />
            </div>
            <span className="text-sm font-medium">{contact.label}</span>
          </a>
        );
      })}
    </div>
  );
}
