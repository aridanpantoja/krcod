'use client'

import { Button } from '@/components/ui/button'
import { useQRCodeContext } from '@/context/qrcode'
import { saveAs } from 'file-saver'
import { toPng } from 'html-to-image'

export function QRCodeOptions() {
  const { url } = useQRCodeContext()

  function handleDownload(type: 'png' | 'svg') {
    const qrCodeElem = document.getElementById('qr-code')

    if (qrCodeElem) {
      if (type === 'png') {
        toPng(qrCodeElem)
          .then((dataUrl) => {
            saveAs(dataUrl, 'qr-code.png')
          })
          .catch((err) => {
            console.log('Error generating QR code', err)
          })
      } else if (type === 'svg') {
        const saveData = new Blob([qrCodeElem.outerHTML], {
          type: 'image/svg+xml;charset=utf-8',
        })
        saveAs(saveData, 'qr-code.svg')
      }
    }
  }

  return (
    <>
      <Button variant="notion" size="notion" disabled={!url} onClick={() => {}}>
        <div>🖨️</div>
        <div>Print QR Code</div>
      </Button>
      <Button
        variant="notion"
        size="notion"
        disabled={!url}
        onClick={() => handleDownload('png')}
      >
        <div>🖼️</div>
        <div>Download as PNG</div>
      </Button>
      <Button
        variant="notion"
        size="notion"
        disabled={!url}
        onClick={() => handleDownload('svg')}
      >
        <div>✒️</div>
        <div>Download as SVG</div>
      </Button>
    </>
  )
}
