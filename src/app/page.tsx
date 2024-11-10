import CardList from '@/components/CardList'
import { SearchBar } from '@/components/SearchBar'
import Sort from '@/components/Sort'
import { fetchPhotos } from '@/lib/utils'
import { Search } from 'lucide-react'
import Image from 'next/image'
import { FC } from 'react'

export type ImageType = {
  id: string
  user: {
    name?: string
    username?: string
    profile_image?: { medium?: string; small?: string }
    instagram_username?: string
    twitter_username?: string
  }
  urls: { small?: string; regular?: string }
  alt_description?: string
  likes?: number
  links?: { download?: string }
}

export type SearchParams = Promise<{
  [key: string]: string | string[] | undefined
}>

const Home: FC<{ searchParams: SearchParams }> = async ({ searchParams }) => {
  const images: ImageType[] = await fetchPhotos()
  return (
    <>
      <section className="w-full h-[60dvh] relative">
        <div className="relative h-full">
          <Image
            src="/panda.png"
            alt="Picture of a Panda"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
        <div className="flex flex-col justify-center items-center absolute top-0 h-[60dvh] w-full text-white gap-2 bg-black/10 text-center">
          <h2 className="px-2 text-3xl font-bold text-balance sm:text-4xl">
            Download High Quality Images by Creators
          </h2>
          <p className="text-gray-300 mt-2 text-balance text-xs sm:text-base">
            Over 2.4 million+ stock Images by our talented community
          </p>
          <div className="flex gap-1 sm:gap-2 px-2 sm:px-4 mt-1 rounded-md items-center bg-neutral-50 w-[90%] sm:w-[60%]">
            <Search color="#696969" />
            <SearchBar />
          </div>
        </div>
      </section>
      <Sort />
      <CardList images={images} searchParams={searchParams} />
    </>
  )
}

export default Home
