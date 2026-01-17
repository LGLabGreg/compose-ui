'use client'

import {
  MeterIndicator,
  MeterLabel,
  MeterRoot,
  MeterTrack,
  MeterValue,
} from '@lglab/compose-ui/meter'

export default function AnimatedExample() {
  return (
    <div className='space-y-6 md:w-3/4 mx-auto'>
      <MeterRoot value={24} animated>
        <div className='flex items-center justify-between mb-2'>
          <MeterLabel>Storage Used</MeterLabel>
          <MeterValue />
        </div>
        <MeterTrack>
          <MeterIndicator />
        </MeterTrack>
      </MeterRoot>

      <MeterRoot value={65} animated>
        <div className='flex items-center justify-between mb-2'>
          <MeterLabel>CPU Usage</MeterLabel>
          <MeterValue />
        </div>
        <MeterTrack>
          <MeterIndicator />
        </MeterTrack>
      </MeterRoot>

      <MeterRoot value={90} animated>
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
