import { Metadata } from 'next';
import { LandingHero } from '@/components/landing/LandingHero';
import {
  TickerBar,
  NotJustLearning,
  LearningTracksPreview,
  LearningFormatsPreview,
  ProjectCampus,
  FirstMoveJourney,
  InclusionBanner,
  LandingFaq,
} from '@/components/landing/LandingSections';
import { CommunityInvitationBanner } from '@/components/common/CommunityInvitationBanner';
import { CatalogContainer } from '@/components/catalog/CatalogContainer';

export const metadata: Metadata = {
  title: 'GDGoC UGM | Google Developer Groups on Campus Universitas Gadjah Mada',
  description:
    'A place for curious minds at Universitas Gadjah Mada to learn, connect, and build technology that matters. Explore our learning tracks, formats, and community.',
};

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero */}
      <LandingHero />

      {/* 2. Value Ticker */}
      <TickerBar />

      {/* 3. Not Just Learning */}
      <NotJustLearning />

      {/* 4. Tracks Preview */}
      <LearningTracksPreview />

      {/* 5. Formats Preview */}
      <LearningFormatsPreview />

      {/* 6. Campus Project */}
      <ProjectCampus />

      {/* 7. First Move Journey Steps */}
      <FirstMoveJourney />

      {/* 8. Inclusion Banner */}
      <InclusionBanner />

      {/* 9. FAQs */}
      <LandingFaq />

      {/* 10. Community Invitation CTA Banner */}
      <CommunityInvitationBanner />

      {/* 11. Interactive Unified Catalog Explorer */}
      <section id="catalog" className="py-16 sm:py-24 border-t border-neutral-200 bg-neutral-50/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              EXPLORE OUR RECRUITMENT OFFERINGS
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-google text-neutral-900">
              Interactive Community Catalog
            </h2>
            <p className="text-sm text-neutral-600">
              Filter and search through all learning tracks, formats, community values, and roles.
            </p>
          </div>
        </div>
        <CatalogContainer />
      </section>
    </div>
  );
}
