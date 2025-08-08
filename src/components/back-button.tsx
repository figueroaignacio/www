"use client"

import { useRouter } from "next/navigation"

// Components
import { ArrowLeftIcon } from "@radix-ui/react-icons"
import { Button } from "./ui/button/button"

export function BackButton() {
  const router = useRouter()

  function onBack() {
    router.back()
  }

  return (
    <Button variant="outline" onClick={onBack}>
      <ArrowLeftIcon />
    </Button>
  )
}