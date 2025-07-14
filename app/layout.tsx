import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from 'react-hot-toast';
import FontOptimizer from '@/components/FontOptimizer';
import ServiceWorker from '@/components/ServiceWorker';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mankutimmana Kagga by D.V. Gundappa - Complete 945 Verses with Meanings | Free Online Repository',
  description: 'Discover all 945 verses of Mankutimmana Kagga by D.V. Gundappa with English translations, Kannada meanings, and philosophical insights. Free digital repository of Kannada literature\'s greatest masterpiece. Read online, search by theme, and explore Indian philosophy.',
  keywords: 'Mankutimmana Kagga, D.V. Gundappa, DVG, Kannada literature, Kannada poetry, Indian philosophy, spiritual wisdom, Kannada verses, 945 Kaggas, Kannada philosophical poems, DVG Kannada poet, Mankutimmana Kagga meaning, Kannada spiritual literature, free online repository, complete Kagga verses, philosophical poems in Kannada, who is D V Gundappa, Kagga meaning in Kannada',
  authors: [{ name: 'D.V. Gundappa (DVG)', url: 'https://en.wikipedia.org/wiki/D._V._Gundappa' }],
  creator: 'DVG & Mankutimmana Kagga Digital Repository',
  publisher: 'DVG & Mankutimmana Kagga Digital Repository',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://dvg-kagga.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en': '/en',
      'kn': '/kn',
    },
  },
  openGraph: {
    title: 'Mankutimmana Kagga by D.V. Gundappa - Complete 945 Verses with Meanings',
    description: 'Discover all 945 verses of Mankutimmana Kagga by D.V. Gundappa with English translations, Kannada meanings, and philosophical insights. Free digital repository of Kannada literature\'s greatest masterpiece.',
    url: '/',
    siteName: 'Mankutimmana Kagga - D.V. Gundappa Digital Repository',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Mankutimmana Kagga by D.V. Gundappa - Complete 945 Verses',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mankutimmana Kagga by D.V. Gundappa - Complete 945 Verses',
    description: 'Discover all 945 verses of Mankutimmana Kagga with translations and meanings. Free Kannada literature repository.',
    images: ['/og-image.jpg'],
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Mankutimmana Kagga by D.V. Gundappa",
    "description": "Complete digital repository of Mankutimmana Kagga by D.V. Gundappa featuring all 945 verses with English translations and Kannada meanings",
    "url": process.env.NEXT_PUBLIC_SITE_URL || "https://dvg-kagga.com",
    "author": {
      "@type": "Person",
      "name": "D.V. Gundappa",
      "alternateName": "DVG",
      "birthDate": "1887-03-17",
      "deathDate": "1975-10-07",
      "nationality": "Indian",
      "jobTitle": "Poet, Philosopher, Journalist",
      "description": "Renowned Kannada writer, philosopher, and journalist best known for Mankutimmana Kagga",
      "award": [
        "Padma Bhushan",
        "Sahitya Akademi Award"
      ],
      "knowsAbout": [
        "Kannada Literature",
        "Indian Philosophy",
        "Journalism",
        "Poetry"
      ]
    },
    "publisher": {
      "@type": "Organization",
      "name": "DVG & Mankutimmana Kagga Digital Repository"
    },
    "inLanguage": ["en", "kn"],
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${process.env.NEXT_PUBLIC_SITE_URL || "https://dvg-kagga.com"}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Mankutimmana Kagga?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Mankutimmana Kagga is a collection of 945 philosophical verses written by D.V. Gundappa in 1943. It's considered the 'Bhagavad Gita of Kannada' for its profound wisdom and universal appeal. Each verse explores themes of life, dharma, karma, and spirituality in simple yet profound language."
        }
      },
      {
        "@type": "Question",
        "name": "How many verses are in Mankutimmana Kagga?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Mankutimmana Kagga contains exactly 945 verses, each exploring themes of life, dharma, karma, and spirituality. All 945 verses are available with English translations and Kannada meanings on our digital repository."
        }
      },
      {
        "@type": "Question",
        "name": "Who wrote Mankutimmana Kagga?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Mankutimmana Kagga was written by D.V. Gundappa (DVG), a renowned Kannada poet, philosopher, and journalist from Karnataka, India. He is considered one of the greatest literary figures in Kannada literature."
        }
      },
      {
        "@type": "Question",
        "name": "What is the meaning of Kagga in Kannada?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Kagga in Kannada refers to a type of philosophical poem or verse. Mankutimmana Kagga specifically contains 945 such verses that explore deep philosophical concepts through simple, memorable poetry."
        }
      },
      {
        "@type": "Question",
        "name": "When was Mankutimmana Kagga published?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Mankutimmana Kagga was published in 1943 by D.V. Gundappa. It has since become one of the most important works in Kannada literature and Indian philosophy."
        }
      }
    ]
  };

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
        
        {/* Hreflang tags for multilingual SEO */}
        <link rel="alternate" hrefLang="en" href={`${process.env.NEXT_PUBLIC_SITE_URL || 'https://dvg-kagga.com'}/en`} />
        <link rel="alternate" hrefLang="kn" href={`${process.env.NEXT_PUBLIC_SITE_URL || 'https://dvg-kagga.com'}/kn`} />
        <link rel="alternate" hrefLang="x-default" href={`${process.env.NEXT_PUBLIC_SITE_URL || 'https://dvg-kagga.com'}/en`} />
        
        {/* Canonical URL */}
        <link rel="canonical" href={`${process.env.NEXT_PUBLIC_SITE_URL || 'https://dvg-kagga.com'}/`} />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqData),
          }}
        />
      </head>
      <body className={inter.className}>
        <FontOptimizer />
        <ServiceWorker />
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