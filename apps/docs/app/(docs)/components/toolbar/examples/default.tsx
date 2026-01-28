'use client'

import {
  SelectIcon,
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  SelectList,
  SelectPopup,
  SelectPortal,
  SelectPositioner,
  SelectRoot,
  SelectTrigger,
  SelectValue,
} from '@lglab/compose-ui/select'
import { ToggleGroupItem, ToggleGroupRoot } from '@lglab/compose-ui/toggle-group'
import {
  ToolbarButton,
  ToolbarGroup,
  ToolbarRoot,
  ToolbarSeparator,
} from '@lglab/compose-ui/toolbar'
import {
  AlignCenterIcon,
  AlignLeftIcon,
  AlignRightIcon,
  BoldIcon,
  CheckIcon,
  ChevronsUpDownIcon,
  ItalicIcon,
  UnderlineIcon,
} from 'lucide-react'

const fontFaces = [
  { label: 'Helvetica', value: 'helvetica' },
  { label: 'Arial', value: 'arial' },
  { label: 'Times New Roman', value: 'times' },
  { label: 'Georgia', value: 'georgia' },
]

export default function DefaultExample() {
  return (
    <ToolbarRoot>
      <ToggleGroupRoot className='flex gap-0.5' multiple>
        <ToolbarButton
          render={<ToggleGroupItem value='bold' size='icon-sm' />}
          aria-label='Bold'
        >
          <BoldIcon className='size-4' />
        </ToolbarButton>
        <ToolbarButton
          render={<ToggleGroupItem value='italic' size='icon-sm' />}
          aria-label='Italic'
        >
          <ItalicIcon className='size-4' />
        </ToolbarButton>
        <ToolbarButton
          render={<ToggleGroupItem value='underline' size='icon-sm' />}
          aria-label='Underline'
        >
          <UnderlineIcon className='size-4' />
        </ToolbarButton>
      </ToggleGroupRoot>

      <ToolbarSeparator />

      <ToggleGroupRoot defaultValue={['left']} className='flex gap-0.5'>
        <ToolbarButton
          render={<ToggleGroupItem value='left' size='icon-sm' />}
          aria-label='Align left'
        >
          <AlignLeftIcon className='size-4' />
        </ToolbarButton>
        <ToolbarButton
          render={<ToggleGroupItem value='center' size='icon-sm' />}
          aria-label='Align center'
        >
          <AlignCenterIcon className='size-4' />
        </ToolbarButton>
        <ToolbarButton
          render={<ToggleGroupItem value='right' size='icon-sm' />}
          aria-label='Align right'
        >
          <AlignRightIcon className='size-4' />
        </ToolbarButton>
      </ToggleGroupRoot>

      <ToolbarSeparator />

      <ToolbarGroup aria-label='Format'>
        <ToolbarButton size='sm'>$</ToolbarButton>
        <ToolbarButton size='sm'>%</ToolbarButton>
      </ToolbarGroup>

      <ToolbarSeparator />

      <SelectRoot items={fontFaces} defaultValue='helvetica'>
        <ToolbarButton render={<SelectTrigger />}>
          <SelectValue />
          <SelectIcon>
            <ChevronsUpDownIcon className='size-4 opacity-50' />
          </SelectIcon>
        </ToolbarButton>
        <SelectPortal>
          <SelectPositioner>
            <SelectPopup>
              <SelectList>
                {fontFaces.map((fontFace) => (
                  <SelectItem key={fontFace.value} value={fontFace.value}>
                    <SelectItemText>{fontFace.label}</SelectItemText>
                    <SelectItemIndicator>
                      <CheckIcon className='size-4' />
                    </SelectItemIndicator>
                  </SelectItem>
                ))}
              </SelectList>
            </SelectPopup>
          </SelectPositioner>
        </SelectPortal>
      </SelectRoot>
    </ToolbarRoot>
  )
}
