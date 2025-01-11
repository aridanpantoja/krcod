'use client'

import { useQRCodeContext } from '@/providers/qrcode-provider'
import { QRCodeSVG } from 'qrcode.react'

export function QRCodePreview() {
  const { url, color, renderColor, qrCodeRef, image } = useQRCodeContext()

  return (
    <>
      <div className="flex items-center justify-center md:justify-end">
        <div className="flex w-full items-center justify-center rounded-2xl border-2 border-dashed p-2 dark:bg-white md:w-fit">
          <QRCodeSVG
            id="qr-code"
            ref={qrCodeRef as React.RefObject<SVGSVGElement>}
            opacity={url ? 1 : 0.5}
            marginSize={1}
            size={512}
            value={url}
            fgColor={renderColor(color)}
            imageSettings={
              image.src
                ? { src: image.src, height: 108, width: 108, excavate: true }
                : undefined
            }
            title="Your QR Code in Seconds"
            level="H"
            className="h-full w-full"
          />
        </div>
      </div>
    </>
  )
}
