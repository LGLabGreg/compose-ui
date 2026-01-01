import {
  DrawerBackdrop,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerPopup,
  DrawerPortal,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
} from '@lglab/compose-ui'

const sides = ['top', 'right', 'bottom', 'left'] as const

export default function SidesExample() {
  return (
    <div className='flex flex-wrap gap-2'>
      {sides.map((side) => (
        <DrawerRoot key={side}>
          <DrawerTrigger variant='outline' className='capitalize'>
            {side}
          </DrawerTrigger>
          <DrawerPortal>
            <DrawerBackdrop />
            <DrawerPopup side={side}>
              <DrawerHeader>
                <DrawerTitle className='capitalize'>{side} Drawer</DrawerTitle>
                <DrawerDescription>
                  This drawer slides in from the {side}.
                </DrawerDescription>
              </DrawerHeader>
              <DrawerContent>
                <p className='text-sm'>
                  This is a basic drawer that slides in from the {side} side of the
                  screen.
                </p>
              </DrawerContent>
              <DrawerFooter>
                <DrawerClose>Close</DrawerClose>
              </DrawerFooter>
            </DrawerPopup>
          </DrawerPortal>
        </DrawerRoot>
      ))}
    </div>
  )
}
