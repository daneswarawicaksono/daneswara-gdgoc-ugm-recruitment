import React from 'react';
import { CommunityStats } from '@/types';
import { Users, Presentation, Rocket, Compass } from 'lucide-react';

interface StatsBannerProps {
  stats?: CommunityStats;
  isLoading: boolean;
}

export function StatsBanner({ stats, isLoading }: StatsBannerProps) {
  const statItems = [
    {
      label: 'Community Members',
      value: stats ? `${stats.community_members}+` : '500+',
      icon: <Users className="w-5 h-5 text-google-blue" />,
      sub: 'Students across UGM faculties',
      accent: 'border-l-4 border-l-google-blue',
    },
    {
      label: 'Workshops Held',
      value: stats ? `${stats.workshops_held}+` : '20+',
      icon: <Presentation className="w-5 h-5 text-google-yellow" />,
      sub: 'Hands-on practical sessions',
      accent: 'border-l-4 border-l-google-yellow',
    },
    {
      label: 'Projects Shipped',
      value: stats ? `${stats.projects_shipped}+` : '10+',
      icon: <Rocket className="w-5 h-5 text-google-green" />,
      sub: 'Open source & impact tools',
      accent: 'border-l-4 border-l-google-green',
    },
    {
      label: 'Active Tracks',
      value: stats ? `${stats.active_tracks}` : '3',
      icon: <Compass className="w-5 h-5 text-google-red" />,
      sub: 'Research, Design & Dev',
      accent: 'border-l-4 border-l-google-red',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
      {statItems.map((item, idx) => (
        <div
          key={idx}
          className={`bg-white border border-neutral-300 rounded-2xl p-5 flex flex-col justify-between shadow-subtle hover:shadow-card transition-all ${item.accent}`}
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-neutral-600 uppercase tracking-wider">
              {item.label}
            </span>
            <div className="p-2 rounded-xl bg-neutral-100 border border-neutral-200">
              {item.icon}
            </div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-bold font-google text-neutral-900 tracking-tight">
              {isLoading ? (
                <div className="h-8 w-20 bg-neutral-200 rounded animate-pulse" />
              ) : (
                item.value
              )}
            </div>
            <p className="text-xs text-neutral-500 mt-1">{item.sub}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
