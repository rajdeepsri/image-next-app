'use client'

import { FC, useCallback } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { useSearchParams, useRouter, usePathname } from 'next/navigation'

const Sort: FC = () => {
  const router = useRouter()
  const pathName = usePathname()
  const searchParams = useSearchParams()
  const sortBy = searchParams.get('sortBy') || undefined
  const orderBy = searchParams.get('orderBy') || undefined

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)
      return params.toString()
    },
    [searchParams],
  )

  const handleSortByChange = (value: string) => {
    router.replace(`${pathName}?${createQueryString('sortBy', value)}`)
  }

  const handleOrderByChange = (value: string) => {
    router.replace(`${pathName}?${createQueryString('orderBy', value)}`)
  }

  return (
    <div className="relative bg-neutral-50 dark:bg-neutral-900 py-2 sm:py-5 flex items-center justify-center gap-2 sm:gap-8 flex-col sm:flex-row">
      <div className="flex items-center gap-2">
        <p className="font-medium text-[14px]">Sort By</p>
        <Select value={sortBy} onValueChange={handleSortByChange}>
          <SelectTrigger className="w-[180px] bg-neutral-100 dark:bg-neutral-950">
            <SelectValue placeholder="Select Sort" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="name">Name</SelectItem>
            <SelectItem value="likes">Likes</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex items-center gap-2">
        <p className="font-medium text-[14px]">Order By</p>
        <Select value={orderBy} onValueChange={handleOrderByChange}>
          <SelectTrigger className="w-[180px] bg-neutral-100 dark:bg-neutral-950">
            <SelectValue placeholder="Select Order" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="asc">Ascending</SelectItem>
            <SelectItem value="desc">Descending</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}

export default Sort
