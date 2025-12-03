interface HeroProps {
  title: string | React.ReactNode;
  description: string;
}

export function Hero({ description, title }: HeroProps) {
  return (
    <div className="space-y-3">
      <h1 className="text-2xl">{title}</h1>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}
