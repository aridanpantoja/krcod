import { QRCodeForm } from '@/components/qrcode-form'
import { Badge } from '@/components/ui/badge'
import { WidthWrapper } from '@/components/width-wrapper'

export default function Home() {
  return (
    <>
      <section>
        <WidthWrapper>
          <div className="flex flex-col items-center gap-8">
            <div className="mx-auto flex w-full max-w-prose flex-col items-center justify-center">
              <Badge variant="outline" className="px-4 py-1 text-sm">
                This is an open source project ⭐
              </Badge>

              <h1 className="mt-3 text-center text-4xl font-extrabold tracking-tight lg:text-5xl lg:leading-tight">
                Transform Your Links into Adorable QR Codes!
              </h1>
              <p className="mt-4 text-pretty text-center leading-7 text-muted-foreground">
                Pet My Link is a tool for create and customize QR Codes with
                cute pet themes.
              </p>
            </div>

            <QRCodeForm />
          </div>
        </WidthWrapper>
      </section>
    </>
  )
}
