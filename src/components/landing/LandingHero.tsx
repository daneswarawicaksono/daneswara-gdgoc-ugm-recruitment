import React from 'react';
import Link from 'next/link';
import { ArrowRight, Search, Code, Palette, Sparkles } from 'lucide-react';

export function LandingHero() {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 sm:pb-24 lg:pt-12 lg:pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            {/* Small Section Label */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-500">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span>LEARN WITH US · 2026/2027</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-google text-neutral-900 tracking-tight leading-[1.08]">
              Big ideas. <br />
              <span className="text-primary">Built together.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-xl">
              A place for curious minds at <strong className="text-neutral-800 font-semibold">Universitas Gadjah Mada</strong> to learn, connect, and build technology that matters.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/overview#tracks"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary hover:bg-primary-hover text-white text-sm font-semibold shadow-xs hover:shadow-md transition-all active:scale-95"
              >
                <span>Find your learning track</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-neutral-50 border border-neutral-300 text-neutral-800 text-sm font-semibold shadow-2xs hover:border-neutral-400 transition-all active:scale-95"
              >
                <span>Get to know us</span>
                <ArrowRight className="w-4 h-4 text-neutral-500" />
              </Link>
            </div>

            {/* Student avatar badges / trust cue */}
            <div className="flex items-center gap-3 pt-4 text-xs text-neutral-500">
              <div className="flex -space-x-1.5">
                <span className="inline-block w-4 h-4 rounded-full bg-google-blue ring-2 ring-white" />
                <span className="inline-block w-4 h-4 rounded-full bg-google-red ring-2 ring-white" />
                <span className="inline-block w-4 h-4 rounded-full bg-google-yellow ring-2 ring-white" />
                <span className="inline-block w-4 h-4 rounded-full bg-google-green ring-2 ring-white" />
              </div>
              <span>Open to all backgrounds. Focused on clarity.</span>
            </div>
          </div>

          {/* Right Artwork Column - High-fidelity Glassmorphic 3D Card Stack */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md aspect-square rounded-3xl bg-gradient-to-tr from-blue-100/60 via-amber-50/50 to-emerald-100/60 p-6 sm:p-8 flex flex-col justify-between border border-white/60 shadow-lg backdrop-blur-xs overflow-hidden">
              {/* Background geometric blur accents */}
              <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-blue-300/30 blur-2xl pointer-events-none" />
              <div className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-emerald-300/30 blur-2xl pointer-events-none" />

              {/* Top Glass Card: Research / Magnifying Search */}
              <div className="relative z-10 self-start w-40 sm:w-48 bg-white/85 backdrop-blur-md rounded-2xl p-4 border border-white/80 shadow-card transform -rotate-3 hover:rotate-0 transition-transform">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-primary mb-2 shadow-2xs">
                  <Search className="w-5 h-5" />
                </div>
                <div className="h-2 w-20 bg-neutral-200 rounded-full mb-1.5" />
                <div className="h-2 w-12 bg-neutral-200 rounded-full" />
              </div>

              {/* Middle Floating Pill: possibilities */}
              <div className="relative z-20 self-center bg-white/95 backdrop-blur-md px-4 py-2 rounded-full border border-neutral-200/80 shadow-md flex items-center gap-2">
                <span className="font-mono text-xs sm:text-sm text-neutral-800 font-medium">
                  hello, possibilities_
                </span>
                <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
              </div>

              {/* Bottom Glass Card: Development Code Tag */}
              <div className="relative z-10 self-end w-44 sm:w-52 bg-white/85 backdrop-blur-md rounded-2xl p-4 border border-white/80 shadow-card transform rotate-2 hover:rotate-0 transition-transform flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-google-green shrink-0 shadow-2xs">
                  <Code className="w-5 h-5" />
                </div>
                <div className="space-y-1.5 flex-1">
                  <div className="h-2 w-full bg-neutral-200 rounded-full" />
                  <div className="h-2 w-2/3 bg-neutral-200 rounded-full" />
                </div>
              </div>

              {/* Bottom Location & Year Badge */}
              <div className="relative z-10 pt-2 flex items-center justify-center">
                <span className="text-[11px] font-medium text-neutral-500 bg-white/80 px-3 py-1 rounded-full border border-neutral-200/50">
                  📍 Universitas Gadjah Mada · 2026/2027
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

