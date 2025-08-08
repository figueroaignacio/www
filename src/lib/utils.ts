export function formatDate(date: string) {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
  }).format(new Date(date));
}

export function formatMonthYear(date?: string) {
  if (!date) return "N/A"
  const d = new Date(date)
  if (isNaN(d.getTime())) return date
  return d.toLocaleDateString(undefined, { year: "numeric", month: "long" })
}

export function formatRange(start?: string, end?: string, isCurrent?: boolean) {
  const startFmt = start ? formatMonthYear(start) : "N/A"
  const endFmt = isCurrent ? "Present" : end ? formatMonthYear(end) : "N/A"
  return `${startFmt} - ${endFmt}`
}
