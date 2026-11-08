'use client';

import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  onNextPage: () => void;
  onPrevPage: () => void;
  hasNextPage: boolean;
  hasPrevPage: boolean;
  startIndex: number;
  endIndex: number;
  totalItems: number;
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  onNextPage,
  onPrevPage,
  hasNextPage,
  hasPrevPage,
  startIndex,
  endIndex,
  totalItems,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-10 pt-6 border-t border-neutral-200">
      <div className="text-xs text-neutral-500">
        Showing <span className="font-semibold text-neutral-900">{startIndex}</span> to{' '}
        <span className="font-semibold text-neutral-900">{endIndex}</span> of{' '}
        <span className="font-semibold text-neutral-900">{totalItems}</span> results
      </div>

      <div className="flex items-center gap-1.5">
        <button
          onClick={onPrevPage}
          disabled={!hasPrevPage}
          className="p-2 rounded-full border border-neutral-300 bg-white text-neutral-600 hover:text-neutral-900 disabled:opacity-30 disabled:hover:text-neutral-600 shadow-subtle transition-all"
          aria-label="Previous page"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
          const isActive = page === currentPage;
          return (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={`w-9 h-9 rounded-full text-xs font-semibold transition-all ${
                isActive
                  ? 'bg-primary text-white shadow-sm'
                  : 'border border-neutral-300 bg-white text-neutral-700 hover:text-neutral-900 hover:bg-neutral-50 shadow-subtle'
              }`}
            >
              {page}
            </button>
          );
        })}

        <button
          onClick={onNextPage}
          disabled={!hasNextPage}
          className="p-2 rounded-full border border-neutral-300 bg-white text-neutral-600 hover:text-neutral-900 disabled:opacity-30 disabled:hover:text-neutral-600 shadow-subtle transition-all"
          aria-label="Next page"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
