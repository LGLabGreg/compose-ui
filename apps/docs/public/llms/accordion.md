# Accordion

A set of collapsible panels with headings.

## Installation

```bash
npm install @lglab/compose-ui
```

## Import

```tsx
import { AccordionRoot, AccordionItem, AccordionHeader, AccordionTrigger, AccordionPanel } from '@lglab/compose-ui'
```

## Examples

### Basic

```tsx
import {
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
  AccordionRoot,
  AccordionTrigger,
} from '@lglab/compose-ui'

const items = [
  {
    title: 'What is Compose UI?',
    content:
      'Compose UI is a collection of accessible React components built with Base UI and Tailwind CSS, ready to use in your design systems and web apps.',
  },
  {
    title: 'How do I get started?',
    content:
      'Head to the "Quick start" guide in the docs. Install the package and start using components right away.',
  },
  {
    title: 'Can I use it for my project?',
    content: 'Of course! Compose UI is free and open source.',
  },
]

export default function BasicExample() {
  return (
    <AccordionRoot>
      {items.map((item) => (
        <AccordionItem key={item.title} value={item.title}>
          <AccordionHeader>
            <AccordionTrigger>{item.title}</AccordionTrigger>
          </AccordionHeader>
          <AccordionPanel>
            <div className='pb-3'>
              <p>{item.content}</p>
            </div>
          </AccordionPanel>
        </AccordionItem>
      ))}
    </AccordionRoot>
  )
}
```

### Multiple

```tsx
import {
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
  AccordionRoot,
  AccordionTrigger,
} from '@lglab/compose-ui'

const items = [
  {
    title: 'Installation',
    content:
      'Install Compose UI using your preferred package manager: npm, pnpm, yarn, or bun.',
  },
  {
    title: 'Styling',
    content:
      'Import the default styles and register Compose UI as a Tailwind source in your main CSS file.',
  },
  {
    title: 'Usage',
    content:
      'Import components directly from the package and start using them in your React application.',
  },
  {
    title: 'Customization',
    content:
      'Override the default theme by setting CSS variables. All components accept className props for additional styling.',
  },
]

export default function MultipleExample() {
  return (
    <AccordionRoot multiple>
      {items.map((item) => (
        <AccordionItem key={item.title} value={item.title}>
          <AccordionHeader>
            <AccordionTrigger>{item.title}</AccordionTrigger>
          </AccordionHeader>
          <AccordionPanel>
            <div className='pb-3'>
              <p>{item.content}</p>
            </div>
          </AccordionPanel>
        </AccordionItem>
      ))}
    </AccordionRoot>
  )
}
```

## Resources

- [Base UI Accordion Documentation](https://base-ui.com/react/components/accordion)
- [API Reference](https://base-ui.com/react/components/accordion#api-reference)
