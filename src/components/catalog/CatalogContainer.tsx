'use client';

import React, { useMemo, useState, useEffect, useCallback } from 'react';
import { useUnifiedCatalog, useCommunityStats } from '@/hooks/useData';
import { usePagination } from '@/hooks/usePagination';
import { CatalogCard } from '@/components/catalog/CatalogCard';
import { CatalogFilter } from '@/components/catalog/CatalogFilter';
import { StatsBanner } from '@/components/catalog/StatsBanner';
import { SkeletonGrid } from '@/components/ui/Skeleton';
import { ErrorFallback } from '@/components/ui/ErrorFallback';
import { EmptyState } from '@/components/ui/EmptyState';
import { Pagination } from '@/components/ui/Pagination';
import {
  Sparkles,
  ArrowRight,
  Compass,
  CheckCircle2,
  Users,
  Code2,
  Layers,
} from 'lucide-react';
import Link from 'next/link';

export function CatalogContainer() {
  const { data: items, isLoading, isError, error, refetch } = useUnifiedCatalog();
  const { data: stats, isLoading: isStatsLoading } = useCommunityStats();

  // State for search, filter & sort
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('title-asc');

  // Compute category item counts dynamically
  const categoryCounts = useMemo<Record<string, number>>(() => {
    const counts: Record<string, number> = {
      all: 0,
      track: 0,
      format: 0,
      value: 0,
      role: 0,
    };
    if (!items) return counts;
    counts.all = items.length;
    counts.track = items.filter((i) => i.type === 'track').length;
    counts.format = items.filter((i) => i.type === 'format').length;
    counts.value = items.filter((i) => i.type === 'value').length;
    counts.role = items.filter((i) => i.type === 'role').length;
    return counts;
  }, [items]);

  // Filter & sort logic
  const filteredItems = useMemo(() => {
    if (!items) return [];

    let result = [...items];

    // Filter by category
    if (selectedCategory !== 'all') {
      result = result.filter((item) => item.type === selectedCategory);
    }

    // Filter by search query across multiple fields
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (item) =>
          item.title.toLowerCase().includes(q) ||
          item.subtitle.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q) ||
          item.tags.some((tag) => tag.toLowerCase().includes(q))
      );
    }

    // Multi-attribute sorting
    result.sort((a, b) => {
      if (sortBy === 'title-asc') {
        return a.title.localeCompare(b.title);
      }
      if (sortBy === 'title-desc') {
        return b.title.localeCompare(a.title);
      }
      if (sortBy === 'category') {
        return a.type.localeCompare(b.type);
      }
      if (sortBy === 'tags-desc') {
        return (b.tags?.length || 0) - (a.tags?.length || 0);
      }
      return 0;
    });

    return result;
  }, [items, selectedCategory, searchQuery, sortBy]);

  // Client-side pagination (6 items per page)
  const pagination = usePagination({
    data: filteredItems,
    pageSize: 6,
  });
  const { resetPage } = pagination;

  // Automatically reset pagination page when filters, query, or sort change
  useEffect(() => {
    resetPage();
  }, [searchQuery, selectedCategory, sortBy, resetPage]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSortBy('title-asc');
    resetPage();
  };

  return (
    <div className="space-y-14">
      {/* Figma Frame: "Welcome to the community" Hero */}
      <section className="relative pt-6 pb-12 sm:pt-10 sm:pb-16 border-b border-neutral-300">
        <div className="max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-google-blue-tint border border-google-blue/20 text-primary text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Open Recruitment 2026/2027 · GDGoC Universitas Gadjah Mada</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-google text-neutral-900 tracking-tight leading-[1.08]">
            Find your spark.{' '}
            <span className="text-primary block mt-1">
              Build your own path.
            </span>
          </h1>

          <p className="text-neutral-700 text-base sm:text-lg lg:text-xl max-w-2xl leading-relaxed">
            A student community at Universitas Gadjah Mada for developers, designers, and researchers passionate about Google technologies. Learn together, build together.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#tracks"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-primary hover:bg-primary-hover text-white text-sm font-semibold shadow-sm hover:shadow transition-all group"
            >
              <span>Explore Programs & Tracks</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <Link
              href="/tracks/development"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-neutral-100 hover:bg-neutral-200 border border-neutral-300 text-neutral-800 text-sm font-medium transition-all"
            >
              <Code2 className="w-4 h-4 text-google-green" />
              <span>Development Track</span>
            </Link>
          </div>
        </div>

        {/* Figma "Community promise" 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 pt-8 border-t border-neutral-200">
          <div className="p-5 rounded-2xl bg-neutral-50 border border-neutral-200 space-y-2">
            <div className="w-9 h-9 rounded-xl bg-google-blue-tint text-google-blue flex items-center justify-center font-bold text-sm">
              <Users className="w-5 h-5" />
            </div>
            <h4 className="font-bold font-google text-neutral-900 text-base">Open to Everyone</h4>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Students from all faculties, backgrounds, and technical experience levels are welcomed at UGM.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-neutral-50 border border-neutral-200 space-y-2">
            <div className="w-9 h-9 rounded-xl bg-google-yellow-tint text-google-yellow flex items-center justify-center font-bold text-sm">
              <Layers className="w-5 h-5" />
            </div>
            <h4 className="font-bold font-google text-neutral-900 text-base">Hands-on Learning</h4>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Practical workshops, collaborative study groups, and interactive curriculum cohorts.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-neutral-50 border border-neutral-200 space-y-2">
            <div className="w-9 h-9 rounded-xl bg-google-green-tint text-google-green flex items-center justify-center font-bold text-sm">
              <Compass className="w-5 h-5" />
            </div>
            <h4 className="font-bold font-google text-neutral-900 text-base">Real-world Impact</h4>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Build and ship solutions with senior mentors, alumni, and industry Google Developer Experts.
            </p>
          </div>
        </div>
      </section>

      {/* Community Stats Banner */}
      <section>
        <StatsBanner stats={stats} isLoading={isStatsLoading} />
      </section>

      {/* Figma Frame: "Programs and learning tracks" */}
      <section id="tracks" className="scroll-mt-24 space-y-6">
        <div>
          <span className="text-xs font-semibold text-primary uppercase tracking-wider">
            Curriculum & Community Catalog
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-google text-neutral-900 tracking-tight mt-1">
            Three ways in. Plenty of ways forward.
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
            Browse our core recruitment tracks, collaborative formats, community values, and roles. Filter or search dynamically to find where you fit best.
          </p>
        </div>

        {/* Filter and Control Bar */}
        <CatalogFilter
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          sortBy={sortBy}
          onSortChange={setSortBy}
          onReset={handleResetFilters}
          totalCount={items?.length ?? 0}
          filteredCount={filteredItems.length}
          categoryCounts={categoryCounts}
        />

        {/* Content Rendering: Loading / Error / Empty / Grid */}
        {isLoading ? (
          <SkeletonGrid count={6} />
        ) : isError ? (
          <ErrorFallback
            title="Could Not Connect to GDGoC API"
            message={error?.message || 'Failed to retrieve recruitment catalog data from the server.'}
            onRetry={() => refetch()}
          />
        ) : filteredItems.length === 0 ? (
          <EmptyState
            title="No Recruitment Items Found"
            description={`No results matched "${searchQuery || selectedCategory}". Try adjusting your keywords or clearing active filters to browse all catalog items.`}
            onClear={handleResetFilters}
            icon={searchQuery ? 'search' : 'filter'}
          />
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pagination.paginatedItems.map((item) => (
                <CatalogCard key={`${item.type}-${item.id}`} item={item} />
              ))}
            </div>

            <Pagination
              currentPage={pagination.currentPage}
              totalPages={pagination.totalPages}
              onPageChange={pagination.goToPage}
              onNextPage={pagination.nextPage}
              onPrevPage={pagination.prevPage}
              hasNextPage={pagination.hasNextPage}
              hasPrevPage={pagination.hasPrevPage}
              startIndex={pagination.startIndex}
              endIndex={pagination.endIndex}
              totalItems={pagination.totalItems}
            />
          </>
        )}
      </section>

      {/* Figma Frame: "Community invitation" */}
      <section className="bg-neutral-50 border border-neutral-300 rounded-3xl p-8 sm:p-12 relative overflow-hidden">
        <div className="max-w-2xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-google-green-tint border border-google-green/20 text-google-green text-xs font-semibold">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>2026/2027 Registration Open</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold font-google text-neutral-900 tracking-tight">
            Made for the campus. Open to possibilities.
          </h3>

          <p className="text-neutral-700 text-sm sm:text-base leading-relaxed">
            Take the leap and become part of Google Developer Groups on Campus at Universitas Gadjah Mada. Whether your focus is research, UI/UX design, or full-stack software development, we grow together.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              href="/tracks/development"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary hover:bg-primary-hover text-white text-xs font-semibold shadow-sm transition-all"
            >
              <span>Apply for Tracks</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <a
              href="https://gdgoc-ugm-api.vercel.app/api"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-5 py-3 rounded-full border border-neutral-300 text-neutral-700 hover:text-neutral-900 hover:bg-white text-xs font-medium transition-all"
            >
              <span>Explore Live API</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
