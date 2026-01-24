# Autocomplete

An input field with a filterable dropdown list of suggestions.

## Installation

```bash
npm install @lglab/compose-ui
```

## Import

```tsx
import { BaseAutocomplete as Autocomplete, AutocompleteRoot, AutocompleteInput, AutocompletePortal, AutocompletePositioner, AutocompletePopup, AutocompleteEmpty, AutocompleteList, AutocompleteItem, AutocompleteStatus, AutocompleteGroup, AutocompleteGroupLabel, AutocompleteCollection, AutocompleteSeparator } from '@lglab/compose-ui'
```

## Examples

### Default

```tsx
import {
  AutocompleteEmpty,
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

export default function DefaultExample() {
  return (
    <FieldRoot>
      <FieldLabel>Search components</FieldLabel>
      <AutocompleteRoot items={components}>
        <AutocompleteInput placeholder='e.g. Accordion' />
        <AutocompletePortal>
          <AutocompletePositioner>
            <AutocompletePopup>
              <AutocompleteEmpty>No components found.</AutocompleteEmpty>
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
```

### Inline

```tsx
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
```

### Grouped

```tsx
import {
  AutocompleteCollection,
  AutocompleteEmpty,
  AutocompleteGroup,
  AutocompleteGroupLabel,
  AutocompleteInput,
  AutocompleteItem,
  AutocompleteList,
  AutocompletePopup,
  AutocompletePortal,
  AutocompletePositioner,
  AutocompleteRoot,
  AutocompleteSeparator,
} from '@lglab/compose-ui/autocomplete'
import { FieldLabel, FieldRoot } from '@lglab/compose-ui/field'
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
      <FieldLabel>Search produce</FieldLabel>
      <AutocompleteRoot items={groupedProduce}>
        <AutocompleteInput placeholder='e.g. Mango' />
        <AutocompletePortal>
          <AutocompletePositioner>
            <AutocompletePopup>
              <AutocompleteEmpty>No produce found.</AutocompleteEmpty>
              <AutocompleteList>
                {(group: ProduceGroup, index: number) => (
                  <React.Fragment key={group.value}>
                    <AutocompleteGroup items={group.items}>
                      <AutocompleteGroupLabel>{group.value}</AutocompleteGroupLabel>
                      <AutocompleteCollection>
                        {(item: Produce) => (
                          <AutocompleteItem key={item.id} value={item}>
                            {item.label}
                          </AutocompleteItem>
                        )}
                      </AutocompleteCollection>
                    </AutocompleteGroup>
                    {index < groupedProduce.length - 1 && <AutocompleteSeparator />}
                  </React.Fragment>
                )}
              </AutocompleteList>
            </AutocompletePopup>
          </AutocompletePositioner>
        </AutocompletePortal>
      </AutocompleteRoot>
    </FieldRoot>
  )
}
```

### Limit Results

```tsx
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
```

### Fuzzy Matching

```tsx
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
} from '@lglab/compose-ui/autocomplete'
import { FieldLabel, FieldRoot } from '@lglab/compose-ui/field'
import { matchSorter } from 'match-sorter'
import type { ReactNode } from 'react'

interface Movie {
  id: string
  title: string
  year: number
}

function highlightText(text: string, query: string): ReactNode {
  const trimmed = query.trim()
  if (!trimmed) {
    return text
  }

  const limited = trimmed.slice(0, 100)
  const escaped = limited.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const regex = new RegExp(`(${escaped})`, 'gi')

  return text.split(regex).map((part, idx) =>
    regex.test(part) ? (
      <mark key={idx} className='bg-transparent font-bold text-primary'>
        {part}
      </mark>
    ) : (
      part
    ),
  )
}

function fuzzyFilter(item: Movie, query: string): boolean {
  if (!query) {
    return true
  }

  const results = matchSorter([item], query, {
    keys: [
      'title',
      { key: 'title', threshold: matchSorter.rankings.CONTAINS },
      { key: 'year', threshold: matchSorter.rankings.CONTAINS },
    ],
  })

  return results.length > 0
}

const movies: Movie[] = [
  { id: '1', title: 'The Shawshank Redemption', year: 1994 },
  { id: '2', title: 'The Godfather', year: 1972 },
  { id: '3', title: 'The Dark Knight', year: 2008 },
  { id: '4', title: 'The Godfather Part II', year: 1974 },
  { id: '5', title: '12 Angry Men', year: 1957 },
  { id: '6', title: 'The Lord of the Rings: The Return of the King', year: 2003 },
  { id: '7', title: "Schindler's List", year: 1993 },
  { id: '8', title: 'Pulp Fiction', year: 1994 },
  { id: '9', title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },
  { id: '10', title: 'The Good, the Bad and the Ugly', year: 1966 },
  { id: '11', title: 'Forrest Gump', year: 1994 },
  { id: '12', title: 'The Lord of the Rings: The Two Towers', year: 2002 },
  { id: '13', title: 'Fight Club', year: 1999 },
  { id: '14', title: 'Inception', year: 2010 },
  { id: '15', title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 },
  { id: '16', title: 'The Matrix', year: 1999 },
  { id: '17', title: 'Goodfellas', year: 1990 },
  { id: '18', title: 'Interstellar', year: 2014 },
  { id: '19', title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { id: '20', title: 'Se7en', year: 1995 },
  { id: '21', title: "It's a Wonderful Life", year: 1946 },
  { id: '22', title: 'The Silence of the Lambs', year: 1991 },
  { id: '23', title: 'Seven Samurai', year: 1954 },
  { id: '24', title: 'Saving Private Ryan', year: 1998 },
  { id: '25', title: 'City of God', year: 2002 },
  { id: '26', title: 'Life Is Beautiful', year: 1997 },
  { id: '27', title: 'The Green Mile', year: 1999 },
  { id: '28', title: 'Star Wars: Episode IV - A New Hope', year: 1977 },
  { id: '29', title: 'Terminator 2: Judgment Day', year: 1991 },
  { id: '30', title: 'Back to the Future', year: 1985 },
  { id: '31', title: 'Spirited Away', year: 2001 },
  { id: '32', title: 'The Pianist', year: 2002 },
  { id: '33', title: 'Psycho', year: 1960 },
  { id: '34', title: 'Parasite', year: 2019 },
  { id: '35', title: 'Gladiator', year: 2000 },
  { id: '36', title: 'Leon: The Professional', year: 1994 },
  { id: '37', title: 'American History X', year: 1998 },
  { id: '38', title: 'The Departed', year: 2006 },
  { id: '39', title: 'Whiplash', year: 2014 },
  { id: '40', title: 'The Prestige', year: 2006 },
  { id: '41', title: 'Grave of the Fireflies', year: 1988 },
  { id: '42', title: 'The Usual Suspects', year: 1995 },
  { id: '43', title: 'Casablanca', year: 1942 },
  { id: '44', title: 'Harakiri', year: 1962 },
  { id: '45', title: 'The Lion King', year: 1994 },
  { id: '46', title: 'The Intouchables', year: 2011 },
  { id: '47', title: 'Modern Times', year: 1936 },
  { id: '48', title: 'The Lives of Others', year: 2006 },
  { id: '49', title: 'Once Upon a Time in the West', year: 1968 },
  { id: '50', title: 'Rear Window', year: 1954 },
]

export default function FuzzyMatchingExample() {
  return (
    <FieldRoot className='w-80'>
      <FieldLabel>Search movies</FieldLabel>
      <AutocompleteRoot
        items={movies}
        filter={fuzzyFilter}
        itemToStringValue={(item) => item.title}
      >
        <AutocompleteInput placeholder='e.g. Pulp Fiction or 1994' />
        <AutocompletePortal>
          <AutocompletePositioner>
            <AutocompletePopup>
              <AutocompleteEmpty>
                No results found for &ldquo;
                <Autocomplete.Value />
                &ldquo;
              </AutocompleteEmpty>
              <AutocompleteList>
                {(movie: Movie) => (
                  <AutocompleteItem key={movie.id} value={movie}>
                    <Autocomplete.Value>
                      {(value) => (
                        <div className='flex w-full flex-col gap-0.5'>
                          <div className='font-medium'>
                            {highlightText(movie.title, value)}
                          </div>
                          <div className='text-xs text-muted-foreground'>
                            {highlightText(movie.year.toString(), value)}
                          </div>
                        </div>
                      )}
                    </Autocomplete.Value>
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
```

### Async Search

```tsx
import {
  Autocomplete,
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
import { Loader2 } from 'lucide-react'
import { useRef, useState, useTransition } from 'react'

interface Movie {
  id: string
  title: string
  year: number
}

export default function AsyncSearchExample() {
  const [searchValue, setSearchValue] = useState('')
  const [searchResults, setSearchResults] = useState<Movie[]>([])
  const [error, setError] = useState<string | null>(null)
  const [isPending, startTransition] = useTransition()

  const { contains } = Autocomplete.useFilter()

  const abortControllerRef = useRef<AbortController | null>(null)

  function getStatus() {
    if (isPending) {
      return (
        <>
          <Loader2 className='size-3 animate-spin' />
          Searching...
        </>
      )
    }

    if (error) {
      return error
    }

    if (searchValue === '') {
      return null
    }

    if (searchResults.length === 0) {
      return `Movie or year "${searchValue}" does not exist`
    }

    return `${searchResults.length} result${searchResults.length === 1 ? '' : 's'} found`
  }

  const status = getStatus()

  return (
    <FieldRoot className='w-80'>
      <FieldLabel>Search movies by name or year</FieldLabel>
      <AutocompleteRoot
        items={searchResults}
        value={searchValue}
        onValueChange={(nextSearchValue) => {
          setSearchValue(nextSearchValue)

          const controller = new AbortController()
          abortControllerRef.current?.abort()
          abortControllerRef.current = controller

          if (nextSearchValue === '') {
            setSearchResults([])
            setError(null)
            return
          }

          startTransition(async () => {
            setError(null)

            const result = await searchMovies(nextSearchValue, contains)
            if (controller.signal.aborted) {
              return
            }

            startTransition(() => {
              setSearchResults(result.movies)
              setError(result.error)
            })
          })
        }}
        itemToStringValue={(item) => item.title}
        filter={null}
      >
        <AutocompleteInput placeholder='e.g. Pulp Fiction or 1994' />
        <AutocompletePortal hidden={!status}>
          <AutocompletePositioner align='start'>
            <AutocompletePopup aria-busy={isPending || undefined}>
              <AutocompleteStatus>{status}</AutocompleteStatus>
              <AutocompleteList>
                {(movie: Movie) => (
                  <AutocompleteItem key={movie.id} value={movie}>
                    <div className='flex w-full flex-col gap-0.5'>
                      <div className='font-medium'>{movie.title}</div>
                      <div className='text-xs text-muted-foreground'>{movie.year}</div>
                    </div>
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

async function searchMovies(
  query: string,
  filter: (item: string, query: string) => boolean,
): Promise<{ movies: Movie[]; error: string | null }> {
  await new Promise((resolve) => {
    setTimeout(resolve, Math.random() * 500 + 100)
  })

  if (Math.random() < 0.01 || query === 'will_error') {
    return {
      movies: [],
      error: 'Failed to fetch movies. Please try again.',
    }
  }

  const movies = top100Movies.filter(
    (movie) => filter(movie.title, query) || filter(movie.year.toString(), query),
  )

  return {
    movies,
    error: null,
  }
}

const top100Movies: Movie[] = [
  { id: '1', title: 'The Shawshank Redemption', year: 1994 },
  { id: '2', title: 'The Godfather', year: 1972 },
  { id: '3', title: 'The Dark Knight', year: 2008 },
  { id: '4', title: 'The Godfather Part II', year: 1974 },
  { id: '5', title: '12 Angry Men', year: 1957 },
  { id: '6', title: 'The Lord of the Rings: The Return of the King', year: 2003 },
  { id: '7', title: "Schindler's List", year: 1993 },
  { id: '8', title: 'Pulp Fiction', year: 1994 },
  { id: '9', title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },
  { id: '10', title: 'The Good, the Bad and the Ugly', year: 1966 },
  { id: '11', title: 'Forrest Gump', year: 1994 },
  { id: '12', title: 'The Lord of the Rings: The Two Towers', year: 2002 },
  { id: '13', title: 'Fight Club', year: 1999 },
  { id: '14', title: 'Inception', year: 2010 },
  { id: '15', title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 },
  { id: '16', title: 'The Matrix', year: 1999 },
  { id: '17', title: 'Goodfellas', year: 1990 },
  { id: '18', title: 'Interstellar', year: 2014 },
  { id: '19', title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { id: '20', title: 'Se7en', year: 1995 },
  { id: '21', title: "It's a Wonderful Life", year: 1946 },
  { id: '22', title: 'The Silence of the Lambs', year: 1991 },
  { id: '23', title: 'Seven Samurai', year: 1954 },
  { id: '24', title: 'Saving Private Ryan', year: 1998 },
  { id: '25', title: 'City of God', year: 2002 },
  { id: '26', title: 'Life Is Beautiful', year: 1997 },
  { id: '27', title: 'The Green Mile', year: 1999 },
  { id: '28', title: 'Star Wars: Episode IV - A New Hope', year: 1977 },
  { id: '29', title: 'Terminator 2: Judgment Day', year: 1991 },
  { id: '30', title: 'Back to the Future', year: 1985 },
  { id: '31', title: 'Spirited Away', year: 2001 },
  { id: '32', title: 'The Pianist', year: 2002 },
  { id: '33', title: 'Psycho', year: 1960 },
  { id: '34', title: 'Parasite', year: 2019 },
  { id: '35', title: 'Gladiator', year: 2000 },
  { id: '36', title: 'Leon: The Professional', year: 1994 },
  { id: '37', title: 'American History X', year: 1998 },
  { id: '38', title: 'The Departed', year: 2006 },
  { id: '39', title: 'Whiplash', year: 2014 },
  { id: '40', title: 'The Prestige', year: 2006 },
  { id: '41', title: 'Grave of the Fireflies', year: 1988 },
  { id: '42', title: 'The Usual Suspects', year: 1995 },
  { id: '43', title: 'Casablanca', year: 1942 },
  { id: '44', title: 'Harakiri', year: 1962 },
  { id: '45', title: 'The Lion King', year: 1994 },
  { id: '46', title: 'The Intouchables', year: 2011 },
  { id: '47', title: 'Modern Times', year: 1936 },
  { id: '48', title: 'The Lives of Others', year: 2006 },
  { id: '49', title: 'Once Upon a Time in the West', year: 1968 },
  { id: '50', title: 'Rear Window', year: 1954 },
]
```

## Resources

- [Base UI Autocomplete Documentation](https://base-ui.com/react/components/autocomplete)
- [API Reference](https://base-ui.com/react/components/autocomplete#api-reference)
