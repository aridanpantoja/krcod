import Link from 'next/link'
import { WidthWrapper } from './width-wrapper'
import { QrCode } from 'lucide-react'
import { ModeToggle } from './mode-toggle'

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <WidthWrapper>
        <nav className="flex h-14 items-center justify-between">
          <Link href="/" className="flex w-fit items-center gap-2">
            <QrCode />
            <span className="font-bold">KRCOD</span>
          </Link>

          <ModeToggle />
        </nav>
      </WidthWrapper>
    </header>
  )
}
