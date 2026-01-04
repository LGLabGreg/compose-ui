'use client'

import {
  MeterIndicator,
  MeterLabel,
  MeterRoot,
  MeterTrack,
  MeterValue,
} from '@lglab/compose-ui'

export default function CustomFormatExample() {
  return (
    <div className='space-y-6 md:w-3/4 mx-auto'>
      <MeterRoot
        value={2500}
        min={0}
        max={5000}
        format={{ style: 'currency', currency: 'USD', maximumFractionDigits: 0 }}
      >
        <div className='flex items-center justify-between mb-2'>
          <MeterLabel>Budget Used</MeterLabel>
          <MeterValue />
        </div>
        <MeterTrack>
          <MeterIndicator />
        </MeterTrack>
      </MeterRoot>

      <MeterRoot
        value={3.5}
        min={0}
        max={5}
        format={{ style: 'decimal', minimumFractionDigits: 1, maximumFractionDigits: 1 }}
      >
        <div className='flex items-center justify-between mb-2'>
          <MeterLabel>Rating</MeterLabel>
          <MeterValue />
        </div>
        <MeterTrack>
          <MeterIndicator />
        </MeterTrack>
      </MeterRoot>

      <MeterRoot
        value={75}
        min={0}
        max={100}
        getAriaValueText={(formattedValue, value) => `${value}% complete`}
      >
        <div className='flex items-center justify-between mb-2'>
          <MeterLabel>Progress</MeterLabel>
          <MeterValue />
        </div>
        <MeterTrack>
          <MeterIndicator />
        </MeterTrack>
      </MeterRoot>
    </div>
  )
}
