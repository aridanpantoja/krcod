import { QRCodeForm } from '@/components/qrcode-form'
import { QRCodeOptions } from '@/components/qrcode-options'
import { QRCodePreview } from '@/components/qrcode-preview'
import { Separator } from '@/components/ui/separator'
import { siteConfig } from '@/config'
import { QrCode } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <section>
        <div className="flex w-full flex-col items-center justify-center gap-5 text-pretty text-center md:items-start md:text-start">
          <div className="flex w-fit items-center justify-center rounded-full border bg-foreground p-4 text-background">
            <QrCode className="size-6" />
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight lg:text-4xl">
            KRCOD
          </h1>
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

      <section className="flex flex-col gap-8 min-[520px]:flex-row">
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
