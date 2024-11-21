import { Loader2 } from 'lucide-react'
import React, { FC } from 'react'

const LoaderComp: FC<{ size?: number }> = ({ size = 24 }) => {
  return (
    <div className="flex items-center justify-center py-2">
      <Loader2 className="animate-spin" size={size} />
    </div>
  )
}

export default LoaderComp
