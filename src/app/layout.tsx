import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ReactQueryProvider } from '@/components/layout/ReactQueryProvider';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'GDGoC Universitas Gadjah Mada — Recruitment 2026/2027',
  description:
    'Explore learning tracks, formats, and community roles at GDGoC UGM. Built by Daneswara Ramadhana Rafif Wicaksono for the Front-End Hacker Assignment.',
  keywords: [
    'GDGoC UGM',
    'Google Developer Groups on Campus',
    'Universitas Gadjah Mada',
    'Front-End Hacker',
    'Recruitment',
  ],
  authors: [{ name: 'Daneswara Ramadhana Rafif Wicaksono' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-white text-neutral-900 flex flex-col font-sans selection:bg-google-blue-tint selection:text-google-blue`}>
        <ReactQueryProvider>
          <Navbar />
          <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {children}
          </main>
          <Footer />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
