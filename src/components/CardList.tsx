'use client'

import { FC, useMemo } from 'react'
import Card from '@/components/Card'
import { ImageType } from '@/app/page'
import { useSearchParams } from 'next/navigation'

const CardList: FC<{ images: ImageType[] }> = ({ images }) => {
  const searchParams = useSearchParams()
  const sortBy = searchParams.get('sortBy')
  const orderBy = searchParams.get('orderBy')

  const sortedImages = useMemo(() => {
    const sorted = [...images]

    if (sortBy === 'name') {
      sorted.sort((a, b) => (a.user.name || '').localeCompare(b.user.name || ''))
    } else if (sortBy === 'likes') {
      sorted.sort((a, b) => (b.likes || 0) - (a.likes || 0))
    }

    if (orderBy === 'asc') {
      sorted.reverse()
    }

    return sorted
  }, [images, sortBy, orderBy])

  return sortedImages.map(image => (
    <div className="w-full flex justify-center" key={image.id}>
      <Card image={image} />
    </div>
  ))
}

export default CardList
