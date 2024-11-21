import React, { FC, Suspense } from 'react'
import { SearchParams } from '../page'
import CardListWrapper from '@/components/CardListWrapper'

const SearchResults: FC<{ searchParams: SearchParams }> = async ({ searchParams }) => {
  const { q: query = '' } = (await searchParams) as { q?: string }

  if (!query) return <div className="text-center m-5">Please enter some text to search</div>

  return (
    <Suspense fallback={<div className="text-center my-2">Loading...</div>}>
      <CardListWrapper searchParams={searchParams} isSearchPage />
    </Suspense>
  )
}

export default SearchResults
