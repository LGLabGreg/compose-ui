'use client'

import * as React from 'react'

import { cn } from '../../lib/utils'
import { useChartContext } from './use-chart-context'

type ChartLegendContentProps = {
  payload?: Array<{
    value?: string
    dataKey?: string
    color?: string
  }>
  className?: string
  nameKey?: string
  verticalAlign?: 'top' | 'bottom'
}

function ChartLegendContent({
  payload,
  className,
  nameKey,
  verticalAlign,
}: ChartLegendContentProps) {
  const { config } = useChartContext()

  if (!payload?.length) {
    return null
  }

  return (
    <div
      className={cn(
        'flex flex-wrap items-center justify-center gap-4',
        verticalAlign === 'top' ? 'pb-2' : 'pt-2',
        className,
      )}
    >
      {payload.map((entry) => {
        const dataKey = String(entry.dataKey ?? entry.value ?? '')
        const configEntry = config[dataKey]
        const displayName = nameKey ? entry.value : (configEntry?.label ?? dataKey)
        const color = entry.color ?? configEntry?.color
        const Icon = configEntry?.icon

        return (
          <div key={dataKey} className='flex items-center gap-1.5'>
            {Icon ? (
              <Icon className='size-4' />
            ) : (
              <span
                className='size-2.5 shrink-0 rounded-full'
                style={{ backgroundColor: color }}
              />
            )}
            <span className='text-xs font-medium'>{displayName}</span>
          </div>
        )
      })}
    </div>
  )
}

ChartLegendContent.displayName = 'ChartLegendContent'

export { ChartLegendContent }
export type { ChartLegendContentProps }
