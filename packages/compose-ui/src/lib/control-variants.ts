import { cva } from 'class-variance-authority'

export type ControlSize = 'sm' | 'default' | 'lg' | 'icon' | 'icon-sm' | 'icon-lg'
export type ControlVariant = 'default' | 'ghost'

export const controlVariants = cva(
  [
    'inline-flex items-center justify-center gap-2 rounded-md',
    'text-sm font-medium',
    "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0",
    'select-none transition-colors duration-200',
    'border border-border bg-background shadow-xs',
  ],
  {
    variants: {
      variant: {
        default: [
          'hover:bg-accent hover:text-accent-foreground',
          'data-pressed:border-primary data-pressed:bg-primary data-pressed:text-primary-foreground data-pressed:shadow-none',
          'data-popup-open:border-primary data-popup-open:bg-primary data-popup-open:text-primary-foreground data-popup-open:shadow-none',
          'aria-[current=page]:bg-primary aria-[current=page]:border-primary aria-[current=page]:text-primary-foreground',
        ],
        ghost: [
          'border-transparent bg-transparent shadow-none',
          'hover:bg-accent hover:text-accent-foreground',
        ],
      },
      size: {
        sm: 'h-8 min-w-8 px-2.5 gap-1.5',
        default: 'h-9 min-w-9 px-3',
        lg: 'h-10 min-w-10 px-3.5',
        icon: 'size-9',
        'icon-sm': 'size-8',
        'icon-lg': 'size-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)
