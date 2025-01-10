import { Navbar } from '@/components/navbar'
import { cn } from '@/lib/utils'
import type { Metadata } from 'next'
import './globals.css'
import { WidthWrapper } from '@/components/width-wrapper'
import { Manrope } from 'next/font/google'
import { QRCodeProvider } from '@/context/qrcode'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Pet My Link | QR Code generator',
  description:
    'An open-source app for generating QR codes with adorable pet themes. ',
}

const manrope = Manrope({ subsets: ['latin'] })

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
          manrope.className,
        )}
      >
        <QRCodeProvider>
          <Navbar />
          <main className="mx-auto my-20 w-full max-w-screen-sm grow">
            <WidthWrapper>
              <div className="flex flex-col gap-10">{children}</div>
            </WidthWrapper>
          </main>
          <Footer />
        </QRCodeProvider>
      </body>
    </html>
  )
}
