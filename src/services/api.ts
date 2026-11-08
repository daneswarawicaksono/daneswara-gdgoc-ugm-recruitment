import {
  ApiResponse,
  TrackItem,
  LearningFormat,
  CommunityValue,
  CommunityRole,
  JourneyStep,
  FaqItem,
  CommunityStats,
  InquiryCategory,
} from '@/types';

const BASE_URL = 'https://gdgoc-ugm-api.vercel.app/api';

async function fetchFromApi<T>(endpoint: string): Promise<T> {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    headers: {
      'Content-Type': 'application/json',
    },
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error(`API Error [${res.status}]: Failed to fetch ${endpoint}`);
  }

  const json: ApiResponse<T> = await res.json();
  if (!json.success) {
    throw new Error(`API failed response for ${endpoint}`);
  }

  return json.data;
}

export const apiService = {
  // Tracks
  getTracks: (): Promise<TrackItem[]> => fetchFromApi<TrackItem[]>('/tracks'),
  getTrackById: (id: string): Promise<TrackItem> => fetchFromApi<TrackItem>(`/tracks/${id}`),

  // Formats
  getFormats: (): Promise<LearningFormat[]> => fetchFromApi<LearningFormat[]>('/formats'),

  // Community Values
  getValues: (): Promise<CommunityValue[]> => fetchFromApi<CommunityValue[]>('/values'),

  // Community Roles
  getRoles: (): Promise<CommunityRole[]> => fetchFromApi<CommunityRole[]>('/roles'),

  // Journey
  getJourney: (): Promise<JourneyStep[]> => fetchFromApi<JourneyStep[]>('/journey'),

  // FAQs
  getFaqs: (category?: string): Promise<FaqItem[]> =>
    fetchFromApi<FaqItem[]>(category ? `/faqs?category=${category}` : '/faqs'),

  // Community Stats
  getStats: (): Promise<CommunityStats> => fetchFromApi<CommunityStats>('/stats'),

  // Inquiry Categories
  getInquiryCategories: (): Promise<InquiryCategory[]> =>
    fetchFromApi<InquiryCategory[]>('/inquiry-categories'),
};
