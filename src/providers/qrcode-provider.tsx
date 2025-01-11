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
  renderColor: (color: string) => string
  qrCodeRef: React.RefObject<SVGSVGElement | null>
}

const QrCodeContext = React.createContext<QrCodeContextProps | undefined>(
  undefined,
)

function renderColor(color: string) {
  switch (color) {
    case 'red':
      return '#b91c1c'
    case 'green':
      return '#15803d'
    case 'violet':
      return '#6d28d9'
    case 'slate':
      return '#020617'
    default:
      return '#020617'
  }
}

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
        renderColor,
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
