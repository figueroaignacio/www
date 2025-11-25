export type GreetingType = 'morning' | 'afternoon' | 'evening' | 'lateNight';

export interface GreetingConfig {
  morning: { start: number; end: number };
  afternoon: { start: number; end: number };
  evening: { start: number; end: number };
  lateNight: { start: number; end: number };
}

const DEFAULT_CONFIG: GreetingConfig = {
  morning: { start: 6, end: 12 }, // 6:00 AM - 11:59 AM
  afternoon: { start: 12, end: 18 }, // 12:00 PM - 5:59 PM
  evening: { start: 18, end: 23 }, // 6:00 PM - 10:59 PM
  lateNight: { start: 23, end: 6 }, // 11:00 PM - 5:59 AM
};

function isInRange(currentTime: number, range: { start: number; end: number }): boolean {
  const { start, end } = range;

  if (start < end) {
    return currentTime >= start && currentTime < end;
  }

  return currentTime >= start || currentTime < end;
}

export function getTimeBasedGreeting(config: GreetingConfig = DEFAULT_CONFIG): GreetingType {
  const now = new Date();
  const hour = now.getHours();
  const minutes = now.getMinutes();

  const currentTime = hour + minutes / 60;

  if (isInRange(currentTime, config.morning)) {
    return 'morning';
  } else if (isInRange(currentTime, config.afternoon)) {
    return 'afternoon';
  } else if (isInRange(currentTime, config.evening)) {
    return 'evening';
  } else {
    return 'lateNight';
  }
}
