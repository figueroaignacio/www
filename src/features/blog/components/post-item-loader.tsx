export function PostItemLoader() {
  return (
    <ul className="space-y-10">
      {Array.from({ length: 4 }).map((_, i) => (
        <li key={i} className="space-y-5">
          <div className="space-y-3 animate-pulse">
            <div className="h-3 w-28 rounded-md bg-secondary/60" />
            <div className="h-6 w-3/4 rounded-md bg-secondary" />
            <div className="flex flex-col gap-3">
              <div className="h-3 w-full rounded-md bg-secondary/70" />
              <div className="h-3 w-11/12 rounded-md bg-secondary/70" />
            </div>
            <div className="flex justify-self-end">
              <div className="h-4 w-24 rounded-md bg-secondary/50" />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
