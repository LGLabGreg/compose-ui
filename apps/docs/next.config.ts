import createMDX from '@next/mdx'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
  async rewrites() {
    return [
      {
        source: '/components/:component.md',
        destination: '/llms/:component.md',
      },
      {
        source: '/blocks/:block.md',
        destination: '/llms/blocks/:block.md',
      },
    ]
  },
}

const withMDX = createMDX({})

export default withMDX(nextConfig)
