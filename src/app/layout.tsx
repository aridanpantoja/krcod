import { cn } from '@/lib/utils'
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
    <html lang="en" className="h-full">
      <body
        className={cn(
          `relative flex h-full flex-col antialiased`,
          dmSans.className,
        )}
      >
        <main className="my-16 flex grow items-center justify-center">
          {children}
        </main>
      </body>
    </html>
  )
}
