import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { render } from '~/vitest.utils'

import {
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRoot,
  TableRow,
} from './primitives'

describe('TableRoot', () => {
  it('renders a table element', () => {
    render(
      <TableRoot data-testid='table'>
        <tbody />
      </TableRoot>,
    )
    expect(screen.getByTestId('table').tagName).toBe('TABLE')
  })

  it('applies default variant classes', () => {
    render(
      <TableRoot data-testid='table'>
        <tbody />
      </TableRoot>,
    )
    expect(screen.getByTestId('table')).toHaveClass('w-full', 'caption-bottom', 'text-sm')
  })

  it('applies striped variant classes', () => {
    render(
      <TableRoot data-testid='table' variant='striped'>
        <tbody />
      </TableRoot>,
    )
    expect(screen.getByTestId('table')).toHaveClass(
      '[&_tbody_tr:nth-child(even)]:bg-muted/50',
    )
  })

  it('wraps table in scrollable container', () => {
    render(
      <TableRoot data-testid='table'>
        <tbody />
      </TableRoot>,
    )
    const wrapper = screen.getByTestId('table').parentElement
    expect(wrapper).toHaveClass('relative', 'w-full', 'overflow-x-auto')
  })

  it('applies custom className', () => {
    render(
      <TableRoot data-testid='table' className='custom-class'>
        <tbody />
      </TableRoot>,
    )
    expect(screen.getByTestId('table')).toHaveClass('custom-class')
  })
})

describe('TableHeader', () => {
  it('renders a thead element', () => {
    render(
      <table>
        <TableHeader data-testid='thead' />
      </table>,
    )
    expect(screen.getByTestId('thead').tagName).toBe('THEAD')
  })

  it('applies border styling', () => {
    render(
      <table>
        <TableHeader data-testid='thead' />
      </table>,
    )
    expect(screen.getByTestId('thead')).toHaveClass('[&_tr]:border-b')
  })
})

describe('TableBody', () => {
  it('renders a tbody element', () => {
    render(
      <table>
        <TableBody data-testid='tbody' />
      </table>,
    )
    expect(screen.getByTestId('tbody').tagName).toBe('TBODY')
  })

  it('removes border from last row', () => {
    render(
      <table>
        <TableBody data-testid='tbody' />
      </table>,
    )
    expect(screen.getByTestId('tbody')).toHaveClass('[&_tr:last-child]:border-0')
  })
})

describe('TableFooter', () => {
  it('renders a tfoot element', () => {
    render(
      <table>
        <TableFooter data-testid='tfoot' />
      </table>,
    )
    expect(screen.getByTestId('tfoot').tagName).toBe('TFOOT')
  })

  it('applies footer styling', () => {
    render(
      <table>
        <TableFooter data-testid='tfoot' />
      </table>,
    )
    expect(screen.getByTestId('tfoot')).toHaveClass(
      'border-t',
      'bg-muted/50',
      'font-medium',
    )
  })
})

describe('TableRow', () => {
  it('renders a tr element', () => {
    render(
      <table>
        <tbody>
          <TableRow data-testid='row' />
        </tbody>
      </table>,
    )
    expect(screen.getByTestId('row').tagName).toBe('TR')
  })

  it('applies hover styling', () => {
    render(
      <table>
        <tbody>
          <TableRow data-testid='row' />
        </tbody>
      </table>,
    )
    expect(screen.getByTestId('row')).toHaveClass('hover:bg-muted/50')
  })

  it('adds data-selected attribute when selected', () => {
    render(
      <table>
        <tbody>
          <TableRow data-testid='row' selected />
        </tbody>
      </table>,
    )
    expect(screen.getByTestId('row')).toHaveAttribute('data-selected')
  })

  it('does not have data-selected when not selected', () => {
    render(
      <table>
        <tbody>
          <TableRow data-testid='row' />
        </tbody>
      </table>,
    )
    expect(screen.getByTestId('row')).not.toHaveAttribute('data-selected')
  })

  it('applies selected styling', () => {
    render(
      <table>
        <tbody>
          <TableRow data-testid='row' selected />
        </tbody>
      </table>,
    )
    expect(screen.getByTestId('row').className).toContain('data-selected:bg-primary/10')
  })
})

describe('TableHead', () => {
  it('renders a th element', () => {
    render(
      <table>
        <thead>
          <tr>
            <TableHead data-testid='th'>Header</TableHead>
          </tr>
        </thead>
      </table>,
    )
    expect(screen.getByTestId('th').tagName).toBe('TH')
  })

  it('applies default left alignment', () => {
    render(
      <table>
        <thead>
          <tr>
            <TableHead data-testid='th'>Header</TableHead>
          </tr>
        </thead>
      </table>,
    )
    expect(screen.getByTestId('th')).toHaveClass('text-left')
  })

  it('applies center alignment', () => {
    render(
      <table>
        <thead>
          <tr>
            <TableHead data-testid='th' align='center'>
              Header
            </TableHead>
          </tr>
        </thead>
      </table>,
    )
    expect(screen.getByTestId('th')).toHaveClass('text-center')
  })

  it('applies right alignment', () => {
    render(
      <table>
        <thead>
          <tr>
            <TableHead data-testid='th' align='right'>
              Header
            </TableHead>
          </tr>
        </thead>
      </table>,
    )
    expect(screen.getByTestId('th')).toHaveClass('text-right')
  })
})

describe('TableCell', () => {
  it('renders a td element', () => {
    render(
      <table>
        <tbody>
          <tr>
            <TableCell data-testid='td'>Cell</TableCell>
          </tr>
        </tbody>
      </table>,
    )
    expect(screen.getByTestId('td').tagName).toBe('TD')
  })

  it('applies padding', () => {
    render(
      <table>
        <tbody>
          <tr>
            <TableCell data-testid='td'>Cell</TableCell>
          </tr>
        </tbody>
      </table>,
    )
    expect(screen.getByTestId('td')).toHaveClass('p-4')
  })

  it('applies center alignment', () => {
    render(
      <table>
        <tbody>
          <tr>
            <TableCell data-testid='td' align='center'>
              Cell
            </TableCell>
          </tr>
        </tbody>
      </table>,
    )
    expect(screen.getByTestId('td')).toHaveClass('text-center')
  })

  it('applies right alignment', () => {
    render(
      <table>
        <tbody>
          <tr>
            <TableCell data-testid='td' align='right'>
              Cell
            </TableCell>
          </tr>
        </tbody>
      </table>,
    )
    expect(screen.getByTestId('td')).toHaveClass('text-right')
  })
})

describe('TableCaption', () => {
  it('renders a caption element', () => {
    render(
      <table>
        <TableCaption data-testid='caption'>Caption</TableCaption>
        <tbody />
      </table>,
    )
    expect(screen.getByTestId('caption').tagName).toBe('CAPTION')
  })

  it('applies bottom position by default', () => {
    render(
      <table>
        <TableCaption data-testid='caption'>Caption</TableCaption>
        <tbody />
      </table>,
    )
    expect(screen.getByTestId('caption')).toHaveClass('mt-4')
    expect(screen.getByTestId('caption')).not.toHaveClass('caption-top')
  })

  it('applies top position when specified', () => {
    render(
      <table>
        <TableCaption data-testid='caption' position='top'>
          Caption
        </TableCaption>
        <tbody />
      </table>,
    )
    expect(screen.getByTestId('caption')).toHaveClass('caption-top', 'mb-4', 'mt-0')
  })

  it('applies muted foreground color', () => {
    render(
      <table>
        <TableCaption data-testid='caption'>Caption</TableCaption>
        <tbody />
      </table>,
    )
    expect(screen.getByTestId('caption')).toHaveClass('text-muted-foreground')
  })
})
