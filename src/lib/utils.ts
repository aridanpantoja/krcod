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
