'use client'

import {
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbRoot,
  BreadcrumbSeparator,
} from '@lglab/compose-ui/breadcrumb'
import Link from 'next/link'

export default function WithNextLinkExample() {
  return (
    <BreadcrumbRoot>
      <BreadcrumbItem>
        <BreadcrumbLink render={<Link href='/' />}>Home</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbLink render={<Link href='/components' />}>Components</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
      </BreadcrumbItem>
    </BreadcrumbRoot>
  )
}
