import { CookieBanner } from '@/components/cookie-banner'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { WidthWrapper } from '@/components/width-wrapper'
import { siteConfig } from '@/config'
import { cn } from '@/lib/utils'
import { QRCodeProvider } from '@/providers/qrcode-provider'
import { ThemeProvider } from '@/providers/theme-provider'
import { GoogleAnalytics } from '@next/third-parties/google'
import type { Metadata } from 'next'
import { Plus_Jakarta_Sans as PlusJakartaSans } from 'next/font/google'
import './globals.css'

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  authors: [{ name: 'Aridan Pantoja', url: 'https://aridan.dev' }],
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    images: [
      {
        url: siteConfig.ogImage,
      },
    ],
  },
  icons: '/favicon.ico',
  generator: 'Next.js',
  category: 'website',
  metadataBase: new URL(siteConfig.url),
  manifest: '/manifest.json',
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
      },
    ],
  },
}

const plusJakartaSans = PlusJakartaSans({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body
        className={cn(
          `relative flex h-full flex-col antialiased`,
          plusJakartaSans.className,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          <QRCodeProvider>
            <Navbar />
            <main className="mx-auto my-20 w-full max-w-screen-sm grow">
              <WidthWrapper>
                <div className="flex flex-col gap-10">{children}</div>
              </WidthWrapper>
            </main>
            <Footer />
            <CookieBanner />
          </QRCodeProvider>
        </ThemeProvider>

        <GoogleAnalytics gaId="G-G21BX6W5D0" />
      </body>
    </html>
  )
}
