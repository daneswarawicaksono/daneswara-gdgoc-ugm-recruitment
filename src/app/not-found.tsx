import Link from 'next/link';
import { Compass, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center p-4">
      <div className="bg-white border border-neutral-300 rounded-3xl p-8 max-w-md w-full text-center shadow-card">
        <div className="w-16 h-16 rounded-2xl bg-google-yellow-tint text-google-yellow flex items-center justify-center mx-auto mb-4 border border-google-yellow/20">
          <Compass className="w-8 h-8" />
        </div>
        <h2 className="text-2xl font-bold font-google text-neutral-900 mb-2">Track Not Found</h2>
        <p className="text-neutral-600 text-sm mb-6 leading-relaxed">
          The requested recruitment track or page could not be located. It may have been relocated or is currently inactive.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary hover:bg-primary-hover text-white text-xs font-semibold shadow-sm transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Overview & Catalog
        </Link>
      </div>
    </div>
  );
}
