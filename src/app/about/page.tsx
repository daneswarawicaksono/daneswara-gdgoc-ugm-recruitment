import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { CommunityInvitationBanner } from '@/components/common/CommunityInvitationBanner';
import {
  ArrowRight,
  BookOpen,
  Users2,
  Code2,
  Heart,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About | GDGoC UGM',
  description:
    'Learn about Google Developer Groups on Campus Universitas Gadjah Mada: our story, community values, and contribution roles.',
};

export default function AboutPage() {
  const values = [
    {
      title: 'Stay curious',
      desc: 'Ask the extra question. Be willing to learn something outside your comfort zone.',
      barClass: 'bg-google-blue',
      icon: BookOpen,
      iconColor: 'text-google-blue',
      iconBg: 'bg-blue-50',
    },
    {
      title: 'Make room',
      desc: 'Welcome different perspectives, respect each other, and help people find their voice.',
      barClass: 'bg-google-red',
      icon: Users2,
      iconColor: 'text-google-red',
      iconBg: 'bg-red-50',
    },
    {
      title: 'Learn by building',
      desc: 'Try a small experiment. Share the rough version. Let feedback guide what comes next.',
      barClass: 'bg-google-yellow',
      icon: Code2,
      iconColor: 'text-amber-600',
      iconBg: 'bg-amber-50',
    },
    {
      title: 'Give something back',
      desc: 'Share a resource, explain what clicked, or help someone take their next step.',
      barClass: 'bg-google-green',
      icon: Heart,
      iconColor: 'text-google-green',
      iconBg: 'bg-emerald-50',
    },
  ];

  const roles = [
    {
      title: 'Come as a learner',
      desc: 'Explore a topic, join a discussion, and ask the question that’s been on your mind.',
    },
    {
      title: 'Grow as a collaborator',
      desc: 'Work with people whose skills complement yours. Discover what you can build together.',
    },
    {
      title: 'Give back as a contributor',
      desc: 'Share knowledge, support a learning session, or bring an idea for the community.',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <section className="pt-8 pb-16 sm:pb-24 lg:pt-14 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-500">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span>ABOUT GDGOC UGM</span>
              </div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-google text-neutral-900 tracking-tight leading-[1.06]">
                Built by students. <br />
                <span className="text-primary">For what’s next.</span>
              </h1>
              <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-xl">
                We’re a community of learners and makers at Universitas Gadjah Mada, connected by curiosity and the belief that technology can do good.
              </p>
              <div className="text-xs text-neutral-400 font-mono tracking-wider pt-2">
                UNIVERSITAS GADJAH MADA · 2026/2027
              </div>
            </div>

            {/* Right Community Mark Artwork from Figma */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[464px] aspect-[464/400] drop-shadow-md">
                <Image
                  src="/images/about-artwork.png"
                  alt="GDGoC UGM Community mark artwork"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 464px"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Why We Come Together */}
      <section className="py-20 sm:py-28 border-t border-neutral-200 bg-neutral-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-500">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span>WHY WE COME TOGETHER</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold font-google text-neutral-900 tracking-tight leading-tight">
                A bridge from <br />
                <span className="text-primary">“I wonder”</span> to <br />
                <span className="text-primary">“I made this.”</span>
              </h2>
            </div>

            <div className="lg:col-span-7 space-y-6 text-neutral-600 text-sm sm:text-base leading-relaxed">
              <p>
                Learning feels different when there’s someone to exchange ideas with, a problem you care about, and the space to give it a try.
              </p>
              <p>
                That’s the spirit of Google Developer Groups on Campus at UGM. We create room for students to explore technology, develop practical skills, and learn from one another.
              </p>
              <p>
                Our campus is the starting point. The questions we ask and the things we build can reach beyond it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. What Guides Us (Values) */}
      <section className="py-20 sm:py-28 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-3 mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-500">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span>WHAT GUIDES US</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold font-google text-neutral-900 tracking-tight leading-tight">
              Good technology starts with good company.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, idx) => {
              const Icon = v.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-7 border border-neutral-200 shadow-xs hover:shadow-card transition-all flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    {/* Top colored accent line as in Figma */}
                    <div className={`w-10 h-1 rounded-full ${v.barClass}`} />
                    <div className={`w-10 h-10 rounded-xl ${v.iconBg} ${v.iconColor} flex items-center justify-center`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold font-google text-neutral-900">
                      {v.title}
                    </h3>
                    <p className="text-neutral-600 text-sm leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. People, Not Labels (Roles) */}
      <section className="py-20 sm:py-28 border-t border-neutral-200 bg-neutral-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-500">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span>PEOPLE, NOT LABELS</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold font-google text-neutral-900 tracking-tight leading-tight">
                There’s more than one way to contribute.
              </h2>
              <p className="text-neutral-600 text-sm sm:text-base leading-relaxed pt-2">
                You can be learning one day and helping someone else the next. A community grows through both.
              </p>
            </div>

            <div className="lg:col-span-7 space-y-8">
              <div className="divide-y divide-neutral-200">
                {roles.map((r, idx) => (
                  <div key={idx} className="py-6 first:pt-0 last:pb-0 space-y-2">
                    <h3 className="text-xl font-bold font-google text-neutral-900">
                      {r.title}
                    </h3>
                    <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
                      {r.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-hover group"
                >
                  <span>Let’s talk about getting involved</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Responsibility Banner (Full-width gold container as in Figma) */}
      <section className="w-full bg-[#fef7e0] border-y border-amber-200 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8 lg:gap-12">
            <div className="w-16 h-16 sm:w-20 sm:h-20 text-[#FBBC05] shrink-0 flex items-center justify-center">
              <svg
                viewBox="0 0 100 100"
                fill="currentColor"
                className="w-full h-full text-[#FBBC05]"
              >
                <path d="M50 0C50 27.6142 27.6142 50 0 50C27.6142 50 50 72.3858 50 100C50 72.3858 72.3858 50 100 50C72.3858 50 50 27.6142 50 0Z" />
              </svg>
            </div>
            <div className="space-y-3 max-w-4xl">
              <h3 className="text-2xl sm:text-3xl font-bold font-google text-neutral-900 leading-snug">
                A space to learn. A responsibility to care.
              </h3>
              <p className="text-neutral-700 text-sm sm:text-base leading-relaxed">
                We want every conversation and learning experience to be respectful, inclusive, and constructive. Be kind, give credit, and make room for people who are just getting started.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Community Invitation CTA */}
      <CommunityInvitationBanner />
    </div>
  );
}
