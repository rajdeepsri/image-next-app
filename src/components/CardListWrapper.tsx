import { ImageType, SearchParams } from '@/app/page'
import { fetchPhotos, searchPhotos } from '@/lib/utils'
import React, { FC } from 'react'
import NoResult from './NoResult'
import CardList from './CardList'
import Sort from './Sort'

const CardListWrapper: FC<{ searchParams: SearchParams; isSearchPage?: boolean }> = async ({
  searchParams,
  isSearchPage,
}) => {
  const { q } = await searchParams
  const result = isSearchPage ? await searchPhotos(q as string) : await fetchPhotos()
  const images: ImageType[] = isSearchPage ? result?.results : result

  return images.length > 0 ? (
    <>
      <Sort />
      <div className="grid place-items-center pb-5 sm:pb-10 bg-neutral-50 dark:bg-neutral-900">
        <section className="columns-1 md:columns-3 sm:columns-2 max-w-screen-xl mx-auto px-4">
          <CardList images={images} />
        </section>
      </div>
    </>
  ) : (
    <NoResult q={q as string} />
  )
}

export default CardListWrapper
