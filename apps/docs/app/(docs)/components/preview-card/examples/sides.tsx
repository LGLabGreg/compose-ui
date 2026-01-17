'use client'

import {
  PreviewCardArrow,
  PreviewCardPopup,
  PreviewCardPortal,
  PreviewCardPositioner,
  PreviewCardRoot,
  PreviewCardTrigger,
} from '@lglab/compose-ui/preview-card'

export default function SidesExample() {
  const sides = ['top', 'right', 'bottom', 'left'] as const

  return (
    <div className='flex flex-wrap gap-4'>
      {sides.map((side) => (
        <PreviewCardRoot key={side}>
          <PreviewCardTrigger className='text-sm' href='#'>
            {side}
          </PreviewCardTrigger>
          <PreviewCardPortal>
            <PreviewCardPositioner side={side}>
              <PreviewCardPopup>
                <PreviewCardArrow />
                <p className='text-sm'>Preview card positioned on the {side}</p>
              </PreviewCardPopup>
            </PreviewCardPositioner>
          </PreviewCardPortal>
        </PreviewCardRoot>
      ))}
    </div>
  )
}
