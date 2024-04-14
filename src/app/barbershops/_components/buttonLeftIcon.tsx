'use client'

import { Button } from '@/app/_components/ui/button'
import { ChevronLeftIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'

export function ButtonLeftIcon() {
  const router = useRouter()

  const handleBack = () => {
    return router.back()
  }

  return (
    <Button
      size='icon'
      variant='outline'
      className='absolute top-8 left-5 z-20 size-12'
      onClick={handleBack}
    >
      <ChevronLeftIcon />
    </Button>
  )
}
