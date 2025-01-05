'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import Image from 'next/image'
import { QRCodeSVG } from 'qrcode.react'
import React from 'react'

const COLORS = [
  {
    name: 'Red',
    value: 'red',
  },
  {
    name: 'Green',
    value: 'green',
  },
  {
    name: 'Violet',
    value: 'violet',
  },
  {
    name: 'Slate',
    value: 'slate',
  },
]

export function renderColor(color: string) {
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

const PETS = [
  {
    name: 'Cute Dog',
    image: '/pets/cute-dog.png',
    value: 'dog',
  },
  {
    name: 'Cute Cat',
    image: '/pets/cute-cat.png',
    value: 'cat',
  },
  {
    name: 'Cute Fox',
    image: '/pets/cute-fox.png',
    value: 'fox',
  },
  {
    name: 'Cute Bird',
    image: '/pets/cute-bird.png',
    value: 'bird',
  },
  {
    name: 'Cute Fish',
    image: '/pets/cute-fish.png',
    value: 'fish',
  },
]

export function QRCodeForm() {
  const [url, setUrl] = React.useState('')
  const [color, setColor] = React.useState('slate')
  const [pet, setPet] = React.useState('dog')

  return (
    <div className="flex w-full max-w-xl flex-col items-center gap-8">
      <form className="grid w-full grid-cols-2 items-center gap-4">
        <Input
          placeholder="Enter the link here"
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="col-span-2"
        />

        <Select onValueChange={(value) => setColor(value)} defaultValue={color}>
          <SelectTrigger className="max-[400px]:col-span-2">
            <SelectValue placeholder="Select your color" />
          </SelectTrigger>
          <SelectContent>
            {COLORS.map((color) => (
              <SelectItem key={color.value} value={color.value}>
                <div className="flex items-center gap-2">
                  <div
                    className="h-4 w-4 rounded-sm"
                    style={{
                      backgroundColor: renderColor(color.value),
                    }}
                  ></div>
                  <span>{color.name}</span>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select onValueChange={(value) => setPet(value)} defaultValue={pet}>
          <SelectTrigger className="max-[400px]:col-span-2">
            <SelectValue placeholder="Select your pet" />
          </SelectTrigger>
          <SelectContent>
            {PETS.map((pet) => (
              <SelectItem key={pet.value} value={pet.value}>
                <div className="flex items-center gap-2">
                  <Image
                    src={pet.image}
                    alt={pet.name}
                    width={24}
                    height={24}
                  />
                  <span>{pet.name}</span>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </form>

      <div className="w-full rounded-2xl border-2 border-dashed p-2 dark:bg-white">
        <QRCodeSVG
          opacity={url ? 1 : 0.25}
          value={url}
          size={320}
          marginSize={2}
          fgColor={renderColor(color)}
          imageSettings={{
            src: `/pets/cute-${pet}.png`,
            x: undefined,
            y: undefined,
            height: 80,
            width: 80,
            excavate: true,
          }}
          title="Your QR Code in Seconds"
          level="H"
          className="mx-auto w-full shrink-0"
        />
      </div>

      <Button disabled={!url}>Download QR Code</Button>
    </div>
  )
}
