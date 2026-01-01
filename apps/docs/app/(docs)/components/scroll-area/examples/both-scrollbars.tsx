import {
  ScrollAreaContent,
  ScrollAreaCorner,
  ScrollAreaRoot,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport,
} from '@lglab/compose-ui'

export default function BothScrollbarsExample() {
  return (
    <ScrollAreaRoot className='h-72 w-full lg:w-[50%] rounded-md border'>
      <ScrollAreaViewport>
        <ScrollAreaContent className='p-4'>
          <div className='w-[800px] space-y-4'>
            {Array.from({ length: 20 }).map((_, i) => (
              <p key={i} className='text-sm whitespace-nowrap'>
                {i + 1}. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                euismod, nisi vel consectetur interdum, nisl nunc egestas nunc, vel
                consectetur nisl nunc egestas nunc.
              </p>
            ))}
          </div>
        </ScrollAreaContent>
      </ScrollAreaViewport>
      <ScrollAreaScrollbar orientation='vertical'>
        <ScrollAreaThumb />
      </ScrollAreaScrollbar>
      <ScrollAreaScrollbar orientation='horizontal'>
        <ScrollAreaThumb />
      </ScrollAreaScrollbar>
      <ScrollAreaCorner />
    </ScrollAreaRoot>
  )
}
