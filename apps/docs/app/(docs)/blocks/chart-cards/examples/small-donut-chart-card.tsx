'use client'

import { Badge } from '@lglab/compose-ui/badge'
import { Button } from '@lglab/compose-ui/button'
import { CardContent, CardHeader, CardRoot, CardTitle } from '@lglab/compose-ui/card'
import { type ChartConfig, ChartRoot, ChartTooltipContent } from '@lglab/compose-ui/chart'
import { GroupRoot } from '@lglab/compose-ui/group'
import { Separator } from '@lglab/compose-ui/separator'
import { ArrowRight, Wallet } from 'lucide-react'
import { Label, Pie, PieChart, Tooltip } from 'recharts'

const budget = 5000
const spent = 3650
const remaining = budget - spent
const percentage = Math.round((spent / budget) * 100)

function getThreshold(pct: number) {
  if (pct < 50)
    return {
      variant: 'success' as const,
      spentColor: 'var(--color-success)',
      label: 'On track',
    }
  if (pct < 75)
    return {
      variant: 'warning' as const,
      spentColor: 'var(--color-amber-500)',
      label: 'Monitor',
    }
  return {
    variant: 'destructive' as const,
    spentColor: 'var(--color-danger)',
    label: 'Over pace',
  }
}

const threshold = getThreshold(percentage)

const donutData = [
  { name: 'spent', value: spent, fill: threshold.spentColor },
  { name: 'remaining', value: remaining, fill: 'var(--color-muted)' },
]

const config: ChartConfig = {
  spent: { label: 'Spent', color: threshold.spentColor },
  remaining: { label: 'Remaining', color: 'var(--color-muted)' },
}

function formatCurrency(value: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value)
}

export default function SmallDonutChartCardBlock() {
  return (
    <div className='w-[400px] max-w-full'>
      <section aria-labelledby='small-donut-title'>
        <CardRoot>
          <CardHeader className='pb-2'>
            <div className='flex items-center justify-between'>
              <CardTitle id='small-donut-title'>Monthly Budget</CardTitle>
              <Badge
                variant={threshold.variant}
                appearance='outline'
                size='sm'
                shape='pill'
                aria-label={`Budget status: ${threshold.label}. ${percentage}% of budget spent.`}
              >
                <Wallet className='size-3' aria-hidden='true' />
                {threshold.label}
              </Badge>
            </div>
          </CardHeader>

          <CardContent className='pb-2'>
            <div className='flex justify-center my-4'>
              <ChartRoot config={config} className='h-[180px] w-[180px]'>
                <PieChart>
                  <Tooltip
                    content={
                      <ChartTooltipContent
                        hideLabel
                        nameKey='name'
                        formatter={(value) => formatCurrency(value as number)}
                      />
                    }
                  />
                  <Pie
                    data={donutData}
                    dataKey='value'
                    nameKey='name'
                    innerRadius={54}
                    outerRadius={80}
                    strokeWidth={0}
                    startAngle={90}
                    endAngle={-270}
                  >
                    <Label
                      className='fill-foreground text-2xl font-medium'
                      position='center'
                    >
                      {`${percentage}%`}
                    </Label>
                  </Pie>
                </PieChart>
              </ChartRoot>
            </div>

            <GroupRoot
              aria-label='Budget breakdown'
              className='py-2 mb-4 flex w-full items-center justify-between text-sm rounded-md border'
            >
              <div className='flex-1 text-center'>
                <data
                  value={spent}
                  className='block text-base font-semibold tabular-nums tracking-tight'
                >
                  {formatCurrency(spent)}
                </data>
                <span className='text-xs text-muted-foreground'>spent</span>
              </div>
              <Separator orientation='vertical' className='h-8 shrink-0' />
              <div className='flex-1 text-center'>
                <data
                  value={budget}
                  className='block text-base font-semibold tabular-nums tracking-tight'
                >
                  {formatCurrency(budget)}
                </data>
                <span className='text-xs text-muted-foreground'>budget</span>
              </div>
              <Separator orientation='vertical' className='h-8 shrink-0' />
              <div className='flex-1 text-center'>
                <data
                  value={remaining}
                  className='block text-base font-semibold tabular-nums tracking-tight text-success'
                >
                  {formatCurrency(remaining)}
                </data>
                <span className='text-xs text-muted-foreground'>remaining</span>
              </div>
            </GroupRoot>

            <Separator className='my-2' />
            <Button variant='ghost' size='sm' className='ml-auto flex'>
              View expenses
              <ArrowRight className='size-3' />
            </Button>
          </CardContent>
        </CardRoot>
      </section>
    </div>
  )
}
