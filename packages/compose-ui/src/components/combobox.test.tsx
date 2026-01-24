import { screen, waitFor } from '@testing-library/react'
import * as React from 'react'
import { describe, expect, it, vi } from 'vitest'
import { render } from '~/vitest.utils'

import {
  ComboboxClear,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxItemIndicator,
  ComboboxList,
  ComboboxPopup,
  ComboboxPortal,
  ComboboxPositioner,
  ComboboxRoot,
  ComboboxTrigger,
} from './combobox'

interface Fruit {
  label: string
  value: string
}

const fruits: Fruit[] = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Orange', value: 'orange' },
]

describe('Combobox', () => {
  it('opens and displays content when clicking the input', async () => {
    const { user } = render(
      <ComboboxRoot items={fruits}>
        <ComboboxInput placeholder='Select a fruit' />
        <ComboboxPortal>
          <ComboboxPositioner>
            <ComboboxPopup>
              <ComboboxList>
                {(item: Fruit) => (
                  <ComboboxItem key={item.value} value={item}>
                    <ComboboxItemIndicator>✓</ComboboxItemIndicator>
                    <div>{item.label}</div>
                  </ComboboxItem>
                )}
              </ComboboxList>
            </ComboboxPopup>
          </ComboboxPositioner>
        </ComboboxPortal>
      </ComboboxRoot>,
    )

    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()

    await user.click(screen.getByRole('combobox'))

    await waitFor(() => {
      expect(screen.getByRole('listbox')).toBeInTheDocument()
    })
    expect(screen.getByText('Apple')).toBeInTheDocument()
    expect(screen.getByText('Banana')).toBeInTheDocument()
  })

  it('filters items based on input', async () => {
    const { user } = render(
      <ComboboxRoot items={fruits}>
        <ComboboxInput placeholder='Select a fruit' />
        <ComboboxPortal>
          <ComboboxPositioner>
            <ComboboxPopup>
              <ComboboxEmpty>No fruits found.</ComboboxEmpty>
              <ComboboxList>
                {(item: Fruit) => (
                  <ComboboxItem key={item.value} value={item}>
                    <ComboboxItemIndicator>✓</ComboboxItemIndicator>
                    <div>{item.label}</div>
                  </ComboboxItem>
                )}
              </ComboboxList>
            </ComboboxPopup>
          </ComboboxPositioner>
        </ComboboxPortal>
      </ComboboxRoot>,
    )

    const input = screen.getByRole('combobox')
    await user.click(input)

    await waitFor(() => {
      expect(screen.getByRole('listbox')).toBeInTheDocument()
    })

    await user.type(input, 'App')

    await waitFor(() => {
      expect(screen.getByText('Apple')).toBeInTheDocument()
    })
    expect(screen.queryByText('Banana')).not.toBeInTheDocument()
    expect(screen.queryByText('Orange')).not.toBeInTheDocument()
  })

  it('selects an item when clicked', async () => {
    const onValueChange = vi.fn()
    const { user } = render(
      <ComboboxRoot items={fruits} onValueChange={onValueChange}>
        <ComboboxInput placeholder='Select a fruit' />
        <ComboboxPortal>
          <ComboboxPositioner>
            <ComboboxPopup>
              <ComboboxList>
                {(item: Fruit) => (
                  <ComboboxItem key={item.value} value={item}>
                    <ComboboxItemIndicator>✓</ComboboxItemIndicator>
                    <div>{item.label}</div>
                  </ComboboxItem>
                )}
              </ComboboxList>
            </ComboboxPopup>
          </ComboboxPositioner>
        </ComboboxPortal>
      </ComboboxRoot>,
    )

    await user.click(screen.getByRole('combobox'))

    await waitFor(() => {
      expect(screen.getByRole('listbox')).toBeInTheDocument()
    })

    await user.click(screen.getByRole('option', { name: 'Apple' }))

    await waitFor(() => {
      expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
    })

    expect(onValueChange).toHaveBeenCalledWith(
      expect.objectContaining({ label: 'Apple', value: 'apple' }),
      expect.any(Object),
    )
  })

  it('closes when clicking outside', async () => {
    const { user } = render(
      <ComboboxRoot items={fruits}>
        <ComboboxInput placeholder='Select a fruit' />
        <ComboboxPortal>
          <ComboboxPositioner>
            <ComboboxPopup>
              <ComboboxList>
                {(item: Fruit) => (
                  <ComboboxItem key={item.value} value={item}>
                    <ComboboxItemIndicator>✓</ComboboxItemIndicator>
                    <div>{item.label}</div>
                  </ComboboxItem>
                )}
              </ComboboxList>
            </ComboboxPopup>
          </ComboboxPositioner>
        </ComboboxPortal>
      </ComboboxRoot>,
    )

    await user.click(screen.getByRole('combobox'))

    await waitFor(() => {
      expect(screen.getByRole('listbox')).toBeInTheDocument()
    })

    await user.click(document.body)

    await waitFor(() => {
      expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
    })
  })

  it('clears selection when clear button clicked', async () => {
    const onValueChange = vi.fn()
    const { user } = render(
      <ComboboxRoot items={fruits} defaultValue={fruits[0]} onValueChange={onValueChange}>
        <ComboboxInput placeholder='Select a fruit' />
        <ComboboxClear aria-label='Clear selection'>×</ComboboxClear>
        <ComboboxPortal>
          <ComboboxPositioner>
            <ComboboxPopup>
              <ComboboxList>
                {(item: Fruit) => (
                  <ComboboxItem key={item.value} value={item}>
                    <ComboboxItemIndicator>✓</ComboboxItemIndicator>
                    <div>{item.label}</div>
                  </ComboboxItem>
                )}
              </ComboboxList>
            </ComboboxPopup>
          </ComboboxPositioner>
        </ComboboxPortal>
      </ComboboxRoot>,
    )

    const clearButton = screen.getByRole('button', { name: 'Clear selection' })
    await user.click(clearButton)

    expect(onValueChange).toHaveBeenCalledWith(null, expect.any(Object))
  })

  it('opens when trigger button is clicked', async () => {
    const { user } = render(
      <ComboboxRoot items={fruits}>
        <ComboboxInput placeholder='Select a fruit' />
        <ComboboxTrigger aria-label='Open popup'>▼</ComboboxTrigger>
        <ComboboxPortal>
          <ComboboxPositioner>
            <ComboboxPopup>
              <ComboboxList>
                {(item: Fruit) => (
                  <ComboboxItem key={item.value} value={item}>
                    <ComboboxItemIndicator>✓</ComboboxItemIndicator>
                    <div>{item.label}</div>
                  </ComboboxItem>
                )}
              </ComboboxList>
            </ComboboxPopup>
          </ComboboxPositioner>
        </ComboboxPortal>
      </ComboboxRoot>,
    )

    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Open popup' }))

    await waitFor(() => {
      expect(screen.getByRole('listbox')).toBeInTheDocument()
    })
  })

  it('navigates with keyboard', async () => {
    const onValueChange = vi.fn()
    const { user } = render(
      <ComboboxRoot items={fruits} onValueChange={onValueChange}>
        <ComboboxInput placeholder='Select a fruit' />
        <ComboboxPortal>
          <ComboboxPositioner>
            <ComboboxPopup>
              <ComboboxList>
                {(item: Fruit) => (
                  <ComboboxItem key={item.value} value={item}>
                    <ComboboxItemIndicator>✓</ComboboxItemIndicator>
                    <div>{item.label}</div>
                  </ComboboxItem>
                )}
              </ComboboxList>
            </ComboboxPopup>
          </ComboboxPositioner>
        </ComboboxPortal>
      </ComboboxRoot>,
    )

    const input = screen.getByRole('combobox')
    await user.click(input)

    await waitFor(() => {
      expect(screen.getByRole('listbox')).toBeInTheDocument()
    })

    await user.keyboard('{ArrowDown}')
    await user.keyboard('{ArrowDown}')
    await user.keyboard('{Enter}')

    await waitFor(() => {
      expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
    })

    expect(onValueChange).toHaveBeenCalledWith(
      expect.objectContaining({ label: 'Banana', value: 'banana' }),
      expect.any(Object),
    )
  })
})
