// Hooks
import { useTranslations } from 'next-intl'

// Components
import { Contact } from '@/components/contact'

const avatarUrl = 'https://github.com/figueroaignacio.png'

export function Hero() {
  const t = useTranslations('sections')

  return (
    <section className="space-y-3">
      <img
        src={avatarUrl}
        alt="Ignacio's github photo profile"
        className="size-14 rounded-full border-border border"
      />
      <div>
        <h1 className="font-bold text-lg">Ignacio Figueroa</h1>
        <h2 className="text-muted-foreground">{t('hero.subtitle')}</h2>
      </div>
      <Contact />
    </section>
  )
}
