import Image from 'next/image'
import { Card, CardContent } from './ui/card'
import { MenuMobileSheet } from './menu-mobile-sheet'

export function Header() {
  return (
    <Card className='border-b rounded-none'>
      <CardContent className='flex justify-between items-center px-5 py-8'>
        <Image src='/Logo.png' alt='FSW BARBER' width={122} height={22} />

        <MenuMobileSheet />
      </CardContent>
    </Card>
  )
}
