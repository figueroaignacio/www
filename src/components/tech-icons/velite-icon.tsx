export function VeliteIcon() {
  return (
    <svg viewBox="0 0 82 60" width={20} height={20}>
      <linearGradient id="l" x2="1" y1="1">
        <stop offset="0%" stopColor="#08A771" />
        <stop offset="100%" stopColor="#11E49D" />
      </linearGradient>
      <linearGradient id="r" x2="1" y1="1">
        <stop offset="0%" stopColor="#13AAAA" />
        <stop offset="100%" stopColor="#04D0D0" />
      </linearGradient>
      <path
        d="M30.53 27.306l5.11 13.84-11.88 18.52L4 4.306c11.3 0 20.08 6.25 26.53 23z"
        fill="url(#l)"
      />
      <path
        d="M81.72 5.126q-11.33-3.57-19.85 4.18L36 33.666q-16 15.12-21.76-.67l9.52 26.67 57.96-54.54z"
        fill="url(#r)"
      />
    </svg>
  );
}
