'use client'

import { Button } from '@/app/_components/ui/button'
import { signIn } from 'next-auth/react'

interface ButtonReservedProps {
  isAuthenticated: boolean
}

export function ButtonReserved({ isAuthenticated }: ButtonReservedProps) {
  function handleBookingClick() {
    if (!isAuthenticated) {
      return signIn('google')
    }
  }
  return (
    <Button className='text-xs py-1 px-2 h-7' onClick={handleBookingClick}>
      Reservar
    </Button>
  )
}
