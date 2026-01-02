'use client'

import { Button } from '@lglab/compose-ui'
import { ArrowRight, LayoutDashboard } from 'lucide-react'
import Link from 'next/link'

import { SquareGrid } from './square-grid'

export function Hero() {
  return (
    <section className='relative flex flex-col items-center gap-8 px-5 py-8 text-center md:py-12 overflow-hidden'>
      <div className='absolute inset-0 flex h-full w-full items-center justify-center opacity-100'>
        <SquareGrid className='mask-[radial-gradient(75%_75%_at_center,white,transparent)] opacity-90' />
      </div>
      <div className='relative z-10 flex flex-col items-center'>
        <div className='flex flex-col items-center gap-4 mb-5'>
          <Link
            href='/overview/quick-start'
            className='mx-auto mb-3 inline-flex items-center gap-3 rounded-full border px-2 pl-4 py-1 text-sm bg-background shadow-xs'
          >
            <span className='font-medium'>Introducing Compose UI</span>
            <span className='bg-muted flex size-7 items-center justify-center rounded-full'>
              <ArrowRight className='size-4' />
            </span>
          </Link>
          <h1 className='text-primary leading-tighter text-4xl font-semibold tracking-tight text-balance lg:leading-[1.3] lg:font-semibold xl:text-5xl xl:tracking-tighter max-w-4xl'>
            A Collection of Components Built With Base UI & Tailwind CSS
          </h1>
          <p className='text-foreground max-w-3xl text-base sm:text-lg'>
            A growing collection of composable and accessible components.
          </p>
        </div>
        <div className='flex gap-4'>
          <Button
            size='lg'
            render={
              <Link href='/overview/quick-start'>
                Get Started
                <ArrowRight />
              </Link>
            }
            nativeButton={false}
          />
          <Button
            variant='outline'
            size='lg'
            render={
              <Link href='/components/button'>
                <LayoutDashboard /> Components
              </Link>
            }
            nativeButton={false}
          />
        </div>
      </div>
    </section>
  )
}
