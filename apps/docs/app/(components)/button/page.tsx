import { Button } from '@lglab/compose-ui'
import { TrashIcon } from 'lucide-react'
import Link from 'next/link'

import { CodeBlock } from '@/components/code-block'
import { ComponentPreview } from '@/components/component-preview'
import { DocLinks } from '@/components/doc-links'

const sizesCode = `import { Button } from '@lglab/compose-ui'
import { TrashIcon } from 'lucide-react'

<Button size='sm'>Button</Button>
<Button>Button</Button>
<Button size='lg'>Button</Button>
<Button loading loadingText='Loading...'>Button</Button>
<Button size='icon'><TrashIcon /></Button>`

const secondaryCode = `import { Button } from '@lglab/compose-ui'
import { TrashIcon } from 'lucide-react'

<Button variant='secondary' size='sm'>Button</Button>
<Button variant='secondary'>Button</Button>
<Button variant='secondary' size='lg'>Button</Button>
<Button variant='secondary' loading loadingText='Loading...'>Button</Button>
<Button variant='secondary' size='icon'><TrashIcon /></Button>`

const outlineCode = `import { Button } from '@lglab/compose-ui'
import { TrashIcon } from 'lucide-react'

<Button variant='outline' size='sm'>Button</Button>
<Button variant='outline'>Button</Button>
<Button variant='outline' size='lg'>Button</Button>
<Button variant='outline' loading loadingText='Loading...'>Button</Button>
<Button variant='outline' size='icon'><TrashIcon /></Button>`

const destructiveCode = `import { Button } from '@lglab/compose-ui'
import { TrashIcon } from 'lucide-react'

<Button variant='destructive' size='sm'>Button</Button>
<Button variant='destructive'>Button</Button>
<Button variant='destructive' size='lg'>Button</Button>
<Button variant='destructive' loading loadingText='Loading...'>Button</Button>
<Button variant='destructive' size='icon'><TrashIcon /></Button>`

const ghostCode = `import { Button } from '@lglab/compose-ui'
import { TrashIcon } from 'lucide-react'

<Button variant='ghost' size='sm'>Button</Button>
<Button variant='ghost'>Button</Button>
<Button variant='ghost' size='lg'>Button</Button>
<Button variant='ghost' loading loadingText='Loading...'>Button</Button>
<Button variant='ghost' size='icon'><TrashIcon /></Button>`

const asLinkCode = `import { Button } from '@lglab/compose-ui'
import Link from 'next/link'

<Button render={<Link href='/docs'>Link</Link>} nativeButton={false} />`

export default function ButtonComponent() {
  return (
    <div className='p-8'>
      <div className='mb-8'>
        <h1 className='text-3xl font-bold tracking-tight'>Button</h1>
        <p className='mt-2 text-muted-foreground'>
          A versatile button component with multiple variants, sizes, and states including
          loading indicators.
        </p>
        <div className='mt-4'>
          <DocLinks component='button' />
        </div>
      </div>

      <div className='space-y-8'>
        {/* Default variant */}
        <ComponentPreview title='Default' codeBlock={<CodeBlock code={sizesCode} />}>
          <div className='flex gap-2'>
            <Button size='sm'>Button</Button>
            <Button>Button</Button>
            <Button size='lg'>Button</Button>
            <Button loading loadingText='Loading...'>
              Button
            </Button>
            <Button size='icon'>
              <TrashIcon />
            </Button>
          </div>
        </ComponentPreview>

        {/* Secondary variant */}
        <ComponentPreview
          title='Secondary'
          codeBlock={<CodeBlock code={secondaryCode} />}
        >
          <div className='flex gap-2'>
            <Button variant='secondary' size='sm'>
              Button
            </Button>
            <Button variant='secondary'>Button</Button>
            <Button variant='secondary' size='lg'>
              Button
            </Button>
            <Button variant='secondary' loading loadingText='Loading...'>
              Button
            </Button>
            <Button variant='secondary' size='icon'>
              <TrashIcon />
            </Button>
          </div>
        </ComponentPreview>

        {/* Outline variant */}
        <ComponentPreview title='Outline' codeBlock={<CodeBlock code={outlineCode} />}>
          <div className='flex gap-2'>
            <Button variant='outline' size='sm'>
              Button
            </Button>
            <Button variant='outline'>Button</Button>
            <Button variant='outline' size='lg'>
              Button
            </Button>
            <Button variant='outline' loading loadingText='Loading...'>
              Button
            </Button>
            <Button variant='outline' size='icon'>
              <TrashIcon />
            </Button>
          </div>
        </ComponentPreview>

        {/* Destructive variant */}
        <ComponentPreview
          title='Destructive'
          codeBlock={<CodeBlock code={destructiveCode} />}
        >
          <div className='flex gap-2'>
            <Button variant='destructive' size='sm'>
              Button
            </Button>
            <Button variant='destructive'>Button</Button>
            <Button variant='destructive' size='lg'>
              Button
            </Button>
            <Button variant='destructive' loading loadingText='Loading...'>
              Button
            </Button>
            <Button variant='destructive' size='icon'>
              <TrashIcon />
            </Button>
          </div>
        </ComponentPreview>

        {/* Ghost variant */}
        <ComponentPreview title='Ghost' codeBlock={<CodeBlock code={ghostCode} />}>
          <div className='flex gap-2'>
            <Button variant='ghost' size='sm'>
              Button
            </Button>
            <Button variant='ghost'>Button</Button>
            <Button variant='ghost' size='lg'>
              Button
            </Button>
            <Button variant='ghost' loading loadingText='Loading...'>
              Button
            </Button>
            <Button variant='ghost' size='icon'>
              <TrashIcon />
            </Button>
          </div>
        </ComponentPreview>

        {/* As Link */}
        <ComponentPreview title='As Link' codeBlock={<CodeBlock code={asLinkCode} />}>
          <div className='flex gap-2'>
            <Button render={<Link href='/docs'>Link</Link>} nativeButton={false} />
          </div>
        </ComponentPreview>
      </div>
    </div>
  )
}
