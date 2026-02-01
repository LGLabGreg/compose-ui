'use client'

import { Button } from '@lglab/compose-ui/button'
import { ArrowRight, LayoutDashboard } from 'lucide-react'
import Link from 'next/link'

import { SquareGrid } from './square-grid'

export function Hero() {
  return (
    <section className='relative flex flex-col items-center gap-8 px-5 py-8 text-center md:py-12 overflow-hidden'>
      <div className='absolute inset-0 flex h-full w-full items-center justify-center opacity-100'>
        <SquareGrid className='mask-[radial-gradient(75%_75%_at_center,white,transparent)] opacity-50' />
      </div>
      <div className='relative z-10 flex flex-col items-center'>
        <div className='flex flex-col items-center gap-3 mb-6'>
          <Link
            href='/overview/quick-start'
            className='mx-auto inline-flex items-center gap-3 rounded-full border px-2 py-1 text-sm bg-background shadow-xs'
          >
            <span className='inline-flex items-center rounded-full bg-primary text-primary-foreground px-3 py-1 text-xs font-medium'>
              Beta
            </span>
            <span className='font-medium'>
              Introducing <span className='font-semibold'>Compose UI</span>
            </span>
            <span className='bg-muted flex size-7 items-center justify-center rounded-full'>
              <ArrowRight className='size-4' />
            </span>
          </Link>
          <h1 className='leading-tighter text-4xl font-semibold tracking-tight text-balance lg:leading-[1.2] lg:font-semibold xl:text-5xl xl:tracking-tighter max-w-4xl'>
            Accessible React Components, Ready to Use
          </h1>
          <p className='text-foreground max-w-3xl text-base sm:text-lg'>
            Pre-styled, composable components with accessibility built-in. npm install and
            start building immediately.
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
              <Link href='/components/accordion'>
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
