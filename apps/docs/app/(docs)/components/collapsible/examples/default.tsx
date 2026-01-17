'use client'

import { Button } from '@lglab/compose-ui/button'
import {
  CollapsiblePanel,
  CollapsibleRoot,
  CollapsibleTrigger,
} from '@lglab/compose-ui/collapsible'
import { ChevronDown } from 'lucide-react'

export default function DefaultExample() {
  return (
    <CollapsibleRoot className='group w-full max-w-md'>
      <CollapsibleTrigger
        render={(props) => (
          <Button {...props} variant='outline' className='w-full justify-between'>
            <span>What is Compose UI?</span>
            <ChevronDown className='size-4 shrink-0 text-muted-foreground transition-transform duration-200 group-data-open:rotate-180' />
          </Button>
        )}
      />
      <CollapsiblePanel>
        <div className='p-2 text-sm'>
          <p>
            Compose UI is a collection of accessible React components built with Base UI
            and Tailwind CSS, ready to use in your design systems and web apps.
          </p>
        </div>
      </CollapsiblePanel>
    </CollapsibleRoot>
  )
}
