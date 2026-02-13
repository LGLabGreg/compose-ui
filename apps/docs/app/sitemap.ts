import fs from 'fs'
import type { MetadataRoute } from 'next'
import path from 'path'

import { siteConfig } from '@/lib/config'

type PageInfo = {
  slug: string
  lastModified: Date
}

function getDocsPages(): PageInfo[] {
  const docsDir = path.join(process.cwd(), 'app', '(docs)')
  const pages: PageInfo[] = []

  function scanDirectory(dir: string, basePath: string = '') {
    const entries = fs.readdirSync(dir, { withFileTypes: true })

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name)

      if (entry.isDirectory()) {
        scanDirectory(fullPath, path.join(basePath, entry.name))
      } else if (entry.name === 'page.mdx') {
        const stats = fs.statSync(fullPath)
        pages.push({
          slug: basePath,
          lastModified: stats.mtime,
        })
      }
    }
  }

  scanDirectory(docsDir)
  return pages
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url!

  const docsPages = getDocsPages()

  const componentPages = docsPages
    .filter((page) => page.slug.startsWith('components'))
    .map((page) => ({
      url: `${baseUrl}/${page.slug}`,
      lastModified: page.lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }))

  const overviewPages = docsPages
    .filter((page) => page.slug.startsWith('overview'))
    .map((page) => ({
      url: `${baseUrl}/${page.slug}`,
      lastModified: page.lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))

  const blockPages = docsPages
    .filter((page) => page.slug.startsWith('blocks'))
    .map((page) => ({
      url: `${baseUrl}/${page.slug}`,
      lastModified: page.lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.75,
    }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...componentPages,
    ...blockPages,
    ...overviewPages,
  ]
}
