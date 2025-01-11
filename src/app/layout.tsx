import { Navbar } from '@/components/navbar'
import { cn } from '@/lib/utils'
import type { Metadata } from 'next'
import './globals.css'
import { WidthWrapper } from '@/components/width-wrapper'
import { Plus_Jakarta_Sans as Manrope } from 'next/font/google'
import { QRCodeProvider } from '@/providers/qrcode-provider'
import { Footer } from '@/components/footer'
import { ThemeProvider } from '@/providers/theme-provider'
import { siteConfig } from '@/config'

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
}

const manrope = Manrope({ subsets: ['latin'] })

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
          manrope.className,
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
          </QRCodeProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
