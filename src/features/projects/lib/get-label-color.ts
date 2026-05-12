const LABEL_COLORS = [
  'bg-blue-500 text-white',
  'bg-violet-500 text-white',
  'bg-emerald-500 text-white',
  'bg-orange-500 text-white',
  'bg-pink-500 text-white',
  'bg-amber-500 text-white',
  'bg-teal-500 text-white',
  'bg-rose-500 text-white',
];

export function getLabelColor(text: string): React.CSSProperties {
  const hash = text.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);

  const hue = hash % 360;
  const saturation = 65 + (hash % 20);
  const lightness = 45 + (hash % 10);

  return {
    backgroundColor: `hsl(${hue}, ${saturation}%, ${lightness}%)`,
    color: 'white',
    border: 'none',
  };
}
