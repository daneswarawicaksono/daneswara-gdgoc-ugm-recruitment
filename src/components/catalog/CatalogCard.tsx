'use client';

import React, { useState } from 'react';
import { UnifiedCatalogItem } from '@/types';
import { Badge } from '@/components/ui/Badge';
import { ArrowUpRight, CheckCircle2, Eye, X, Sparkles } from 'lucide-react';
import Link from 'next/link';

interface CatalogCardProps {
  item: UnifiedCatalogItem;
}

export function CatalogCard({ item }: CatalogCardProps) {
  const [showQuickView, setShowQuickView] = useState(false);
  const isTrack = item.type === 'track';

  const badgeVariant =
    item.type === 'track'
      ? 'blue'
      : item.type === 'format'
      ? 'yellow'
      : item.type === 'value'
      ? 'green'
      : 'red';

  const cardBorderAccent =
    item.type === 'track'
      ? 'hover:border-google-blue/60'
      : item.type === 'format'
      ? 'hover:border-google-yellow/60'
      : item.type === 'value'
      ? 'hover:border-google-green/60'
      : 'hover:border-google-red/60';

  return (
    <>
      <div
        className={`group relative bg-white border border-neutral-300 rounded-3xl p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between shadow-subtle hover:shadow-card hover:-translate-y-1 ${cardBorderAccent}`}
      >
        <div>
          {/* Top meta row */}
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-3">
              <span className="text-3xl p-3 rounded-2xl bg-neutral-100 border border-neutral-200 flex items-center justify-center group-hover:scale-105 transition-transform">
                {item.icon}
              </span>
              <Badge variant={badgeVariant}>{item.categoryLabel}</Badge>
            </div>
            {item.isOpen !== undefined && (
              <span
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${
                  item.isOpen
                    ? 'bg-google-green-tint text-google-green border-google-green/20'
                    : 'bg-google-red-tint text-google-red border-google-red/20'
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    item.isOpen ? 'bg-google-green animate-pulse' : 'bg-google-red'
                  }`}
                />
                {item.status || (item.isOpen ? 'Open' : 'Closed')}
              </span>
            )}
          </div>

          {/* Title & Subtitle */}
          <h3 className="text-xl font-bold font-google text-neutral-900 group-hover:text-primary transition-colors mb-1 line-clamp-1">
            {isTrack ? (
              <Link href={item.detailUrl} className="hover:underline">
                {item.title}
              </Link>
            ) : (
              item.title
            )}
          </h3>
          <p className="text-xs text-google-yellow font-medium mb-3 italic line-clamp-1">
            {item.subtitle}
          </p>

          {/* Description */}
          <p className="text-neutral-700 text-sm leading-relaxed mb-5 line-clamp-3">
            {item.description}
          </p>

          {/* Tags / Skills Pills */}
          {item.tags && item.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-5">
              {item.tags.slice(0, 3).map((tag, idx) => (
                <span
                  key={idx}
                  className="text-xs px-3 py-1 rounded-full bg-neutral-100 text-neutral-700 border border-neutral-200 font-medium"
                >
                  {tag}
                </span>
              ))}
              {item.tags.length > 3 && (
                <span className="text-xs px-2.5 py-1 rounded-full bg-neutral-100 text-neutral-500 border border-neutral-200">
                  +{item.tags.length - 3}
                </span>
              )}
            </div>
          )}
        </div>

        {/* Action Footer */}
        <div className="pt-4 border-t border-neutral-200 flex items-center justify-between mt-auto">
          {isTrack ? (
            <Link
              href={item.detailUrl}
              className="w-full inline-flex items-center justify-between px-5 py-2.5 rounded-full bg-primary hover:bg-primary-hover text-white text-xs font-semibold tracking-wide transition-all shadow-sm hover:shadow group/btn"
            >
              <span>Explore Track Details</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </Link>
          ) : (
            <div className="w-full flex items-center justify-between gap-2">
              <span className="flex items-center gap-1.5 text-xs text-neutral-600 truncate">
                <CheckCircle2 className="w-3.5 h-3.5 text-google-green flex-shrink-0" />
                Official Component
              </span>
              <button
                onClick={() => setShowQuickView(true)}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-neutral-100 hover:bg-neutral-200 border border-neutral-300 text-xs font-medium text-neutral-700 hover:text-neutral-900 transition-all"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Overview</span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Quick View Modal */}
      {showQuickView && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white border border-neutral-300 rounded-3xl max-w-lg w-full p-6 sm:p-8 relative shadow-modal space-y-6">
            <button
              onClick={() => setShowQuickView(false)}
              className="absolute top-5 right-5 p-2 text-neutral-500 hover:text-neutral-900 rounded-full hover:bg-neutral-100 transition-all"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-4">
              <span className="text-4xl p-3.5 rounded-2xl bg-neutral-100 border border-neutral-200">
                {item.icon}
              </span>
              <div>
                <Badge variant={badgeVariant}>{item.categoryLabel}</Badge>
                <h3 className="text-xl font-bold font-google text-neutral-900 mt-1">
                  {item.title}
                </h3>
                <p className="text-xs text-google-yellow font-medium italic">
                  {item.subtitle}
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-semibold text-neutral-600 uppercase tracking-wider">
                About this Initiative
              </h4>
              <p className="text-sm text-neutral-700 leading-relaxed">
                {item.description}
              </p>
            </div>

            {item.tags && item.tags.length > 0 && (
              <div className="space-y-2">
                <h4 className="text-xs font-semibold text-neutral-600 uppercase tracking-wider">
                  Associated Domains & Skills
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 rounded-full bg-neutral-100 text-neutral-800 border border-neutral-200 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="p-4 rounded-2xl bg-neutral-100 border border-neutral-200 text-xs text-neutral-700 flex items-start gap-2.5">
              <Sparkles className="w-4 h-4 text-google-blue flex-shrink-0 mt-0.5" />
              <span>
                Part of the Google Developer Groups on Campus (GDGoC) Universitas Gadjah Mada community framework for the 2026/2027 term.
              </span>
            </div>

            <div className="flex items-center justify-end pt-2">
              <button
                onClick={() => setShowQuickView(false)}
                className="px-6 py-2.5 rounded-full bg-primary hover:bg-primary-hover text-white text-xs font-semibold transition-all shadow-sm"
              >
                Close Overview
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
