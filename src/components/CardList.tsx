import { FC } from 'react'
import Card from '@/components/Card'
import { ImageType, SearchParams } from '@/app/page'

const CardList: FC<{ images: ImageType[]; searchParams: SearchParams }> = async ({
  images,
  searchParams,
}) => {
  const { q, sortBy, orderBy } = await searchParams

  const sortImages = (images: ImageType[]) => {
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
  }

  const sortedImages = sortBy && orderBy ? sortImages(images) : images
  return sortedImages.length > 0 ? (
    <div className="grid place-items-center py-5 sm:py-10 bg-neutral-50 dark:bg-neutral-900">
      <section className="columns-1 md:columns-3 sm:columns-2 max-w-screen-xl mx-auto">
        {sortedImages.map(image => (
          <Card key={image.id} image={image} />
        ))}
      </section>
    </div>
  ) : (
    <div className="text-center m-5">No Results found for {q}</div>
  )
}

export default CardList
