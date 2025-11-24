export function ProjectItemLoader() {
  return (
    <ul className="space-y-6">
      {Array.from({ length: 4 }).map((_, i) => (
        <li key={i} className="space-y-4">
          <div className="animate-pulse space-y-3">
            <div className="h-5 w-1/2 rounded-md bg-secondary/60" />
            <div className="h-3 w-1/3 rounded-md bg-secondary/50" />
            <div className="flex gap-2 mt-2">
              <div className="h-7 w-20 rounded-md bg-secondary/40" />
              <div className="h-7 w-20 rounded-md bg-secondary/40" />
              <div className="h-7 w-20 rounded-md bg-secondary/40" />
            </div>
            <div className="mt-3 space-y-2">
              <div className="h-3 w-full rounded-md bg-secondary/50" />
              <div className="h-3 w-11/12 rounded-md bg-secondary/50" />
            </div>
            <div className="flex gap-2 mt-3">
              <div className="h-6 w-16 rounded-full bg-secondary/50" />
              <div className="h-6 w-12 rounded-full bg-secondary/50" />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
