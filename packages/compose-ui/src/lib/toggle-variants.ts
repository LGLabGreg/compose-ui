import { cva } from 'class-variance-authority'

export type ToggleSize = 'sm' | 'default' | 'lg'

export const toggleVariants = cva(
  [
    'inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium',
    "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0",
    'border border-border bg-background hover:bg-muted shadow-xs',
    'transition-all duration-150',
    'data-pressed:border-primary data-pressed:bg-primary data-pressed:text-primary-foreground data-pressed:shadow-sm',
  ],
  {
    variants: {
      size: {
        sm: 'h-8 min-w-8 px-2 gap-1.5',
        default: 'h-9 min-w-9 px-2.5',
        lg: 'h-10 min-w-10 px-3',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  },
)
