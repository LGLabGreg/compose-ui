'use client'

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
