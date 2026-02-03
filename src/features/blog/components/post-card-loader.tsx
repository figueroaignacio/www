export function PostCardLoader() {
  return (
    <div>
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="py-6 border-b border-border last:border-0 animate-pulse">
          <article className="space-y-3">
            <div className="h-4 w-40 bg-muted rounded-md" />
            <div className="h-6 w-3/4 bg-muted rounded-md" />
            <div className="space-y-2">
              <div className="h-4 w-full bg-muted/60 rounded-md" />
              <div className="h-4 w-[85%] bg-muted/60 rounded-md" />
            </div>
            <div className="flex flex-wrap gap-2 pt-2">
              <div className="h-6 w-14 bg-muted/80 rounded" />
              <div className="h-6 w-20 bg-muted/80 rounded" />
              <div className="h-6 w-16 bg-muted/80 rounded" />
            </div>
            <div className="pt-2 h-4 w-24 bg-muted/50 rounded-md" />
          </article>
        </div>
      ))}
    </div>
  );
}
