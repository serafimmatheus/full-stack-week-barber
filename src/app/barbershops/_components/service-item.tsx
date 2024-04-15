import { Button } from '@/app/_components/ui/button'
import { Card, CardContent } from '@/app/_components/ui/card'
import { Service } from '@prisma/client'
import Image from 'next/image'
import { ButtonReserved } from './buttonReserved'

interface ServicesItemProps {
  service: Service
  isAuthenticated: boolean
}

export function ServicesItem({ service, isAuthenticated }: ServicesItemProps) {
  return (
    <Card className='p-0'>
      <CardContent className='p-4 flex gap-3 items-center'>
        <div className='relative min-w-[90px] min-h-[90px]'>
          <Image
            src={service.imageUrl}
            alt={service.name}
            sizes='100vw'
            fill
            style={{ objectFit: 'cover' }}
            className='rounded-lg'
          />
        </div>

        <div className='flex flex-col flex-1'>
          <h4 className='text-base font-bold'>{service.name}</h4>
          <p className='text-xs text-muted-foreground pt-2 pb-4'>
            {service.description}
          </p>

          <div className='flex items-center justify-between'>
            <span className='text-primary font-bold text-xs'>
              {Number(service.price).toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </span>

            <ButtonReserved isAuthenticated={isAuthenticated} />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
