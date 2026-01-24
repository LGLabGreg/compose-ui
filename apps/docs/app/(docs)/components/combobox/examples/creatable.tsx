'use client'

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
