import { Metadata } from 'next';
import { CatalogContainer } from '@/components/catalog/CatalogContainer';

export const metadata: Metadata = {
  title: 'Unified Catalog | GDGoC UGM Recruitment',
  description:
    'Browse through all recruitment tracks, community values, learning formats, and roles offered by Google Developer Groups on Campus UGM.',
};

export default function CatalogPage() {
  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">
            RECRUITMENT DIRECTORY
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold font-google text-neutral-900">
            Unified Community Catalog
          </h1>
          <p className="text-sm text-neutral-600">
            Search, filter, and discover all learning tracks, formats, community values, and roles.
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CatalogContainer />
      </div>
    </div>
  );
}
