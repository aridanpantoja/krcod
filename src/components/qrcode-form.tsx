'use client'

import { ImageInput } from '@/components/image-input'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { COLORS } from '@/config'
import { useQRCodeContext } from '@/providers/qrcode-provider'
import { Button, buttonVariants } from './ui/button'
import { Textarea } from './ui/textarea'
import { renderColor } from '@/lib/utils'

export function QRCodeForm() {
  const { color, setColor, url, setUrl, setImage, image } = useQRCodeContext()

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="notion" size="notion">
          <div>🖋️</div>
          <div>Add information</div>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add information for the QR Code</DialogTitle>
          <DialogDescription>
            Enter the information you want to include in the QR Code.
          </DialogDescription>
        </DialogHeader>

        <div className="flex w-full flex-col gap-4">
          <div className="space-y-2">
            <Label htmlFor="url">Enter your text or website here</Label>
            <Textarea
              id="url"
              placeholder="https://krcod.com"
              className="col-span-2 resize-none"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="color">Select color</Label>
            <Select
              onValueChange={(value) => setColor(value)}
              defaultValue={color}
            >
              <SelectTrigger id="color" className="max-[400px]:col-span-2">
                <SelectValue placeholder="Select your color" />
              </SelectTrigger>
              <SelectContent>
                {COLORS.map((color) => (
                  <SelectItem key={color} value={color.toLowerCase()}>
                    <div className="flex items-center gap-2">
                      <div
                        className="h-4 w-4 rounded-sm border"
                        style={{
                          backgroundColor: renderColor(color.toLowerCase()),
                        }}
                      ></div>
                      <span>{color}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <div className="relative">
              <Label className="inline-block" htmlFor="image-input">
                Select your logo
              </Label>

              {image.src && (
                <Button
                  variant="notion"
                  size="notion"
                  className="absolute bottom-1/2 right-0 w-fit translate-y-1/2 items-center p-0 text-xs hover:bg-transparent"
                  onClick={() => {
                    setImage({
                      src: '',
                      name: '',
                    })
                  }}
                >
                  Clear 🗑️
                </Button>
              )}
            </div>

            <ImageInput />
          </div>

          <DialogClose className={buttonVariants({ className: 'w-full' })}>
            Preview QR Code
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  )
}
