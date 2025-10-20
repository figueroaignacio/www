interface PostHeaderProps {
  title: string;
  description: string;
}

export function PostHeader({ description, title }: PostHeaderProps) {
  return (
    <header className="space-y-3 pb-3 mb-6">
      <h1 className="text-lg font-semibold">{title}</h1>
      <p className="text-muted-foreground text-sm">{description}</p>
    </header>
  );
}
