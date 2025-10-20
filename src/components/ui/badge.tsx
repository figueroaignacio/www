export function Badge({ label }: { label: string }) {
  return <span className="text-xs py-1 px-2 rounded-md bg-card">{label}</span>;
}
