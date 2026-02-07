'use client'

import {
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbRoot,
  BreadcrumbSeparator,
} from '@lglab/compose-ui/breadcrumb'
import { HomeIcon } from 'lucide-react'

export default function WithIconExample() {
  return (
    <BreadcrumbRoot>
      <BreadcrumbItem>
        <BreadcrumbLink href='/'>
          <HomeIcon className='size-4' />
          Home
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbLink href='/components'>Components</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
      </BreadcrumbItem>
    </BreadcrumbRoot>
  )
}
