'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { TrackItem, JourneyStep, FaqItem } from '@/types';
import {
  ArrowLeft,
  CheckCircle2,
  Share2,
  Bookmark,
  Sparkles,
  Send,
  HelpCircle,
  ExternalLink,
  ChevronDown,
  X,
  UserCheck,
  Compass,
  ArrowRight,
  GraduationCap,
} from 'lucide-react';

interface TrackDetailViewProps {
  track: TrackItem;
  allTracks?: TrackItem[];
  journeySteps?: JourneyStep[];
  faqs?: FaqItem[];
}

export function TrackDetailView({
  track,
  allTracks = [],
  journeySteps = [],
  faqs = [],
}: TrackDetailViewProps) {
  const [copied, setCopied] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [applicationSubmitted, setApplicationSubmitted] = useState(false);
  const [applicationData, setApplicationData] = useState<{
    fullName: string;
    email: string;
    faculty: string;
    level: string;
    statement: string;
    ticketId?: string;
    submittedAt?: string;
  }>({
    fullName: '',
    email: '',
    faculty: 'Faculty of Engineering (FT)',
    level: 'Beginner',
    statement: '',
  });

  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Initialize bookmark state from localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(`gdgoc-bookmark-${track.id}`);
      if (stored === 'true') {
        setBookmarked(true);
      }
    }
  }, [track.id]);

  const handleToggleBookmark = () => {
    const next = !bookmarked;
    setBookmarked(next);
    if (typeof window !== 'undefined') {
      localStorage.setItem(`gdgoc-bookmark-${track.id}`, String(next));
    }
  };

  const handleShare = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!applicationData.fullName || !applicationData.email) return;

    const ticketId = `GDGOC-${track.id.substring(0, 3).toUpperCase()}-${Math.floor(
      1000 + Math.random() * 9000
    )}`;
    const submittedAt = new Date().toLocaleString('en-US', {
      dateStyle: 'medium',
      timeStyle: 'short',
    });

    setApplicationData((prev) => ({
      ...prev,
      ticketId,
      submittedAt,
    }));
    setApplicationSubmitted(true);
  };

  const otherTracks = allTracks.filter((t) => t.id !== track.id);

  return (
    <div className="space-y-12">
      {/* Top Breadcrumb & Action Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-neutral-300 text-xs font-semibold text-neutral-700 hover:text-neutral-900 hover:bg-neutral-50 shadow-subtle transition-all group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>Back to Overview & Catalog</span>
        </Link>

        <div className="flex items-center gap-2">
          <button
            onClick={handleToggleBookmark}
            className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full border text-xs font-semibold shadow-subtle transition-all ${
              bookmarked
                ? 'bg-google-yellow-tint border-google-yellow/40 text-neutral-900 font-bold'
                : 'bg-white border-neutral-300 text-neutral-700 hover:text-neutral-900 hover:bg-neutral-50'
            }`}
            title="Bookmark track"
          >
            <Bookmark className={`w-3.5 h-3.5 ${bookmarked ? 'fill-google-yellow text-google-yellow' : ''}`} />
            <span>{bookmarked ? 'Bookmarked' : 'Bookmark'}</span>
          </button>

          <button
            onClick={handleShare}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-neutral-300 text-xs font-semibold text-neutral-700 hover:text-neutral-900 hover:bg-neutral-50 shadow-subtle transition-all"
            title="Share track"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>{copied ? 'Link Copied!' : 'Share'}</span>
          </button>
        </div>
      </div>

      {/* Hero Header */}
      <div className="bg-white border border-neutral-300 rounded-3xl p-6 sm:p-10 relative overflow-hidden shadow-subtle">
        <div
          className="absolute -right-16 -top-16 w-80 h-80 rounded-full blur-3xl opacity-15 pointer-events-none"
          style={{ backgroundColor: track.color || '#1967d2' }}
        />

        <div className="relative z-10 flex flex-col md:flex-row md:items-start gap-6 sm:gap-8">
          <div
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl flex items-center justify-center text-4xl sm:text-5xl shadow-subtle flex-shrink-0 border border-neutral-200"
            style={{ backgroundColor: `${track.color}15` || '#eaf2ff' }}
          >
            {track.icon}
          </div>

          <div className="space-y-3 flex-1">
            <div className="flex flex-wrap items-center gap-2.5">
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border"
                style={{
                  backgroundColor: `${track.color}10`,
                  color: track.color,
                  borderColor: `${track.color}30`,
                }}
              >
                Official GDGoC Track
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-google-green-tint text-google-green border border-google-green/20">
                <span className="w-1.5 h-1.5 rounded-full bg-google-green animate-pulse" />
                {track.open ? 'Cohort Open for Applications' : 'Cohort Full'}
              </span>
              <span className="text-xs text-neutral-500 font-medium">
                Academic Year 2026/2027
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-google text-neutral-900 tracking-tight">
              {track.name}
            </h1>
            <p className="text-base sm:text-lg font-medium text-google-yellow italic">
              &ldquo;{track.tagline}&rdquo;
            </p>
            <p className="text-neutral-700 text-sm sm:text-base leading-relaxed max-w-3xl">
              {track.description}
            </p>
          </div>
        </div>
      </div>

      {/* Grid: What You Do & Key Competencies */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* What you do */}
        <div className="md:col-span-2 bg-white border border-neutral-300 rounded-3xl p-6 sm:p-8 space-y-4 flex flex-col justify-between shadow-subtle">
          <div>
            <div className="flex items-center gap-2 text-neutral-900 font-bold font-google text-lg sm:text-xl mb-3">
              <Sparkles className="w-5 h-5 text-primary" />
              <h3>What You Will Do in this Track</h3>
            </div>
            <p className="text-neutral-700 text-sm sm:text-base leading-relaxed mb-6">
              {track.what_you_do}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200 text-xs text-neutral-700 flex items-start sm:items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-google-green mt-1 sm:mt-0 flex-shrink-0" />
            <span>
              Real-world collaborative projects mentored by senior engineers and alumni at Universitas Gadjah Mada.
            </span>
          </div>
        </div>

        {/* Core Skills Matrix */}
        <div className="bg-white border border-neutral-300 rounded-3xl p-6 sm:p-8 space-y-4 shadow-subtle">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-google-yellow" />
            <h3 className="text-neutral-900 font-bold font-google text-lg">Curriculum Skills</h3>
          </div>
          <p className="text-xs text-neutral-600">
            Key areas of expertise developed during your membership:
          </p>
          <div className="flex flex-col gap-2 pt-2">
            {track.skills.map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-2xl bg-neutral-100 border border-neutral-200 text-xs font-medium text-neutral-800"
              >
                <CheckCircle2 className="w-4 h-4 text-google-green flex-shrink-0" />
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4-Step Learning Journey matching Figma "Learning journey" Frame */}
      {journeySteps && journeySteps.length > 0 && (
        <div className="bg-white border border-neutral-300 rounded-3xl p-6 sm:p-8 space-y-6 shadow-subtle">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                Structured Cohort Roadmap
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-google text-neutral-900 mt-1">
                A journey you can keep building on.
              </h2>
            </div>
            <span className="text-xs text-neutral-500">
              Source: Official GDGoC Roadmap Endpoint
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {journeySteps.map((step) => (
              <div
                key={step.id}
                className="bg-neutral-50 border border-neutral-200 rounded-2xl p-5 relative overflow-hidden flex flex-col justify-between group hover:border-primary/50 transition-colors"
              >
                <div>
                  <div className="text-3xl sm:text-4xl font-bold font-google text-primary mb-2">
                    0{step.step}
                  </div>
                  <h4 className="text-base font-bold font-google text-neutral-900 mb-2">
                    {step.title}
                  </h4>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-neutral-200 text-[11px] font-medium text-neutral-500">
                  Phase 0{step.step} Milestone
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Interactive Application CTA Box */}
      <div className="bg-neutral-50 border border-neutral-300 rounded-3xl p-6 sm:p-10 shadow-subtle">
        <div className="max-w-2xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-google-blue-tint border border-google-blue/20 text-primary text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Registration Intake Active</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold font-google text-neutral-900">
            Ready to Join the {track.name} Track?
          </h3>
          <p className="text-neutral-700 text-sm leading-relaxed">
            Collaborate with curious students across all UGM faculties. Whether you are taking your first steps or shipping production apps, GDGoC UGM offers the ecosystem to grow together.
          </p>

          {applicationSubmitted ? (
            <div className="p-5 rounded-2xl bg-google-green-tint border border-google-green/30 text-neutral-900 space-y-2 mt-4">
              <div className="flex items-center gap-2 text-google-green font-bold text-base">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                <span>Application Successfully Received!</span>
              </div>
              <p className="text-xs text-neutral-700 leading-relaxed">
                Thank you, <strong className="text-neutral-900">{applicationData.fullName}</strong>. Your expression of interest for the <strong className="text-neutral-900">{track.name}</strong> track has been registered with confirmation ticket <span className="font-mono text-primary font-bold">{applicationData.ticketId}</span>.
              </p>
              <div className="pt-2 text-xs text-neutral-600 flex items-center gap-4">
                <span>Timestamp: {applicationData.submittedAt}</span>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="text-primary font-medium underline hover:text-primary-hover"
                >
                  View Details
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary hover:bg-primary-hover text-white font-semibold text-xs shadow-sm hover:shadow active:scale-95 transition-all"
              >
                <Send className="w-3.5 h-3.5" />
                Register for this Track
              </button>
              <a
                href="https://gdgoc-ugm-api.vercel.app/api"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-5 py-3 rounded-full border border-neutral-300 text-neutral-700 hover:text-neutral-900 hover:bg-white text-xs font-medium transition-all"
              >
                <span>Read API Specs</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Frequently Asked Questions Section */}
      {faqs && faqs.length > 0 && (
        <div className="bg-white border border-neutral-300 rounded-3xl p-6 sm:p-8 space-y-6 shadow-subtle">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-google-yellow" />
              <h2 className="text-2xl font-bold font-google text-neutral-900">
                Frequently Asked Questions
              </h2>
            </div>
            <span className="text-xs text-neutral-500 font-medium">
              {faqs.length} answered questions
            </span>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={faq.id}
                  className="border border-neutral-200 rounded-2xl overflow-hidden bg-neutral-50 transition-colors"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between p-4 sm:p-5 text-left font-semibold font-google text-sm text-neutral-900 hover:text-primary transition-colors gap-4"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-neutral-500 flex-shrink-0 transition-transform ${
                        isOpen ? 'rotate-180 text-primary' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-neutral-700 leading-relaxed border-t border-neutral-200 pt-3">
                      <p>{faq.answer}</p>
                      {faq.category && (
                        <div className="mt-3">
                          <span className="inline-block px-3 py-1 rounded-full bg-white text-[11px] font-medium text-neutral-600 border border-neutral-300">
                            Category: {faq.category}
                          </span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Explore Other Tracks Switcher */}
      {otherTracks.length > 0 && (
        <div className="space-y-4 pt-6 border-t border-neutral-300">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Compass className="w-5 h-5 text-google-red" />
              <h3 className="text-xl font-bold font-google text-neutral-900">
                Explore Other Tracks
              </h3>
            </div>
            <Link
              href="/"
              className="text-xs text-primary font-medium hover:underline flex items-center gap-1"
            >
              <span>View all catalog</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {otherTracks.map((other) => (
              <Link
                key={other.id}
                href={`/tracks/${other.id}`}
                className="p-5 sm:p-6 rounded-3xl bg-white hover:bg-neutral-50 border border-neutral-300 hover:border-primary/50 shadow-subtle hover:shadow-card transition-all flex items-start gap-4 group"
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 border border-neutral-200"
                  style={{ backgroundColor: `${other.color}15` }}
                >
                  {other.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold font-google text-neutral-900 group-hover:text-primary transition-colors truncate">
                      {other.name}
                    </h4>
                    <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                  <p className="text-xs text-google-yellow italic truncate mt-0.5">
                    {other.tagline}
                  </p>
                  <p className="text-xs text-neutral-600 line-clamp-2 mt-1">
                    {other.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Interactive Registration Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white border border-neutral-300 rounded-3xl max-w-lg w-full p-6 sm:p-8 relative shadow-modal space-y-6">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 p-2 text-neutral-500 hover:text-neutral-900 rounded-full hover:bg-neutral-100 transition-all"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {applicationSubmitted ? (
              <div className="space-y-4 text-center py-4">
                <div className="w-16 h-16 rounded-full bg-google-green-tint text-google-green border border-google-green/20 flex items-center justify-center mx-auto">
                  <UserCheck className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold font-google text-neutral-900">
                  Registration Confirmed!
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  Thank you for applying to the <strong className="text-neutral-900">{track.name}</strong> track. Your application has been logged for the 2026/2027 intake cohort.
                </p>

                <div className="bg-neutral-50 rounded-2xl p-4 border border-neutral-200 text-left space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Ticket ID:</span>
                    <span className="font-mono text-primary font-bold">
                      {applicationData.ticketId}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Candidate:</span>
                    <span className="text-neutral-900 font-medium">{applicationData.fullName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Email:</span>
                    <span className="text-neutral-900">{applicationData.email}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Faculty:</span>
                    <span className="text-neutral-900">{applicationData.faculty}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Track:</span>
                    <span className="text-primary font-medium">{track.name}</span>
                  </div>
                </div>

                <button
                  onClick={() => setIsModalOpen(false)}
                  className="w-full py-3 rounded-full bg-primary hover:bg-primary-hover text-white font-semibold text-xs transition-all shadow-sm"
                >
                  Close & Return to Track
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold font-google text-neutral-900">
                    Apply for {track.name} Track
                  </h3>
                  <p className="text-xs text-neutral-600 mt-1">
                    Fill out the form below to register your interest for the recruitment cohort.
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={applicationData.fullName}
                    onChange={(e) =>
                      setApplicationData({ ...applicationData, fullName: e.target.value })
                    }
                    placeholder="e.g. Daneswara Ramadhana Rafif Wicaksono"
                    className="w-full px-4 py-2.5 rounded-xl bg-neutral-100 border border-neutral-300 text-sm text-neutral-900 focus:outline-none focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={applicationData.email}
                    onChange={(e) =>
                      setApplicationData({ ...applicationData, email: e.target.value })
                    }
                    placeholder="name@mail.ugm.ac.id"
                    className="w-full px-4 py-2.5 rounded-xl bg-neutral-100 border border-neutral-300 text-sm text-neutral-900 focus:outline-none focus:border-primary"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">
                      Faculty / College
                    </label>
                    <select
                      value={applicationData.faculty}
                      onChange={(e) =>
                        setApplicationData({ ...applicationData, faculty: e.target.value })
                      }
                      className="w-full px-3 py-2.5 rounded-xl bg-neutral-100 border border-neutral-300 text-xs text-neutral-800 focus:outline-none focus:border-primary"
                    >
                      <option value="Faculty of Engineering (FT)">Engineering (FT)</option>
                      <option value="Faculty of MIPA (FMIPA)">MIPA (FMIPA)</option>
                      <option value="Faculty of Economics & Business (FEB)">FEB</option>
                      <option value="Faculty of Social & Political Sciences (Fisipol)">Fisipol</option>
                      <option value="Vocational College (SV)">Vocational College (SV)</option>
                      <option value="Other UGM Faculty">Other UGM Faculty</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">
                      Skill Level
                    </label>
                    <select
                      value={applicationData.level}
                      onChange={(e) =>
                        setApplicationData({ ...applicationData, level: e.target.value })
                      }
                      className="w-full px-3 py-2.5 rounded-xl bg-neutral-100 border border-neutral-300 text-xs text-neutral-800 focus:outline-none focus:border-primary"
                    >
                      <option value="Beginner">Beginner (Curious to learn)</option>
                      <option value="Intermediate">Intermediate (Have built projects)</option>
                      <option value="Advanced">Advanced (Experienced practitioner)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Why do you want to join this track?
                  </label>
                  <textarea
                    rows={3}
                    value={applicationData.statement}
                    onChange={(e) =>
                      setApplicationData({ ...applicationData, statement: e.target.value })
                    }
                    placeholder="Tell us about your learning goals and what you hope to build..."
                    className="w-full px-4 py-2.5 rounded-xl bg-neutral-100 border border-neutral-300 text-xs text-neutral-900 focus:outline-none focus:border-primary resize-none"
                  />
                </div>

                <div className="pt-2 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-5 py-2.5 rounded-full border border-neutral-300 text-xs font-medium text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 transition-all"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary hover:bg-primary-hover text-white text-xs font-semibold shadow-sm transition-all"
                  >
                    <Send className="w-3.5 h-3.5" />
                    Submit Application
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
