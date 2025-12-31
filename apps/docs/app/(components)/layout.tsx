import { ComponentsSidebar } from '@/components/components-sidebar'
import { DocHeader } from '@/components/doc-header'

export default function ComponentsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex min-h-screen flex-col'>
      <DocHeader />
      <div className='flex flex-1 pt-14'>
        <ComponentsSidebar />
        <main className='flex-1 overflow-auto pl-56'>{children}</main>
      </div>
    </div>
  )
}
