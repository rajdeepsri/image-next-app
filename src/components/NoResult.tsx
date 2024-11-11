'use client'

import React, { FC } from 'react'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'

const NoResult: FC<{ q: string }> = ({ q }) => {
  const router = useRouter()
  return (
    <div className="text-center m-5 space-y-4">
      <p>No Results found for {q}</p>
      <Button variant="outline" onClick={() => router.back()}>
        Go Back
      </Button>
    </div>
  )
}

export default NoResult
