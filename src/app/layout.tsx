import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Madani Agency',
  description: 'Il tuo nuovo reparto vendite.',
  icons: {
    icon: [
      { url: '/madanicircle.png', sizes: '32x32', type: 'image/png' },
      { url: '/madanicircle.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/madanicircle.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/madanicircle.png',
  },
  openGraph: {
    title: 'Madani Agency',
    description: 'Il tuo nuovo reparto vendite.',
    url: 'https://madani.agency',
    siteName: 'Madani Agency',
    images: [
      {
        url: '/og-image.png', // This is the image that will show when sharing
        width: 1200,
        height: 630,
        alt: 'Madani Agency - Il tuo nuovo reparto vendite',
      },
    ],
    locale: 'it_IT',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Madani Agency',
    description: 'Il tuo nuovo reparto vendite.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-inter antialiased`}>{children}</body>
    </html>
  )
} 