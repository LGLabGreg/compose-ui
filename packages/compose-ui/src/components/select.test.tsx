import { screen, waitFor } from '@testing-library/react'
import * as React from 'react'
import { describe, expect, it, vi } from 'vitest'
import { render } from '~/vitest.utils'

import { Button } from './button'
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
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from './select'

describe('Select', () => {
  it('opens and displays content when clicking the trigger', async () => {
    const { user } = render(
      <SelectRoot>
        <SelectTrigger>
          <SelectValue placeholder='Select an option' />
          <SelectIcon>▼</SelectIcon>
        </SelectTrigger>
        <SelectPortal>
          <SelectPositioner>
            <SelectPopup>
              <SelectList>
                <SelectItem value='option1'>
                  <SelectItemIndicator>✓</SelectItemIndicator>
                  <SelectItemText>Option 1</SelectItemText>
                </SelectItem>
                <SelectItem value='option2'>
                  <SelectItemIndicator>✓</SelectItemIndicator>
                  <SelectItemText>Option 2</SelectItemText>
                </SelectItem>
              </SelectList>
            </SelectPopup>
          </SelectPositioner>
        </SelectPortal>
      </SelectRoot>,
    )

    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
    expect(screen.queryByText('Option 1')).not.toBeInTheDocument()

    await user.click(screen.getByRole('combobox'))

    await waitFor(() => {
      expect(screen.getByRole('listbox')).toBeInTheDocument()
    })
    expect(screen.getByText('Option 1')).toBeInTheDocument()
    expect(screen.getByText('Option 2')).toBeInTheDocument()
  })

  it('selects an item when clicked', async () => {
    const onValueChange = vi.fn()
    const { user } = render(
      <SelectRoot onValueChange={onValueChange}>
        <SelectTrigger>
          <SelectValue placeholder='Select an option' />
          <SelectIcon>▼</SelectIcon>
        </SelectTrigger>
        <SelectPortal>
          <SelectPositioner>
            <SelectPopup>
              <SelectList>
                <SelectItem value='option1'>
                  <SelectItemIndicator>✓</SelectItemIndicator>
                  <SelectItemText>Option 1</SelectItemText>
                </SelectItem>
                <SelectItem value='option2'>
                  <SelectItemIndicator>✓</SelectItemIndicator>
                  <SelectItemText>Option 2</SelectItemText>
                </SelectItem>
              </SelectList>
            </SelectPopup>
          </SelectPositioner>
        </SelectPortal>
      </SelectRoot>,
    )

    await user.click(screen.getByRole('combobox'))

    await waitFor(() => {
      expect(screen.getByRole('listbox')).toBeInTheDocument()
    })

    await user.click(screen.getByRole('option', { name: 'Option 1' }))

    await waitFor(() => {
      expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
    })

    expect(onValueChange).toHaveBeenCalledWith('option1', expect.any(Object))
  })

  it('closes when clicking outside', async () => {
    const { user } = render(
      <SelectRoot>
        <SelectTrigger>
          <SelectValue placeholder='Select an option' />
          <SelectIcon>▼</SelectIcon>
        </SelectTrigger>
        <SelectPortal>
          <SelectPositioner>
            <SelectPopup>
              <SelectList>
                <SelectItem value='option1'>
                  <SelectItemIndicator>✓</SelectItemIndicator>
                  <SelectItemText>Option 1</SelectItemText>
                </SelectItem>
              </SelectList>
            </SelectPopup>
          </SelectPositioner>
        </SelectPortal>
      </SelectRoot>,
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

  it('works as a controlled component', async () => {
    const onValueChange = vi.fn()
    const items = [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
    ]
    const ControlledSelect = () => {
      const [value, setValue] = React.useState<string | null>(null)

      const handleValueChange = (newValue: unknown, eventDetails: unknown) => {
        setValue(newValue as string | null)
        onValueChange(newValue, eventDetails)
      }

      return (
        <>
          <Button onClick={() => handleValueChange('option1', {})}>Set Option 1</Button>
          <SelectRoot value={value} onValueChange={handleValueChange} items={items}>
            <SelectTrigger>
              <SelectValue placeholder='Select an option' />
              <SelectIcon>▼</SelectIcon>
            </SelectTrigger>
            <SelectPortal>
              <SelectPositioner>
                <SelectPopup>
                  <SelectList>
                    <SelectItem value='option1'>
                      <SelectItemIndicator>✓</SelectItemIndicator>
                      <SelectItemText>Option 1</SelectItemText>
                    </SelectItem>
                    <SelectItem value='option2'>
                      <SelectItemIndicator>✓</SelectItemIndicator>
                      <SelectItemText>Option 2</SelectItemText>
                    </SelectItem>
                  </SelectList>
                </SelectPopup>
              </SelectPositioner>
            </SelectPortal>
          </SelectRoot>
        </>
      )
    }

    const { user } = render(<ControlledSelect />)

    expect(screen.getByRole('combobox')).toHaveTextContent('Select an option')

    await user.click(screen.getByRole('button', { name: 'Set Option 1' }))

    await waitFor(() => {
      expect(screen.getByRole('combobox')).toHaveTextContent('Option 1')
    })
    expect(onValueChange).toHaveBeenCalledWith('option1', expect.any(Object))
  })

  it('supports multiple selection', async () => {
    const onValueChange = vi.fn()
    const { user } = render(
      <SelectRoot multiple onValueChange={onValueChange}>
        <SelectTrigger>
          <SelectValue placeholder='Select options' />
          <SelectIcon>▼</SelectIcon>
        </SelectTrigger>
        <SelectPortal>
          <SelectPositioner>
            <SelectPopup>
              <SelectList>
                <SelectItem value='option1'>
                  <SelectItemIndicator>✓</SelectItemIndicator>
                  <SelectItemText>Option 1</SelectItemText>
                </SelectItem>
                <SelectItem value='option2'>
                  <SelectItemIndicator>✓</SelectItemIndicator>
                  <SelectItemText>Option 2</SelectItemText>
                </SelectItem>
              </SelectList>
            </SelectPopup>
          </SelectPositioner>
        </SelectPortal>
      </SelectRoot>,
    )

    await user.click(screen.getByRole('combobox'))

    await waitFor(() => {
      expect(screen.getByRole('listbox')).toBeInTheDocument()
    })

    await user.click(screen.getByRole('option', { name: 'Option 1' }))

    expect(onValueChange).toHaveBeenCalledWith(['option1'], expect.any(Object))

    await waitFor(() => {
      expect(screen.getByRole('listbox')).toBeInTheDocument()
    })

    await user.click(screen.getByRole('option', { name: 'Option 2' }))

    expect(onValueChange).toHaveBeenCalledWith(['option1', 'option2'], expect.any(Object))
  })

  it('renders separator', async () => {
    const { user } = render(
      <SelectRoot>
        <SelectTrigger>
          <SelectValue placeholder='Select an option' />
          <SelectIcon>▼</SelectIcon>
        </SelectTrigger>
        <SelectPortal>
          <SelectPositioner>
            <SelectPopup>
              <SelectList>
                <SelectItem value='option1'>
                  <SelectItemIndicator>✓</SelectItemIndicator>
                  <SelectItemText>Option 1</SelectItemText>
                </SelectItem>
                <SelectSeparator />
                <SelectItem value='option2'>
                  <SelectItemIndicator>✓</SelectItemIndicator>
                  <SelectItemText>Option 2</SelectItemText>
                </SelectItem>
              </SelectList>
            </SelectPopup>
          </SelectPositioner>
        </SelectPortal>
      </SelectRoot>,
    )

    await user.click(screen.getByRole('combobox'))

    await waitFor(() => {
      expect(screen.getByRole('listbox')).toBeInTheDocument()
    })

    const separator = document.querySelector('[role="separator"]')
    expect(separator).toBeInTheDocument()
  })

  it('navigates with keyboard', async () => {
    const onValueChange = vi.fn()
    const { user } = render(
      <SelectRoot onValueChange={onValueChange}>
        <SelectTrigger>
          <SelectValue placeholder='Select an option' />
          <SelectIcon>▼</SelectIcon>
        </SelectTrigger>
        <SelectPortal>
          <SelectPositioner>
            <SelectPopup>
              <SelectList>
                <SelectItem value='option1'>
                  <SelectItemIndicator>✓</SelectItemIndicator>
                  <SelectItemText>Option 1</SelectItemText>
                </SelectItem>
                <SelectItem value='option2'>
                  <SelectItemIndicator>✓</SelectItemIndicator>
                  <SelectItemText>Option 2</SelectItemText>
                </SelectItem>
                <SelectItem value='option3'>
                  <SelectItemIndicator>✓</SelectItemIndicator>
                  <SelectItemText>Option 3</SelectItemText>
                </SelectItem>
              </SelectList>
            </SelectPopup>
          </SelectPositioner>
        </SelectPortal>
      </SelectRoot>,
    )

    const trigger = screen.getByRole('combobox')
    await user.click(trigger)

    await waitFor(() => {
      expect(screen.getByRole('listbox')).toBeInTheDocument()
    })

    await user.keyboard('{ArrowDown}')
    await user.keyboard('{ArrowDown}')
    await user.keyboard('{Enter}')

    await waitFor(() => {
      expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
    })

    expect(onValueChange).toHaveBeenCalledWith('option2', expect.any(Object))
  })
})
