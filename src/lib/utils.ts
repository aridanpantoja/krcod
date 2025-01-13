import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getLocalStorage(storageKey: string) {
  try {
    const storageValue = localStorage.getItem(storageKey)

    if (!storageValue) throw new Error('No storage value found')

    return JSON.parse(storageValue)
  } catch {
    return null
  }
}

export function setLocalStorage(storageKey: string, value: string) {
  try {
    localStorage.setItem(storageKey, value)
  } catch {
    return null
  }
}

export function renderColor(color: string) {
  switch (color) {
    case 'slate':
      return '#020617'
    case 'green':
      return '#15803d'
    case 'violet':
      return '#6d28d9'
    case 'red':
      return '#b91c1c'
    case 'orange':
      return '#c2410c'
    case 'blue':
      return '#1d4ed8'
    case 'pink':
      return '#be185d'
    default:
      return '#020617'
  }
}
