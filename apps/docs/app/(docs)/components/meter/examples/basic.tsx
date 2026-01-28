'use client'

import {
  MeterIndicator,
  MeterLabel,
  MeterRoot,
  MeterTrack,
  MeterValue,
} from '@lglab/compose-ui/meter'

export default function BasicExample() {
  return (
    <div className='space-y-6 w-full max-w-md mx-auto'>
      <MeterRoot value={24}>
        <div className='flex items-center justify-between mb-2'>
          <MeterLabel>Storage Used</MeterLabel>
          <MeterValue />
        </div>
        <MeterTrack>
          <MeterIndicator />
        </MeterTrack>
      </MeterRoot>

      <MeterRoot value={65}>
        <div className='flex items-center justify-between mb-2'>
          <MeterLabel>CPU Usage</MeterLabel>
          <MeterValue />
        </div>
        <MeterTrack>
          <MeterIndicator />
        </MeterTrack>
      </MeterRoot>

      <MeterRoot value={90}>
        <div className='flex items-center justify-between mb-2'>
          <MeterLabel>Memory Usage</MeterLabel>
          <MeterValue />
        </div>
        <MeterTrack>
          <MeterIndicator />
        </MeterTrack>
      </MeterRoot>
    </div>
  )
}
