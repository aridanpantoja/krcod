import { Error } from '@/components/icons/error'
import { buttonVariants } from '@/components/ui/button'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex w-full flex-col items-center justify-center text-pretty text-center">
      <Error className="size-60" />
      <h1 className="my-4">Not Found</h1>
      <p className="mb-6 text-sm text-muted-foreground">
        Oops! The page you&apos;re looking for doesn&apos;t exist. It might have
        been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link href="/" className={buttonVariants()}>
        Go back to home
      </Link>
    </div>
  )
}
