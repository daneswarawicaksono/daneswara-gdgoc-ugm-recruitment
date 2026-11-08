import { useQuery } from '@tanstack/react-query';
import { apiService } from '@/services/api';
import { TrackItem, UnifiedCatalogItem } from '@/types';

export function useTracks() {
  return useQuery({
    queryKey: ['tracks'],
    queryFn: () => apiService.getTracks(),
  });
}

export function useTrackDetail(id: string) {
  return useQuery({
    queryKey: ['track', id],
    queryFn: () => apiService.getTrackById(id),
    enabled: Boolean(id),
  });
}

export function useCommunityStats() {
  return useQuery({
    queryKey: ['community-stats'],
    queryFn: () => apiService.getStats(),
  });
}

export function useFaqs(category?: string) {
  return useQuery({
    queryKey: ['faqs', category],
    queryFn: () => apiService.getFaqs(category),
  });
}

export function useJourney() {
  return useQuery({
    queryKey: ['journey'],
    queryFn: () => apiService.getJourney(),
  });
}

/**
 * Aggregates all recruitment catalog items (Tracks, Formats, Values, Roles)
 * to empower unified search, category filtering, and sorting.
 */
export function useUnifiedCatalog() {
  return useQuery({
    queryKey: ['unified-catalog'],
    queryFn: async (): Promise<UnifiedCatalogItem[]> => {
      const [tracks, formats, values, roles] = await Promise.all([
        apiService.getTracks(),
        apiService.getFormats(),
        apiService.getValues(),
        apiService.getRoles(),
      ]);

      const trackItems: UnifiedCatalogItem[] = tracks.map((t) => ({
        id: t.id,
        title: t.name,
        subtitle: t.tagline,
        description: t.description,
        type: 'track',
        categoryLabel: 'Learning Track',
        icon: t.icon,
        color: t.color,
        tags: t.skills,
        status: t.open ? 'Open' : 'Closed',
        isOpen: t.open,
        detailUrl: `/tracks/${t.id}`,
        raw: t,
      }));

      const formatItems: UnifiedCatalogItem[] = formats.map((f) => ({
        id: f.id,
        title: f.name,
        subtitle: `Format: ${f.cta.replace(/-/g, ' ')}`,
        description: f.description,
        type: 'format',
        categoryLabel: 'Learning Format',
        icon: f.icon,
        color: '#4285F4',
        tags: ['Collaboration', 'Cohort Learning', 'Interactive'],
        status: 'Active',
        isOpen: true,
        detailUrl: `/tracks/research-discovery`, // fallback or context
        raw: f,
      }));

      const valueItems: UnifiedCatalogItem[] = values.map((v) => ({
        id: v.id,
        title: v.title,
        subtitle: 'Community Core Value',
        description: v.description,
        type: 'value',
        categoryLabel: 'Community Value',
        icon: v.icon,
        color: v.color,
        tags: ['Culture', 'Community', 'Principles'],
        status: 'Core',
        isOpen: true,
        detailUrl: `/tracks/development`,
        raw: v,
      }));

      const roleItems: UnifiedCatalogItem[] = roles.map((r) => ({
        id: r.id,
        title: r.title,
        subtitle: `Role: ${r.cta.replace(/-/g, ' ')}`,
        description: r.description,
        type: 'role',
        categoryLabel: 'Contribution Role',
        icon: r.icon,
        color: '#EA4335',
        tags: ['Membership', 'Growth', 'Impact'],
        status: 'Open',
        isOpen: true,
        detailUrl: `/tracks/design-creativity`,
        raw: r,
      }));

      return [...trackItems, ...formatItems, ...valueItems, ...roleItems];
    },
  });
}
