import { Switch as BaseSwitch } from '@base-ui/react/switch'
import * as React from 'react'

import { cn } from '../lib/utils'

// ============================================================================
// SwitchRoot
// ============================================================================

type SwitchRootProps = React.ComponentProps<typeof BaseSwitch.Root>

const SwitchRoot = ({ className, ...props }: SwitchRootProps) => {
  return (
    <BaseSwitch.Root
      className={cn(
        'relative flex h-6 w-10 rounded-full',
        'bg-linear-to-r from-primary from-35% to-muted to-65% bg-size-[6.5rem_100%] bg-position-[100%_0%] bg-no-repeat',
        'p-px',
        'shadow-[inset_0_1.5px_2px] shadow-muted-foreground/20',
        'transition-[background-position,box-shadow] duration-125 ease-[cubic-bezier(0.26,0.75,0.38,0.45)]',
        'data-checked:bg-position-[0%_0%]',
        'dark:from-primary/50 dark:shadow-none',
        'data-disabled:cursor-not-allowed data-disabled:opacity-70',
        className,
      )}
      {...props}
    />
  )
}

SwitchRoot.displayName = 'SwitchRoot'

// ============================================================================
// SwitchThumb
// ============================================================================

type SwitchThumbProps = React.ComponentProps<typeof BaseSwitch.Thumb>

const SwitchThumb = ({ className, ...props }: SwitchThumbProps) => {
  return (
    <BaseSwitch.Thumb
      className={cn(
        'aspect-square h-full rounded-full bg-background',
        'shadow-[0_0_1px_1px,0_1px_1px,1px_2px_4px_-1px] shadow-muted-foreground/20',
        'transition-all duration-200',
        'data-checked:translate-x-4',
        'dark:shadow-black/25 dark:bg-foreground dark:data-checked:bg-background',
        'data-disabled:opacity-100',
        className,
      )}
      {...props}
    />
  )
}

SwitchThumb.displayName = 'SwitchThumb'

// ============================================================================
// Exports
// ============================================================================

export { SwitchRoot, SwitchThumb }

export type { SwitchRootProps, SwitchThumbProps }
