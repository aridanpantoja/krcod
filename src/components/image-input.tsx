'use client'

import { cn } from '@/lib/utils'
import { useQRCodeContext } from '@/providers/qrcode-provider'
import { Check, ImageIcon, MousePointerSquareDashed, X } from 'lucide-react'
import React from 'react'
import Dropzone from 'react-dropzone'

export function ImageInput() {
  const { setImage, image } = useQRCodeContext()
  const [isDragOver, setIsDragOver] = React.useState(false)
  const [isRejected, setIsRejected] = React.useState(false)

  function onDropAccepted(acceptedFiles: File[]) {
    const reader = new FileReader()

    reader.onloadend = () => {
      setImage({
        src: reader.result as string,
        name: acceptedFiles[0].name,
      })
    }

    reader.readAsDataURL(acceptedFiles[0])
    console.log(isDragOver)
  }

  function onDropRejected() {
    setIsDragOver(false)
    setIsRejected(true)
  }

  return (
    <div
      className={cn(
        'border-boder flex w-full items-center justify-center rounded-2xl border-2 border-dashed p-2 transition-colors hover:cursor-pointer',
        isDragOver ? 'border-primary' : 'border-border',
      )}
    >
      <Dropzone
        onDropRejected={onDropRejected}
        onDropAccepted={onDropAccepted}
        onDragEnter={() => setIsDragOver(true)}
        onDragLeave={() => setIsDragOver(false)}
        accept={{
          'image/png': ['.png'],
          'image/jpeg': ['.jpeg'],
          'image/jpg': ['.jpg'],
        }}
      >
        {({ getRootProps, getInputProps }) => (
          <div
            className="flex w-full flex-1 flex-col items-center justify-center py-6"
            {...getRootProps()}
          >
            <input id="image-input" {...getInputProps()} />
            {image.src ? (
              <Check className="mb-2 size-6 text-muted-foreground" />
            ) : isDragOver ? (
              <MousePointerSquareDashed className="mb-2 size-6 text-muted-foreground" />
            ) : isRejected ? (
              <X className="mb-2 size-6 text-muted-foreground" />
            ) : (
              <ImageIcon className="mb-2 size-6 text-muted-foreground" />
            )}
            <div className="flex flex-col justify-center text-sm text-muted-foreground">
              {image.src ? (
                <p>The file was uploaded</p>
              ) : isDragOver ? (
                <p>Drop file to upload</p>
              ) : isRejected ? (
                <p>File type not supported</p>
              ) : (
                <p>Click to upload or drag an drop</p>
              )}
            </div>

            <p className="mt-2 text-xs text-muted-foreground">
              {image.src ? image.name : 'PNG, JPG, JPEG'}
            </p>
          </div>
        )}
      </Dropzone>
    </div>
  )
}
