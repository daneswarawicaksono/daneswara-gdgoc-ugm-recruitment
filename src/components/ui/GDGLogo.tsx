import React from 'react';

interface GDGLogoProps {
  className?: string;
  size?: number;
}

export function GDGLogo({ className = '', size = 32 }: GDGLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 192 192"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Google Developer Groups logo"
    >
      {/* Left bracket top (Red) */}
      <path
        d="M68.5 44.5L24 89L44.5 109.5L89 65L68.5 44.5Z"
        fill="#EA4335"
      />
      {/* Left bracket bottom (Blue) */}
      <path
        d="M24 89L68.5 133.5L89 113L44.5 68.5L24 89Z"
        fill="#4285F4"
      />
      {/* Right bracket top (Green) */}
      <path
        d="M123.5 44.5L168 89L147.5 109.5L103 65L123.5 44.5Z"
        fill="#34A853"
      />
      {/* Right bracket bottom (Yellow) */}
      <path
        d="M168 89L123.5 133.5L103 113L147.5 68.5L168 89Z"
        fill="#FBBC05"
      />
    </svg>
  );
}

