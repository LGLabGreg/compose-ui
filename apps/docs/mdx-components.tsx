import { MDXCodeBlock } from '@/components/mdx/mdx-code-block'

type MDXComponents = Record<string, React.ComponentType<{ children?: React.ReactNode }>>

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Override default heading styles
    h1: ({ children }) => (
      <h1 className='text-3xl font-bold tracking-tight'>{children}</h1>
    ),
    h2: ({ children }) => <h2 className='text-xl font-semibold'>{children}</h2>,
    h3: ({ children }) => <h3 className='text-lg font-medium'>{children}</h3>,
    p: ({ children }) => <p className='text-muted-foreground'>{children}</p>,
    // Override code blocks with custom styling
    pre: ({ children }) => <MDXCodeBlock>{children}</MDXCodeBlock>,
    // Pass through any custom components
    ...components,
  }
}
