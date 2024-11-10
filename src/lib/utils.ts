import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function fetchPhotos() {
  const response = await fetch(
    `https://api.unsplash.com/photos?page=1&per_page=12&client_id=${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}`,
  )
  const data = await response.json()
  return data
}

export async function searchPhotos(q: string) {
  const searchApi = `https://api.unsplash.com/search/photos?query=${q}&page=1&per_page=12&client_id=${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}`
  const response = await fetch(searchApi)
  const data = await response.json()
  return data
}

export const formatNumbers = (num: number) => {
  const absNum = Math.abs(num)

  if (absNum >= 1e6) {
    return (absNum / 1e6).toFixed(1) + 'M'
  } else if (absNum >= 1e3) {
    return (absNum / 1e3).toFixed(1) + 'k'
  }

  return absNum
}
