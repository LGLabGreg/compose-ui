'use client'

import * as React from 'react'
import { ResponsiveContainer } from 'recharts'

import { cn } from '../../lib/utils'
import type { ChartConfig } from './types'
import { ChartContext } from './use-chart-context'

type ChartRootProps = React.ComponentProps<'div'> & {
  config: ChartConfig
}

function ChartRoot({ config, className, children, style, ...props }: ChartRootProps) {
  const cssVariables = React.useMemo(() => {
    const vars: Record<string, string> = {}
    for (const [key, value] of Object.entries(config)) {
      vars[`--color-${key}`] = value.color
    }
    return vars
  }, [config])

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        className={cn(
          '[&_.recharts-cartesian-axis-tick-value]:fill-muted-foreground [&_.recharts-cartesian-axis-tick-value]:text-xs [&_.recharts-cartesian-axis-line[stroke="#666"]]:stroke-border [&_.recharts-cartesian-axis-tick-line[stroke="#666"]]:stroke-border [&_.recharts-cartesian-grid_line[stroke="#ccc"]]:stroke-border [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-polar-grid_[stroke="#ccc"]]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke="#ccc"]]:stroke-border [&_.recharts-sector[stroke="#fff"]]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none',
          className,
        )}
        style={{ ...cssVariables, ...style }}
        {...props}
      >
        <ResponsiveContainer>{children}</ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  )
}

ChartRoot.displayName = 'ChartRoot'

export { ChartRoot }
export type { ChartRootProps }
