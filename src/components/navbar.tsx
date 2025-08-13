import { Logo } from '@/components/icons/logo'
import Link from 'next/link'
import { ModeToggle } from './mode-toggle'
import { WidthWrapper } from './width-wrapper'

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b backdrop-blur-sm supports-backdrop-filter:bg-background/60">
      <WidthWrapper>
        <nav className="flex h-16 items-center justify-between">
          <Link href="/" className="flex h-full w-fit items-center gap-2">
            <Logo className="size-8" />
            <span className="font-bold">KRCOD</span>
          </Link>

          <ModeToggle />
        </nav>
      </WidthWrapper>
    </header>
  )
}
