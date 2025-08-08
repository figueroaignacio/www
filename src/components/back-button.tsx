// Components
import { ArrowLeftIcon } from "@radix-ui/react-icons"
import { Button } from "./ui/button/button"

export function BackButton() {
  return (
    <Button variant="outline">
      <ArrowLeftIcon />
    </Button>
  )
}