import { ImageType } from '@/app/page'
import { FC } from 'react'
import CardWithModal from './CardWithModal'
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from './ui/dialog'
import Modal from './Modal'

const Card: FC<{ image: ImageType }> = ({ image }) => {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="w-full sm:w-[25rem] h-min rounded-xl overflow-hidden border dark:border-none shadow-md dark:shadow-neutral-900 mb-4 bg-neutral-100 dark:bg-neutral-950 cursor-pointer">
          <CardWithModal image={image} />
        </div>
      </DialogTrigger>
      <DialogContent className="p-0">
        <DialogTitle hidden>Modal for card</DialogTitle>
        <DialogDescription hidden>this is modal</DialogDescription>
        <Modal image={image} />
      </DialogContent>
    </Dialog>
  )
}
export default Card
