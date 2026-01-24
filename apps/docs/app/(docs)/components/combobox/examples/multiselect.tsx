'use client'

import {
  ComboboxChip,
  ComboboxChipRemove,
  ComboboxChips,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxItemIndicator,
  ComboboxItemText,
  ComboboxList,
  ComboboxPopup,
  ComboboxPortal,
  ComboboxPositioner,
  ComboboxRoot,
  ComboboxValue,
} from '@lglab/compose-ui/combobox'
import { FieldLabel, FieldRoot } from '@lglab/compose-ui/field'
import { Check, X } from 'lucide-react'
import * as React from 'react'

interface ProgrammingLanguage {
  id: string
  value: string
}

const langs: ProgrammingLanguage[] = [
  { id: 'js', value: 'JavaScript' },
  { id: 'ts', value: 'TypeScript' },
  { id: 'py', value: 'Python' },
  { id: 'java', value: 'Java' },
  { id: 'cpp', value: 'C++' },
  { id: 'cs', value: 'C#' },
  { id: 'php', value: 'PHP' },
  { id: 'ruby', value: 'Ruby' },
  { id: 'go', value: 'Go' },
  { id: 'rust', value: 'Rust' },
  { id: 'swift', value: 'Swift' },
]

export default function MultiselectExample() {
  const containerRef = React.useRef<HTMLDivElement | null>(null)

  return (
    <FieldRoot>
      <FieldLabel>Programming languages</FieldLabel>
      <ComboboxRoot items={langs} multiple>
        <ComboboxChips ref={containerRef} className='max-w-xs'>
          <ComboboxValue>
            {(value: ProgrammingLanguage[]) => (
              <React.Fragment>
                {value.map((language) => (
                  <ComboboxChip key={language.id} aria-label={language.value}>
                    {language.value}
                    <ComboboxChipRemove aria-label='Remove'>
                      <X className='size-3' />
                    </ComboboxChipRemove>
                  </ComboboxChip>
                ))}
                <ComboboxInput placeholder={value.length > 0 ? '' : 'e.g. TypeScript'} />
              </React.Fragment>
            )}
          </ComboboxValue>
        </ComboboxChips>
        <ComboboxPortal>
          <ComboboxPositioner sideOffset={4} anchor={containerRef}>
            <ComboboxPopup>
              <ComboboxEmpty>No languages found.</ComboboxEmpty>
              <ComboboxList>
                {(language: ProgrammingLanguage) => (
                  <ComboboxItem key={language.id} value={language}>
                    <ComboboxItemText>{language.value}</ComboboxItemText>
                    <ComboboxItemIndicator>
                      <Check className='size-3.5' />
                    </ComboboxItemIndicator>
                  </ComboboxItem>
                )}
              </ComboboxList>
            </ComboboxPopup>
          </ComboboxPositioner>
        </ComboboxPortal>
      </ComboboxRoot>
    </FieldRoot>
  )
}
