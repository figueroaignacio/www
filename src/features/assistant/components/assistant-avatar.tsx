import clsx from 'clsx';

const SIZES = {
  sm: 'size-4',
  md: 'size-8',
  lg: 'size-10',
  xl: 'size-12',
} as const;

type AssistantAvatarProps = {
  size?: keyof typeof SIZES;
  className?: string;
};

export function AssistantAvatar({ size = 'md', className }: AssistantAvatarProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="NachUI Agent"
      className={clsx('text-current overflow-visible', SIZES[size], className)}
    >
      <title>NachUI Agent</title>
      <path
        clipRule="evenodd"
        fillRule="evenodd"
        fill="currentColor"
        d="M10 0h4v1h2v1h-2v1h-4V2H8V1h2ZM7 3h10v1h2v1h1v8h-1v1h-2v1H7v-1H5v-1H4V5h1V4h2ZM5 14h14v2H5Zm-1 2h16v1H4Zm0 1h2v3H4Zm14 0h2v3h-2ZM6 18h4v3H6Zm8 0h4v3h-8v-1h4Z"
      />
      <rect
        x="7"
        y="7"
        width="3"
        height="4"
        fill="var(--background)"
        className="animate-blink"
        style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
      />
      <rect
        x="14"
        y="7"
        width="3"
        height="4"
        fill="var(--background)"
        className="animate-blink"
        style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
      />
    </svg>
  );
}
