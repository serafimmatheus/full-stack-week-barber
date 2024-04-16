'use client'

import { ReservedSheet } from '@/app/_components/reserved-sheet'
import { Button } from '@/app/_components/ui/button'
import { Sheet, SheetTrigger } from '@/app/_components/ui/sheet'
import { Barbershop, Service } from '@prisma/client'
import { signIn } from 'next-auth/react'

interface ButtonReservedProps {
  isAuthenticated: boolean
  barberShop: Barbershop
  service: Service
}

export function ButtonReserved({
  isAuthenticated,
  service,
  barberShop,
}: ButtonReservedProps) {
  function handleBookingClick() {
    if (!isAuthenticated) {
      return signIn('google')
    }
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className='text-xs py-1 px-2 h-7' onClick={handleBookingClick}>
          Reservar
        </Button>
      </SheetTrigger>
      <ReservedSheet service={service} barberShop={barberShop} />
    </Sheet>
  )
}
