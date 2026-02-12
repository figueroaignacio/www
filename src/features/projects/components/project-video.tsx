import { cn } from '@/lib/cn';

interface ProjectVideoProps {
  videoUrl?: string | null;
  className?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  controls?: boolean;
}

export function ProjectVideo({
  videoUrl,
  className,
  autoPlay,
  muted,
  loop,
  controls = true,
}: ProjectVideoProps) {
  if (!videoUrl) return null;

  return (
    <div className={cn('my-8 rounded-sm overflow-hidden bg-muted shadow-sm', className)}>
      <video
        src={videoUrl}
        controls={controls}
        autoPlay={autoPlay}
        muted={muted}
        loop={loop}
        className="w-full aspect-video"
        preload="metadata"
        playsInline
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
