import {
  ScrollAreaContent,
  ScrollAreaRoot,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport,
} from '@lglab/compose-ui'

export default function HorizontalScrollExample() {
  return (
    <ScrollAreaRoot className='w-full rounded-md border'>
      <ScrollAreaViewport className='w-full'>
        <ScrollAreaContent className='p-4'>
          <div className='flex gap-4'>
            {Array.from({ length: 15 }).map((_, i) => (
              <div
                key={i}
                className='flex h-24 w-32 shrink-0 items-center justify-center rounded-md bg-muted text-sm font-medium'
              >
                Item {i + 1}
              </div>
            ))}
          </div>
        </ScrollAreaContent>
      </ScrollAreaViewport>
      <ScrollAreaScrollbar orientation='horizontal'>
        <ScrollAreaThumb />
      </ScrollAreaScrollbar>
    </ScrollAreaRoot>
  )
}
