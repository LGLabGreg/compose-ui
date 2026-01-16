import { cva } from 'class-variance-authority'

export type TooltipVariant = 'default' | 'secondary' | 'outline'

export const tooltipPopupVariants = cva(
  [
    'rounded-md px-2 py-1 text-sm',
    'origin-(--transform-origin)',
    'transition-[transform,scale,opacity]',
    'data-starting-style:scale-90 data-starting-style:opacity-0',
    'data-ending-style:scale-90 data-ending-style:opacity-0',
    'data-instant:duration-0',
  ],
  {
    variants: {
      variant: {
        default: 'bg-foreground text-background',
        secondary: 'bg-secondary text-secondary-foreground',
        outline: 'bg-background text-foreground border border-border shadow-xs',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

export const tooltipArrowVariants: Record<
  TooltipVariant,
  { fill: string; stroke: string }
> = {
  default: {
    fill: 'fill-foreground',
    stroke: 'fill-foreground',
  },
  secondary: {
    fill: 'fill-secondary',
    stroke: 'fill-secondary',
  },
  outline: {
    fill: 'fill-background',
    stroke: 'fill-border',
  },
}
