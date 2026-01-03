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
