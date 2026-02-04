'use client'

import { GroupAddon, GroupRoot } from '@lglab/compose-ui/group'
import { Input } from '@lglab/compose-ui/input'
import { MailIcon, SearchIcon } from 'lucide-react'

export default function InputGroupExample() {
  return (
    <div className='space-y-4'>
      <div>
        <label className='text-sm font-medium mb-2 block'>Search Input</label>
        <GroupRoot>
          <GroupAddon size='icon'>
            <SearchIcon />
          </GroupAddon>
          <Input placeholder='Search...' />
        </GroupRoot>
      </div>

      <div>
        <label className='text-sm font-medium mb-2 block'>Email Input</label>
        <GroupRoot>
          <GroupAddon size='icon'>
            <MailIcon />
          </GroupAddon>
          <Input type='email' placeholder='you@example.com' />
        </GroupRoot>
      </div>

      <div>
        <label className='text-sm font-medium mb-2 block'>Username Input</label>
        <GroupRoot>
          <GroupAddon size='icon'>@</GroupAddon>
          <Input placeholder='username' />
        </GroupRoot>
      </div>

      <div>
        <label className='text-sm font-medium mb-2 block'>URL Input</label>
        <GroupRoot>
          <GroupAddon>https://</GroupAddon>
          <Input placeholder='example.com' />
        </GroupRoot>
      </div>

      <div>
        <label className='text-sm font-medium mb-2 block'>Currency Input</label>
        <GroupRoot>
          <GroupAddon size='icon'>$</GroupAddon>
          <Input type='number' placeholder='100' className='w-32' />
          <GroupAddon>USD</GroupAddon>
        </GroupRoot>
      </div>
    </div>
  )
}
