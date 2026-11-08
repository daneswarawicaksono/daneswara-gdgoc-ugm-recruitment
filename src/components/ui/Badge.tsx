import React from 'react';
import { cn } from '@/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'blue' | 'yellow' | 'green' | 'red' | 'default';
  className?: string;
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  const variantStyles = {
    blue: 'bg-google-blue-tint text-google-blue border-google-blue/20',
    yellow: 'bg-google-yellow-tint text-neutral-800 border-google-yellow/30',
    green: 'bg-google-green-tint text-google-green border-google-green/20',
    red: 'bg-google-red-tint text-google-red border-google-red/20',
    default: 'bg-neutral-100 text-neutral-700 border-neutral-300',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border transition-colors',
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
