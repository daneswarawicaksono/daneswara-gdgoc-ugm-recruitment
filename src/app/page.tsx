import { Metadata } from 'next';
import { CatalogContainer } from '@/components/catalog/CatalogContainer';

export const metadata: Metadata = {
  title: 'Dashboard & Catalog | GDGoC UGM Recruitment',
  description:
    'Browse through all recruitment tracks, community values, learning formats, and roles offered by Google Developer Groups on Campus UGM.',
};

export default function HomePage() {
  return <CatalogContainer />;
}
