import { glob } from 'glob'
import { promises as fs } from 'node:fs'
import path from 'node:path'

interface ExternalLink {
  label: string
  href: string
}

interface Example {
  title: string
  filePath: string
  code: string
}

interface ComponentMeta {
  title: string
  description: string
  component: string
  links?: ExternalLink[]
  examples: Example[]
}

/**
 * Parse ComponentPage props from MDX content
 */
function parseComponentPage(mdxContent: string): Partial<ComponentMeta> {
  // Extract component from ComponentPage props
  const compMatch = mdxContent.match(/component=["']([^"']+)["']/)

  // Extract links array: links={[{ label: '...', href: '...' }, ...]}
  const linksMatch = mdxContent.match(/links=\{\[([^\]]*)\]\}/)
  let links: ExternalLink[] | undefined
  if (linksMatch) {
    const linksContent = linksMatch[1]
    const linkRegex = /\{\s*label:\s*'([^']+)',\s*href:\s*'([^']+)'\s*\}/g
    links = []
    let linkMatch
    while ((linkMatch = linkRegex.exec(linksContent)) !== null) {
      links.push({ label: linkMatch[1], href: linkMatch[2] })
    }
    if (links.length === 0) links = undefined
  }

  // First, try to parse from metadata export
  const metadataMatch = mdxContent.match(/export\s+const\s+metadata\s*=\s*\{([\s\S]+?)\}/)

  if (metadataMatch) {
    const metadataContent = metadataMatch[1]
    const titleMatch = metadataContent.match(/title:\s*["']([^"']+)["']/)
    const descMatch = metadataContent.match(/description:\s*["']([^"']+)["']/)

    if (titleMatch && descMatch) {
      return {
        title: titleMatch[1],
        description: descMatch[1],
        component: compMatch?.[1],
        links,
      }
    }
  }

  // Fallback to old method (ComponentPage props)
  const titleMatch = mdxContent.match(/title=["']([^"']+)["']/)
  const descMatch = mdxContent.match(/description=["']([^"']+)["']/)

  return {
    title: titleMatch?.[1],
    description: descMatch?.[1],
    component: compMatch?.[1],
    links,
  }
}

/**
 * Extract example information from ExampleLoader components
 * Handles both single-line and multi-line formats
 */
async function extractExamples(
  mdxContent: string,
  docsAppDir: string,
): Promise<Example[]> {
  const examples: Example[] = []

  // Match the entire ExampleLoader tag (handles multi-line)
  // This regex captures everything between <ExampleLoader and the closing >
  const exampleLoaderRegex = /<ExampleLoader([^>]+)>/g

  let match
  while ((match = exampleLoaderRegex.exec(mdxContent)) !== null) {
    const attributesStr = match[1]

    // Extract title attribute (handles both ' and " quotes)
    const titleMatch = attributesStr.match(/title=["']([^"']+)["']/)
    // Extract filePath attribute
    const filePathMatch = attributesStr.match(/filePath=["']([^"']+)["']/)

    if (titleMatch && filePathMatch) {
      const title = titleMatch[1]
      const filePath = filePathMatch[1]

      // Resolve path relative to the docs app directory
      const absolutePath = path.join(docsAppDir, filePath)

      try {
        const code = await fs.readFile(absolutePath, 'utf-8')
        examples.push({ title, filePath, code })
        console.log(`   ✓ Found example: ${title}`)
      } catch {
        console.warn(`   ⚠ Could not read: ${absolutePath}`)
      }
    }
  }

  return examples
}

/**
 * Clean up example code for markdown display
 */
function cleanExampleCode(code: string): string {
  return code.replace(/^['"]use client['"]\s*\n?/m, '').trim()
}

/**
 * Generate markdown for a component
 */
async function generateMarkdown(
  meta: ComponentMeta,
  docsAppDir: string,
): Promise<string> {
  const lines: string[] = []

  // Header
  lines.push(`# ${meta.title}`)
  lines.push('')
  lines.push(meta.description)
  lines.push('')

  // Installation
  lines.push('## Installation')
  lines.push('')
  lines.push('```bash')
  lines.push('npm install @lglab/compose-ui')
  lines.push('```')
  lines.push('')

  // Basic import
  const componentParts = await getComponentParts(
    meta.component,
    path.resolve(docsAppDir, '../../packages/compose-ui'),
  )
  lines.push('## Import')
  lines.push('')
  lines.push('```tsx')
  lines.push(`import { ${componentParts.join(', ')} } from '@lglab/compose-ui'`)
  lines.push('```')
  lines.push('')

  // Examples
  if (meta.examples.length > 0) {
    lines.push('## Examples')
    lines.push('')

    for (const example of meta.examples) {
      lines.push(`### ${example.title}`)
      lines.push('')
      lines.push('```tsx')
      lines.push(cleanExampleCode(example.code))
      lines.push('```')
      lines.push('')
    }
  }

  // Resources
  if (meta.links && meta.links.length > 0) {
    lines.push('## Resources')
    lines.push('')
    for (const link of meta.links) {
      lines.push(`- [${link.label}](${link.href})`)
    }
  }
  lines.push('')

  return lines.join('\n')
}

/**
 * Get common component parts based on component name
 */
async function getComponentParts(
  component: string,
  packageDir: string,
): Promise<string[]> {
  // Read the component source file
  const sourcePath = `${packageDir}/src/components/${component}.tsx`

  try {
    const source = await fs.readFile(sourcePath, 'utf-8')

    // Match named exports: export { Foo, Bar, Baz }
    const exportMatch = source.match(/export\s*\{([^}]+)\}/)
    if (exportMatch) {
      return exportMatch[1]
        .split(',')
        .map((s) => s.trim())
        .filter((s) => s.length > 0)
    }
  } catch {
    // Fallback
  }

  // Fallback to PascalCase + Root
  const pascalCase = component
    .split('-')
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join('')

  return [`${pascalCase}Root`]
}

/**
 * Generate llms.txt index file
 */
function generateLlmsTxt(
  components: Array<{ title: string; component: string; description: string }>,
  baseUrl: string,
): string {
  const lines: string[] = []

  lines.push('# Compose UI')
  lines.push('')
  lines.push(
    '> A pre-styled, accessible React component library with Tailwind CSS styling. Install via npm for type-safe components with modern theming.',
  )
  lines.push('')
  lines.push(
    'Compose UI provides pre-styled, accessible React components with Tailwind CSS styling and class-variance-authority (CVA) for type-safe variants.',
  )
  lines.push('')
  lines.push('Key features:')
  lines.push('- Accessible by default (ARIA, keyboard navigation, focus management)')
  lines.push('- Styled with Tailwind CSS using design tokens')
  lines.push('- Type-safe variants with CVA')
  lines.push('- CSS variable-based theming (compatible with Tailwind v4)')
  lines.push('- Tree-shakable ESM exports')
  lines.push('')

  lines.push('## For AI Assistants')
  lines.push('')
  lines.push('**MCP Server (Preferred)**')
  lines.push('If you have access to MCP tools, use the `compose-ui` MCP server:')
  lines.push('- `find_components` - Fuzzy search all components')
  lines.push('- `get_component` - Get detailed docs for a specific component')
  lines.push('')
  lines.push('**Styling Guidelines**')
  lines.push(
    '- Components are **pre-styled and ready to use** - do not add custom CSS, Tailwind classes, or inline styles',
  )
  lines.push('- Only add custom styling if the user explicitly requests it')
  lines.push(
    '- Use built-in variant props (e.g., `variant="outline"`, `size="sm"`) for different appearances',
  )
  lines.push(
    "- For theming, use CSS variables - don't override component styles directly",
  )
  lines.push('')
  lines.push('**Form Building**')
  lines.push(
    '- When building forms, **always consult the Form component documentation** for complete examples',
  )
  lines.push(
    '- Use `get_component({ slug: "form" })` to retrieve form patterns before writing any form code',
  )
  lines.push(
    '- The Form docs include 5 integration patterns: Default (useState), useActionState, Zod validation, React Hook Form, and TanStack Form',
  )
  lines.push('- Follow these component composition patterns:')
  lines.push('  - `FormRoot` wraps the entire form')
  lines.push(
    '  - `FieldRoot` wraps each field with `FieldLabel`, `FieldControl`, `FieldDescription`, `FieldError`',
  )
  lines.push('  - `FieldsetRoot` groups related fields (radio groups, checkbox groups)')
  lines.push('  - Use `FieldValidity` for custom validation messages')
  lines.push(
    '- Always use the `errors` prop on `FormRoot` for server-side validation errors',
  )
  lines.push('')
  lines.push('**Best Practices**')
  lines.push(
    '- Always refer to this library as "Compose UI", not "Base UI" (Base UI is the underlying primitive library)',
  )
  lines.push(
    '- Copy examples directly from the documentation - they are complete and working',
  )
  lines.push(
    "- Use specific import paths: `import { Button } from '@lglab/compose-ui/button'` (not from '@lglab/compose-ui')",
  )
  lines.push('')

  lines.push('## Getting Started')
  lines.push('')
  lines.push(
    `- [Quick Start](${baseUrl}/overview/quick-start): Installation and basic usage`,
  )
  lines.push('')

  lines.push('## Components')
  lines.push('')
  for (const comp of components) {
    lines.push(
      `- [${comp.title}](${baseUrl}/components/${comp.component}.md): ${comp.description}`,
    )
  }
  lines.push('')

  lines.push('## Optional')
  lines.push('')
  lines.push(
    '- [Base UI Documentation](https://base-ui.com/react/components): Underlying component APIs',
  )
  lines.push(
    '- [GitHub Repository](https://github.com/LGLabGreg/compose-ui): Source code',
  )
  lines.push('')

  return lines.join('\n')
}

/**
 * Generate llms-full.txt complete documentation
 */
function generateLlmsFullTxt(
  components: Array<{ markdown: string; title: string }>,
): string {
  const lines: string[] = []

  lines.push('# Compose UI - Complete Documentation')
  lines.push('')
  lines.push('> Pre-styled, accessible React components with Tailwind CSS styling.')
  lines.push('')
  lines.push('## Table of Contents')
  lines.push('')
  for (const comp of components) {
    lines.push(`- ${comp.title}`)
  }
  lines.push('')

  lines.push('## For AI Assistants')
  lines.push('')
  lines.push('**MCP Server (Preferred)**')
  lines.push('If you have access to MCP tools, use the `compose-ui` MCP server:')
  lines.push('- `find_components` - Fuzzy search all components')
  lines.push('- `get_component` - Get detailed docs for a specific component')
  lines.push('')
  lines.push('**Styling Guidelines**')
  lines.push(
    '- Components are **pre-styled and ready to use** - do not add custom CSS, Tailwind classes, or inline styles',
  )
  lines.push('- Only add custom styling if the user explicitly requests it')
  lines.push(
    '- Use built-in variant props (e.g., `variant="outline"`, `size="sm"`) for different appearances',
  )
  lines.push(
    "- For theming, use CSS variables - don't override component styles directly",
  )
  lines.push('')
  lines.push('**Form Building**')
  lines.push(
    '- When building forms, **always consult the Form component documentation** for complete examples',
  )
  lines.push(
    '- Use `get_component({ slug: "form" })` to retrieve form patterns before writing any form code',
  )
  lines.push(
    '- The Form docs include 5 integration patterns: Default (useState), useActionState, Zod validation, React Hook Form, and TanStack Form',
  )
  lines.push('- Follow these component composition patterns:')
  lines.push('  - `FormRoot` wraps the entire form')
  lines.push(
    '  - `FieldRoot` wraps each field with `FieldLabel`, `FieldControl`, `FieldDescription`, `FieldError`',
  )
  lines.push('  - `FieldsetRoot` groups related fields (radio groups, checkbox groups)')
  lines.push('  - Use `FieldValidity` for custom validation messages')
  lines.push(
    '- Always use the `errors` prop on `FormRoot` for server-side validation errors',
  )
  lines.push('')
  lines.push('**Best Practices**')
  lines.push(
    '- Always refer to this library as "Compose UI", not "Base UI" (Base UI is the underlying primitive library)',
  )
  lines.push(
    '- Copy examples directly from the documentation - they are complete and working',
  )
  lines.push(
    "- Use specific import paths: `import { Button } from '@lglab/compose-ui/button'` (not from '@lglab/compose-ui')",
  )
  lines.push('')

  for (const comp of components) {
    lines.push('---')
    lines.push('')
    lines.push(comp.markdown)
  }

  return lines.join('\n')
}

/**
 * Main generation function
 */
async function main() {
  console.log('🔄 Generating LLM-friendly documentation...\n')

  // Configuration - adjust these paths as needed
  const docsAppDir = process.cwd() // Should be run from apps/docs
  const outputDir = path.join(docsAppDir, 'public', 'llms')
  const baseUrl = 'https://compose-ui.dev'

  // Create output directory
  await fs.mkdir(outputDir, { recursive: true })

  // Find all component MDX files
  const mdxPattern = 'app/(docs)/components/*/page.mdx'
  const mdxFiles = await glob(mdxPattern, { cwd: docsAppDir })

  console.log(`📁 Found ${mdxFiles.length} component pages`)
  console.log(`📂 Docs app dir: ${docsAppDir}`)
  console.log('')

  const componentDocs: Array<{
    title: string
    component: string
    description: string
    markdown: string
  }> = []

  for (const mdxFile of mdxFiles) {
    const mdxPath = path.join(docsAppDir, mdxFile)
    const mdxContent = await fs.readFile(mdxPath, 'utf-8')

    const meta = parseComponentPage(mdxContent)

    if (!meta.title || !meta.description || !meta.component) {
      console.log(`⚠ Skipping ${mdxFile} - missing metadata`)
      continue
    }

    console.log(`📄 Processing: ${meta.title}`)

    // Extract examples - pass the docs app directory for path resolution
    const examples = await extractExamples(mdxContent, docsAppDir)

    const fullMeta: ComponentMeta = {
      title: meta.title,
      description: meta.description,
      component: meta.component,
      links: meta.links,
      examples,
    }

    const markdown = await generateMarkdown(fullMeta, docsAppDir)

    // Write individual component markdown
    const outputPath = path.join(outputDir, `${meta.component}.md`)
    await fs.writeFile(outputPath, markdown)
    console.log(`   → Generated: ${meta.component}.md (${examples.length} examples)`)
    console.log('')

    componentDocs.push({
      title: meta.title,
      component: meta.component,
      description: meta.description,
      markdown,
    })
  }

  // Generate llms.txt
  const llmsTxt = generateLlmsTxt(componentDocs, baseUrl)
  await fs.writeFile(path.join(docsAppDir, 'public', 'llms.txt'), llmsTxt)
  console.log('✅ Generated: public/llms.txt')

  // Generate llms-full.txt
  const llmsFullTxt = generateLlmsFullTxt(componentDocs)
  await fs.writeFile(path.join(docsAppDir, 'public', 'llms-full.txt'), llmsFullTxt)
  console.log('✅ Generated: public/llms-full.txt')

  // Summary
  const totalExamples = componentDocs.reduce(
    (sum, c) => sum + c.markdown.split('### ').length - 1,
    0,
  )
  console.log('')
  console.log(
    `📊 Summary: ${componentDocs.length} components, ~${totalExamples} examples`,
  )
  console.log('✅ Done!')
}

main().catch((err) => {
  console.error('❌ Error:', err)
  process.exit(1)
})
