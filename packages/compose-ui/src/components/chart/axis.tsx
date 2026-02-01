'use client'

import { XAxis, YAxis } from 'recharts'
import type { XAxisProps, YAxisProps } from 'recharts'

type ChartXAxisProps = XAxisProps

function ChartXAxis(props: ChartXAxisProps) {
  return <XAxis tickLine={false} axisLine={false} tickMargin={5} {...props} />
}

ChartXAxis.displayName = 'ChartXAxis'

type ChartYAxisProps = YAxisProps

function ChartYAxis(props: ChartYAxisProps) {
  return <YAxis tickLine={false} axisLine={false} tickMargin={5} {...props} />
}

ChartYAxis.displayName = 'ChartYAxis'

export { ChartXAxis, ChartYAxis }
export type { ChartXAxisProps, ChartYAxisProps }
