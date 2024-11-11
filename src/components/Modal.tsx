import { ImageType } from '@/app/page'
import { formatNumbers } from '@/lib/utils'
import { Instagram, ThumbsUp, Twitter } from 'lucide-react'
import Image from 'next/image'
import { FC } from 'react'

const Modal: FC<{ image: ImageType }> = ({ image }) => {
  return (
    <div className="max-w-[50rem] min-w-[90vw] sm:min-w-fit bg-neutral-50 dark:bg-neutral-900 rounded-lg relative">
      <div className="relative h-[20rem] sm:min-w-[50rem] sm:h-[35rem] w-full">
        {image?.urls?.regular && (
          <Image
            src={image.urls.regular}
            alt="Image"
            fill
            style={{ objectFit: 'cover' }}
            className="rounded-t-lg"
          />
        )}
        {image?.links?.download && (
          <a
            href={image.links.download}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 right-4 z-20 bg-green-600 text-neutral-200 font-semibold px-3 py-2 sm:px-5 sm:py-3 text-xs sm:text-sm rounded hover:bg-green-700 transition-colors duration-200"
          >
            Download
          </a>
        )}
      </div>
      <div className="p-2 sm:p-4 flex items-center border-t border-neutral-300 dark:border-neutral-700">
        <div className="flex items-center w-full flex-col sm:flex-row sm:justify-between ">
          <div className="flex items-center gap-3">
            {image?.user?.profile_image?.small && (
              <div className="relative h-12 w-12">
                <Image
                  src={image.user.profile_image.small}
                  alt={`${image.user.name} avatar`}
                  fill
                  className="rounded-full"
                />
              </div>
            )}
            <div>
              <p className="font-bold text-xs sm:text-sm text-neutral-700 dark:text-neutral-200 capitalize">
                {image.user?.name}
              </p>
              <p className="text-neutral-600 dark:text-neutral-500 font-semibold italic text-xs">
                @{image.user?.username}
              </p>
            </div>
          </div>
          <div className="mt-4 sm:mt-0 flex flex-wrap items-center gap-2 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
            {image?.user?.instagram_username && (
              <div className="flex items-center">
                <Instagram className="mr-1" />
                <span className="italic">/{image.user.instagram_username}</span>
              </div>
            )}
            {image?.user?.twitter_username && (
              <div className="flex items-center">
                <Twitter className="mr-1" />
                <span className="italic">/{image.user.twitter_username}</span>
              </div>
            )}
            {image.likes && (
              <div className="flex items-center ml-auto sm:ml-0">
                <ThumbsUp className="mr-1 text-neutral-700 dark:text-neutral-400" size={16} />
                <span className="font-semibold">{formatNumbers(image.likes)}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
