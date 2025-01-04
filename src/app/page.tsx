'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { ImageDown, ScanLine, Share2 } from 'lucide-react'
import Image from 'next/image'
import { QRCodeSVG } from 'qrcode.react'
import React from 'react'

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

export default function Home() {
  const [url, setUrl] = React.useState('')
  const [color, setColor] = React.useState('')
  const [pet, setPet] = React.useState('')

  return (
    <main className="grid grow grid-cols-2 gap-4 p-4">
      <div className="relative mx-auto flex max-w-xl flex-col justify-center p-6">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          Pet My Link
        </h1>
        <p className="leading-7 text-muted-foreground [&:not(:first-child)]:mt-6">
          Please enter your details below to generate your QR code in seconds.
        </p>
        <form className="my-6 space-y-6">
          <fieldset className="space-y-1">
            <Label htmlFor="url">Enter a valid URL</Label>
            <Input
              id="url"
              placeholder="https://petmy.link"
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </fieldset>

          <fieldset className="space-y-1">
            <Label>Enter your color</Label>
            <Select
              onValueChange={(value) => setColor(value)}
              defaultValue="slate"
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select your color" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="violet">
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 rounded-sm bg-violet-700"></div>
                    <span>Violet</span>
                  </div>
                </SelectItem>
                <SelectItem value="green">
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 rounded-sm bg-green-700"></div>
                    <span>Green</span>
                  </div>
                </SelectItem>
                <SelectItem value="red">
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 rounded-sm bg-red-700"></div>
                    <span>Red</span>
                  </div>
                </SelectItem>
                <SelectItem value="slate">
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 rounded-sm bg-slate-950"></div>
                    <span>Slate</span>
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </fieldset>

          <fieldset className="space-y-2">
            <Label>Choose your pet</Label>

            <ToggleGroup
              type="single"
              variant="outline"
              className="grid grid-cols-4 justify-start gap-2"
              onValueChange={(value) => setPet(`/pets/cute-${value}.png`)}
              defaultValue="dog"
            >
              {PETS.map((pet) => (
                <ToggleGroupItem
                  key={pet.name}
                  value={pet.value}
                  aria-label={pet.name}
                  className="h-24 w-full"
                >
                  <Image
                    src={pet.image}
                    alt={pet.name}
                    width={80}
                    height={80}
                  />
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
          </fieldset>
        </form>
      </div>
      <div className="flex items-center justify-center rounded-3xl border-2 border-primary/50 bg-primary/30">
        <div className="mx-auto flex max-w-xl flex-col items-center gap-8">
          <div className="flex flex-col items-center gap-4">
            <div className="rounded-xl border-2 bg-background p-2">
              <ScanLine className="size-8" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight">Scan QR Code</h2>
            <p className="text-muted-foreground">
              {url || 'https://petmy.link'}
            </p>
          </div>

          <QRCodeSVG
            value={url || 'https://petmy.link'}
            size={320}
            marginSize={2}
            fgColor={renderColor(color)}
            imageSettings={{
              src: pet || '/pets/cute-dog.png',
              x: undefined,
              y: undefined,
              height: 80,
              width: 80,
              excavate: true,
            }}
            title="Your QR Code in Seconds"
            level="H"
            className="rounded-3xl border-2"
          />
          <div className="flex w-full flex-col gap-3">
            <Button size="lg" className="text-lg">
              Download <ImageDown />
            </Button>
            <Button variant="secondary" size="lg" className="text-lg">
              Share It <Share2 />
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
