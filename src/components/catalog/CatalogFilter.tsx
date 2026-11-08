'use client';

import React from 'react';
import { Search, SlidersHorizontal, RotateCcw } from 'lucide-react';

interface CatalogFilterProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  selectedCategory: string;
  onCategoryChange: (c: string) => void;
  sortBy: string;
  onSortChange: (s: string) => void;
  onReset: () => void;
  totalCount: number;
  filteredCount: number;
  categoryCounts?: Record<string, number>;
}

export function CatalogFilter({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  sortBy,
  onSortChange,
  onReset,
  totalCount,
  filteredCount,
  categoryCounts = {},
}: CatalogFilterProps) {
  const categories = [
    {
      id: 'all',
      label: 'All Items',
      count: categoryCounts['all'] ?? totalCount,
    },
    {
      id: 'track',
      label: 'Learning Tracks',
      count: categoryCounts['track'] ?? 3,
    },
    {
      id: 'format',
      label: 'Learning Formats',
      count: categoryCounts['format'] ?? 4,
    },
    {
      id: 'value',
      label: 'Community Values',
      count: categoryCounts['value'] ?? 4,
    },
    {
      id: 'role',
      label: 'Roles',
      count: categoryCounts['role'] ?? 3,
    },
  ];

  const sortOptions = [
    { id: 'title-asc', label: 'Title (A → Z)' },
    { id: 'title-desc', label: 'Title (Z → A)' },
    { id: 'category', label: 'Category Type' },
    { id: 'tags-desc', label: 'Most Skills / Tags' },
  ];

  const hasActiveFilters =
    searchQuery !== '' || selectedCategory !== 'all' || sortBy !== 'title-asc';

  return (
    <div className="bg-white border border-neutral-300 rounded-3xl p-5 mb-8 space-y-4 shadow-subtle">
      {/* Search Input Bar with pill styling */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search by track name, skills, formats, or values..."
          className="w-full pl-11 pr-16 py-3 bg-neutral-100 border border-neutral-300 rounded-full text-neutral-900 placeholder:text-neutral-500 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
        />
        {searchQuery && (
          <button
            onClick={() => onSearchChange('')}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-neutral-600 hover:text-neutral-900 px-2.5 py-1 rounded-full bg-white border border-neutral-300 shadow-sm transition-colors"
          >
            Clear
          </button>
        )}
      </div>

      {/* Filters & Sorting Controls */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pt-1">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onCategoryChange(cat.id)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium transition-all ${
                  isActive
                    ? 'bg-primary text-white shadow-sm font-semibold'
                    : 'bg-neutral-100 text-neutral-700 hover:text-neutral-900 hover:bg-neutral-200/80 border border-neutral-300'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${
                    isActive
                      ? 'bg-white/20 text-white'
                      : 'bg-neutral-200 text-neutral-600'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Sorting Dropdown & Reset */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-xs text-neutral-600 font-medium">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Sort:</span>
          </div>

          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            className="bg-neutral-100 border border-neutral-300 rounded-xl px-3 py-1.5 text-xs text-neutral-800 font-medium focus:outline-none focus:border-primary cursor-pointer"
          >
            {sortOptions.map((opt) => (
              <option key={opt.id} value={opt.id}>
                {opt.label}
              </option>
            ))}
          </select>

          {hasActiveFilters && (
            <button
              onClick={onReset}
              title="Reset all filters"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-neutral-300 text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 text-xs font-medium transition-all"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          )}
        </div>
      </div>

      {/* Results Count Banner */}
      <div className="flex items-center justify-between text-xs text-neutral-500 pt-3 border-t border-neutral-200">
        <span>
          Showing <strong className="text-neutral-900">{filteredCount}</strong> of{' '}
          <strong className="text-neutral-900">{totalCount}</strong> items
        </span>
        {hasActiveFilters && (
          <span className="text-primary font-medium">Filters Applied</span>
        )}
      </div>
    </div>
  );
}
