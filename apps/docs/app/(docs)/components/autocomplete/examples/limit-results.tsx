'use client'

import {
  Autocomplete,
  AutocompleteEmpty,
  AutocompleteInput,
  AutocompleteItem,
  AutocompleteList,
  AutocompletePopup,
  AutocompletePortal,
  AutocompletePositioner,
  AutocompleteRoot,
  AutocompleteStatus,
} from '@lglab/compose-ui/autocomplete'
import { FieldLabel, FieldRoot } from '@lglab/compose-ui/field'
import { useMemo, useState } from 'react'

interface Component {
  id: string
  value: string
}

const limit = 8

const components: Component[] = [
  { id: 'accordion', value: 'Accordion' },
  { id: 'alert-dialog', value: 'Alert Dialog' },
  { id: 'autocomplete', value: 'Autocomplete' },
  { id: 'avatar', value: 'Avatar' },
  { id: 'checkbox', value: 'Checkbox' },
  { id: 'checkbox-group', value: 'Checkbox Group' },
  { id: 'collapsible', value: 'Collapsible' },
  { id: 'combobox', value: 'Combobox' },
  { id: 'context-menu', value: 'Context Menu' },
  { id: 'dialog', value: 'Dialog' },
  { id: 'field', value: 'Field' },
  { id: 'fieldset', value: 'Fieldset' },
  { id: 'form', value: 'Form' },
  { id: 'input', value: 'Input' },
  { id: 'menu', value: 'Menu' },
  { id: 'menubar', value: 'Menubar' },
  { id: 'meter', value: 'Meter' },
  { id: 'navigation-menu', value: 'Navigation Menu' },
  { id: 'number-field', value: 'Number Field' },
  { id: 'popover', value: 'Popover' },
  { id: 'preview-card', value: 'Preview Card' },
  { id: 'progress', value: 'Progress' },
  { id: 'radio', value: 'Radio' },
  { id: 'scroll-area', value: 'Scroll Area' },
  { id: 'select', value: 'Select' },
  { id: 'separator', value: 'Separator' },
  { id: 'slider', value: 'Slider' },
  { id: 'switch', value: 'Switch' },
  { id: 'tabs', value: 'Tabs' },
  { id: 'toast', value: 'Toast' },
  { id: 'toggle', value: 'Toggle' },
  { id: 'toggle-group', value: 'Toggle Group' },
  { id: 'toolbar', value: 'Toolbar' },
  { id: 'tooltip', value: 'Tooltip' },
]

export default function LimitResultsExample() {
  const [value, setValue] = useState('')

  const { contains } = Autocomplete.useFilter({ sensitivity: 'base' })

  const totalMatches = useMemo(() => {
    const trimmed = value.trim()
    if (!trimmed) {
      return components.length
    }
    return components.filter((c) => contains(c.value, trimmed)).length
  }, [value, contains])

  const moreCount = Math.max(0, totalMatches - limit)

  return (
    <FieldRoot>
      <FieldLabel>Search components (limit 8)</FieldLabel>
      <AutocompleteRoot
        items={components}
        value={value}
        onValueChange={setValue}
        limit={limit}
      >
        <AutocompleteInput placeholder='e.g. Dialog' />
        <AutocompletePortal>
          <AutocompletePositioner>
            <AutocompletePopup>
              <AutocompleteEmpty>
                No results found for &ldquo;{value}&rdquo;
              </AutocompleteEmpty>
              <AutocompleteList>
                {(component: Component) => (
                  <AutocompleteItem key={component.id} value={component}>
                    {component.value}
                  </AutocompleteItem>
                )}
              </AutocompleteList>
              <AutocompleteStatus>
                {moreCount > 0
                  ? `Hiding ${moreCount} results (type a more specific query)`
                  : null}
              </AutocompleteStatus>
            </AutocompletePopup>
          </AutocompletePositioner>
        </AutocompletePortal>
      </AutocompleteRoot>
    </FieldRoot>
  )
}
