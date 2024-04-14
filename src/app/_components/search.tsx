'use client'

import { SearchIcon } from 'lucide-react'
import { Button } from './ui/button'
import { Input } from './ui/input'

export function Search() {
  return (
    <div className='flex items-center gap-3'>
      <Input placeholder='Procure por uma barbearia...' />
      <Button size='icon' className='aspect-square'>
        <SearchIcon size={18} />
      </Button>
    </div>
  )
}
