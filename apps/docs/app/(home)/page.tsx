import { Hero } from '@/components/hero'
import MainNav from '@/components/main-nav'

const features = [
  {
    title: 'Composition First',
    description:
      'Composable components built on Base UI primitives. Use them whole or extend them with your own styles.',
  },
  {
    title: 'Accessible by Default',
    description:
      "Base UI's accessibility foundation handles ARIA, keyboard navigation, and focus management automatically.",
  },
  {
    title: 'AI Ready',
    description:
      'LLM docs at /llms.txt give your AI assistant instant knowledge of every component and API.',
  },
]

export default function Home() {
  return (
    <div className='flex flex-col'>
      <MainNav />
      <Hero />
      <div className='container max-w-5xl mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-10'>
          {features.map((feature) => (
            <div key={feature.title}>
              <h2 className='text-2xl font-semibold mb-3'>{feature.title}</h2>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
