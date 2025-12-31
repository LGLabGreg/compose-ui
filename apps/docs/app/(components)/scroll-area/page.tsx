import {
  ScrollAreaContent,
  ScrollAreaCorner,
  ScrollAreaRoot,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport,
} from '@lglab/compose-ui'

import { CodeBlock } from '@/components/code-block'
import { ComponentPreview } from '@/components/component-preview'
import { DocLinks } from '@/components/doc-links'

const verticalCode = `import {
  ScrollAreaContent,
  ScrollAreaRoot,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport,
} from '@lglab/compose-ui'

<ScrollAreaRoot className='h-72 w-96 rounded-md border'>
  <ScrollAreaViewport className='h-full w-full'>
    <ScrollAreaContent className='p-4'>
      <div className='space-y-4'>
        {items.map((item, i) => (
          <p key={i} className='text-sm'>
            Lorem ipsum dolor sit amet...
          </p>
        ))}
      </div>
    </ScrollAreaContent>
  </ScrollAreaViewport>
  <ScrollAreaScrollbar orientation='vertical'>
    <ScrollAreaThumb />
  </ScrollAreaScrollbar>
</ScrollAreaRoot>`

const horizontalCode = `import {
  ScrollAreaContent,
  ScrollAreaRoot,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport,
} from '@lglab/compose-ui'

<ScrollAreaRoot className='w-96 rounded-md border'>
  <ScrollAreaViewport className='w-full'>
    <ScrollAreaContent className='p-4'>
      <div className='flex gap-4'>
        {items.map((item, i) => (
          <div
            key={i}
            className='flex h-24 w-32 shrink-0 items-center justify-center rounded-md bg-muted'
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
</ScrollAreaRoot>`

const bothCode = `import {
  ScrollAreaContent,
  ScrollAreaCorner,
  ScrollAreaRoot,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport,
} from '@lglab/compose-ui'

<ScrollAreaRoot className='h-72 w-96 rounded-md border'>
  <ScrollAreaViewport className='h-full w-full'>
    <ScrollAreaContent className='p-4'>
      {/* Wide content that needs both scrollbars */}
      <div className='w-[800px] space-y-4'>
        {items.map((item, i) => (
          <p key={i} className='text-sm whitespace-nowrap'>
            {i + 1}. Lorem ipsum dolor sit amet...
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
</ScrollAreaRoot>`

export default function ScrollAreaComponent() {
  return (
    <div className='p-8'>
      <div className='mb-8'>
        <h1 className='text-3xl font-bold tracking-tight'>Scroll Area</h1>
        <p className='mt-2 text-muted-foreground'>
          A native scroll container with custom scrollbars for consistent styling across
          browsers.
        </p>
        <div className='mt-4'>
          <DocLinks component='scroll-area' />
        </div>
      </div>

      <div className='space-y-8'>
        {/* Vertical scroll example */}
        <ComponentPreview
          title='Vertical Scroll'
          codeBlock={<CodeBlock code={verticalCode} />}
        >
          <ScrollAreaRoot className='h-72 w-96 rounded-md border'>
            <ScrollAreaViewport className='h-full w-full'>
              <ScrollAreaContent className='p-4'>
                <div className='space-y-4'>
                  {Array.from({ length: 20 }).map((_, i) => (
                    <p key={i} className='text-sm'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                      euismod, nisi vel consectetur interdum, nisl nunc egestas nunc.
                    </p>
                  ))}
                </div>
              </ScrollAreaContent>
            </ScrollAreaViewport>
            <ScrollAreaScrollbar orientation='vertical'>
              <ScrollAreaThumb />
            </ScrollAreaScrollbar>
          </ScrollAreaRoot>
        </ComponentPreview>

        {/* Horizontal scroll example */}
        <ComponentPreview
          title='Horizontal Scroll'
          codeBlock={<CodeBlock code={horizontalCode} />}
        >
          <ScrollAreaRoot className='w-96 rounded-md border'>
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
        </ComponentPreview>

        {/* Both scrollbars example */}
        <ComponentPreview
          title='Both Scrollbars'
          codeBlock={<CodeBlock code={bothCode} />}
        >
          <ScrollAreaRoot className='h-72 w-96 rounded-md border'>
            <ScrollAreaViewport className='h-full w-full'>
              <ScrollAreaContent className='p-4'>
                <div className='w-[800px] space-y-4'>
                  {Array.from({ length: 20 }).map((_, i) => (
                    <p key={i} className='text-sm whitespace-nowrap'>
                      {i + 1}. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nullam euismod, nisi vel consectetur interdum, nisl nunc egestas
                      nunc, vel consectetur nisl nunc egestas nunc.
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
        </ComponentPreview>
      </div>
    </div>
  )
}
