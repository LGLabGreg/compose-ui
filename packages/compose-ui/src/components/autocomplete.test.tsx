import { screen, waitFor } from '@testing-library/react'
import * as React from 'react'
import { describe, expect, it, vi } from 'vitest'
import { render } from '~/vitest.utils'

import {
  AutocompleteEmpty,
  AutocompleteInput,
  AutocompleteItem,
  AutocompleteList,
  AutocompletePopup,
  AutocompletePortal,
  AutocompletePositioner,
  AutocompleteRoot,
} from './autocomplete'

interface Tag {
  id: string
  value: string
}

const tags: Tag[] = [
  { id: 't1', value: 'feature' },
  { id: 't2', value: 'fix' },
  { id: 't3', value: 'bug' },
  { id: 't4', value: 'docs' },
  { id: 't5', value: 'internal' },
]

describe('Autocomplete', () => {
  it('opens and displays content when clicking the input', async () => {
    const { user } = render(
      <AutocompleteRoot items={tags}>
        <AutocompleteInput placeholder='Search tags' />
        <AutocompletePortal>
          <AutocompletePositioner>
            <AutocompletePopup>
              <AutocompleteList>
                {(tag: Tag) => (
                  <AutocompleteItem key={tag.id} value={tag}>
                    {tag.value}
                  </AutocompleteItem>
                )}
              </AutocompleteList>
            </AutocompletePopup>
          </AutocompletePositioner>
        </AutocompletePortal>
      </AutocompleteRoot>,
    )

    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()

    const input = screen.getByRole('combobox')
    await user.click(input)
    await user.type(input, 'f')

    await waitFor(() => {
      expect(screen.getByRole('listbox')).toBeInTheDocument()
    })
    expect(screen.getByText('feature')).toBeInTheDocument()
    expect(screen.getByText('fix')).toBeInTheDocument()
  })

  it('filters items based on input', async () => {
    const { user } = render(
      <AutocompleteRoot items={tags}>
        <AutocompleteInput placeholder='Search tags' />
        <AutocompletePortal>
          <AutocompletePositioner>
            <AutocompletePopup>
              <AutocompleteEmpty>No tags found.</AutocompleteEmpty>
              <AutocompleteList>
                {(tag: Tag) => (
                  <AutocompleteItem key={tag.id} value={tag}>
                    {tag.value}
                  </AutocompleteItem>
                )}
              </AutocompleteList>
            </AutocompletePopup>
          </AutocompletePositioner>
        </AutocompletePortal>
      </AutocompleteRoot>,
    )

    const input = screen.getByRole('combobox')
    await user.click(input)
    await user.type(input, 'fe')

    await waitFor(() => {
      expect(screen.getByRole('listbox')).toBeInTheDocument()
      expect(screen.getByText('feature')).toBeInTheDocument()
    })
    expect(screen.queryByText('fix')).not.toBeInTheDocument()
    expect(screen.queryByText('bug')).not.toBeInTheDocument()
  })

  it('selects an item when clicked', async () => {
    const onValueChange = vi.fn()
    const { user } = render(
      <AutocompleteRoot items={tags} onValueChange={onValueChange}>
        <AutocompleteInput placeholder='Search tags' />
        <AutocompletePortal>
          <AutocompletePositioner>
            <AutocompletePopup>
              <AutocompleteList>
                {(tag: Tag) => (
                  <AutocompleteItem key={tag.id} value={tag}>
                    {tag.value}
                  </AutocompleteItem>
                )}
              </AutocompleteList>
            </AutocompletePopup>
          </AutocompletePositioner>
        </AutocompletePortal>
      </AutocompleteRoot>,
    )

    const input = screen.getByRole('combobox')
    await user.click(input)
    await user.type(input, 'f')

    await waitFor(() => {
      expect(screen.getByRole('listbox')).toBeInTheDocument()
    })

    await user.click(screen.getByRole('option', { name: 'feature' }))

    await waitFor(() => {
      expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
    })

    expect(onValueChange).toHaveBeenLastCalledWith('feature', expect.any(Object))
  })

  it('closes when clicking outside', async () => {
    const { user } = render(
      <AutocompleteRoot items={tags}>
        <AutocompleteInput placeholder='Search tags' />
        <AutocompletePortal>
          <AutocompletePositioner>
            <AutocompletePopup>
              <AutocompleteList>
                {(tag: Tag) => (
                  <AutocompleteItem key={tag.id} value={tag}>
                    {tag.value}
                  </AutocompleteItem>
                )}
              </AutocompleteList>
            </AutocompletePopup>
          </AutocompletePositioner>
        </AutocompletePortal>
      </AutocompleteRoot>,
    )

    const input = screen.getByRole('combobox')
    await user.click(input)
    await user.type(input, 'f')

    await waitFor(() => {
      expect(screen.getByRole('listbox')).toBeInTheDocument()
    })

    await user.click(document.body)

    await waitFor(() => {
      expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
    })
  })

  it('navigates with keyboard', async () => {
    const onValueChange = vi.fn()
    const { user } = render(
      <AutocompleteRoot items={tags} onValueChange={onValueChange}>
        <AutocompleteInput placeholder='Search tags' />
        <AutocompletePortal>
          <AutocompletePositioner>
            <AutocompletePopup>
              <AutocompleteList>
                {(tag: Tag) => (
                  <AutocompleteItem key={tag.id} value={tag}>
                    {tag.value}
                  </AutocompleteItem>
                )}
              </AutocompleteList>
            </AutocompletePopup>
          </AutocompletePositioner>
        </AutocompletePortal>
      </AutocompleteRoot>,
    )

    const input = screen.getByRole('combobox')
    await user.click(input)
    await user.type(input, 'f')

    await waitFor(() => {
      expect(screen.getByRole('listbox')).toBeInTheDocument()
    })

    await user.keyboard('{ArrowDown}')
    await user.keyboard('{ArrowDown}')
    await user.keyboard('{Enter}')

    await waitFor(() => {
      expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
    })

    expect(onValueChange).toHaveBeenLastCalledWith('fix', expect.any(Object))
  })
})
