import { ToggleGroupItem, ToggleGroupRoot } from '@lglab/compose-ui'
import { Bookmark, Heart, Star } from 'lucide-react'

export default function GhostExample() {
  return (
    <ToggleGroupRoot multiple>
      <ToggleGroupItem
        value='star'
        variant='ghost'
        aria-label='Favorite'
        size='icon'
        className='data-pressed:*:[svg]:fill-yellow-500 data-pressed:*:[svg]:stroke-yellow-500'
      >
        <Star />
      </ToggleGroupItem>
      <ToggleGroupItem
        value='heart'
        variant='ghost'
        aria-label='Like'
        size='icon'
        className='data-pressed:*:[svg]:fill-red-500 data-pressed:*:[svg]:stroke-red-500'
      >
        <Heart />
      </ToggleGroupItem>
      <ToggleGroupItem
        value='bookmark'
        variant='ghost'
        aria-label='Bookmark'
        size='icon'
        className='data-pressed:*:[svg]:fill-blue-500 data-pressed:*:[svg]:stroke-blue-500'
      >
        <Bookmark />
      </ToggleGroupItem>
    </ToggleGroupRoot>
  )
}
