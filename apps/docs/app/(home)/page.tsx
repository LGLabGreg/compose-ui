import { Hero } from '@/components/hero'
import MainNav from '@/components/main-nav'

export default function Home() {
  return (
    <div className='flex flex-col'>
      <MainNav />
      <Hero />
    </div>
  )
}
