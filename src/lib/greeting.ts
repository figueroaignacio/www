export function getTimeBasedGreeting(): 'morning' | 'afternoon' | 'evening' | 'lateNight' {
  const hour = new Date().getHours();

  if (hour >= 6 && hour < 12) {
    return 'morning';
  } else if (hour >= 12 && hour < 19) {
    return 'afternoon';
  } else if (hour >= 19 && hour < 24) {
    return 'evening';
  } else {
    return 'lateNight';
  }
}
