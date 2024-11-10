import { ImageType } from '@/app/page'
import { formatNumbers } from '@/lib/utils'
import { Instagram, ThumbsUp, Twitter } from 'lucide-react'
import Image from 'next/image'
import { FC } from 'react'

const Modal: FC<{ image: ImageType }> = ({ image }) => {
  return (
    <div className="h-[35rem] w-[50rem] bg-neutral-50 dark:bg-neutral-900 rounded-lg relative">
      <div className="h-[30rem] rounded-t-md relative">
        <a
          href={image?.links?.download}
          target="_blank"
          className="absolute bottom-4 right-4 bg-green-600 text-neutral-200 font-semibold py-3 px-5 text-[0.7rem] rounded-[3px] hover:bg-green-700 transition-colors duration-200"
        >
          Download Image
        </a>
        {image?.urls?.regular && (
          <div className="relative h-full w-full">
            <Image
              src={image.urls?.regular}
              alt="sd"
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-t-md"
            />
          </div>
        )}
        <div className="p-4 flex items-center w-full">
          {/* user details */}
          <div className="flex justify-between items-center w-full">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-3">
                {image?.user?.profile_image?.small && (
                  <div className="relative h-12 w-12">
                    <Image
                      src={image.user?.profile_image?.small}
                      alt="pic"
                      fill
                      className="rounded-full"
                    />
                  </div>
                )}
                <div>
                  <p className="font-bold text-sm text-neutral-700 dark:text-neutral-200 capitalize">
                    {image.user?.name}
                  </p>
                  <p className="text-neutral-600 dark:text-neutral-500 font-semibold italic text-[0.75rem]">
                    @{image.user?.username}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {image?.user?.instagram_username && (
                  <div className="flex items-center">
                    <Instagram className="text-neutral-700 mr-[2px]" />
                    <p className="text-[0.85rem] font-semibold text-neutral-600 italic">
                      /{image.user.instagram_username}
                    </p>
                  </div>
                )}
                {image?.user?.twitter_username && (
                  <div className="flex items-center">
                    <Twitter className="text-neutral-700 mr-[2px]" />
                    <p className="text-[0.85rem] font-semibold text-neutral-600 italic">
                      /{image.user.twitter_username}
                    </p>
                  </div>
                )}
              </div>
            </div>
            {image.likes && (
              <div className="flex items-center gap-1">
                <ThumbsUp className="text-neutral-800 dark:text-neutral-400" size={20} />
                <p className="text-[0.8rem] font-bold text-neutral-700 dark:text-neutral-400">
                  {formatNumbers(image.likes)}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
export default Modal
