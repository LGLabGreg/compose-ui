'use client'

import { CollapsiblePanel, CollapsibleRoot, CollapsibleTrigger } from '@lglab/compose-ui'
import { ChevronDown, Settings } from 'lucide-react'

const menuItems = [
  {
    title: 'Settings',
    icon: Settings,
    items: ['Preferences', 'Notifications', 'Privacy', 'Security'],
  },
]

export default function SidebarMenuExample() {
  return (
    <nav>
      {menuItems.map((item) => {
        const Icon = item.icon
        return (
          <CollapsibleRoot key={item.title} className='group'>
            <CollapsibleTrigger className='flex w-full md:w-1/2 items-center gap-2 px-2 py-1.5 text-sm text-left font-medium text-foreground transition-colors hover:bg-muted'>
              <Icon className='size-4 shrink-0' />
              <span className='flex-1'>{item.title}</span>
              <ChevronDown className='size-4 shrink-0 text-muted-foreground transition-transform duration-200 rotate-270 group-data-open:rotate-360' />
            </CollapsibleTrigger>
            <CollapsiblePanel>
              <div className='ml-4 border-l border-border pl-4 pt-1'>
                <ul className='space-y-0.5'>
                  {item.items.map((subItem) => (
                    <li key={subItem}>
                      <a
                        href='#'
                        className='block py-1 text-sm text-muted-foreground transition-colors hover:text-foreground'
                      >
                        {subItem}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </CollapsiblePanel>
          </CollapsibleRoot>
        )
      })}
    </nav>
  )
}
