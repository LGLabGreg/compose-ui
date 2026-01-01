import { DocHeader } from '@/components/doc-header'
import { DocsNavigation } from '@/components/docs-navigation'

export default function ComponentsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex min-h-screen flex-col'>
      <DocHeader />
      <div className='flex flex-1 pt-14'>
        <aside className='hidden md:block fixed left-0 top-14 bottom-0 w-56 border-r bg-background py-6 px-4'>
          <DocsNavigation />
        </aside>
        <main className='flex-1 overflow-auto md:pl-56'>{children}</main>
      </div>
    </div>
  )
}
