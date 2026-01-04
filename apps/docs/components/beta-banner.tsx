import Link from 'next/link'

interface BetaBannerProps {
  className?: string
}

export function BetaBanner({ className }: BetaBannerProps) {
  return (
    <div
      role='note'
      className={[
        'mb-6 flex flex-col gap-1 rounded-lg bg-primary px-4 py-3 text-primary-foreground',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div className='text-sm font-medium'>Compose UI is currently in beta.</div>
      <div className='text-sm'>
        You can start using it today—if you spot a bug or want to request a feature,
        please report it on{' '}
        <Link
          href='https://github.com/LGLabGreg/compose-ui/issues'
          className='font-medium underline underline-offset-4 hover:opacity-90'
          target='_blank'
        >
          GitHub Issues
        </Link>
      </div>
    </div>
  )
}
