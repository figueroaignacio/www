export function AssistantAvatar({ size }: { size?: string }) {
  return (
    <svg height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
      <title>Portfolio AI</title>
      <path
        clipRule="evenodd"
        fillRule="evenodd"
        fill="currentColor"
        d="M3 5h18v2h2v8h-2v2h-1.5V19H16v-2h-3v2h-2v-2H8v2H6.5v-2H5v-2H3v-8H1V7h2ZM6 9h1.5V7H6Zm10.5 0H18V7h-1.5ZM8 13h8v1.5H8Z"
      />
    </svg>
  );
}
