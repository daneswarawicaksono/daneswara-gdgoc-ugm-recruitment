import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
}

export function getTrackColor(trackId?: string): string {
  switch (trackId) {
    case 'research-discovery':
      return '#4285F4';
    case 'design-creativity':
      return '#FBBC05';
    case 'development':
      return '#34A853';
    default:
      return '#4285F4';
  }
}
