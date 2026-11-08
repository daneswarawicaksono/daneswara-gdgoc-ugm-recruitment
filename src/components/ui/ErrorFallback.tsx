import React from 'react';
import { AlertCircle, RefreshCw } from 'lucide-react';

interface ErrorFallbackProps {
  title?: string;
  message?: string;
  onRetry?: () => void;
}

export function ErrorFallback({
  title = 'Unable to Load Data',
  message = 'An unexpected error occurred while communicating with the GDGoC API. Please verify your connection or try again.',
  onRetry,
}: ErrorFallbackProps) {
  return (
    <div className="bg-white border border-neutral-300 rounded-3xl p-8 md:p-12 text-center max-w-xl mx-auto my-8 shadow-card">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-google-red-tint text-google-red mb-6 border border-google-red/20">
        <AlertCircle className="w-8 h-8" />
      </div>
      <h3 className="text-xl md:text-2xl font-bold font-google text-neutral-900 mb-2">{title}</h3>
      <p className="text-neutral-600 text-sm md:text-base mb-6 leading-relaxed">
        {message}
      </p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary hover:bg-primary-hover text-white font-medium text-xs shadow-sm hover:shadow active:scale-95 transition-all"
        >
          <RefreshCw className="w-4 h-4" />
          Retry Request
        </button>
      )}
    </div>
  );
}
