import React from 'react';

export function SkeletonCard() {
  return (
    <div className="bg-white border border-neutral-300 rounded-3xl p-6 sm:p-7 flex flex-col justify-between h-[340px] animate-shimmer relative overflow-hidden shadow-subtle">
      <div>
        <div className="flex items-center justify-between mb-5">
          <div className="w-12 h-12 rounded-2xl bg-neutral-200 animate-pulse" />
          <div className="w-24 h-6 rounded-full bg-neutral-200 animate-pulse" />
        </div>
        <div className="h-6 w-3/4 bg-neutral-200 rounded mb-2.5 animate-pulse" />
        <div className="h-4 w-1/2 bg-neutral-100 rounded mb-5 animate-pulse" />
        <div className="space-y-2">
          <div className="h-3 w-full bg-neutral-100 rounded animate-pulse" />
          <div className="h-3 w-5/6 bg-neutral-100 rounded animate-pulse" />
          <div className="h-3 w-4/6 bg-neutral-100 rounded animate-pulse" />
        </div>
      </div>
      <div className="pt-4 border-t border-neutral-200 flex items-center justify-between">
        <div className="w-24 h-4 bg-neutral-200 rounded animate-pulse" />
        <div className="w-28 h-9 bg-neutral-200 rounded-full animate-pulse" />
      </div>
    </div>
  );
}

export function SkeletonGrid({ count = 6 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
}

export function SkeletonDetail() {
  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-shimmer relative overflow-hidden p-6">
      <div className="w-36 h-8 bg-neutral-200 rounded-full animate-pulse mb-6" />
      <div className="flex items-start gap-6">
        <div className="w-24 h-24 rounded-3xl bg-neutral-200 animate-pulse flex-shrink-0" />
        <div className="space-y-3 flex-1">
          <div className="w-28 h-6 rounded-full bg-neutral-200 animate-pulse" />
          <div className="h-10 w-2/3 bg-neutral-200 rounded animate-pulse" />
          <div className="h-5 w-1/2 bg-neutral-100 rounded animate-pulse" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="h-32 rounded-3xl bg-neutral-100 border border-neutral-200 animate-pulse" />
        ))}
      </div>
      <div className="h-44 rounded-3xl bg-white border border-neutral-300 p-6 space-y-3 shadow-subtle">
        <div className="h-5 w-1/4 bg-neutral-200 rounded animate-pulse" />
        <div className="h-4 w-full bg-neutral-100 rounded animate-pulse" />
        <div className="h-4 w-5/6 bg-neutral-100 rounded animate-pulse" />
      </div>
    </div>
  );
}
