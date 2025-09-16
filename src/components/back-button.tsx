'use client'

// Hooks
import { useRouter } from 'next/navigation'

// Components
import { ArrowLeftIcon } from '@radix-ui/react-icons'
import { Button } from './ui/button'

export function BackButton() {
  const router = useRouter()

  function onBack() {
    router.back()
  }

  return (
    <Button onClick={onBack} size="icon" variant="ghost">
      <ArrowLeftIcon className="size-6" />
    </Button>
  )
}
