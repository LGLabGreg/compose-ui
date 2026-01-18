import { screen, waitFor } from '@testing-library/react'
import * as React from 'react'
import { describe, expect, it } from 'vitest'
import { render } from '~/vitest.utils'

import {
  NavigationMenuContent,
  NavigationMenuIcon,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuPopup,
  NavigationMenuPortal,
  NavigationMenuPositioner,
  NavigationMenuRoot,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from './navigation-menu'

describe('NavigationMenu', () => {
  it('renders navigation menu with items', async () => {
    render(
      <NavigationMenuRoot>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink href='/home'>Home</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href='/about'>About</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenuRoot>,
    )

    expect(screen.getByRole('navigation')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument()
  })

  it('opens popup when hovering trigger', async () => {
    const { user } = render(
      <NavigationMenuRoot>
        <NavigationMenuList>
          <NavigationMenuItem value='products'>
            <NavigationMenuTrigger>
              Products
              <NavigationMenuIcon />
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink href='/products/item1'>Item 1</NavigationMenuLink>
              <NavigationMenuLink href='/products/item2'>Item 2</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
        <NavigationMenuPortal>
          <NavigationMenuPositioner>
            <NavigationMenuPopup>
              <NavigationMenuViewport />
            </NavigationMenuPopup>
          </NavigationMenuPositioner>
        </NavigationMenuPortal>
      </NavigationMenuRoot>,
    )

    expect(screen.queryByRole('link', { name: 'Item 1' })).not.toBeInTheDocument()

    await user.hover(screen.getByRole('button', { name: /Products/i }))

    await waitFor(() => {
      expect(screen.getByRole('link', { name: 'Item 1' })).toBeInTheDocument()
    })
    expect(screen.getByRole('link', { name: 'Item 2' })).toBeInTheDocument()
  })

  it('closes popup when mouse leaves', async () => {
    const { user } = render(
      <NavigationMenuRoot>
        <NavigationMenuList>
          <NavigationMenuItem value='products'>
            <NavigationMenuTrigger>
              Products
              <NavigationMenuIcon />
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink href='/products/item1'>Item 1</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
        <NavigationMenuPortal>
          <NavigationMenuPositioner>
            <NavigationMenuPopup>
              <NavigationMenuViewport />
            </NavigationMenuPopup>
          </NavigationMenuPositioner>
        </NavigationMenuPortal>
      </NavigationMenuRoot>,
    )

    await user.hover(screen.getByRole('button', { name: /Products/i }))

    await waitFor(() => {
      expect(screen.getByRole('link', { name: 'Item 1' })).toBeInTheDocument()
    })

    await user.unhover(screen.getByRole('button', { name: /Products/i }))

    await waitFor(() => {
      expect(screen.queryByRole('link', { name: 'Item 1' })).not.toBeInTheDocument()
    })
  })

  it('renders multiple menu items with triggers', async () => {
    const { user } = render(
      <NavigationMenuRoot>
        <NavigationMenuList>
          <NavigationMenuItem value='products'>
            <NavigationMenuTrigger>Products</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink href='/products'>All Products</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem value='services'>
            <NavigationMenuTrigger>Services</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink href='/services'>All Services</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
        <NavigationMenuPortal>
          <NavigationMenuPositioner>
            <NavigationMenuPopup>
              <NavigationMenuViewport />
            </NavigationMenuPopup>
          </NavigationMenuPositioner>
        </NavigationMenuPortal>
      </NavigationMenuRoot>,
    )

    expect(screen.getByRole('button', { name: 'Products' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Services' })).toBeInTheDocument()

    await user.hover(screen.getByRole('button', { name: 'Products' }))

    await waitFor(() => {
      expect(screen.getByRole('link', { name: 'All Products' })).toBeInTheDocument()
    })

    await user.hover(screen.getByRole('button', { name: 'Services' }))

    await waitFor(() => {
      expect(screen.getByRole('link', { name: 'All Services' })).toBeInTheDocument()
    })
  })
})
