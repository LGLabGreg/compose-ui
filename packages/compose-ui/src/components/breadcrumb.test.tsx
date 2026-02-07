import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { render } from '~/vitest.utils'

import {
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbRoot,
  BreadcrumbSeparator,
} from './breadcrumb'

describe('BreadcrumbRoot', () => {
  it('renders nav > ol structure', () => {
    const { container } = render(
      <BreadcrumbRoot>
        <BreadcrumbItem>Item</BreadcrumbItem>
      </BreadcrumbRoot>,
    )
    const nav = container.querySelector('nav')
    expect(nav).toBeInTheDocument()
    const ol = nav?.querySelector('ol')
    expect(ol).toBeInTheDocument()
  })

  it('has aria-label="Breadcrumb"', () => {
    const { container } = render(<BreadcrumbRoot />)
    const nav = container.querySelector('nav')
    expect(nav).toHaveAttribute('aria-label', 'Breadcrumb')
  })

  it('merges custom className on nav', () => {
    const { container } = render(<BreadcrumbRoot className='custom-class' />)
    const nav = container.querySelector('nav')
    expect(nav).toHaveClass('custom-class')
  })

  it('spreads additional props', () => {
    const { container } = render(<BreadcrumbRoot data-testid='breadcrumb' />)
    const nav = container.querySelector('nav')
    expect(nav).toHaveAttribute('data-testid', 'breadcrumb')
  })
})

describe('BreadcrumbItem', () => {
  it('renders as li element', () => {
    const { container } = render(<BreadcrumbItem>Item</BreadcrumbItem>)
    const li = container.querySelector('li')
    expect(li).toBeInTheDocument()
  })

  it('merges custom className', () => {
    const { container } = render(<BreadcrumbItem className='custom-class' />)
    const li = container.querySelector('li')
    expect(li).toHaveClass('custom-class')
  })

  it('spreads additional props', () => {
    const { container } = render(<BreadcrumbItem data-testid='item' />)
    const li = container.querySelector('li')
    expect(li).toHaveAttribute('data-testid', 'item')
  })
})

describe('BreadcrumbLink', () => {
  it('renders as anchor element', () => {
    render(<BreadcrumbLink href='/'>Home</BreadcrumbLink>)
    const link = screen.getByRole('link', { name: 'Home' })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '/')
  })

  it('merges custom className', () => {
    render(
      <BreadcrumbLink href='/' className='custom-class'>
        Home
      </BreadcrumbLink>,
    )
    const link = screen.getByRole('link', { name: 'Home' })
    expect(link).toHaveClass('custom-class')
  })

  it('spreads additional props', () => {
    render(
      <BreadcrumbLink href='/' data-testid='link'>
        Home
      </BreadcrumbLink>,
    )
    const link = screen.getByRole('link', { name: 'Home' })
    expect(link).toHaveAttribute('data-testid', 'link')
  })

  it('supports render prop for custom link component', () => {
    function CustomLink(props: React.ComponentProps<'a'>) {
      return <a data-custom {...props} />
    }

    render(
      <BreadcrumbLink render={(props) => <CustomLink {...props} href='/' />}>
        Home
      </BreadcrumbLink>,
    )
    const link = screen.getByRole('link', { name: 'Home' })
    expect(link).toHaveAttribute('data-custom')
    expect(link).toHaveAttribute('href', '/')
  })

  it('supports render prop with ReactElement', () => {
    render(<BreadcrumbLink render={<a href='/custom' />}>Home</BreadcrumbLink>)
    const link = screen.getByRole('link', { name: 'Home' })
    expect(link).toHaveAttribute('href', '/custom')
  })
})

describe('BreadcrumbPage', () => {
  it('renders as span element', () => {
    render(<BreadcrumbPage>Current</BreadcrumbPage>)
    expect(screen.getByText('Current')).toBeInTheDocument()
  })

  it('has aria-current="page"', () => {
    render(<BreadcrumbPage>Current</BreadcrumbPage>)
    expect(screen.getByText('Current')).toHaveAttribute('aria-current', 'page')
  })

  it('merges custom className', () => {
    render(<BreadcrumbPage className='custom-class'>Current</BreadcrumbPage>)
    expect(screen.getByText('Current')).toHaveClass('custom-class')
  })

  it('spreads additional props', () => {
    render(<BreadcrumbPage data-testid='page'>Current</BreadcrumbPage>)
    expect(screen.getByText('Current')).toHaveAttribute('data-testid', 'page')
  })
})

describe('BreadcrumbSeparator', () => {
  it('renders as li element', () => {
    const { container } = render(<BreadcrumbSeparator />)
    const li = container.querySelector('li')
    expect(li).toBeInTheDocument()
  })

  it('has role="presentation" and aria-hidden="true"', () => {
    const { container } = render(<BreadcrumbSeparator />)
    const li = container.querySelector('li')
    expect(li).toHaveAttribute('role', 'presentation')
    expect(li).toHaveAttribute('aria-hidden', 'true')
  })

  it('renders default "/" separator', () => {
    const { container } = render(<BreadcrumbSeparator />)
    const li = container.querySelector('li')
    expect(li).toHaveTextContent('/')
  })

  it('renders custom children', () => {
    const { container } = render(<BreadcrumbSeparator>{'>'}</BreadcrumbSeparator>)
    const li = container.querySelector('li')
    expect(li).toHaveTextContent('>')
  })

  it('merges custom className', () => {
    const { container } = render(<BreadcrumbSeparator className='custom-class' />)
    const li = container.querySelector('li')
    expect(li).toHaveClass('custom-class')
  })
})

describe('BreadcrumbEllipsis', () => {
  it('renders as li element', () => {
    const { container } = render(<BreadcrumbEllipsis />)
    const li = container.querySelector('li')
    expect(li).toBeInTheDocument()
  })

  it('has role="presentation" and aria-hidden="true"', () => {
    const { container } = render(<BreadcrumbEllipsis />)
    const li = container.querySelector('li')
    expect(li).toHaveAttribute('role', 'presentation')
    expect(li).toHaveAttribute('aria-hidden', 'true')
  })

  it('renders default "..." content', () => {
    const { container } = render(<BreadcrumbEllipsis />)
    const li = container.querySelector('li')
    expect(li).toHaveTextContent('...')
  })

  it('renders custom children', () => {
    const { container } = render(<BreadcrumbEllipsis>more</BreadcrumbEllipsis>)
    const li = container.querySelector('li')
    expect(li).toHaveTextContent('more')
  })

  it('merges custom className', () => {
    const { container } = render(<BreadcrumbEllipsis className='custom-class' />)
    const li = container.querySelector('li')
    expect(li).toHaveClass('custom-class')
  })
})

describe('Integration', () => {
  it('renders full breadcrumb with correct nav > ol > li hierarchy', () => {
    const { container } = render(
      <BreadcrumbRoot>
        <BreadcrumbItem>
          <BreadcrumbLink href='/'>Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href='/components'>Components</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbRoot>,
    )

    const nav = container.querySelector('nav')
    expect(nav).toBeInTheDocument()

    const ol = nav?.querySelector('ol')
    expect(ol).toBeInTheDocument()

    const items = ol?.querySelectorAll(':scope > li')
    expect(items).toHaveLength(5) // 3 items + 2 separators
  })

  it('links are keyboard-navigable', async () => {
    const { user } = render(
      <BreadcrumbRoot>
        <BreadcrumbItem>
          <BreadcrumbLink href='/'>Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href='/components'>Components</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbRoot>,
    )

    await user.tab()
    expect(screen.getByRole('link', { name: 'Home' })).toHaveFocus()

    await user.tab()
    expect(screen.getByRole('link', { name: 'Components' })).toHaveFocus()
  })

  it('renders breadcrumb with ellipsis', () => {
    const { container } = render(
      <BreadcrumbRoot>
        <BreadcrumbItem>
          <BreadcrumbLink href='/'>Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbEllipsis />
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Current</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbRoot>,
    )

    const items = container.querySelectorAll('ol > li')
    expect(items).toHaveLength(5) // item + sep + ellipsis + sep + item
  })
})
