import type { Metadata, Viewport } from 'next';
import { Suspense } from 'react';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import ScrollButtons from '@/components/layout/scroll-buttons';
import ScrollRestoration from '@/components/utils/scroll-restoration';

export const metadata: Metadata = {
  metadataBase: new URL('https://website-anexas-1.vercel.app'),
  title: 'Anexas | Digital Solutions Agency',
  description:
    'Anexas Digital is a digital agency specializing in brand identity, digital experiences, creative content, marketing, and transformative technology solutions.',
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        sizes: 'any',
      },
      {
        url: '/icons/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        url: '/icons/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
    ],
    apple: '/apple-touch-icon.png',
  },
  
    manifest: '/manifest.webmanifest',


  openGraph: {
    title: 'Anexas | Digital Solutions Agency',
    description:
      'Anexas Digital is a digital agency specializing in brand identity, digital experiences, creative content, marketing, and transformative technology solutions.',
    url: '/',
    siteName: 'Anexas Digital',
    images: [
      {
        url: '/images/og-image-1200x630.png',
        width: 1200,
        height: 630,
        alt: 'Anexas Digital — Shaping Brands. Transforming Digital Experiences.',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Anexas | Digital Solutions Agency',
    description:
      'Anexas Digital is a digital agency specializing in brand identity, digital experiences, creative content, marketing, and transformative technology solutions.',
    images: ['/images/og-image-1200x630.png'],
  },

};

export const viewport: Viewport = {
  themeColor: '#053B3B',
  colorScheme: 'dark',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Audiowide&family=Orbitron:wght@400;700&family=Kanit:wght@400;700&family=Space+Mono&family=Electrolize&family=Montserrat:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className={cn("font-body antialiased")}>
           {children}
          <Toaster />
          <ScrollButtons />

          <Suspense fallback={null}>
          <ScrollRestoration />
          </Suspense>
        </body>
    </html>
  );
}
