'use client'
import { FC, useState } from 'react'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'

export const SearchBar: FC = () => {
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
      <input
        type="text"
        className="bg-transparent outline-none border-none text-neutral-800 font-medium w-full text-xs sm:text-base"
        placeholder="Search high resolution Images, categories, wallpapers"
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <Button variant="outline" className="h-10 my-3 px-8" onClick={goToSearchPage}>
        Search
      </Button>
    </>
  )
}
