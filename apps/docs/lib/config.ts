export const IS_PRODUCTION = process.env.VERCEL_ENV === 'production'
export const APP_URL = process.env.NEXT_PUBLIC_APP_URL

export const siteConfig = {
  name: 'Compose UI',
  url: APP_URL,
  description: 'A collection of components built with Base UI & Tailwind CSS',
  keywords: ['Next.js', 'React', 'Tailwind CSS', 'React Components', 'Base UI', 'A11y'],
  creator: 'LGLab',
  ogImage: `${APP_URL}/opengraph-image.png`,
}
