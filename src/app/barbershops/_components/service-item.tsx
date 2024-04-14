import { Button } from '@/app/_components/ui/button'
import { Card, CardContent } from '@/app/_components/ui/card'
import { Service } from '@prisma/client'
import Image from 'next/image'

interface ServicesItemProps {
  service: Service
}

export function ServicesItem({ service }: ServicesItemProps) {
  console.log(service.imageUrl)
  return (
    <Card className='p-0'>
      <CardContent className='p-4 flex gap-3'>
        <div className='relative min-w-[90px] min-h-[90px] '>
          <Image
            src={service.imageUrl}
            alt={service.name}
            sizes='100vw'
            fill
            style={{ objectFit: 'cover' }}
            className='rounded-lg'
          />
        </div>

        <div>
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
            <Button className='text-xs py-1 px-2 h-7'>Reservar</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
