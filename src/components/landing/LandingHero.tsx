import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export function LandingHero() {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 sm:pb-20 lg:pt-14 lg:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Hero Copy */}
          <div className="lg:col-span-7 space-y-6">
            {/* Section label */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-500">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span>LEARN WITH US · 2024/2025</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-google text-neutral-900 tracking-tight leading-[1.06]">
              Big ideas. <br />
              <span className="text-primary">Built together.</span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-xl">
              A place for curious minds at <strong className="text-neutral-800 font-semibold">Universitas Gadjah Mada</strong> to learn, connect, and build technology that matters.
            </p>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/overview#tracks"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-primary hover:bg-primary-hover text-white text-sm font-semibold shadow-xs hover:shadow-md transition-all active:scale-95"
              >
                <span>Find your learning track</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-neutral-50 border border-neutral-300 text-neutral-800 text-sm font-semibold shadow-2xs hover:border-neutral-400 transition-all active:scale-95"
              >
                <span>Get to know us</span>
                <ArrowRight className="w-4 h-4 text-neutral-500" />
              </Link>
            </div>

            {/* Welcome message with community dots */}
            <div className="flex items-center gap-3 pt-4 text-xs text-neutral-600">
              <div className="flex -space-x-1.5">
                <span className="inline-block w-3.5 h-3.5 rounded-full bg-google-blue ring-2 ring-white" />
                <span className="inline-block w-3.5 h-3.5 rounded-full bg-google-red ring-2 ring-white" />
                <span className="inline-block w-3.5 h-3.5 rounded-full bg-google-yellow ring-2 ring-white" />
                <span className="inline-block w-3.5 h-3.5 rounded-full bg-google-green ring-2 ring-white" />
              </div>
              <span>Open to all backgrounds. Focused on clarity.</span>
            </div>
          </div>

          {/* Right Hero Artwork */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[560px] aspect-[620/530] drop-shadow-md">
              <Image
                src="/images/hero-artwork.png"
                alt="GDGoC UGM Ideas coming together artwork"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 560px"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
