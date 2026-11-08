import React from 'react';
import Link from 'next/link';
import { GDGLogo } from '@/components/ui/GDGLogo';
import { Instagram, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white mt-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-neutral-200">
          {/* Brand & Community Identity */}
          <div className="md:col-span-6 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <GDGLogo size={36} />
              <div className="flex flex-col">
                <span className="text-base font-bold text-neutral-900 tracking-tight leading-tight">
                  Google Developer Groups
                </span>
                <span className="text-xs text-neutral-500 font-medium">
                  <span className="text-primary font-semibold">On Campus</span> • Universitas Gadjah Mada
                </span>
              </div>
            </Link>
            <p className="text-neutral-600 text-sm leading-relaxed max-w-md pt-1">
              A student community for curious minds, shared learning, and technology with purpose.
            </p>
          </div>

          {/* Explore Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-900">
              Explore
            </h4>
            <ul className="space-y-2 text-sm text-neutral-600">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/overview" className="hover:text-primary transition-colors">
                  Overview
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Keep in the loop */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-900">
              Keep in the loop
            </h4>
            <div className="space-y-2 text-sm">
              <a
                href="https://instagram.com/gdgoc.ugm"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium block"
              >
                @gdgoc.ugm
              </a>
              <div className="flex items-center gap-3 pt-1 text-neutral-600">
                <a
                  href="https://instagram.com/gdgoc.ugm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-full hover:bg-neutral-100 hover:text-neutral-900 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-full hover:bg-neutral-100 hover:text-neutral-900 transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
              <p className="text-xs text-neutral-500 pt-2 font-medium">
                Learn together. Build together.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom copyright metadata matching Figma */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <div>
            © GDGoC Universitas Gadjah Mada · 2024/2025
          </div>
          <div>
            Made for the campus. Open to possibilities.
          </div>
        </div>
      </div>

      {/* 4 Google Color Stripes signature bar at absolute bottom */}
      <div className="w-full grid grid-cols-4 h-1.5">
        <div className="bg-[#4285F4] h-full" />
        <div className="bg-[#EA4335] h-full" />
        <div className="bg-[#FBBC05] h-full" />
        <div className="bg-[#34A853] h-full" />
      </div>
    </footer>
  );
}
