import { fontSans } from '@/lib/fonts';
import { cn } from '@/lib/utils';

interface PostThumbnailProps {
  title: string;
}

export function Thumbnail({ title }: PostThumbnailProps) {
  const hue = 270;
  const pos1X = 10;
  const pos1Y = 10;
  const pos2X = 50;
  const pos2Y = 20;
  const pos3X = 70;
  const pos3Y = 60;

  return (
    <div
      className="relative w-full aspect-3/1 overflow-hidden rounded-xl border border-border/50 mb-3 bg-linear-to-br from-background via-muted to-card transition-all duration-500 ease-out hover:scale-[1.02] hover:shadow-xl hover:border-border active:scale-[0.98] group cursor-pointer"
      style={{
        ['--hue' as any]: hue,
        ['--pos1-x' as any]: `${pos1X}%`,
        ['--pos1-y' as any]: `${pos1Y}%`,
        ['--pos2-x' as any]: `${pos2X}%`,
        ['--pos2-y' as any]: `${pos2Y}%`,
        ['--pos3-x' as any]: `${pos3X}%`,
        ['--pos3-y' as any]: `${pos3Y}%`,
      }}
    >
      <div className="absolute inset-0 opacity-40 bg-[linear-gradient(135deg,hsl(var(--hue)_75%_45%)_0%,hsl(var(--hue)_65%_55%)_50%,hsl(var(--hue)_80%_35%)_100%)]" />
      <div className="absolute w-[200px] h-[200px] rounded-full blur-3xl opacity-30 transition-transform duration-700 group-hover:scale-110 bg-[hsl(var(--hue)_80%_60%)] left-(--pos1-x) top-(--pos1-y) -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute w-[150px] h-[150px] rounded-full blur-2xl opacity-25 transition-transform duration-500 group-hover:scale-105 bg-[hsl(var(--hue)_70%_55%)] left-(--pos2-x) top-(--pos2-y) -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute w-[100px] h-[100px] rounded-xl blur-xl opacity-30 transition-transform duration-700 group-hover:scale-125 bg-[hsl(var(--hue)_75%_50%)] left-(--pos3-x) top-(--pos3-y) -translate-x-1/2 -translate-y-1/2" />

      <div className="absolute inset-0 opacity-10">
        <div className="absolute h-px w-full bg-linear-to-r from-transparent via-foreground to-transparent top-[30%] -rotate-[5deg]" />
        <div className="absolute h-px w-full bg-linear-to-r from-transparent via-foreground to-transparent top-[70%] rotate-3" />
      </div>

      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/30 to-transparent" />
      <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/10" />
      <div className="absolute inset-x-0 bottom-0 p-6 space-y-2">
        <div className="flex items-center gap-2 mb-2">
          <div className="h-1 w-8 rounded-full transition-all duration-500 group-hover:w-16 bg-[hsl(var(--hue)_80%_60%)]" />
        </div>
        <h2
          className={cn(
            fontSans.className,
            'text-lg font-bold tracking-tight text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] transition-all duration-300 group-hover:translate-x-1 leading-tight',
          )}
        >
          {title}
        </h2>
      </div>
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/5 to-transparent animate-shimmer" />
      </div>
    </div>
  );
}
