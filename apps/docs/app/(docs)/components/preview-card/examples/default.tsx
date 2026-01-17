'use client'

import {
  PreviewCardArrow,
  PreviewCardPopup,
  PreviewCardPortal,
  PreviewCardPositioner,
  PreviewCardRoot,
  PreviewCardTrigger,
} from '@lglab/compose-ui/preview-card'

export default function DefaultExample() {
  return (
    <p className='text-sm'>
      The{' '}
      <PreviewCardRoot>
        <PreviewCardTrigger href='https://en.wikipedia.org/wiki/Nile'>
          Nile
        </PreviewCardTrigger>
        <PreviewCardPortal>
          <PreviewCardPositioner>
            <PreviewCardPopup className='space-y-2'>
              <PreviewCardArrow />
              <img
                src='https://images.unsplash.com/photo-1680356217112-dad9300ce49d?q=80&w=448&h=300'
                alt='Satellite image of the Nile'
                className='w-full rounded'
              />
              <p className='text-sm'>
                The Nile is a major north-flowing river in northeastern Africa. It is the
                longest river in Africa and is among the longest in the world.
              </p>
            </PreviewCardPopup>
          </PreviewCardPositioner>
        </PreviewCardPortal>
      </PreviewCardRoot>{' '}
      is the longest river in Africa.
    </p>
  )
}
