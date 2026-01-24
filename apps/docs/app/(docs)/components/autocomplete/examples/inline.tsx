'use client'

import {
  AutocompleteInput,
  AutocompleteItem,
  AutocompleteList,
  AutocompletePopup,
  AutocompletePortal,
  AutocompletePositioner,
  AutocompleteRoot,
} from '@lglab/compose-ui/autocomplete'
import { FieldLabel, FieldRoot } from '@lglab/compose-ui/field'

interface Component {
  id: string
  value: string
}

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

export default function InlineExample() {
  return (
    <FieldRoot>
      <FieldLabel>Search components</FieldLabel>
      <AutocompleteRoot items={components} mode='both'>
        <AutocompleteInput placeholder='e.g. Accordion' />
        <AutocompletePortal>
          <AutocompletePositioner className='data-empty:hidden'>
            <AutocompletePopup>
              <AutocompleteList>
                {(component: Component) => (
                  <AutocompleteItem key={component.id} value={component}>
                    {component.value}
                  </AutocompleteItem>
                )}
              </AutocompleteList>
            </AutocompletePopup>
          </AutocompletePositioner>
        </AutocompletePortal>
      </AutocompleteRoot>
    </FieldRoot>
  )
}
