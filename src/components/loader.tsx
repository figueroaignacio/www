import { Spinner } from './ui/spinner';

export function Loader() {
  return (
    <div className="flex min-h-[70svh] items-center justify-center text-muted-foreground gap-x-2">
      <Spinner className="size-6 " />
      <span>Loading...</span>
    </div>
  );
}
