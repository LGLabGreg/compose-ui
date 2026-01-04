'use client'

import { Button } from '@lglab/compose-ui'
import { LoaderCircle } from 'lucide-react'
import { useState } from 'react'

export default function LoadingExample() {
  const [loading, setLoading] = useState(false)

  const handleClick = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }

  return (
    <div className='flex gap-2'>
      <Button disabled={loading} focusableWhenDisabled onClick={handleClick}>
        {loading ? (
          <div className='flex items-center gap-2'>
            <LoaderCircle className='animate-spin' /> Loading...
          </div>
        ) : (
          'Submit'
        )}
      </Button>
    </div>
  )
}
