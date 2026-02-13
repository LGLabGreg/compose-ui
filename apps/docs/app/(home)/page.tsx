import { Button } from '@lglab/compose-ui/button'
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardRoot,
  CardTitle,
} from '@lglab/compose-ui/card'
import { ArrowRight, Keyboard, Palette, Sparkles, SquareCode } from 'lucide-react'
import Link from 'next/link'

import { Hero } from '@/components/hero'
import MainNav from '@/components/main-nav'

const features = [
  {
    icon: SquareCode,
    title: 'Composition First',
    description:
      'Composable compound components you can use whole or extend with your own styles.',
    href: '/overview/composition',
  },
  {
    icon: Keyboard,
    title: 'Accessible by Default',
    description:
      'ARIA attributes, keyboard navigation, and focus management work automatically.',
    href: '/overview/accessibility',
  },
  {
    icon: Sparkles,
    title: 'Agent Ready',
    description:
      'LLM docs and MCP server give your AI assistant instant knowledge of every component and API.',
    href: '/overview/llms',
  },
  {
    icon: Palette,
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
            <CardRoot key={feature.title} className='flex flex-col'>
              <CardHeader>
                <CardTitle as='h2' className='flex items-center gap-2'>
                  <feature.icon className='size-6' />
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button
                  size='sm'
                  variant='outline'
                  className='ml-auto'
                  render={
                    <Link href={feature.href}>
                      Learn more <ArrowRight className='size-4' />
                    </Link>
                  }
                  nativeButton={false}
                />
              </CardFooter>
            </CardRoot>
          ))}
        </div>
      </div>
    </div>
  )
}
