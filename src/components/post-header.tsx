type PostHeaderProps = {
  title: string
  description: string
}

export function PostHeader({ description, title }: PostHeaderProps) {
  return (
    <header className="space-y-3 border-b border-border pb-3">
      <h1 className="text-lg font-bold">{title}</h1>
      <p className="text-muted-foreground">{description}</p>
    </header>
  )
}
