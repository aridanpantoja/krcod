import { Logo } from '@/components/icons/logo'
import { QRCodeForm } from '@/components/qrcode-form'
import { QRCodeOptions } from '@/components/qrcode-options'
import { QRCodePreview } from '@/components/qrcode-preview'
import { Separator } from '@/components/ui/separator'
import { siteConfig } from '@/config'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <section>
        <div className="flex w-full flex-col items-center justify-center text-pretty text-center md:items-start md:text-start">
          <Logo className="size-24" />

          <h1 className="mb-3 mt-7 md:mb-5 md:mt-10">KRCOD</h1>
          <p className="leading-7 text-muted-foreground">
            KRCOD is a tool for create and customize QR Codes.{' '}
            <Link
              href={siteConfig.links.github}
              className="text-primary underline underline-offset-4"
            >
              Star the repo here ⭐.
            </Link>
          </p>
        </div>
      </section>

      <Separator />

      <section className="grid grid-cols-1 gap-8 min-[520px]:grid-cols-2">
        <div className="flex w-full flex-col justify-center gap-3">
          <h2 className="font-bold">Steps</h2>
          <div className="space-y-1">
            <QRCodeForm />
            <QRCodeOptions />
          </div>
        </div>

        <QRCodePreview />
      </section>
    </>
  )
}
