import { Button } from '@lglab/compose-ui'
import Link from 'next/link'

export default function AsLinkExample() {
  return (
    <div className='flex gap-2'>
      <Button render={<Link href='/docs'>Link</Link>} nativeButton={false} />
    </div>
  )
}
