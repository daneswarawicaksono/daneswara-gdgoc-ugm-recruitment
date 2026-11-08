import React from 'react';
import Link from 'next/link';
import { Globe, ExternalLink } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-neutral-300 bg-neutral-50 mt-20 relative overflow-hidden">
      {/* Figma "Brand signature": 4 Google color stripes */}
      <div className="w-full grid grid-cols-4 h-1.5">
        <div className="bg-google-blue h-full" />
        <div className="bg-google-red h-full" />
        <div className="bg-google-yellow h-full" />
        <div className="bg-google-green h-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand & Community Identity matching Figma Footer */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="flex gap-1.5 p-1.5 rounded-lg bg-white border border-neutral-200">
                <span className="w-2.5 h-2.5 rounded-full bg-google-blue" />
                <span className="w-2.5 h-2.5 rounded-full bg-google-red" />
                <span className="w-2.5 h-2.5 rounded-full bg-google-yellow" />
                <span className="w-2.5 h-2.5 rounded-full bg-google-green" />
              </div>
              <span className="font-bold font-google text-neutral-900 tracking-tight text-base">
                Google Developer Groups On Campus
              </span>
            </div>
            <p className="text-neutral-600 text-sm leading-relaxed max-w-md">
              A university-based developer community at Universitas Gadjah Mada. Open to curious students of all disciplines to learn, build, and lead with Google technologies.
            </p>
            <div className="text-xs text-neutral-500 pt-1">
              Developed for GDGoC UGM Front-End Hacker Assignment by{' '}
              <strong className="text-neutral-900">Daneswara Ramadhana Rafif Wicaksono</strong>.
            </div>
          </div>

          {/* Explore Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-900 mb-4">
              Explore Programs
            </h4>
            <ul className="space-y-2.5 text-sm text-neutral-600">
              <li>
                <Link href="/tracks/research-discovery" className="hover:text-primary transition-colors">
                  Research & Discovery
                </Link>
              </li>
              <li>
                <Link href="/tracks/design-creativity" className="hover:text-google-yellow transition-colors">
                  Design & Creativity
                </Link>
              </li>
              <li>
                <Link href="/tracks/development" className="hover:text-google-green transition-colors">
                  Development
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-neutral-900 transition-colors">
                  All Catalog Offerings
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect & API */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-900 mb-4">
              Connect with GDGoC
            </h4>
            <ul className="space-y-2.5 text-sm text-neutral-600">
              <li>
                <a
                  href="https://gdgoc-ugm-api.vercel.app/api"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors flex items-center gap-1.5"
                >
                  <Globe className="w-3.5 h-3.5" /> GDGoC REST API
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/gdgoc.ugm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-neutral-900 transition-colors flex items-center gap-1.5"
                >
                  <ExternalLink className="w-3.5 h-3.5" /> Instagram (@gdgoc.ugm)
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/company/gdgoc-ugm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-neutral-900 transition-colors flex items-center gap-1.5"
                >
                  <ExternalLink className="w-3.5 h-3.5" /> LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/gdgoc-ugm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-neutral-900 transition-colors flex items-center gap-1.5"
                >
                  <ExternalLink className="w-3.5 h-3.5" /> GitHub Organization
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Figma Footer Note */}
        <div className="pt-8 border-t border-neutral-300 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <p>© GDGoC Universitas Gadjah Mada • 2026/2027</p>
          <p className="font-medium text-neutral-700">
            Made for the campus. Open to possibilities.
          </p>
        </div>
      </div>
    </footer>
  );
}
