import {
  ScrollAreaContent,
  ScrollAreaRoot,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport,
} from '@lglab/compose-ui/scroll-area'

export default function VerticalScrollExample() {
  return (
    <ScrollAreaRoot className='h-72 w-full rounded-md border'>
      <ScrollAreaViewport>
        <ScrollAreaContent className='p-4'>
          <div className='space-y-4'>
            {Array.from({ length: 20 }).map((_, i) => (
              <p key={i}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod,
                nisi vel consectetur interdum, nisl nunc egestas nunc.
              </p>
            ))}
          </div>
        </ScrollAreaContent>
      </ScrollAreaViewport>
      <ScrollAreaScrollbar orientation='vertical'>
        <ScrollAreaThumb />
      </ScrollAreaScrollbar>
    </ScrollAreaRoot>
  )
}
