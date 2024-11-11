'use client'
import { FC, useState } from 'react'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'
import { Search } from 'lucide-react'
import { useMediaQuery } from '@/lib/hooks'

export const SearchBar: FC = () => {
  const isMobile = useMediaQuery('(max-width: 640px)')
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState<string>('')

  const goToSearchPage = () => {
    if (searchQuery.trim()) {
      router.push(`/search?q=${searchQuery}`)
    }
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      goToSearchPage()
    }
  }

  return (
    <>
      <div className="flex gap-1 sm:gap-2 px-2 sm:px-4 py-1 sm:py-0 mt-1 rounded-sm sm:rounded-md items-center bg-neutral-50 w-[90%] sm:w-[60%]">
        <Search color="#696969" />
        <input
          type="text"
          className="bg-transparent outline-none border-none text-neutral-800 font-medium w-full text-xs sm:text-base"
          placeholder="Search high resolution Images, categories, wallpapers"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        {!isMobile && (
          <Button
            variant="outline"
            className="h-10 my-3 text-sm px-8 dark:text-neutral-200 text-neutral-950"
            onClick={goToSearchPage}
          >
            Search
          </Button>
        )}
      </div>
      {isMobile && (
        <Button
          variant="outline"
          className="h-8 my-3 px-6 text-xs dark:text-neutral-200 text-neutral-950"
          onClick={goToSearchPage}
        >
          Search
        </Button>
      )}
    </>
  )
}
