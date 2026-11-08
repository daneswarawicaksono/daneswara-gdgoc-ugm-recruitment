'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Search,
  Palette,
  Code2,
  BookOpen,
  Wrench,
  Users2,
  Sparkles,
  ChevronDown,
  Terminal,
} from 'lucide-react';

export function TickerBar() {
  return (
    <div className="border-y border-neutral-200 bg-neutral-50/60 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center sm:justify-between gap-6 text-xs sm:text-sm font-medium text-neutral-700">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#4285F4]" />
            <span>Learn by doing</span>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#EA4335]" />
            <span>Connect across disciplines</span>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#34A853]" />
            <span>Build with purpose</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function NotJustLearning() {
  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-500">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span>A PLACE TO START</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold font-google text-neutral-900 tracking-tight leading-tight">
              Not just learning tech. <br />
              Finding your people.
            </h2>
            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-hover group"
              >
                <span>More about GDGoC UGM</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-5 text-neutral-600 text-sm sm:text-base leading-relaxed">
            <p>
              Google Developer Groups on Campus, Universitas Gadjah Mada brings students together around one simple idea: <strong>we can go further when we learn with each other.</strong>
            </p>
            <p>
              From your first line of code to your next proudest idea, there’s room to ask questions, share what you know, and try something new.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-3 py-1 rounded-full bg-neutral-100 text-xs font-medium text-neutral-700 border border-neutral-200">
                Student-led
              </span>
              <span className="px-3 py-1 rounded-full bg-neutral-100 text-xs font-medium text-neutral-700 border border-neutral-200">
                Peer-powered
              </span>
              <span className="px-3 py-1 rounded-full bg-neutral-100 text-xs font-medium text-neutral-700 border border-neutral-200">
                Community-first
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function LearningTracksPreview() {
  const tracks = [
    {
      id: 'research-discovery',
      badge: 'EXPLORE THE WHY',
      themeColor: 'blue',
      badgeBg: 'bg-blue-50 text-google-blue border-blue-200',
      title: 'Research & discovery',
      description:
        'Ask better questions, understand people, and turn insight into a clear problem worth solving.',
      topics: 'Problem framing · User research · Product thinking',
      icon: Search,
      iconBg: 'bg-blue-500/10 text-google-blue',
    },
    {
      id: 'design-creativity',
      badge: 'MAKE IT MEANINGFUL',
      themeColor: 'yellow',
      badgeBg: 'bg-amber-50 text-amber-700 border-amber-200',
      title: 'Design & creativity',
      description:
        'Translate ideas into thoughtful experiences, from a first sketch to a prototype people can use.',
      topics: 'UI/UX · Visual storytelling · Prototyping',
      icon: Palette,
      iconBg: 'bg-amber-500/10 text-amber-600',
    },
    {
      id: 'development',
      badge: 'BRING IDEAS TO LIFE',
      themeColor: 'green',
      badgeBg: 'bg-emerald-50 text-google-green border-emerald-200',
      title: 'Development',
      description:
        'Learn the tools, write the code, and build useful things with people who enjoy figuring it out.',
      topics: 'Web & mobile · Cloud · AI foundations',
      icon: Code2,
      iconBg: 'bg-emerald-500/10 text-google-green',
    },
  ];

  return (
    <section id="tracks" className="py-20 sm:py-28 bg-neutral-50/50 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-500">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span>FIND YOUR STARTING POINT</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold font-google text-neutral-900 tracking-tight leading-tight">
              Many interests. <br />
              One shared journey.
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 max-w-xl">
              Follow what excites you. Explore a track, then connect the dots with others.
            </p>
          </div>
          <Link
            href="/overview#tracks"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-hover group shrink-0"
          >
            <span>See the overview</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tracks.map((t) => {
            const Icon = t.icon;
            return (
              <div
                key={t.id}
                className="bg-white rounded-3xl p-7 border border-neutral-200/80 shadow-xs hover:shadow-hover transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Artwork Illustration Header */}
                  <div className="w-full h-44 rounded-2xl bg-neutral-50 border border-neutral-100 flex items-center justify-center mb-6 relative overflow-hidden group-hover:bg-neutral-100/70 transition-colors">
                    <div className={`w-16 h-16 rounded-2xl ${t.iconBg} flex items-center justify-center transform group-hover:scale-110 transition-transform`}>
                      <Icon className="w-8 h-8" />
                    </div>
                  </div>

                  {/* Badge */}
                  <div className={`inline-block px-3 py-0.5 rounded-full text-[11px] font-semibold border ${t.badgeBg} mb-3 uppercase tracking-wider`}>
                    {t.badge}
                  </div>

                  {/* Heading */}
                  <h3 className="text-xl font-bold font-google text-neutral-900 mb-2.5">
                    {t.title}
                  </h3>

                  {/* Description */}
                  <p className="text-neutral-600 text-sm leading-relaxed mb-6">
                    {t.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-100">
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
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function LearningFormatsPreview() {
  const formats = [
    {
      title: 'Study together',
      description:
        'Work through foundations in peer learning sessions. Bring your questions to a space with a clear topic.',
      linkText: 'Study groups & open discussions',
      icon: BookOpen,
    },
    {
      title: 'Try it hands-on',
      description:
        'Explore a tool or technique in a workshop, then put that practice to a small experiment.',
      linkText: 'Workshops & focused sessions',
      icon: Wrench,
    },
    {
      title: 'Share the process',
      description:
        'Exchange feedback, explain your decisions, and learn from different ways of thinking.',
      linkText: 'Project circles & peer feedback',
      icon: Users2,
    },
  ];

  return (
    <section className="py-20 sm:py-28 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-500">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span>HOW PEOPLE LEARN HERE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-google text-neutral-900 tracking-tight leading-tight">
            Less watching. More making.
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 max-w-xl">
            Learn in ways that turn a new concept into something you can actually use.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {formats.map((f, idx) => {
            const Icon = f.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 border border-neutral-200/80 shadow-xs hover:border-neutral-300 transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-primary flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold font-google text-neutral-900">
                    {f.title}
                  </h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    {f.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-neutral-100 text-xs font-medium text-primary">
                  {f.linkText}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function ProjectCampus() {
  return (
    <section className="py-20 sm:py-28 bg-neutral-50/50 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Mockup Card */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-neutral-200/90 shadow-md">
              {/* Mockup Header */}
              <div className="flex items-center justify-between pb-6 border-b border-neutral-100 mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#EA4335]" />
                  <span className="w-3 h-3 rounded-full bg-[#FBBC05]" />
                  <span className="w-3 h-3 rounded-full bg-[#34A853]" />
                </div>
                <div className="font-mono text-xs text-neutral-400">
                  IDEAS → PROTOTYPE
                </div>
              </div>

              {/* Mockup Content */}
              <div className="space-y-4">
                <h4 className="text-2xl font-bold font-google text-neutral-900">
                  A little less friction. <br />
                  A better campus day.
                </h4>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="px-3 py-1 rounded-full bg-blue-50 text-google-blue text-xs font-semibold">
                    Discover
                  </span>
                  <span className="px-3 py-1 rounded-full bg-emerald-50 text-google-green text-xs font-semibold">
                    Connect
                  </span>
                  <span className="px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-semibold">
                    Share
                  </span>
                </div>
                <p className="text-xs text-neutral-500 pt-4 border-t border-neutral-100">
                  Start with a routine campus need. Build a solution with peers.
                </p>
              </div>
            </div>
          </div>

          {/* Right Text */}
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-500">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span>MAKE SOMETHING THAT MATTERS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold font-google text-neutral-900 tracking-tight leading-tight">
              Your next project could start on campus.
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
              What if finding a study partner, sharing resources, or navigating campus felt easier? Small, familiar problems can be the beginning of meaningful work.
            </p>
            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
              Bring research, design, and development together. Try an idea, get feedback, and make the next version better.
            </p>
            <div className="pt-2">
              <Link
                href="/overview"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-hover group"
              >
                <span>Explore project-based learning</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FirstMoveJourney() {
  const steps = [
    {
      num: '01',
      title: 'Follow your curiosity',
      desc: 'Explore the tracks and find a topic you want to understand better.',
    },
    {
      num: '02',
      title: 'Learn alongside others',
      desc: 'Join a learning opportunity, ask a question, and share your perspective.',
    },
    {
      num: '03',
      title: 'Turn learning into action',
      desc: 'Practice through a project, exchange feedback, and pass something on.',
    },
  ];

  return (
    <section className="py-20 sm:py-28 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-500">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span>MAKE YOUR FIRST MOVE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-google text-neutral-900 tracking-tight leading-tight">
            You don’t need to have it all figured out.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((s, idx) => (
            <div key={idx} className="space-y-3 border-l-2 border-primary/20 pl-6">
              <div className="text-3xl sm:text-4xl font-extrabold font-google text-primary">
                {s.num}
              </div>
              <h3 className="text-lg font-bold font-google text-neutral-900">
                {s.title}
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function InclusionBanner() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-10">
      <div className="bg-[#eaf5ed] border border-emerald-100 rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-start md:items-center gap-6 sm:gap-8">
        <div className="w-14 h-14 rounded-2xl bg-google-green text-white flex items-center justify-center shrink-0 shadow-sm">
          <Sparkles className="w-7 h-7" />
        </div>
        <div className="space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold font-google text-neutral-900 leading-snug">
            Different majors. Different starting points. A place for all of them.
          </h3>
          <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
            You don’t have to be the most experienced person in the room. Curiosity, kindness, and a willingness to learn are a good place to start.
          </p>
        </div>
      </div>
    </div>
  );
}

export function LandingFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Do I need to know how to code?',
      a: 'No. Start with an interest in technology and a willingness to learn. Research and design are part of the journey, too.',
    },
    {
      q: 'Is this only for computer science students?',
      a: 'Different disciplines bring different perspectives. Explore the overview to find a starting point that fits your interests.',
    },
    {
      q: 'How can I find learning opportunities?',
      a: 'Keep an eye on @gdgoc.ugm for community updates. You can also use the contact page to ask about getting involved.',
    },
  ];

  return (
    <section className="py-20 sm:py-28 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-500">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span>A FEW QUICK ANSWERS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold font-google text-neutral-900 tracking-tight leading-tight">
              Wondering where to begin?
            </h2>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-hover group"
              >
                <span>Ask us a question</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 divide-y divide-neutral-200">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={idx} className="py-5">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between text-left group"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base sm:text-lg font-bold font-google text-neutral-900 group-hover:text-primary transition-colors pr-4">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-neutral-400 group-hover:text-primary transition-transform duration-200 shrink-0 ${
                        isOpen ? 'rotate-180 text-primary' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="pt-3 text-neutral-600 text-sm sm:text-base leading-relaxed pr-6">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

