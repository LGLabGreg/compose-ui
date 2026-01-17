import {
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
  AccordionRoot,
  AccordionTrigger,
} from '@lglab/compose-ui/accordion'
import { Plus } from 'lucide-react'

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
            <AccordionTrigger className='group'>
              {item.title}
              <Plus className='size-5 shrink-0 text-muted-foreground transition-transform duration-200 group-data-panel-open:rotate-45 group-data-panel-open:scale-105' />
            </AccordionTrigger>
          </AccordionHeader>
          <AccordionPanel>
            <div className='pb-4'>
              <p>{item.content}</p>
            </div>
          </AccordionPanel>
        </AccordionItem>
      ))}
    </AccordionRoot>
  )
}
