import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { QrCode } from 'lucide-react'
import Link from 'next/link'
import { QRCodeSVG } from 'qrcode.react'

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
              href="https://github.com/aridanpantoja/krcod"
              className="text-primary underline underline-offset-4"
            >
              Star the repo here ⭐.
            </Link>
          </p>
        </div>
      </section>

      <Separator />

      <section className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="flex flex-col justify-center gap-3">
          <h2 className="font-bold">Steps</h2>
          <div className="space-y-1">
            <Button
              variant="ghost"
              className="h-fit w-full justify-start p-2 text-base text-muted-foreground"
            >
              <div>🖋️</div>
              <div>Add information</div>
            </Button>
            <Button
              variant="ghost"
              className="h-fit w-full justify-start p-2 text-base text-muted-foreground line-through"
            >
              <div>🎨</div>
              <div>Change color</div>
            </Button>
            <Button
              variant="ghost"
              className="h-fit w-full justify-start p-2 text-base text-muted-foreground line-through"
            >
              <div>📷</div>
              <div>Add logo</div>
            </Button>
            <Button
              variant="ghost"
              className="h-fit w-full justify-start p-2 text-base text-muted-foreground line-through"
            >
              <div>✅</div>
              <div>Download QR Code</div>
            </Button>
          </div>
        </div>

        <div className="flex items-center justify-center md:justify-end">
          <div className="flex w-full items-center justify-center rounded-2xl border-2 border-dashed p-2 dark:bg-white md:w-fit">
            <QRCodeSVG
              opacity={false ? 1 : 0.25}
              marginSize={1}
              size={208}
              value={'https://krcod.com'}
              fgColor={'black'}
              imageSettings={{
                src: `/pets/cute-dog.png`,
                x: undefined,
                y: undefined,
                height: 64,
                width: 64,
                excavate: true,
              }}
              title="Your QR Code in Seconds"
              level="H"
              className="h-full"
            />
          </div>
        </div>
      </section>
    </>
  )
}
