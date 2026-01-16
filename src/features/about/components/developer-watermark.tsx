// Hooks
import { useTranslations } from 'next-intl';

// Components
import { Calendar, Link as LinkIcon, MapPin } from 'lucide-react';
import Image from 'next/image';

export function DeveloperWatermark() {
  const t = useTranslations('sections.aboutMe');
  const githubUsername = 'figueroaignacio';
  const avatarUrl = `https://github.com/${githubUsername}.png`;

  return (
    <div className="flex flex-col gap-6 w-full py-8">
      <div className="flex items-start gap-8">
        <div className="relative shrink-0">
          <div className="absolute inset-0 rounded-full bg-linear-to-tr from-yellow-400 via-pink-500 to-purple-600 p-0.75">
            <div className="w-full h-full bg-background rounded-full" />
          </div>
          <Image
            src={avatarUrl}
            alt="Ignacio Figueroa"
            className="relative size-24 rounded-full ring-[3px] ring-background"
            loading="eager"
            width={64}
            height={64}
          />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-1.5">
          <h1 className="text-foreground text-xl font-semibold">Ignacio Figueroa</h1>
        </div>
        <p className="text-foreground/90 text-sm leading-relaxed">{t('headline')}</p>
        <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5" />
            <span>{t('hero.location')}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <LinkIcon className="w-3.5 h-3.5" />
            <a
              href="https://github.com/figueroaignacio"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              github.com/figueroaignacio
            </a>
          </div>
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            <span>{t('hero.joined')}</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 pt-2">
          {['React', 'Next.js', 'TypeScript', 'Node.js', 'AI'].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-muted/50 hover:bg-muted text-foreground/80 text-xs rounded-full transition-colors"
            >
              #{tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
