import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'HealYourTrip - Your Gateway to World-Class Healthcare in India',
  description: 'Connect with top hospitals and doctors in India for affordable, transparent, and trusted medical tourism. Get free consultation, visa support, and world-class healthcare.',
  keywords: 'medical tourism, India healthcare, affordable surgery, top hospitals India, medical treatment India, healthcare tourism',
  authors: [{ name: 'HealYourTrip' }],
  openGraph: {
    title: 'HealYourTrip - World-Class Healthcare in India',
    description: 'Your Gateway to World-Class Healthcare in India - Affordable, Transparent, Trusted',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  )
}
