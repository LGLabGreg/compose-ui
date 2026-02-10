'use client'

import { usePathname } from 'next/navigation'

import { blocksNavigation, docsNavigation } from '@/lib/navigation'

import { DocsNavigation } from './docs-navigation'

interface SectionNavigationProps {
  closeDrawer?: () => void
  className?: string
  collapsible?: boolean
}

export function SectionNavigation(props: SectionNavigationProps) {
  const pathname = usePathname()
  const navigation = pathname.startsWith('/blocks') ? blocksNavigation : docsNavigation

  return <DocsNavigation {...props} navigation={navigation} />
}
