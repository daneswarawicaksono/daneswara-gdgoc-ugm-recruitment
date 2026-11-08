import { Metadata } from 'next';
import { LandingHero } from '@/components/landing/LandingHero';
import {
  TickerBar,
  NotJustLearning,
  LearningTracksPreview,
  LearningFormatsPreview,
  ProjectCampus,
  FirstMoveJourney,
  BelongingStatement,
  LandingFaq,
} from '@/components/landing/LandingSections';
import { CommunityInvitationBanner } from '@/components/common/CommunityInvitationBanner';

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

      {/* 8. Belonging Statement (Full width mint green) */}
      <BelongingStatement />

      {/* 9. FAQs */}
      <LandingFaq />

      {/* 10. Community Invitation CTA Banner */}
      <CommunityInvitationBanner />
    </div>
  );
}
