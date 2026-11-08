import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { apiService } from '@/services/api';
import { TrackDetailView } from '@/components/detail/TrackDetailView';

interface TrackPageProps {
  params: {
    id: string;
  };
}

// Generate dynamic metadata for SEO & social sharing
export async function generateMetadata({ params }: TrackPageProps): Promise<Metadata> {
  try {
    const track = await apiService.getTrackById(params.id);
    return {
      title: `${track.name} Track | GDGoC UGM Recruitment`,
      description: `${track.tagline} — ${track.description}`,
      openGraph: {
        title: `${track.name} Track — GDGoC Universitas Gadjah Mada`,
        description: track.tagline,
      },
    };
  } catch {
    return {
      title: 'Track Details | GDGoC UGM',
      description: 'Explore learning track offerings at GDGoC UGM.',
    };
  }
}

// Pre-render known static tracks
export async function generateStaticParams() {
  try {
    const tracks = await apiService.getTracks();
    return tracks.map((t) => ({ id: t.id }));
  } catch {
    return [
      { id: 'research-discovery' },
      { id: 'design-creativity' },
      { id: 'development' },
    ];
  }
}

export default async function TrackDetailPage({ params }: TrackPageProps) {
  try {
    const [track, allTracks, journeySteps, faqs] = await Promise.all([
      apiService.getTrackById(params.id),
      apiService.getTracks().catch(() => []),
      apiService.getJourney().catch(() => []),
      apiService.getFaqs().catch(() => []),
    ]);

    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <TrackDetailView
          track={track}
          allTracks={allTracks}
          journeySteps={journeySteps}
          faqs={faqs}
        />
      </div>
    );
  } catch (error) {
    notFound();
  }
}
