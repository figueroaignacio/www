import { AnimateIn } from '../animate-in';

export function Separator({ label = '0' }: { label?: string }) {
  return (
    <AnimateIn variant="scale">
      <div className="flex items-center justify-center text-muted-foreground text-xs select-none my-2">
        <span className="flex-1 border-t border-border"></span>
        <span className="mx-3">{label}</span>
        <span className="flex-1 border-t border-border"></span>
      </div>
    </AnimateIn>
  );
}
