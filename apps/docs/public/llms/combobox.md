# Combobox

An input combined with a list of predefined items to select, with filtering support.

## Installation

```bash
npm install @lglab/compose-ui
```

## Import

```tsx
import { BaseCombobox as Combobox, ComboboxRoot, ComboboxValue, ComboboxIcon, ComboboxInput, ComboboxControl, ComboboxClear, ComboboxTrigger, ComboboxBackdrop, ComboboxPortal, ComboboxPositioner, ComboboxPopup, ComboboxList, ComboboxEmpty, ComboboxItem, ComboboxItemText, ComboboxItemIndicator, ComboboxGroup, ComboboxGroupLabel, ComboboxCollection, ComboboxSeparator, ComboboxStatus, ComboboxChips, ComboboxChip, ComboboxChipRemove, ComboboxArrow } from '@lglab/compose-ui'
```

## Examples

### Default

```tsx
import {
  ComboboxClear,
  ComboboxControl,
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
  ComboboxTrigger,
} from '@lglab/compose-ui/combobox'
import { FieldLabel, FieldRoot } from '@lglab/compose-ui/field'
import { Check, ChevronDown, X } from 'lucide-react'

interface Fruit {
  label: string
  value: string
}

const fruits: Fruit[] = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Orange', value: 'orange' },
  { label: 'Pineapple', value: 'pineapple' },
  { label: 'Grape', value: 'grape' },
  { label: 'Mango', value: 'mango' },
  { label: 'Strawberry', value: 'strawberry' },
  { label: 'Blueberry', value: 'blueberry' },
  { label: 'Raspberry', value: 'raspberry' },
  { label: 'Blackberry', value: 'blackberry' },
  { label: 'Cherry', value: 'cherry' },
  { label: 'Peach', value: 'peach' },
  { label: 'Pear', value: 'pear' },
  { label: 'Plum', value: 'plum' },
  { label: 'Kiwi', value: 'kiwi' },
  { label: 'Watermelon', value: 'watermelon' },
  { label: 'Cantaloupe', value: 'cantaloupe' },
  { label: 'Honeydew', value: 'honeydew' },
  { label: 'Papaya', value: 'papaya' },
  { label: 'Guava', value: 'guava' },
  { label: 'Lychee', value: 'lychee' },
  { label: 'Pomegranate', value: 'pomegranate' },
  { label: 'Apricot', value: 'apricot' },
  { label: 'Grapefruit', value: 'grapefruit' },
  { label: 'Passionfruit', value: 'passionfruit' },
]

export default function DefaultExample() {
  return (
    <FieldRoot>
      <FieldLabel>Choose a fruit</FieldLabel>
      <ComboboxRoot items={fruits}>
        <ComboboxControl>
          <ComboboxInput placeholder='e.g. Apple' />
          <ComboboxClear aria-label='Clear selection'>
            <X className='size-4' />
          </ComboboxClear>
          <ComboboxTrigger aria-label='Open popup'>
            <ChevronDown className='size-4' />
          </ComboboxTrigger>
        </ComboboxControl>
        <ComboboxPortal>
          <ComboboxPositioner>
            <ComboboxPopup>
              <ComboboxEmpty>No fruits found.</ComboboxEmpty>
              <ComboboxList>
                {(item: Fruit) => (
                  <ComboboxItem key={item.value} value={item}>
                    <ComboboxItemText>{item.label}</ComboboxItemText>
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
```

### Multiselect

```tsx
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
```

### Grouped

```tsx
import {
  ComboboxClear,
  ComboboxCollection,
  ComboboxControl,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxGroupLabel,
  ComboboxInput,
  ComboboxItem,
  ComboboxItemIndicator,
  ComboboxItemText,
  ComboboxList,
  ComboboxPopup,
  ComboboxPortal,
  ComboboxPositioner,
  ComboboxRoot,
  ComboboxSeparator,
  ComboboxTrigger,
} from '@lglab/compose-ui/combobox'
import { FieldLabel, FieldRoot } from '@lglab/compose-ui/field'
import { Check, ChevronDown, X } from 'lucide-react'
import * as React from 'react'

interface Produce {
  id: string
  label: string
  group: 'Fruits' | 'Vegetables' | 'Grains'
}

interface ProduceGroup {
  value: string
  items: Produce[]
}

const produceData: Produce[] = [
  { id: 'fruit-apple', label: 'Apple', group: 'Fruits' },
  { id: 'fruit-banana', label: 'Banana', group: 'Fruits' },
  { id: 'fruit-mango', label: 'Mango', group: 'Fruits' },
  { id: 'fruit-kiwi', label: 'Kiwi', group: 'Fruits' },
  { id: 'veg-broccoli', label: 'Broccoli', group: 'Vegetables' },
  { id: 'veg-carrot', label: 'Carrot', group: 'Vegetables' },
  { id: 'veg-cauliflower', label: 'Cauliflower', group: 'Vegetables' },
  { id: 'veg-cucumber', label: 'Cucumber', group: 'Vegetables' },
  { id: 'veg-kale', label: 'Kale', group: 'Vegetables' },
  { id: 'veg-pepper', label: 'Bell pepper', group: 'Vegetables' },
  { id: 'veg-spinach', label: 'Spinach', group: 'Vegetables' },
  { id: 'veg-zucchini', label: 'Zucchini', group: 'Vegetables' },
  { id: 'grain-rice', label: 'Rice', group: 'Grains' },
  { id: 'grain-wheat', label: 'Wheat', group: 'Grains' },
  { id: 'grain-oats', label: 'Oats', group: 'Grains' },
  { id: 'grain-barley', label: 'Barley', group: 'Grains' },
  { id: 'grain-quinoa', label: 'Quinoa', group: 'Grains' },
]

function groupProduce(items: Produce[]): ProduceGroup[] {
  const groups: Record<string, Produce[]> = {}
  items.forEach((item) => {
    ;(groups[item.group] ??= []).push(item)
  })
  const order = ['Fruits', 'Vegetables', 'Grains']
  return order.map((value) => ({ value, items: groups[value] ?? [] }))
}

const groupedProduce: ProduceGroup[] = groupProduce(produceData)

export default function GroupedExample() {
  return (
    <FieldRoot>
      <FieldLabel>Select produce</FieldLabel>
      <ComboboxRoot items={groupedProduce}>
        <ComboboxControl>
          <ComboboxInput placeholder='e.g. Mango' />
          <ComboboxClear aria-label='Clear selection'>
            <X className='size-4' />
          </ComboboxClear>
          <ComboboxTrigger aria-label='Open popup'>
            <ChevronDown className='size-4' />
          </ComboboxTrigger>
        </ComboboxControl>
        <ComboboxPortal>
          <ComboboxPositioner>
            <ComboboxPopup>
              <ComboboxEmpty>No produce found.</ComboboxEmpty>
              <ComboboxList>
                {(group: ProduceGroup, index: number) => (
                  <React.Fragment key={group.value}>
                    <ComboboxGroup items={group.items}>
                      <ComboboxGroupLabel>{group.value}</ComboboxGroupLabel>
                      <ComboboxCollection>
                        {(item: Produce) => (
                          <ComboboxItem key={item.id} value={item}>
                            <ComboboxItemText>{item.label}</ComboboxItemText>
                            <ComboboxItemIndicator>
                              <Check className='size-3.5' />
                            </ComboboxItemIndicator>
                          </ComboboxItem>
                        )}
                      </ComboboxCollection>
                    </ComboboxGroup>
                    {index < groupedProduce.length - 1 && <ComboboxSeparator />}
                  </React.Fragment>
                )}
              </ComboboxList>
            </ComboboxPopup>
          </ComboboxPositioner>
        </ComboboxPortal>
      </ComboboxRoot>
    </FieldRoot>
  )
}
```

### Popup

```tsx
import { Button } from '@lglab/compose-ui/button'
import {
  ComboboxEmpty,
  ComboboxIcon,
  ComboboxInput,
  ComboboxItem,
  ComboboxItemIndicator,
  ComboboxItemText,
  ComboboxList,
  ComboboxPopup,
  ComboboxPortal,
  ComboboxPositioner,
  ComboboxRoot,
  ComboboxTrigger,
  ComboboxValue,
} from '@lglab/compose-ui/combobox'
import { FieldLabel, FieldRoot } from '@lglab/compose-ui/field'
import { Check, ChevronsUpDown } from 'lucide-react'

interface Country {
  label: string
  value: string
}

const countries: Country[] = [
  { label: 'Argentina', value: 'ar' },
  { label: 'Australia', value: 'au' },
  { label: 'Brazil', value: 'br' },
  { label: 'Canada', value: 'ca' },
  { label: 'China', value: 'cn' },
  { label: 'France', value: 'fr' },
  { label: 'Germany', value: 'de' },
  { label: 'India', value: 'in' },
  { label: 'Italy', value: 'it' },
  { label: 'Japan', value: 'jp' },
  { label: 'Mexico', value: 'mx' },
  { label: 'Netherlands', value: 'nl' },
  { label: 'Poland', value: 'pl' },
  { label: 'South Korea', value: 'kr' },
  { label: 'Spain', value: 'es' },
  { label: 'Sweden', value: 'se' },
  { label: 'Switzerland', value: 'ch' },
  { label: 'United Kingdom', value: 'gb' },
  { label: 'United States', value: 'us' },
]

export default function InputInsidePopupExample() {
  return (
    <FieldRoot className='w-64'>
      <FieldLabel render={<div />} nativeLabel={false}>
        Country
      </FieldLabel>
      <ComboboxRoot items={countries}>
        <ComboboxTrigger
          render={(props) => (
            <Button {...props} className='justify-between font-normal' variant='outline'>
              <ComboboxValue placeholder='Select a country' />
              <ComboboxIcon>
                <ChevronsUpDown className='size-4' />
              </ComboboxIcon>
            </Button>
          )}
        />

        <ComboboxPortal>
          <ComboboxPositioner align='start'>
            <ComboboxPopup>
              <ComboboxInput placeholder='e.g. United Kingdom' />
              <ComboboxEmpty>No countries found.</ComboboxEmpty>
              <ComboboxList>
                {(item: Country) => (
                  <ComboboxItem key={item.value} value={item}>
                    <ComboboxItemText>{item.label}</ComboboxItemText>
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
```

### Async search

```tsx
import {
  Combobox,
  ComboboxClear,
  ComboboxControl,
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
  ComboboxStatus,
  ComboboxTrigger,
} from '@lglab/compose-ui/combobox'
import { FieldLabel, FieldRoot } from '@lglab/compose-ui/field'
import { Check, ChevronDown, Loader2, X } from 'lucide-react'
import { useMemo, useRef, useState, useTransition } from 'react'

interface DirectoryUser {
  id: string
  name: string
  email: string
  title: string
}

export default function AsyncSearchExample() {
  const [searchResults, setSearchResults] = useState<DirectoryUser[]>([])
  const [selectedValue, setSelectedValue] = useState<DirectoryUser | null>(null)
  const [searchValue, setSearchValue] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [isPending, startTransition] = useTransition()

  const { contains } = Combobox.useFilter()

  const abortControllerRef = useRef<AbortController | null>(null)

  const trimmedSearchValue = searchValue.trim()

  const items = useMemo(() => {
    if (!selectedValue || searchResults.some((user) => user.id === selectedValue.id)) {
      return searchResults
    }
    return [...searchResults, selectedValue]
  }, [searchResults, selectedValue])

  function getStatus() {
    if (isPending) {
      return (
        <>
          <Loader2 className='size-3 animate-spin' />
          Searching…
        </>
      )
    }

    if (error) {
      return error
    }

    if (trimmedSearchValue === '') {
      return selectedValue ? null : 'Start typing to search people…'
    }

    if (searchResults.length === 0) {
      return `No matches for "${trimmedSearchValue}".`
    }

    return null
  }

  function getEmptyMessage() {
    if (trimmedSearchValue === '' || isPending || searchResults.length > 0 || error) {
      return null
    }
    return 'Try a different search term.'
  }

  return (
    <FieldRoot className='w-80'>
      <FieldLabel>Assign reviewer</FieldLabel>
      <ComboboxRoot
        items={items}
        itemToStringLabel={(user: DirectoryUser) => user.name}
        filter={null}
        onOpenChangeComplete={(open) => {
          if (!open && selectedValue) {
            setSearchResults([selectedValue])
          }
        }}
        onValueChange={(nextSelectedValue) => {
          setSelectedValue(nextSelectedValue)
          setSearchValue('')
          setError(null)
        }}
        onInputValueChange={(nextSearchValue, { reason }) => {
          setSearchValue(nextSearchValue)

          if (nextSearchValue === '') {
            setSearchResults([])
            setError(null)
            return
          }

          if (reason === 'item-press') {
            return
          }

          const controller = new AbortController()
          abortControllerRef.current?.abort()
          abortControllerRef.current = controller

          startTransition(async () => {
            setError(null)

            const result = await searchUsers(nextSearchValue, contains)

            if (controller.signal.aborted) {
              return
            }

            startTransition(() => {
              setSearchResults(result.users)
              setError(result.error)
            })
          })
        }}
      >
        <ComboboxControl>
          <ComboboxInput placeholder='e.g. Michael' />
          <ComboboxClear aria-label='Clear selection'>
            <X className='size-4' />
          </ComboboxClear>
          <ComboboxTrigger aria-label='Open popup'>
            <ChevronDown className='size-4' />
          </ComboboxTrigger>
        </ComboboxControl>

        <ComboboxPortal>
          <ComboboxPositioner>
            <ComboboxPopup aria-busy={isPending || undefined}>
              <ComboboxStatus>{getStatus()}</ComboboxStatus>
              <ComboboxEmpty>{getEmptyMessage()}</ComboboxEmpty>
              <ComboboxList>
                {(user: DirectoryUser) => (
                  <ComboboxItem key={user.id} value={user}>
                    <div className='flex flex-col gap-0.5'>
                      <ComboboxItemText className='font-medium'>
                        {user.name}
                      </ComboboxItemText>
                      <div className='text-xs text-muted-foreground font-medium'>
                        {user.title}
                      </div>
                      <div className='text-xs text-muted-foreground'>{user.email}</div>
                    </div>
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

async function searchUsers(
  query: string,
  filter: (item: string, query: string) => boolean,
): Promise<{ users: DirectoryUser[]; error: string | null }> {
  await new Promise((resolve) => {
    setTimeout(resolve, Math.random() * 500 + 100)
  })

  const users = allUsers.filter((user) => {
    return (
      filter(user.name, query) || filter(user.email, query) || filter(user.title, query)
    )
  })

  return {
    users,
    error: null,
  }
}

const allUsers: DirectoryUser[] = [
  {
    id: 'leslie-alexander',
    name: 'Leslie Alexander',
    email: 'leslie.alexander@example.com',
    title: 'Product Manager',
  },
  {
    id: 'kathryn-murphy',
    name: 'Kathryn Murphy',
    email: 'kathryn.murphy@example.com',
    title: 'Marketing Lead',
  },
  {
    id: 'courtney-henry',
    name: 'Courtney Henry',
    email: 'courtney.henry@example.com',
    title: 'Design Systems',
  },
  {
    id: 'michael-foster',
    name: 'Michael Foster',
    email: 'michael.foster@example.com',
    title: 'Engineering Manager',
  },
  {
    id: 'lindsay-walton',
    name: 'Lindsay Walton',
    email: 'lindsay.walton@example.com',
    title: 'Product Designer',
  },
  {
    id: 'tom-cook',
    name: 'Tom Cook',
    email: 'tom.cook@example.com',
    title: 'Frontend Engineer',
  },
  {
    id: 'whitney-francis',
    name: 'Whitney Francis',
    email: 'whitney.francis@example.com',
    title: 'Customer Success',
  },
  {
    id: 'jacob-jones',
    name: 'Jacob Jones',
    email: 'jacob.jones@example.com',
    title: 'Security Engineer',
  },
  {
    id: 'arlene-mccoy',
    name: 'Arlene McCoy',
    email: 'arlene.mccoy@example.com',
    title: 'Data Analyst',
  },
  {
    id: 'marvin-mckinney',
    name: 'Marvin McKinney',
    email: 'marvin.mckinney@example.com',
    title: 'QA Specialist',
  },
  {
    id: 'eleanor-pena',
    name: 'Eleanor Pena',
    email: 'eleanor.pena@example.com',
    title: 'Operations',
  },
  {
    id: 'jerome-bell',
    name: 'Jerome Bell',
    email: 'jerome.bell@example.com',
    title: 'DevOps Engineer',
  },
]
```

### Async search Multiple

```tsx
import {
  Combobox,
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
  ComboboxStatus,
  ComboboxValue,
} from '@lglab/compose-ui/combobox'
import { FieldLabel, FieldRoot } from '@lglab/compose-ui/field'
import { Check, Loader2, X } from 'lucide-react'
import { useMemo, useRef, useState, useTransition } from 'react'

interface DirectoryUser {
  id: string
  name: string
  email: string
  title: string
}

export default function AsyncSearchMultipleExample() {
  const [searchResults, setSearchResults] = useState<DirectoryUser[]>([])
  const [selectedValues, setSelectedValues] = useState<DirectoryUser[]>([])
  const [searchValue, setSearchValue] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [blockStartStatus, setBlockStartStatus] = useState(false)
  const [isPending, startTransition] = useTransition()

  const { contains } = Combobox.useFilter()

  const abortControllerRef = useRef<AbortController | null>(null)
  const selectedValuesRef = useRef<DirectoryUser[]>([])

  const trimmedSearchValue = searchValue.trim()

  const items = useMemo(() => {
    if (selectedValues.length === 0) {
      return searchResults
    }

    const merged = [...searchResults]

    selectedValues.forEach((user) => {
      if (!searchResults.some((result) => result.id === user.id)) {
        merged.push(user)
      }
    })

    return merged
  }, [searchResults, selectedValues])

  function getStatus() {
    if (isPending) {
      return (
        <>
          <Loader2 className='size-3 animate-spin' />
          Searching…
        </>
      )
    }

    if (error) {
      return error
    }

    if (trimmedSearchValue === '' && !blockStartStatus) {
      return selectedValues.length > 0 ? null : 'Start typing to search people…'
    }

    if (searchResults.length === 0 && !blockStartStatus) {
      return `No matches for "${trimmedSearchValue}".`
    }

    return null
  }

  function getEmptyMessage() {
    if (trimmedSearchValue === '' || isPending || searchResults.length > 0 || error) {
      return null
    }
    return 'Try a different search term.'
  }

  return (
    <FieldRoot className='w-80'>
      <FieldLabel>Assign reviewers</FieldLabel>
      <ComboboxRoot
        items={items}
        itemToStringLabel={(user: DirectoryUser) => user.name}
        multiple
        filter={null}
        onOpenChangeComplete={(open) => {
          if (!open) {
            setSearchResults(selectedValuesRef.current)
            setBlockStartStatus(false)
          }
        }}
        onValueChange={(nextSelectedValues) => {
          selectedValuesRef.current = nextSelectedValues
          setSelectedValues(nextSelectedValues)
          setSearchValue('')
          setError(null)

          if (nextSelectedValues.length === 0) {
            setSearchResults([])
            setBlockStartStatus(false)
          } else {
            setBlockStartStatus(true)
          }
        }}
        onInputValueChange={(nextSearchValue, { reason }) => {
          setSearchValue(nextSearchValue)

          const controller = new AbortController()
          abortControllerRef.current?.abort()
          abortControllerRef.current = controller

          if (nextSearchValue === '') {
            setSearchResults(selectedValuesRef.current)
            setError(null)
            setBlockStartStatus(false)
            return
          }

          if (reason === 'item-press') {
            return
          }

          startTransition(async () => {
            setError(null)

            const result = await searchUsers(nextSearchValue, contains)

            if (controller.signal.aborted) {
              return
            }

            startTransition(() => {
              setSearchResults(result.users)
              setError(result.error)
            })
          })
        }}
      >
        <ComboboxChips>
          <ComboboxValue>
            {(value: DirectoryUser[]) => (
              <>
                {value.map((user) => (
                  <ComboboxChip key={user.id} aria-label={user.name}>
                    {user.name}
                    <ComboboxChipRemove aria-label='Remove'>
                      <X className='size-3' />
                    </ComboboxChipRemove>
                  </ComboboxChip>
                ))}
                <ComboboxInput placeholder={value.length > 0 ? '' : 'e.g. Michael'} />
              </>
            )}
          </ComboboxValue>
        </ComboboxChips>

        <ComboboxPortal>
          <ComboboxPositioner>
            <ComboboxPopup aria-busy={isPending || undefined}>
              <ComboboxStatus>{getStatus()}</ComboboxStatus>
              <ComboboxEmpty>{getEmptyMessage()}</ComboboxEmpty>
              <ComboboxList>
                {(user: DirectoryUser) => (
                  <ComboboxItem key={user.id} value={user}>
                    <div className='flex flex-col gap-0.5'>
                      <ComboboxItemText className='font-medium'>
                        {user.name}
                      </ComboboxItemText>
                      <div className='text-xs text-muted-foreground font-medium'>
                        {user.title}
                      </div>
                      <div className='text-xs text-muted-foreground'>{user.email}</div>
                    </div>
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

async function searchUsers(
  query: string,
  filter: (item: string, query: string) => boolean,
): Promise<{ users: DirectoryUser[]; error: string | null }> {
  await new Promise((resolve) => {
    setTimeout(resolve, Math.random() * 500 + 100)
  })

  const users = allUsers.filter((user) => {
    return (
      filter(user.name, query) || filter(user.email, query) || filter(user.title, query)
    )
  })

  return {
    users,
    error: null,
  }
}

const allUsers: DirectoryUser[] = [
  {
    id: 'leslie-alexander',
    name: 'Leslie Alexander',
    email: 'leslie.alexander@example.com',
    title: 'Product Manager',
  },
  {
    id: 'kathryn-murphy',
    name: 'Kathryn Murphy',
    email: 'kathryn.murphy@example.com',
    title: 'Marketing Lead',
  },
  {
    id: 'courtney-henry',
    name: 'Courtney Henry',
    email: 'courtney.henry@example.com',
    title: 'Design Systems',
  },
  {
    id: 'michael-foster',
    name: 'Michael Foster',
    email: 'michael.foster@example.com',
    title: 'Engineering Manager',
  },
  {
    id: 'lindsay-walton',
    name: 'Lindsay Walton',
    email: 'lindsay.walton@example.com',
    title: 'Product Designer',
  },
  {
    id: 'tom-cook',
    name: 'Tom Cook',
    email: 'tom.cook@example.com',
    title: 'Frontend Engineer',
  },
  {
    id: 'whitney-francis',
    name: 'Whitney Francis',
    email: 'whitney.francis@example.com',
    title: 'Customer Success',
  },
  {
    id: 'jacob-jones',
    name: 'Jacob Jones',
    email: 'jacob.jones@example.com',
    title: 'Security Engineer',
  },
  {
    id: 'arlene-mccoy',
    name: 'Arlene McCoy',
    email: 'arlene.mccoy@example.com',
    title: 'Data Analyst',
  },
  {
    id: 'marvin-mckinney',
    name: 'Marvin McKinney',
    email: 'marvin.mckinney@example.com',
    title: 'QA Specialist',
  },
  {
    id: 'eleanor-pena',
    name: 'Eleanor Pena',
    email: 'eleanor.pena@example.com',
    title: 'Operations',
  },
  {
    id: 'jerome-bell',
    name: 'Jerome Bell',
    email: 'jerome.bell@example.com',
    title: 'DevOps Engineer',
  },
]
```

### Creatable

```tsx
import { Button } from '@lglab/compose-ui/button'
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
import {
  DialogBackdrop,
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogPopup,
  DialogPortal,
  DialogRoot,
  DialogTitle,
} from '@lglab/compose-ui/dialog'
import { FieldControl, FieldLabel, FieldRoot } from '@lglab/compose-ui/field'
import { FormRoot } from '@lglab/compose-ui/form'
import { Check, Plus, X } from 'lucide-react'
import {
  type ChangeEvent,
  type FormEvent,
  type KeyboardEvent,
  useMemo,
  useRef,
  useState,
} from 'react'

const normalize = (str: string) => str.trim().toLocaleLowerCase()

function generateUniqueId(baseId: string, existingIds: Set<string>): string {
  if (!existingIds.has(baseId)) return baseId
  let counter = 2
  while (existingIds.has(`${baseId}-${counter}`)) counter++
  return `${baseId}-${counter}`
}

interface LabelItem {
  creatable?: string
  id: string
  value: string
}

const initialLabels: LabelItem[] = [
  { id: 'bug', value: 'bug' },
  { id: 'docs', value: 'documentation' },
  { id: 'enhancement', value: 'enhancement' },
  { id: 'help-wanted', value: 'help wanted' },
  { id: 'good-first-issue', value: 'good first issue' },
]

export default function CreatableExample() {
  const [labels, setLabels] = useState<LabelItem[]>(initialLabels)
  const [selected, setSelected] = useState<LabelItem[]>([])
  const [query, setQuery] = useState('')
  const [openDialog, setOpenDialog] = useState(false)
  const [createValue, setCreateValue] = useState('')

  const containerRef = useRef<HTMLDivElement>(null)
  const createInputRef = useRef<HTMLInputElement>(null)
  const comboboxInputRef = useRef<HTMLInputElement>(null)
  const highlightedItemRef = useRef<LabelItem>(undefined)

  function handleInputKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key !== 'Enter' || highlightedItemRef.current) {
      return
    }

    const currentTrimmed = query.trim()
    if (currentTrimmed === '') {
      return
    }

    const normalized = normalize(currentTrimmed)
    const existing = labels.find((label) => normalize(label.value) === normalized)

    if (existing) {
      setSelected((prev) =>
        prev.some((item) => item.id === existing.id) ? prev : [...prev, existing],
      )
      setQuery('')
      return
    }

    setCreateValue(currentTrimmed)
    setOpenDialog(true)
  }

  function handleCreate() {
    const value = createValue.trim() || createInputRef.current?.value.trim() || ''
    if (!value) {
      return
    }

    const normalized = normalize(value)
    const baseId = normalized.replace(/\s+/g, '-')
    const existing = labels.find((label) => normalize(label.value) === normalized)

    if (existing) {
      setSelected((prev) =>
        prev.some((item) => item.id === existing.id) ? prev : [...prev, existing],
      )
      setOpenDialog(false)
      setQuery('')
      return
    }

    const existingIds = new Set(labels.map((label) => label.id))
    const uniqueId = generateUniqueId(baseId, existingIds)
    const newItem: LabelItem = { id: uniqueId, value }

    if (!selected.find((item) => item.id === newItem.id)) {
      setLabels((prev) => [...prev, newItem])
      setSelected((prev) => [...prev, newItem])
    }

    setOpenDialog(false)
    setQuery('')
  }

  function handleCreateSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    handleCreate()
  }

  const itemsForView = useMemo(() => {
    const trimmed = query.trim()
    const lowered = normalize(trimmed)
    const exactExists = labels.some((label) => normalize(label.value) === lowered)

    if (trimmed !== '' && !exactExists) {
      return [
        ...labels,
        {
          creatable: trimmed,
          id: `create:${lowered}`,
          value: `Create "${trimmed}"`,
        },
      ]
    }
    return labels
  }, [query, labels])

  return (
    <>
      <FieldRoot>
        <FieldLabel>Labels</FieldLabel>
        <ComboboxRoot
          items={itemsForView}
          multiple
          onValueChange={(next) => {
            const creatableSelection = next.find(
              (item) =>
                item.creatable && !selected.some((current) => current.id === item.id),
            )

            if (creatableSelection && creatableSelection.creatable) {
              setCreateValue(creatableSelection.creatable)
              setOpenDialog(true)
              return
            }
            const clean = next.filter((item) => !item.creatable)
            setSelected(clean)
            setQuery('')
          }}
          value={selected}
          inputValue={query}
          onInputValueChange={setQuery}
          onItemHighlighted={(item) => {
            highlightedItemRef.current = item
          }}
        >
          <ComboboxChips ref={containerRef} className='max-w-xs'>
            <ComboboxValue>
              {(value: LabelItem[]) => (
                <>
                  {value.map((label) => (
                    <ComboboxChip key={label.id} aria-label={label.value}>
                      {label.value}
                      <ComboboxChipRemove aria-label='Remove'>
                        <X className='size-3' />
                      </ComboboxChipRemove>
                    </ComboboxChip>
                  ))}
                  <ComboboxInput
                    ref={comboboxInputRef}
                    placeholder={value.length > 0 ? '' : 'e.g. bug'}
                    onKeyDown={handleInputKeyDown}
                  />
                </>
              )}
            </ComboboxValue>
          </ComboboxChips>
          <ComboboxPortal>
            <ComboboxPositioner sideOffset={4} anchor={containerRef}>
              <ComboboxPopup>
                <ComboboxEmpty>No labels found.</ComboboxEmpty>
                <ComboboxList>
                  {(item: LabelItem) =>
                    item.creatable ? (
                      <ComboboxItem key={item.id} value={item}>
                        <span className='flex items-center gap-2'>
                          <Plus className='size-3' />
                          <ComboboxItemText>Create {item.creatable}</ComboboxItemText>
                        </span>
                      </ComboboxItem>
                    ) : (
                      <ComboboxItem key={item.id} value={item}>
                        <ComboboxItemText>{item.value}</ComboboxItemText>
                        <ComboboxItemIndicator>
                          <Check className='size-3.5' />
                        </ComboboxItemIndicator>
                      </ComboboxItem>
                    )
                  }
                </ComboboxList>
              </ComboboxPopup>
            </ComboboxPositioner>
          </ComboboxPortal>
        </ComboboxRoot>
      </FieldRoot>

      <DialogRoot
        open={openDialog}
        onOpenChange={(open) => {
          setOpenDialog(open)
          if (!open) setCreateValue('')
        }}
      >
        <DialogPortal>
          <DialogBackdrop />
          <DialogPopup size='sm' initialFocus={createInputRef}>
            <DialogHeader>
              <DialogTitle>Create new label</DialogTitle>
              <DialogDescription>Add a new label to select.</DialogDescription>
            </DialogHeader>
            <FormRoot onSubmit={handleCreateSubmit}>
              <FieldRoot name='labelName'>
                <FieldLabel>Label name</FieldLabel>
                <FieldControl
                  ref={createInputRef}
                  placeholder='Label name'
                  value={createValue}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setCreateValue(e.target.value)
                  }
                />
              </FieldRoot>
              <DialogFooter>
                <DialogClose variant='ghost'>Cancel</DialogClose>
                <Button type='submit'>Create</Button>
              </DialogFooter>
            </FormRoot>
          </DialogPopup>
        </DialogPortal>
      </DialogRoot>
    </>
  )
}
```

## Resources

- [Base UI](https://base-ui.com/react/components/combobox)
