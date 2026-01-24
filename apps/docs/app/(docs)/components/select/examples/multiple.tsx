'use client'

import { FieldLabel, FieldRoot } from '@lglab/compose-ui/field'
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
import { Check, ChevronsUpDown } from 'lucide-react'

const languages = {
  javascript: 'JavaScript',
  typescript: 'TypeScript',
  python: 'Python',
  java: 'Java',
  csharp: 'C#',
  php: 'PHP',
  cpp: 'C++',
  rust: 'Rust',
  go: 'Go',
  swift: 'Swift',
}

type Language = keyof typeof languages

const values = Object.keys(languages) as Language[]

function renderValue(value: Language[]) {
  if (value.length === 0) {
    return 'Select languages…'
  }

  const firstLanguage = languages[value[0]]
  const additionalLanguages = value.length > 1 ? ` (+${value.length - 1} more)` : ''
  return firstLanguage + additionalLanguages
}

export default function MultipleExample() {
  return (
    <FieldRoot className='flex flex-col gap-1'>
      <FieldLabel nativeLabel={false} render={<div />}>
        Languages
      </FieldLabel>
      <SelectRoot multiple defaultValue={['javascript', 'typescript']}>
        <SelectTrigger>
          <SelectValue>{renderValue}</SelectValue>
          <SelectIcon>
            <ChevronsUpDown className='size-4' />
          </SelectIcon>
        </SelectTrigger>
        <SelectPortal>
          <SelectPositioner alignItemWithTrigger={false}>
            <SelectPopup>
              <SelectList>
                {values.map((value) => (
                  <SelectItem key={value} value={value}>
                    <SelectItemText>{languages[value]}</SelectItemText>
                    <SelectItemIndicator>
                      <Check className='size-3.5' />
                    </SelectItemIndicator>
                  </SelectItem>
                ))}
              </SelectList>
            </SelectPopup>
          </SelectPositioner>
        </SelectPortal>
      </SelectRoot>
    </FieldRoot>
  )
}
