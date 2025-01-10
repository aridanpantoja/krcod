'use client'

import { useQRCodeContext } from '@/context/qrcode'
import { QRCodeSVG } from 'qrcode.react'

export function QRCodePreview() {
  const { url, color, renderColor } = useQRCodeContext()

  return (
    <>
      <div className="flex items-center justify-center md:justify-end">
        <div className="flex w-full items-center justify-center rounded-2xl border-2 border-dashed p-2 dark:bg-white md:w-fit">
          <QRCodeSVG
            id="qr-code"
            opacity={url ? 1 : 0.25}
            marginSize={1}
            size={208}
            value={url}
            fgColor={renderColor(color)}
            // imageSettings={{
            //   src: `/pets/cute-dog.png`,
            //   x: undefined,
            //   y: undefined,
            //   height: 64,
            //   width: 64,
            //   excavate: true,
            // }}
            title="Your QR Code in Seconds"
            level="H"
            className="h-full"
          />
        </div>
      </div>
    </>
  )
}
