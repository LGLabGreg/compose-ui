import { Button } from '@lglab/compose-ui'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

import { Hero } from '@/components/hero'
import MainNav from '@/components/main-nav'

const features = [
  {
    title: 'Composition First',
    description:
      'Composable components built on Base UI primitives. Use them whole or extend them with your own styles.',
    href: '/overview/composition',
  },
  {
    title: 'Accessible by Default',
    description:
      "Base UI's accessibility foundation handles ARIA, keyboard navigation, and focus management automatically.",
    href: '/overview/accessibility',
  },
  {
    title: 'AI Ready',
    description:
      'LLM docs at /llms.txt give your AI assistant instant knowledge of every component and API.',
    href: '/overview/llms',
  },
  {
    title: 'Theming',
    description:
      'Customize colors, radius, and dark mode with CSS variables. Works automatically with system preferences.',
    href: '/overview/theming',
  },
]

export default function Home() {
  return (
    <div className='flex flex-col pb-10'>
      <MainNav />
      <Hero />
      <div className='container max-w-7xl mx-auto px-6'>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mt-10'>
          {features.map((feature) => (
            <div
              key={feature.title}
              className='flex flex-col rounded-lg border p-6 shadow-sm'
            >
              <h2 className='text-xl font-semibold mb-3'>{feature.title}</h2>
              <p className='mb-4 flex-1'>{feature.description}</p>
              <Button
                size='sm'
                variant='outline'
                className='flex w-fit ml-auto'
                render={
                  <Link href={feature.href}>
                    Learn more <ArrowRight className='size-4' />
                  </Link>
                }
                nativeButton={false}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
