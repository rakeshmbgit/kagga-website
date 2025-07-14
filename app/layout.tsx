import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'DVG & Mankuthimmana Kagga - Digital Repository',
  description: 'Explore the profound wisdom of D.V. Gundappa through Mankuthimmana Kagga. A comprehensive digital platform featuring all 945 Kaggas with translations, meanings, and video explanations.',
  keywords: 'DVG, Mankuthimmana Kagga, Kannada literature, Indian philosophy, spiritual wisdom, D.V. Gundappa',
  authors: [{ name: 'DVG & Mankuthimmana Kagga Team' }],
  creator: 'DVG & Mankuthimmana Kagga Team',
  publisher: 'DVG & Mankuthimmana Kagga Digital Repository',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://dvg-kagga.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'DVG & Mankuthimmana Kagga - Digital Repository',
    description: 'Explore the profound wisdom of D.V. Gundappa through Mankuthimmana Kagga.',
    url: 'https://dvg-kagga.com/',
    siteName: 'DVG & Mankuthimmana Kagga',
    images: [
      {
        url: 'http://localhost:3000/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'DVG & Mankuthimmana Kagga',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DVG & Mankuthimmana Kagga - Digital Repository',
    description: 'Explore the profound wisdom of D.V. Gundappa through Mankuthimmana Kagga.',
    images: ['http://localhost:3000/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="scroll-smooth" lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#0ea5e9" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>
        {children}
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#363636',
              color: '#fff',
            },
          }}
        />
      </body>
    </html>
  );
} 