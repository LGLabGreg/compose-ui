export type SectionType =
  | 'overview'
  | 'installation'
  | 'import'
  | 'examples'
  | 'resources'

export interface ParsedSection {
  type: SectionType
  title: string
  content: string
}

const SECTION_MAPPINGS: Record<string, SectionType> = {
  installation: 'installation',
  import: 'import',
  examples: 'examples',
  resources: 'resources',
}

interface RawSection {
  heading: string
  content: string
}

/**
 * Parse markdown content into sections based on ## headings.
 */
export function parseMarkdownSections(markdown: string): ParsedSection[] {
  const lines = markdown.split('\n')
  const sections: ParsedSection[] = []

  // Find title and description (overview section)
  let title = ''
  const overviewLines: string[] = []
  let currentSection: RawSection | null = null
  const rawSections: RawSection[] = []

  for (const line of lines) {
    // Main title
    if (line.startsWith('# ') && !title) {
      title = line.slice(2).trim()
      continue
    }

    // Section heading
    if (line.startsWith('## ')) {
      // Save previous section
      if (currentSection) {
        rawSections.push(currentSection)
      } else if (overviewLines.length > 0) {
        // Save overview content collected before first ## heading
        sections.push({
          type: 'overview',
          title: title || 'Overview',
          content: `# ${title}\n\n${overviewLines.join('\n').trim()}`,
        })
      }

      currentSection = {
        heading: line.slice(3).trim(),
        content: '',
      }
      continue
    }

    // Content lines
    if (currentSection) {
      currentSection.content += line + '\n'
    } else if (title) {
      // Content before first ## heading is part of overview
      overviewLines.push(line)
    }
  }

  // Save last section
  if (currentSection) {
    rawSections.push(currentSection)
  } else if (overviewLines.length > 0 && sections.length === 0) {
    // No sections found, treat everything as overview
    sections.push({
      type: 'overview',
      title: title || 'Overview',
      content: `# ${title}\n\n${overviewLines.join('\n').trim()}`,
    })
  }

  // Convert raw sections to typed sections
  for (const raw of rawSections) {
    const headingLower = raw.heading.toLowerCase()
    const sectionType = SECTION_MAPPINGS[headingLower] || 'overview'

    sections.push({
      type: sectionType,
      title: raw.heading,
      content: `## ${raw.heading}\n${raw.content.trim()}`,
    })
  }

  return sections
}

/**
 * Extract specific sections from markdown content.
 * If no sections are specified, returns the full content.
 */
export function extractSections(markdown: string, sectionTypes?: SectionType[]): string {
  if (!sectionTypes || sectionTypes.length === 0) {
    return markdown
  }

  const parsed = parseMarkdownSections(markdown)
  const filtered = parsed.filter((s) => sectionTypes.includes(s.type))

  if (filtered.length === 0) {
    return ''
  }

  // If overview is requested, include the title
  const includesOverview = sectionTypes.includes('overview')
  const overviewSection = filtered.find((s) => s.type === 'overview')

  if (includesOverview && overviewSection) {
    const otherSections = filtered.filter((s) => s.type !== 'overview')
    return [overviewSection.content, ...otherSections.map((s) => s.content)].join('\n\n')
  }

  return filtered.map((s) => s.content).join('\n\n')
}
