import Image from 'next/image'
import { Card, CardContent } from './ui/card'
import { Barbershop } from '@prisma/client'
import { Button } from './ui/button'

interface BarberShopItemProps {
  barberShop: Barbershop
}

export function BarberShopItem({ barberShop }: BarberShopItemProps) {
  return (
    <Card className='h-full'>
      <CardContent className='p-0 h-full flex flex-col'>
        <div className='flex flex-col items-center p-1 h-full justify-between'>
          <Image
            src={barberShop.imageUrl}
            alt={barberShop.name}
            sizes='100vw'
            width={0}
            height={0}
            className='w-full aspect-square object-cover rounded-lg'
          />

          {/* outra opção de imagem */}
          {/* <div className='w-full h-[157px] relative'>
            <Image
              alt={barberShop.name}
              src={barberShop.imageUrl}
              className='rounded-lg'
              style={{ objectFit: 'cover' }}
              fill
            />
          </div> */}

          <div className='flex flex-col mt-4'>
            <h3 className='text-sm font-bold'>{barberShop.name}</h3>
            <p className='text-sm text-muted-foreground'>
              {barberShop.address}
            </p>
            <Button variant='outline' className='mt-6'>
              Reservar
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
