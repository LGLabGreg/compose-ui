import { DocHeader } from '@/components/doc-header'
import { DocsNavigation } from '@/components/docs-navigation'
import { TableOfContents } from '@/components/table-of-contents'
import { TocProvider } from '@/components/toc-context'

export default function ComponentsLayout({ children }: { children: React.ReactNode }) {
  return (
    <TocProvider>
      <div className='flex min-h-screen flex-col'>
        <DocHeader />
        <div className='flex flex-1 pt-14'>
          <aside className='hidden md:block fixed left-0 top-14 bottom-0 w-56 border-r bg-background py-6'>
            <DocsNavigation className='px-4' />
          </aside>
          <main className='flex-1 overflow-auto md:pl-56 xl:pr-64'>{children}</main>
          <aside className='hidden xl:block fixed right-0 top-14 bottom-0 w-64 border-l bg-background py-6 px-4'>
            <TableOfContents />
          </aside>
        </div>
      </div>
    </TocProvider>
  )
}
