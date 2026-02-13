'use client'

import { ProgressCircle, ProgressRoot, ProgressValue } from '@lglab/compose-ui/progress'
import * as React from 'react'

export default function CircularExample() {
  const [value, setValue] = React.useState(20)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setValue((current) => Math.min(100, Math.round(current + Math.random() * 25)))
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className='flex items-center justify-center gap-8'>
      <ProgressRoot className='w-auto' value={value}>
        <ProgressCircle value={value}>
          <ProgressValue className='text-lg font-semibold' />
        </ProgressCircle>
      </ProgressRoot>

      <ProgressRoot className='w-auto' value={value}>
        <ProgressCircle value={value} size={80} strokeWidth={6}>
          <ProgressValue className='text-sm font-medium' />
        </ProgressCircle>
      </ProgressRoot>

      <ProgressRoot className='w-auto' value={null}>
        <ProgressCircle value={null} size={80} strokeWidth={6} />
      </ProgressRoot>
    </div>
  )
}
