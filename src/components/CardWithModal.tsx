import { ImageType } from '@/app/page'
import { formatNumbers } from '@/lib/utils'
import { ThumbsUp } from 'lucide-react'
import Image from 'next/image'
import React, { FC } from 'react'

const CardWithModal: FC<{ image: ImageType }> = ({ image }) => {
  return (
    <>
      <div className="relative">
        {image.urls.small && (
          <Image
            src={image.urls.small}
            alt={image.alt_description || 'img'}
            width={704}
            height={500}
            style={{ objectFit: 'contain' }}
          />
        )}
      </div>
      <div className="flex justify-between items-center p-3 px-4">
        <div className="flex items-center gap-3">
          <div className="relative">
            {image?.user.profile_image?.medium && (
              <Image
                src={image.user.profile_image.medium}
                alt={image.user.name || 'avatar'}
                width={40}
                height={40}
                className="rounded-full"
              />
            )}
          </div>
          <div className="flex flex-col items-start">
            <p className="font-bold text-sm text-neutral-700 dark:text-neutral-200">
              {image.user.name}
            </p>
            <p className="text-neutral-400 dark:text-neutral-500 font-medium italic text-[0.75rem]">
              @{image.user.username}
            </p>
          </div>
        </div>
        {image.likes && (
          <div className="flex items-center gap-1">
            <ThumbsUp className="text-neutral-800 dark:text-neutral-300" size={20} />
            <p className="text-[0.8rem] font-bold text-neutral-700 dark:text-neutral-300">
              {formatNumbers(image.likes)}
            </p>
          </div>
        )}
      </div>
    </>
  )
}

export default CardWithModal
