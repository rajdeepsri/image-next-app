'use client'

import Image from 'next/image'
import React, { FC, useState } from 'react'
import LoaderComp from './Loader'

const NextImageWithLoader: FC<{ imageUrl: string }> = ({ imageUrl }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true)

  return (
    <>
      {isLoading && (
        <div className="flex items-center justify-center h-full w-full">
          <LoaderComp size={50} />
        </div>
      )}
      <Image
        src={imageUrl}
        alt="Image"
        fill
        style={{ objectFit: 'cover', transition: 'opacity 0.3s ease-in-out' }}
        className={`rounded-lg ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        onLoadingComplete={() => setIsLoading(false)}
      />
    </>
  )
}

export default NextImageWithLoader
