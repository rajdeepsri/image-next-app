import { ImageType } from '@/app/page'
import { FC } from 'react'
import CardWithModal from './CardWithModal'
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from './ui/dialog'
import Modal from './Modal'

const Card: FC<{ image: ImageType }> = ({ image }) => {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="w-[22rem] sm:w-[25rem] h-min rounded-xl overflow-hidden border dark:border-none shadow-md dark:shadow-neutral-900 mb-4 bg-neutral-100 dark:bg-neutral-950 cursor-pointer">
          <CardWithModal image={image} />
        </div>
      </DialogTrigger>
      <DialogContent className="p-0">
        <DialogTitle hidden>Are you absolutely sure?</DialogTitle>
        <Modal image={image} />
      </DialogContent>
    </Dialog>
  )
}
export default Card
