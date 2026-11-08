'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: 'Overview & Catalog', href: '/' },
    { label: 'Research & Discovery', href: '/tracks/research-discovery' },
    { label: 'Design & Creativity', href: '/tracks/design-creativity' },
    { label: 'Development', href: '/tracks/development' },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/90 border-b border-neutral-300 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Brand matching Figma Navigation item */}
          <Link href="/" className="flex items-center gap-3.5 group">
            <div className="flex items-center gap-1.5 p-2 rounded-xl bg-neutral-100 border border-neutral-200 group-hover:border-primary/30 transition-colors">
              <span className="w-3 h-3 rounded-full bg-google-blue" />
              <span className="w-3 h-3 rounded-full bg-google-red" />
              <span className="w-3 h-3 rounded-full bg-google-yellow" />
              <span className="w-3 h-3 rounded-full bg-google-green" />
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5 text-sm sm:text-base font-bold text-neutral-900 tracking-tight group-hover:text-primary transition-colors">
                <span>Google Developer Groups On Campus</span>
                <span className="hidden sm:inline text-neutral-400">•</span>
                <span className="hidden sm:inline text-neutral-600 font-medium">UGM</span>
              </div>
              <span className="text-[11px] text-neutral-500 font-medium tracking-wide">
                Universitas Gadjah Mada · Open Recruitment 2026/2027
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                    isActive
                      ? 'bg-neutral-100 text-primary font-semibold'
                      : 'text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100/70'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Figma Action Button: "Find your track" */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/#tracks"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary hover:bg-primary-hover text-white text-xs font-semibold shadow-sm hover:shadow transition-all group"
            >
              <span>Find your track</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl border border-neutral-300 text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-neutral-300 bg-white px-4 pt-3 pb-5 space-y-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-neutral-100 text-primary font-semibold'
                    : 'text-neutral-700 hover:text-neutral-900 hover:bg-neutral-50'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="pt-3 border-t border-neutral-200">
            <Link
              href="/#tracks"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full bg-primary hover:bg-primary-hover text-white text-xs font-semibold shadow-sm transition-all"
            >
              <span>Find your track</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
