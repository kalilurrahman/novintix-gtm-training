import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/ui/Footer'

export const metadata: Metadata = {
  title: {
    default: 'NovintiX — The MedTech Lifecycle Partner',
    template: '%s | NovintiX',
  },
  description:
    'One partner for the entire MedTech lifecycle — from concept to compliance to scale. No hand-offs, no surprises.',
  metadataBase: new URL('https://novintix.com'),
  keywords: [
    'MedTech',
    'Medical Devices',
    'V&V Verification and Validation',
    'ProofX',
    'FDA QMSR',
    'EU MDR',
    'ISO 13485',
    'IEC 62304',
    '21 CFR Part 11',
    'SaMD',
  ],
  openGraph: {
    siteName: 'NovintiX',
    title: 'NovintiX — The MedTech Lifecycle Partner',
    description:
      'One partner for the entire MedTech lifecycle — from concept to compliance to scale. No hand-offs, no surprises.',
    type: 'website',
    locale: 'en_US',
    url: 'https://novintix.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'NovintiX',
    url: 'https://novintix.com',
    description: 'The MedTech Lifecycle Partner',
    foundingDate: '2023',
    sameAs: ['https://www.linkedin.com/company/novintix'],
    address: [
      {
        '@type': 'PostalAddress',
        addressLocality: 'Exton',
        addressRegion: 'PA',
        addressCountry: 'US',
        description: 'US HQ & FDA Gateway',
      },
      {
        '@type': 'PostalAddress',
        addressLocality: 'Dublin',
        addressCountry: 'IE',
        description: 'EU Regulatory Gateway',
      },
      {
        '@type': 'PostalAddress',
        addressLocality: 'Coimbatore',
        addressCountry: 'IN',
        description: 'APAC Engineering & Validation Hub',
      },
    ],
  }

  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-[#0A1B2E]">
        <Navbar />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
