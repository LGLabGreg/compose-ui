import { MDXCodeBlock } from '@/components/mdx/mdx-code-block'

type MDXComponents = Record<string, React.ComponentType<{ children?: React.ReactNode }>>

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Override default heading styles
    h1: ({ children }) => (
      <h1 className='text-3xl font-bold tracking-tight'>{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className='text-xl font-semibold mb-2 not-first:mt-8'>{children}</h2>
    ),
    h3: ({ children }) => <h3 className='text-lg font-semibold mb-2 mt-4'>{children}</h3>,
    p: ({ children }) => <p className='mb-5'>{children}</p>,
    a: ({ children, ...props }) => (
      <a
        className='text-foreground underline underline-offset-4 hover:opacity-90'
        {...props}
      >
        {children}
      </a>
    ),
    // Override code blocks with custom styling
    pre: ({ children }) => <MDXCodeBlock>{children}</MDXCodeBlock>,
    strong: ({ children }) => <strong className='font-semibold'>{children}</strong>,
    ul: ({ children }) => (
      <ul className='list-disc list-inside mb-5 mt-4 pl-2'>{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className='list-decimal list-inside mb-5 mt-4 pl-2'>{children}</ol>
    ),
    li: ({ children }) => <li className='mb-2'>{children}</li>,
    // Pass through any custom components
    ...components,
  }
}
