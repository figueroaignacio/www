export function PostCardLoader() {
  return (
    <div className="flex flex-col gap-6">
      {Array.from({ length: 4 }).map((_, i) => (
        <div
          key={i}
          className="space-y-6 p-6 border-border border rounded-2xl bg-background/40 animate-pulse"
        >
          <div className="h-4 w-40 bg-muted rounded-md" />
          <div className="h-6 w-3/4 bg-muted rounded-md" />
          <div className="h-6 w-3/5 bg-muted rounded-md" />
          <div className="flex flex-col gap-3 mt-5">
            <div className="h-4 w-full bg-muted/60 rounded-md" />
            <div className="h-4 w-[90%] bg-muted/60 rounded-md" />
          </div>
          <div className="flex flex-wrap gap-2">
            <div className="h-6 w-16 bg-muted/80 rounded-full" />
            <div className="h-6 w-20 bg-muted/80 rounded-full" />
            <div className="h-6 w-14 bg-muted/80 rounded-full" />
          </div>
          <div className="flex justify-end">
            <div className="h-5 w-28 bg-muted/50 rounded-md" />
          </div>
        </div>
      ))}
    </div>
  );
}
