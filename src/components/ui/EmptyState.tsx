import React from 'react';
import { SearchX, FilterX } from 'lucide-react';

interface EmptyStateProps {
  title?: string;
  description?: string;
  onClear?: () => void;
  icon?: 'search' | 'filter';
}

export function EmptyState({
  title = 'No Results Found',
  description = 'We could not find any matching items for your search or active filters. Try refining your keywords or clearing selected filters.',
  onClear,
  icon = 'search',
}: EmptyStateProps) {
  return (
    <div className="bg-neutral-50 border border-neutral-300 border-dashed rounded-3xl p-10 md:p-14 text-center max-w-lg mx-auto my-8">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white border border-neutral-200 text-neutral-500 mb-5 shadow-subtle">
        {icon === 'search' ? (
          <SearchX className="w-8 h-8 text-google-yellow" />
        ) : (
          <FilterX className="w-8 h-8 text-google-blue" />
        )}
      </div>
      <h3 className="text-xl font-bold font-google text-neutral-900 mb-2">{title}</h3>
      <p className="text-neutral-600 text-sm leading-relaxed mb-6">
        {description}
      </p>
      {onClear && (
        <button
          onClick={onClear}
          className="inline-flex items-center px-5 py-2.5 rounded-full border border-neutral-300 bg-white hover:bg-neutral-100 text-neutral-800 text-xs font-semibold shadow-subtle transition-all"
        >
          Reset All Filters
        </button>
      )}
    </div>
  );
}
