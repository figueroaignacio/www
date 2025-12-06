export default function Loading() {
  return (
    <article className="space-y-3">
      <header className="space-y-6 border-border border-b pb-3 animate-pulse">
        <div className="flex justify-between items-center mb-5">
          <div className="h-9 w-9 rounded-md bg-secondary/70" />
        </div>
        <div className="space-y-6">
          <div className="h-8 rounded-md bg-secondary/70 w-3/4" />
          <div className="h-5 rounded-md bg-secondary/70 w-full" />
          <div className="h-5 rounded-md bg-secondary/70 w-2/3" />
        </div>
        <div className="space-y-3">
          <div className="h-4 rounded-md bg-secondary/70 w-20" />
          <div className="flex items-center gap-x-5 w-full">
            <div className="w-14 h-14 rounded-full bg-secondary/70 ring-1 ring-border" />
            <div className="flex gap-y-3 flex-col flex-1">
              <div className="h-4 rounded-md bg-secondary/70 w-32" />
              <div className="h-3 rounded-md bg-secondary/70 w-48" />
            </div>
          </div>
        </div>
      </header>
      <div className="space-y-4 mt-6 animate-pulse">
        <div className="h-4 rounded-md bg-secondary/70 w-full" />
        <div className="h-4 rounded-md bg-secondary/70 w-full" />
        <div className="h-4 rounded-md bg-secondary/70 w-4/5" />
        <div className="h-4 rounded-md bg-secondary/70 w-full" />
        <div className="h-4 rounded-md bg-secondary/70 w-3/4" />
        <div className="h-6" />
        <div className="h-4 rounded-md bg-secondary/70 w-full" />
        <div className="h-4 rounded-md bg-secondary/70 w-full" />
        <div className="h-4 rounded-md bg-secondary/70 w-5/6" />
      </div>
    </article>
  );
}
