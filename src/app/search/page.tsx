import CardList from '@/components/CardList'
import { searchPhotos } from '@/lib/utils'
import React, { FC } from 'react'
import { ImageType, SearchParams } from '../page'
import Sort from '@/components/Sort'

type SearchResponse = {
  results: ImageType[]
} | null

const SearchResults: FC<{ searchParams: SearchParams }> = async ({ searchParams }) => {
  const { q: query = '' } = (await searchParams) as { q?: string }
  const searchResults: SearchResponse = query ? await searchPhotos(query) : null

  return searchResults !== null ? (
    <>
      <Sort />
      <CardList images={searchResults.results} searchParams={searchParams} />
    </>
  ) : (
    <div className="text-center m-5">Please enter some text to search</div>
  )
}

export default SearchResults
