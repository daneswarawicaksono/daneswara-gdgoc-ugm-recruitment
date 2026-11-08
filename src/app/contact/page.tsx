'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  ArrowUpRight,
  Plus,
  Compass,
  HelpCircle,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

export default function ContactPage() {
  // Topic selection & form state
  const [selectedCategory, setSelectedCategory] = useState('joining');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    organization: '',
    category: 'joining',
    subject: '',
    message: '',
    consent: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const topics = [
    {
      id: 'joining',
      title: 'Joining & learning',
      desc: 'Getting started, learning tracks, and participation',
      icon: ArrowUpRight,
    },
    {
      id: 'collaboration',
      title: 'Collaboration',
      desc: 'Community activities and shared ideas',
      icon: Plus,
    },
    {
      id: 'speaking',
      title: 'Speaking & sharing',
      desc: 'Workshops, knowledge sharing, and mentorship',
      icon: Compass,
    },
    {
      id: 'general',
      title: 'General inquiry',
      desc: 'Anything else you’d like to ask',
      icon: HelpCircle,
    },
  ];

  const handleTopicClick = (topicId: string) => {
    setSelectedCategory(topicId);
    setFormData((prev) => ({ ...prev, category: topicId }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.email || !formData.message || !formData.consent) {
      alert('Please fill in all required fields and accept the consent checkbox.');
      return;
    }

    setIsSubmitting(true);
    // Simulate API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <section className="pt-8 pb-12 sm:pb-16 lg:pt-12 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-500">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span>CONTACT · LET’S CONNECT</span>
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-google text-neutral-900 tracking-tight leading-[1.08]">
              Good things start with{' '}
              <span className="text-primary">hello.</span>
            </h1>
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed pt-1">
              A question, a collaboration, or an idea for the community? Tell us what’s on your mind.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Main Contact Grid */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Topics & Social Updates */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-2">
                <h3 className="text-xl font-bold font-google text-neutral-900">
                  What brings you here?
                </h3>
                <p className="text-sm text-neutral-600">
                  Pick the closest topic in the form. We’ll take it from there.
                </p>
              </div>

              {/* 4 Topic Selectors */}
              <div className="space-y-3">
                {topics.map((t) => {
                  const Icon = t.icon;
                  const isSelected = selectedCategory === t.id;
                  return (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => handleTopicClick(t.id)}
                      className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all flex items-start gap-4 ${
                        isSelected
                          ? 'bg-[#edf4ff] border-primary/40 shadow-xs ring-1 ring-primary/20'
                          : 'bg-white border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50/50'
                      }`}
                    >
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${
                          isSelected
                            ? 'bg-primary text-white'
                            : 'bg-neutral-100 text-neutral-600'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-bold font-google text-sm text-neutral-900 mb-0.5">
                          {t.title}
                        </div>
                        <div className="text-xs text-neutral-500 leading-relaxed">
                          {t.desc}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Community Updates Callout */}
              <div className="bg-[#fff7df] border border-amber-200/80 rounded-3xl p-6 sm:p-7 space-y-3">
                <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-amber-800">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                  <span>STAY CURIOUS, STAY CONNECTED</span>
                </div>
                <h4 className="text-lg font-bold font-google text-neutral-900">
                  Looking for community updates?
                </h4>
                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                  Follow <strong className="font-semibold text-neutral-900">@gdgoc.ugm</strong> for learning opportunities and what’s happening in the community.
                </p>
                <div className="pt-1">
                  <a
                    href="https://instagram.com/gdgoc.ugm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary-hover"
                  >
                    <span>Find @gdgoc.ugm</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Send Us a Message Form Card */}
            <div className="lg:col-span-7">
              <div className="bg-neutral-50/80 border border-neutral-200/90 rounded-3xl p-6 sm:p-10 shadow-xs">
                <div className="flex items-center justify-between pb-6 border-b border-neutral-200/80 mb-6">
                  <div>
                    <h2 className="text-2xl font-bold font-google text-neutral-900">
                      Send us a message
                    </h2>
                    <p className="text-xs text-neutral-500 pt-1">
                      Fields marked * are required.
                    </p>
                  </div>
                  <ArrowUpRight className="w-6 h-6 text-neutral-400" />
                </div>

                {submitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-google-green mx-auto flex items-center justify-center">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold font-google text-neutral-900">
                      Thank you for reaching out!
                    </h3>
                    <p className="text-sm text-neutral-600 max-w-md mx-auto">
                      We’ve received your message. Our core team at GDGoC Universitas Gadjah Mada will get back to you shortly.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          firstName: '',
                          lastName: '',
                          email: '',
                          organization: '',
                          category: 'joining',
                          subject: '',
                          message: '',
                          consent: false,
                        });
                      }}
                      className="px-6 py-2.5 rounded-full bg-neutral-900 text-white text-xs font-semibold hover:bg-neutral-800 transition-colors"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* First & Last Name */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-neutral-700">
                          First name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Your first name"
                          value={formData.firstName}
                          onChange={(e) =>
                            setFormData({ ...formData, firstName: e.target.value })
                          }
                          className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 bg-white text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-neutral-700">
                          Last name
                        </label>
                        <input
                          type="text"
                          placeholder="Your last name"
                          value={formData.lastName}
                          onChange={(e) =>
                            setFormData({ ...formData, lastName: e.target.value })
                          }
                          className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 bg-white text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-neutral-700">
                        Email address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="Where we can reply to you"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 bg-white text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      />
                    </div>

                    {/* University / organization */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-neutral-700">
                        University / organization
                      </label>
                      <input
                        type="text"
                        placeholder="Where you study or work (optional)"
                        value={formData.organization}
                        onChange={(e) =>
                          setFormData({ ...formData, organization: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 bg-white text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      />
                    </div>

                    {/* Inquiry Category */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-neutral-700">
                        Inquiry category *
                      </label>
                      <select
                        value={formData.category}
                        onChange={(e) => {
                          setFormData({ ...formData, category: e.target.value });
                          setSelectedCategory(e.target.value);
                        }}
                        className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 bg-white text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      >
                        <option value="joining">Joining & learning</option>
                        <option value="collaboration">Collaboration</option>
                        <option value="speaking">Speaking & sharing</option>
                        <option value="general">General inquiry</option>
                      </select>
                    </div>

                    {/* Subject */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-neutral-700">
                        Subject *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="A short introduction to your question"
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData({ ...formData, subject: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 bg-white text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      />
                    </div>

                    {/* Message */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-neutral-700">
                        Your message *
                      </label>
                      <textarea
                        required
                        rows={4}
                        placeholder="Tell us a little about your question or idea..."
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 bg-white text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                      />
                    </div>

                    {/* Consent */}
                    <div className="flex items-start gap-2.5 pt-1">
                      <input
                        type="checkbox"
                        id="consent"
                        required
                        checked={formData.consent}
                        onChange={(e) =>
                          setFormData({ ...formData, consent: e.target.checked })
                        }
                        className="mt-1 rounded text-primary focus:ring-primary"
                      />
                      <label htmlFor="consent" className="text-xs text-neutral-600 leading-snug">
                        I agree that the information I share can be used to respond to this inquiry.
                      </label>
                    </div>

                    {/* Submit Button & Security Note */}
                    <div className="pt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-primary hover:bg-primary-hover text-white text-sm font-semibold shadow-xs hover:shadow-md transition-all active:scale-95 disabled:opacity-50"
                      >
                        <span>{isSubmitting ? 'Sending...' : 'Send message'}</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                      <span className="text-[11px] text-neutral-400">
                        Please don’t include passwords or sensitive personal information.
                      </span>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. A Little Guidance Section */}
      <section className="py-20 sm:py-24 border-t border-neutral-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-500">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span>A LITTLE GUIDANCE</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold font-google text-neutral-900 tracking-tight leading-tight">
                Help us understand your idea.
              </h2>
              <div className="pt-2">
                <Link
                  href="/overview"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-hover group"
                >
                  <span>Explore the programs first</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6 divide-y divide-neutral-200">
              <div className="space-y-1.5 pb-6">
                <h4 className="text-base font-bold font-google text-neutral-900">
                  For learning questions
                </h4>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Tell us which topic interests you and where you are in your learning journey.
                </p>
              </div>

              <div className="space-y-1.5 py-6">
                <h4 className="text-base font-bold font-google text-neutral-900">
                  For collaborations
                </h4>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Share the idea, who it’s for, and how you imagine working with the community.
                </p>
              </div>

              <div className="space-y-1.5 pt-6">
                <h4 className="text-base font-bold font-google text-neutral-900">
                  Not sure which category fits?
                </h4>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Choose General inquiry. A clear question is always a good starting point.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

