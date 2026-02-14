'use client'

import * as React from 'react'

import { cn } from '../../lib/utils'
import { useChartContext } from './use-chart-context'

type IndicatorType = 'dot' | 'line' | 'dashed'

type ChartTooltipContentProps = {
  active?: boolean
  payload?: Array<{
    name?: string
    value?: number | string
    dataKey?: string | number
    payload?: Record<string, unknown>
    color?: string
    fill?: string
  }>
  label?: string
  indicator?: IndicatorType
  hideLabel?: boolean
  hideIndicator?: boolean
  labelKey?: string
  nameKey?: string
  className?: string
  labelClassName?: string
  formatter?: (
    value: number | string,
    name: string,
    item: {
      name?: string
      value?: number | string
      dataKey?: string | number
      payload?: Record<string, unknown>
      color?: string
      fill?: string
    },
    index: number,
    payload: Array<{
      name?: string
      value?: number | string
      dataKey?: string | number
      payload?: Record<string, unknown>
      color?: string
      fill?: string
    }>,
  ) => React.ReactNode
}

function ChartTooltipContent({
  active,
  payload,
  label,
  indicator = 'dot',
  hideLabel = false,
  hideIndicator = false,
  labelKey,
  nameKey,
  className,
  labelClassName,
  formatter,
}: ChartTooltipContentProps) {
  const { config } = useChartContext()

  if (!active || !payload?.length) {
    return null
  }

  const resolvedLabel = labelKey
    ? (payload[0]?.payload?.[labelKey] as string | undefined)
    : label

  return (
    <div
      className={cn(
        'rounded-lg border border-border bg-background px-3 py-2 shadow-xl',
        className,
      )}
    >
      {!hideLabel && resolvedLabel && (
        <div className={cn('font-medium text-sm mb-1', labelClassName)}>
          {resolvedLabel}
        </div>
      )}
      <div className='flex flex-col gap-1'>
        {payload.map((item, index) => {
          const dataKey = String(item.dataKey ?? item.name ?? '')
          const itemName = item.name ? String(item.name) : ''
          const configEntry = config[dataKey] ?? (itemName ? config[itemName] : undefined)
          const displayName = nameKey
            ? ((item.payload?.[nameKey] as string | undefined) ?? dataKey)
            : (configEntry?.label ?? dataKey)
          const color = item.color ?? item.fill ?? configEntry?.color
          const Icon = configEntry?.icon

          return (
            <div key={itemName || dataKey} className='flex items-center gap-2'>
              {!hideIndicator && (
                <span
                  className={cn(
                    'shrink-0',
                    indicator === 'dot' && 'size-2.5 rounded-full',
                    indicator === 'line' && 'h-0.5 w-4',
                    indicator === 'dashed' && 'h-0.5 w-4 border-t-2 border-dashed',
                  )}
                  style={{
                    backgroundColor: indicator === 'dashed' ? undefined : color,
                    borderColor: indicator === 'dashed' ? color : undefined,
                  }}
                />
              )}
              {Icon && <Icon className='size-4 text-muted-foreground' />}
              <span className='flex-1 text-muted-foreground text-xs'>{displayName}</span>
              <span className='font-medium tabular-nums text-xs'>
                {formatter
                  ? formatter(item.value ?? '', displayName, item, index, payload)
                  : item.value}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

ChartTooltipContent.displayName = 'ChartTooltipContent'

export { ChartTooltipContent }
export type { ChartTooltipContentProps, IndicatorType }
