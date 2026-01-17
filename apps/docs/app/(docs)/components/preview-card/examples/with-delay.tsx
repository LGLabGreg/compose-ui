'use client'

import {
  PreviewCardArrow,
  PreviewCardPopup,
  PreviewCardPortal,
  PreviewCardPositioner,
  PreviewCardRoot,
  PreviewCardTrigger,
} from '@lglab/compose-ui/preview-card'

export default function WithDelayExample() {
  return (
    <p className='text-sm'>
      Read about{' '}
      <PreviewCardRoot>
        <PreviewCardTrigger
          href='https://en.wikipedia.org/wiki/Machine_learning'
          delay={300}
          closeDelay={200}
        >
          machine learning
        </PreviewCardTrigger>
        <PreviewCardPortal>
          <PreviewCardPositioner>
            <PreviewCardPopup className='space-y-2'>
              <PreviewCardArrow />
              <p className='text-sm font-semibold'>Machine Learning</p>
              <p className='text-sm text-muted-foreground'>
                Machine learning is a branch of artificial intelligence that focuses on
                building applications that learn from data and improve their accuracy over
                time.
              </p>
            </PreviewCardPopup>
          </PreviewCardPositioner>
        </PreviewCardPortal>
      </PreviewCardRoot>{' '}
      to understand AI better.
    </p>
  )
}
