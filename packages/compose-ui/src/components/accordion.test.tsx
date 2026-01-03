import { screen } from '@testing-library/react'
import * as React from 'react'
import { describe, expect, it, vi } from 'vitest'
import { render } from '~/vitest.utils'

import {
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
  AccordionRoot,
  AccordionTrigger,
} from './accordion'

describe('Accordion', () => {
  it('opens and closes panels when clicking triggers', async () => {
    const { user } = render(
      <AccordionRoot>
        <AccordionItem value='item-1'>
          <AccordionHeader>
            <AccordionTrigger>Item 1</AccordionTrigger>
          </AccordionHeader>
          <AccordionPanel>Content 1</AccordionPanel>
        </AccordionItem>
        <AccordionItem value='item-2'>
          <AccordionHeader>
            <AccordionTrigger>Item 2</AccordionTrigger>
          </AccordionHeader>
          <AccordionPanel>Content 2</AccordionPanel>
        </AccordionItem>
      </AccordionRoot>,
    )

    expect(screen.queryByText('Content 1')).not.toBeInTheDocument()
    expect(screen.queryByText('Content 2')).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Item 1' }))

    expect(screen.getByText('Content 1')).toBeInTheDocument()
    expect(screen.queryByText('Content 2')).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Item 1' }))

    expect(screen.queryByText('Content 1')).not.toBeInTheDocument()
  })

  it('allows multiple panels to be open when multiple prop is set', async () => {
    const { user } = render(
      <AccordionRoot multiple>
        <AccordionItem value='item-1'>
          <AccordionHeader>
            <AccordionTrigger>Item 1</AccordionTrigger>
          </AccordionHeader>
          <AccordionPanel>Content 1</AccordionPanel>
        </AccordionItem>
        <AccordionItem value='item-2'>
          <AccordionHeader>
            <AccordionTrigger>Item 2</AccordionTrigger>
          </AccordionHeader>
          <AccordionPanel>Content 2</AccordionPanel>
        </AccordionItem>
      </AccordionRoot>,
    )

    await user.click(screen.getByRole('button', { name: 'Item 1' }))
    await user.click(screen.getByRole('button', { name: 'Item 2' }))

    expect(screen.getByText('Content 1')).toBeInTheDocument()
    expect(screen.getByText('Content 2')).toBeInTheDocument()
  })

  it('works as a controlled component', async () => {
    const onValueChange = vi.fn()
    const ControlledAccordion = () => {
      const [value, setValue] = React.useState<string[]>([])

      const handleValueChange = (newValue: string[]) => {
        setValue(newValue)
        onValueChange(newValue)
      }

      return (
        <AccordionRoot value={value} onValueChange={handleValueChange}>
          <AccordionItem value='item-1'>
            <AccordionHeader>
              <AccordionTrigger>Item 1</AccordionTrigger>
            </AccordionHeader>
            <AccordionPanel>Content 1</AccordionPanel>
          </AccordionItem>
        </AccordionRoot>
      )
    }

    const { user } = render(<ControlledAccordion />)

    expect(screen.queryByText('Content 1')).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Item 1' }))

    expect(screen.getByText('Content 1')).toBeInTheDocument()
    expect(onValueChange).toHaveBeenCalledWith(['item-1'])
  })
})
