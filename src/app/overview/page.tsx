import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  ArrowDown,
  BookOpen,
  Wrench,
  Users2,
  Lightbulb,
} from 'lucide-react';
import { CommunityInvitationBanner } from '@/components/common/CommunityInvitationBanner';

export const metadata: Metadata = {
  title: 'Programs & Overview | GDGoC UGM',
  description:
    'Explore GDGoC UGM learning tracks, compare outcomes, discover hands-on formats, and follow the 4-step community learning journey.',
};

export default function OverviewPage() {
  const tracks = [
    {
      id: 'research-discovery',
      image: '/images/track-research.png',
      badge: 'EXPLORE THE WHY',
      themeClass: 'text-google-blue',
      title: 'Research & discovery',
      description:
        'Ask better questions, understand people, and turn insight into a clear problem worth solving.',
      topics: 'Problem framing · User research · Product thinking',
    },
    {
      id: 'design-creativity',
      image: '/images/track-design.png',
      badge: 'MAKE IT MEANINGFUL',
      themeClass: 'text-amber-600',
      title: 'Design & creativity',
      description:
        'Translate ideas into thoughtful experiences, from a first sketch to a prototype people can use.',
      topics: 'UI/UX · Visual storytelling · Prototyping',
    },
    {
      id: 'development',
      image: '/images/track-development.png',
      badge: 'BRING IDEAS TO LIFE',
      themeClass: 'text-google-green',
      title: 'Development',
      description:
        'Learn the tools, write the code, and build useful things with people who enjoy figuring it out.',
      topics: 'Web & mobile · Cloud · AI foundations',
    },
  ];

  const comparisonRows = [
    {
      pathway: 'Research & discovery',
      practice: 'Listening, problem framing, and testing assumptions',
      outcome: 'A research insight and a focused problem brief',
    },
    {
      pathway: 'Design & creativity',
      practice: 'Ideation, user flows, and prototype feedback',
      outcome: 'An interactive prototype and a design story',
    },
    {
      pathway: 'Development',
      practice: 'Coding, testing, and connecting tools',
      outcome: 'A working demo with a clear explanation',
    },
  ];

  const formats = [
    {
      title: 'Study groups',
      desc: 'Build foundations with peers. Work through a topic, compare approaches, and make space for questions.',
      tag: 'Best for · Learning the fundamentals',
      icon: BookOpen,
      iconBg: 'bg-blue-50 text-google-blue',
    },
    {
      title: 'Hands-on workshops',
      desc: 'Get introduced to a tool or method, follow a practical exercise, and take away something to keep exploring.',
      tag: 'Best for · Trying something new',
      icon: Wrench,
      iconBg: 'bg-emerald-50 text-google-green',
    },
    {
      title: 'Project circles',
      desc: 'Connect research, design, and development around a shared problem. Learn through making and feedback.',
      tag: 'Best for · Putting skills into practice',
      icon: Users2,
      iconBg: 'bg-amber-50 text-amber-600',
    },
    {
      title: 'Knowledge sharing',
      desc: 'Walk through an idea, share a lesson from your process, and discover how other students approach their work.',
      tag: 'Best for · Exchanging perspectives',
      icon: Lightbulb,
      iconBg: 'bg-purple-50 text-purple-600',
    },
  ];

  const journeySteps = [
    {
      num: '01',
      title: 'Discover',
      desc: 'Explore a topic and find the questions you want to answer.',
    },
    {
      num: '02',
      title: 'Practice',
      desc: 'Try an exercise, walk through a challenge, and ask for help.',
    },
    {
      num: '03',
      title: 'Build',
      desc: 'Apply your learning to a small idea with a clear purpose.',
    },
    {
      num: '04',
      title: 'Share',
      desc: 'Show your process, gather feedback, and help someone else.',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <section className="pt-8 pb-14 sm:pb-20 lg:pt-14 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-500">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span>OVERVIEW · PROGRAMS & LEARNING TRACKS</span>
              </div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-google text-neutral-900 tracking-tight leading-[1.06]">
                Find your spark. <br />
                <span className="text-primary">Build your own path.</span>
              </h1>
              <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-xl">
                Explore how research, creativity, and development connect. Start with one interest. Grow through practice and the people around you.
              </p>
            </div>

            {/* Right Artwork Graphic from Figma */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[280px] aspect-square drop-shadow-md">
                <Image
                  src="/images/overview-artwork.png"
                  alt="GDGoC UGM Research glass artwork"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 280px"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Sub-navigation quick jumps */}
      <div className="sticky top-20 z-40 bg-white/95 backdrop-blur-md border-y border-neutral-200 py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-6 sm:gap-8 overflow-x-auto text-xs sm:text-sm font-medium text-neutral-600 no-scrollbar">
            <a href="#tracks" className="hover:text-primary transition-colors flex items-center gap-1.5 whitespace-nowrap">
              <span>Learning tracks</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </a>
            <a href="#matrix" className="hover:text-primary transition-colors flex items-center gap-1.5 whitespace-nowrap">
              <span>Outcomes comparison</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </a>
            <a href="#formats" className="hover:text-primary transition-colors flex items-center gap-1.5 whitespace-nowrap">
              <span>Learning formats</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </a>
            <a href="#journey" className="hover:text-primary transition-colors flex items-center gap-1.5 whitespace-nowrap">
              <span>Your learning journey</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </a>
            <a href="#starting-point" className="hover:text-primary transition-colors flex items-center gap-1.5 whitespace-nowrap">
              <span>Find a starting point</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* 3. Tracks Section */}
      <section id="tracks" className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-3 mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-500">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span>EXPLORE YOUR INTERESTS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold font-google text-neutral-900 tracking-tight leading-tight">
              Three ways in. <br />
              Plenty of ways forward.
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 max-w-xl">
              These pathways are starting points, not boxes. Follow one deeply or bring different skills together.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tracks.map((t) => (
              <div
                key={t.id}
                className="bg-white rounded-3xl border border-neutral-200 shadow-xs hover:shadow-card transition-all flex flex-col justify-between overflow-hidden group"
              >
                <div>
                  <div className="relative w-full h-[232px] bg-neutral-50 border-b border-neutral-100 overflow-hidden">
                    <Image
                      src={t.image}
                      alt={t.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 400px"
                      className="object-cover group-hover:scale-102 transition-transform duration-300"
                    />
                  </div>

                  <div className="p-7">
                    <div className={`text-[11px] font-bold uppercase tracking-wider mb-2 ${t.themeClass}`}>
                      {t.badge}
                    </div>
                    <h3 className="text-2xl font-bold font-google text-neutral-900 mb-3">
                      {t.title}
                    </h3>
                    <p className="text-neutral-600 text-sm leading-relaxed mb-6">
                      {t.description}
                    </p>
                  </div>
                </div>

                <div className="px-7 pb-7 pt-0">
                  <div className="pt-4 border-t border-neutral-200">
                    <div className="text-xs text-neutral-500 font-medium mb-3">
                      {t.topics}
                    </div>
                    <Link
                      href={`/tracks/${t.id}`}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-primary group-hover:text-primary-hover transition-colors"
                    >
                      <span>Explore this track</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Comparison Table (Matrix) */}
      <section id="matrix" className="py-20 sm:py-24 border-t border-neutral-200 bg-neutral-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-3 mb-12">
            <h2 className="text-2xl sm:text-4xl font-bold font-google text-neutral-900 tracking-tight">
              From an interest to something you can show.
            </h2>
          </div>

          <div className="bg-white rounded-3xl border border-neutral-200 shadow-xs overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-neutral-200 bg-neutral-50/80 text-xs font-semibold uppercase tracking-wider text-neutral-500">
                    <th className="py-4 px-6 sm:px-8 w-1/4">Pathway</th>
                    <th className="py-4 px-6 sm:px-8 w-5/12">What you can practice</th>
                    <th className="py-4 px-6 sm:px-8 w-5/12">A possible outcome</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200 text-sm">
                  {comparisonRows.map((r, idx) => (
                    <tr key={idx} className="hover:bg-neutral-50/50 transition-colors">
                      <td className="py-5 px-6 sm:px-8 font-bold font-google text-neutral-900">
                        {r.pathway}
                      </td>
                      <td className="py-5 px-6 sm:px-8 text-neutral-600 leading-relaxed">
                        {r.practice}
                      </td>
                      <td className="py-5 px-6 sm:px-8 text-neutral-600 leading-relaxed">
                        {r.outcome}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="text-xs text-neutral-500 pt-4">
            Illustrative learning outcomes. Topics and opportunities are shared through community updates.
          </div>
        </div>
      </section>

      {/* 5. Ways to Learn (Formats) */}
      <section id="formats" className="py-20 sm:py-28 border-t border-neutral-200 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-3 mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-500">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span>WAYS TO LEARN</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold font-google text-neutral-900 tracking-tight leading-tight">
              The format changes. <br />
              The curiosity stays.
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 max-w-xl">
              Explore the kinds of experiences that help you move from understanding to doing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {formats.map((f, idx) => {
              const Icon = f.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-8 border border-neutral-200 shadow-xs hover:shadow-card transition-all flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className={`w-10 h-10 rounded-xl ${f.iconBg} flex items-center justify-center`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-2xl font-bold font-google text-neutral-900">
                      {f.title}
                    </h3>
                    <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
                      {f.desc}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-neutral-200 text-xs font-medium text-neutral-500">
                    {f.tag}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Learning Journey Roadmap */}
      <section id="journey" className="py-20 sm:py-28 border-t border-neutral-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-3 mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-500">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span>PROGRESS, NOT PERFECTION</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold font-google text-neutral-900 tracking-tight leading-tight">
              A journey you can keep building on.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {journeySteps.map((j, idx) => (
              <div key={idx} className="space-y-3">
                <div className="text-3xl sm:text-4xl font-extrabold font-google text-primary">
                  {j.num}
                </div>
                <h3 className="text-xl font-bold font-google text-neutral-900">
                  {j.title}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {j.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. New to Tech? Banner (Full-width gold container as in Figma) */}
      <section id="starting-point" className="w-full bg-[#fef7e0] border-y border-amber-200 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="space-y-3 max-w-sm">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-800">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                <span>A STARTING POINT FOR EVERYONE</span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold font-google text-neutral-900 leading-tight">
                New to tech? <br />
                That’s a starting point, <br />
                too.
              </h3>
            </div>
            <div className="space-y-4 max-w-xl">
              <p className="text-neutral-700 text-sm sm:text-base leading-relaxed">
                You don’t have to have a finished portfolio or the perfect track choice. Pick a topic you’re curious about. If you’re unsure, tell us what interests you and we can start a conversation.
              </p>
              <div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-hover group"
                >
                  <span>Ask about getting started</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Community Invitation CTA */}
      <CommunityInvitationBanner />
    </div>
  );
}
