'use client'

import { DayPicker } from 'react-day-picker'
import type { DayPickerProps } from 'react-day-picker'

import { buttonVariants } from '../lib/button-variants'
import { cn } from '../lib/utils'

type CalendarProps = DayPickerProps & {
  className?: string
}

function Calendar({ className, classNames, captionLayout, ...props }: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays
      captionLayout={captionLayout}
      className={cn('w-fit p-3', className)}
      classNames={{
        root: cn(
          'relative [--cell-radius:var(--radius-md)] [--cell-size:--spacing(8)]',
          classNames?.root,
        ),
        months: cn('flex gap-4', classNames?.months),
        month: cn('flex flex-col gap-4', classNames?.month),
        month_caption: cn(
          'flex items-center justify-center h-(--cell-size) w-full px-(--cell-size)',
          classNames?.month_caption,
        ),
        caption_label: cn(
          'text-sm font-medium text-foreground',
          captionLayout === 'label'
            ? ''
            : 'flex items-center gap-1 [&>svg]:text-muted-foreground [&>svg]:size-3.5',
          classNames?.caption_label,
        ),
        dropdowns: cn(
          'w-full flex items-center text-sm font-medium justify-center h-(--cell-size) gap-1.5',
          classNames?.dropdowns,
        ),
        dropdown_root: cn(
          'relative z-10 inline-flex items-center rounded-(--cell-radius) pointer-events-auto',
          classNames?.dropdown_root,
        ),
        dropdown: cn(
          'absolute top-0 bottom-0 left-0 z-2 w-full cursor-pointer opacity-0 appearance-none',
          classNames?.dropdown,
        ),
        months_dropdown: cn(classNames?.months_dropdown),
        years_dropdown: cn(classNames?.years_dropdown),
        chevron: cn('size-4 fill-muted-foreground', classNames?.chevron),
        nav: cn(
          'absolute top-0 inset-x-0 flex w-full justify-between p-3 pointer-events-none',
          classNames?.nav,
        ),
        button_previous: cn(
          buttonVariants({ variant: 'ghost' }),
          'size-(--cell-size) text-muted-foreground/80 hover:text-foreground p-0 pointer-events-auto',
        ),
        button_next: cn(
          buttonVariants({ variant: 'ghost' }),
          'size-(--cell-size) text-muted-foreground/80 hover:text-foreground p-0 pointer-events-auto',
        ),
        month_grid: cn('w-full border-collapse space-y-1', classNames?.month_grid),
        weekdays: cn('flex', classNames?.weekdays),
        weekday: cn(
          'text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]',
          classNames?.weekday,
        ),
        week: cn('flex w-full mt-2', classNames?.week),
        day: cn('relative group p-0 text-center text-sm', classNames?.day),
        day_button: cn(
          'cursor-pointer relative flex size-(--cell-size) items-center justify-center whitespace-nowrap rounded-md p-0 text-foreground transition-200 group-[[data-selected]:not(.range-middle)]:[transition-property:color,background-color,border-radius,box-shadow] group-[[data-selected]:not(.range-middle)]:duration-150 group-data-disabled:pointer-events-none focus-visible:z-10 hover:not-in-data-selected:bg-accent group-data-selected:bg-primary hover:not-in-data-selected:text-foreground group-data-selected:text-primary-foreground group-data-disabled:text-foreground/30 group-data-disabled:line-through group-data-outside:text-foreground/30 group-data-selected:group-data-outside:text-primary-foreground outline-none focus-visible:ring-ring/50 focus-visible:ring-[3px] group-[.range-start:not(.range-end)]:rounded-e-none group-[.range-end:not(.range-start)]:rounded-s-none group-[.range-middle]:rounded-none group-[.range-middle]:group-data-selected:bg-accent group-[.range-middle]:group-data-selected:text-foreground',
          classNames?.day_button,
        ),
        today: cn('bg-accent text-accent-foreground rounded-md', classNames?.today),
        outside: cn('text-muted-foreground', classNames?.outside),
        disabled: cn('text-muted-foreground', classNames?.disabled),
        hidden: cn('invisible', classNames?.hidden),
        range_start: cn('range-start rounded-l-md', classNames?.range_start),
        range_end: cn('range-end rounded-r-md', classNames?.range_end),
        range_middle: cn(
          'range-middle aria-selected:bg-accent aria-selected:text-accent-foreground',
          classNames?.range_middle,
        ),
        selected: cn(
          'bg-primary text-primary-foreground rounded-md',
          classNames?.selected,
        ),
        footer: cn('text-sm pt-2 mt-2 border-t border-border', classNames?.footer),
      }}
      {...props}
    />
  )
}

Calendar.displayName = 'Calendar'

export { Calendar }
export type { CalendarProps }
