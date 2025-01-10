import { WidthWrapper } from '@/components/width-wrapper'
import { siteConfig } from '@/config'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="w-full border-t border-border/25">
      <WidthWrapper>
        <div className="flex h-14 items-center justify-center">
          <p className="text-center text-sm text-muted-foreground">
            Built by{' '}
            <Link
              href="https://github.com/aridanpantoja"
              className="text-primary underline underline-offset-4"
            >
              aridan
            </Link>
            . The source code is available on{' '}
            <Link
              href={siteConfig.links.github}
              className="text-primary underline underline-offset-4"
            >
              Github
            </Link>
            .
          </p>
        </div>
      </WidthWrapper>
    </footer>
  )
}
