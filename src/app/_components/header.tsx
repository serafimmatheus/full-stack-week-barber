'use client'

import Image from 'next/image'
import { Button } from './ui/button'
import { Card, CardContent } from './ui/card'
import { MenuIcon } from 'lucide-react'
import { signIn, signOut, useSession } from 'next-auth/react'

export function Header() {
  const { data } = useSession()

  const handleLogin = async () => {
    await signIn()
  }

  const handleLogout = async () => {
    await signOut()
  }

  return (
    <Card className='border-b rounded-none'>
      <CardContent className='flex justify-between items-center px-5 py-8'>
        <Image src='/Logo.png' alt='FSW BARBER' width={122} height={22} />

        <Button size='icon' variant='outline'>
          <MenuIcon />
        </Button>
      </CardContent>
    </Card>
  )
}
