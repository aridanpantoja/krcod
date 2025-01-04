import type { Metadata } from 'next'
import { DM_Sans as DMSans } from 'next/font/google'
import './globals.css'

export const metadata: Metadata = {
  title: 'Pet My Link | QR Code generator',
  description:
    'An open-source app for generating QR codes with adorable pet themes. ',
}

const dmSans = DMSans({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.className} antialiased`}>{children}</body>
    </html>
  )
}
