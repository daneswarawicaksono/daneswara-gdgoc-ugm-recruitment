'use client';

import React, { useEffect } from 'react';
import { AlertCircle, RefreshCw } from 'lucide-react';
import Link from 'next/link';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
  }) {
  useEffect(() => {
    console.error('Application Error Boundary caught error:', error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center p-4">
      <div className="bg-white border border-neutral-300 rounded-3xl p-8 max-w-md w-full text-center shadow-card">
        <div className="w-16 h-16 rounded-2xl bg-google-red-tint text-google-red flex items-center justify-center mx-auto mb-4 border border-google-red/20">
          <AlertCircle className="w-8 h-8" />
        </div>
        <h2 className="text-xl font-bold font-google text-neutral-900 mb-2">Something went wrong!</h2>
        <p className="text-neutral-600 text-sm mb-6">
          {error.message || 'An unexpected error occurred while rendering the page.'}
        </p>
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={() => reset()}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-white text-xs font-semibold hover:bg-primary-hover transition-all shadow-sm"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            Try Again
          </button>
          <Link
            href="/"
            className="inline-flex items-center px-5 py-2.5 rounded-full border border-neutral-300 text-neutral-700 hover:text-neutral-900 text-xs font-medium bg-neutral-50 hover:bg-neutral-100 transition-all"
          >
            Return to Overview
          </Link>
        </div>
      </div>
    </div>
  );
}
