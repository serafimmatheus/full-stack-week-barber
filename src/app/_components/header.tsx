import Image from 'next/image'
import { Button } from './ui/button'
import { Card, CardContent } from './ui/card'
import { MenuIcon } from 'lucide-react'

export function Header() {
  return (
    <Card>
      <CardContent className='flex justify-between items-center px-5 py-8'>
        <Image src='/FSW-BARBER.png' alt='FSW BARBER' width={122} height={22} />

        <Button size='icon' variant='outline'>
          <MenuIcon />
        </Button>
      </CardContent>
    </Card>
  )
}
