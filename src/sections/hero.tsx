// Hooks
import { useTranslations } from 'next-intl'

// Components
import { Contact } from '@/components/contact'

const avatarUrl = 'https://github.com/figueroaignacio.png'

interface HeroProps {
  title: string
  description: string
}

export function Hero({ description, title }: HeroProps) {
  const t = useTranslations('sections')

  return (
    <section className="space-y-3">
      <img
        src={avatarUrl}
        alt="Ignacio's github photo profile"
        className="size-14 rounded-full border-border border"
      />
      <div>
        <h1 className="font-bold text-lg">{title}</h1>
        <p className="text-muted-foreground">{description}</p>
      </div>
      <Contact />
    </section>
  )
}
