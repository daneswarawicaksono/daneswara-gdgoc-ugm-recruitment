import { Metadata } from 'next';
import Link from 'next/link';
import { GDGLogo } from '@/components/ui/GDGLogo';
import { CommunityInvitationBanner } from '@/components/common/CommunityInvitationBanner';
import {
  ArrowRight,
  Sparkles,
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
      color: '#4285F4',
      bgClass: 'bg-blue-500/10 text-google-blue',
      barClass: 'bg-google-blue',
      icon: BookOpen,
    },
    {
      title: 'Make room',
      desc: 'Welcome different perspectives, respect each other, and help people find their voice.',
      color: '#EA4335',
      bgClass: 'bg-red-500/10 text-google-red',
      barClass: 'bg-google-red',
      icon: Users2,
    },
    {
      title: 'Learn by building',
      desc: 'Try a small experiment. Share the rough version. Let feedback guide what comes next.',
      color: '#FBBC05',
      bgClass: 'bg-amber-500/10 text-amber-600',
      barClass: 'bg-google-yellow',
      icon: Code2,
    },
    {
      title: 'Give something back',
      desc: 'Share a resource, explain what clicked, or help someone take their next step.',
      color: '#34A853',
      bgClass: 'bg-emerald-500/10 text-google-green',
      barClass: 'bg-google-green',
      icon: Heart,
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
      <section className="pt-8 pb-16 sm:pb-24 lg:pt-12 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-500">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span>ABOUT GDGOC UGM</span>
              </div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-google text-neutral-900 tracking-tight leading-[1.08]">
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

            {/* Right Artwork Emblem */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md aspect-square rounded-3xl bg-gradient-to-tr from-amber-100/50 via-blue-100/50 to-emerald-100/50 p-8 flex items-center justify-center border border-white/70 shadow-lg backdrop-blur-xs">
                <div className="bg-white/90 backdrop-blur-md rounded-3xl p-10 border border-white shadow-card flex flex-col items-center justify-center gap-4 transform -rotate-2 hover:rotate-0 transition-transform">
                  <GDGLogo size={80} />
                  <div className="text-center pt-2">
                    <span className="font-google font-bold text-neutral-900 text-lg block">
                      GDGoC UGM
                    </span>
                    <span className="text-xs text-neutral-500 font-medium">
                      Student Community
                    </span>
                  </div>
                </div>
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
                  className="bg-white rounded-3xl p-7 border border-neutral-200/80 shadow-xs hover:shadow-card transition-all flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    {/* Top colored accent bar */}
                    <div className={`w-8 h-1 rounded-full ${v.barClass}`} />
                    <div className={`w-10 h-10 rounded-xl ${v.bgClass} flex items-center justify-center`}>
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

      {/* 5. Responsibility Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-10">
        <div className="bg-[#fff7df] border border-amber-200/80 rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-start md:items-center gap-6 sm:gap-8">
          <div className="w-14 h-14 rounded-2xl bg-[#FBBC05] text-white flex items-center justify-center shrink-0 shadow-sm">
            <Sparkles className="w-7 h-7" />
          </div>
          <div className="space-y-2">
            <h3 className="text-xl sm:text-2xl font-bold font-google text-neutral-900 leading-snug">
              A space to learn. A responsibility to care.
            </h3>
            <p className="text-neutral-700 text-sm sm:text-base leading-relaxed">
              We want every conversation and learning experience to be respectful, inclusive, and constructive. Be kind, give credit, and make room for people who are just getting started.
            </p>
          </div>
        </div>
      </div>

      {/* 6. Community Invitation CTA */}
      <CommunityInvitationBanner />
    </div>
  );
}

