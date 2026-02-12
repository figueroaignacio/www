export function ProjectVideo({ videoUrl }: { videoUrl?: string | null }) {
  if (!videoUrl) return null;

  return (
    <div className="my-8 rounded-sm overflow-hidden bg-muted shadow-sm">
      <video src={videoUrl} controls className="w-full aspect-video" preload="metadata" playsInline>
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
