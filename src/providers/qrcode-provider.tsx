'use client'

import React from 'react'

type ImageProps = {
  src: string
  name: string
}

type QrCodeContextProps = {
  url: string
  setUrl: React.Dispatch<React.SetStateAction<string>>
  color: string
  setColor: (color: string) => void
  image: ImageProps
  setImage: (image: ImageProps) => void
  qrCodeRef: React.RefObject<SVGSVGElement | null>
}

const QrCodeContext = React.createContext<QrCodeContextProps | undefined>(
  undefined,
)

export function QRCodeProvider({ children }: { children: React.ReactNode }) {
  const [url, setUrl] = React.useState('')
  const [color, setColor] = React.useState('slate')
  const [image, setImage] = React.useState<ImageProps>({
    src: '',
    name: '',
  })
  const qrCodeRef = React.useRef<SVGSVGElement>(null)

  return (
    <QrCodeContext.Provider
      value={{
        url,
        setUrl,
        color,
        setColor,
        image,
        setImage,
        qrCodeRef,
      }}
    >
      {children}
    </QrCodeContext.Provider>
  )
}

export function useQRCodeContext() {
  const context = React.useContext(QrCodeContext)

  if (!context) {
    throw new Error('useQrCodeContext must be used within a QrCodeProvider')
  }

  return context
}
