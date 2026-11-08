import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function CommunityInvitationBanner() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16 sm:my-20">
      <div className="bg-[#edf4ff] border border-blue-100 rounded-3xl p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span>YOUR NEXT CHAPTER</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-google text-neutral-900 tracking-tight leading-tight">
            Bring your curiosity. <br className="hidden sm:inline" />
            We’ll build from there.
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base leading-relaxed pt-1">
            Find a learning track, meet a collaborator, or start a conversation.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-4 shrink-0">
          <Link
            href="/overview"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary hover:bg-primary-hover text-white text-sm font-semibold shadow-xs hover:shadow-md transition-all active:scale-95"
          >
            <span>Explore the overview</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-neutral-700 hover:text-primary transition-colors py-1 px-2"
          >
            <span>Talk to the community</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

