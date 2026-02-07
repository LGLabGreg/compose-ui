'use client'

import {
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbRoot,
  BreadcrumbSeparator,
} from '@lglab/compose-ui/breadcrumb'
import { ChevronRight } from 'lucide-react'

export default function WithCustomSeparatorExample() {
  return (
    <BreadcrumbRoot>
      <BreadcrumbItem>
        <BreadcrumbLink href='/'>Home</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator>
        <ChevronRight />
      </BreadcrumbSeparator>
      <BreadcrumbItem>
        <BreadcrumbLink href='/components'>Components</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator>
        <ChevronRight />
      </BreadcrumbSeparator>
      <BreadcrumbItem>
        <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
      </BreadcrumbItem>
    </BreadcrumbRoot>
  )
}
