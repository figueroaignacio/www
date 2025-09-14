// Hooks
import { useTranslations } from 'next-intl'

// Components
import { Button } from './ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'

export function CVCta() {
  const t = useTranslations('components')

  return (
    <Card shadow="none" rounded="lg">
      <CardHeader>
        <CardTitle>{t('cvCta.title')}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{t('cvCta.description')}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button>
          <a href="">{t('cvCta.action')}</a>
        </Button>
      </CardFooter>
    </Card>
  )
}
