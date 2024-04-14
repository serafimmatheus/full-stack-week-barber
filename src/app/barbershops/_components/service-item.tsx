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
      <CardContent className='p-4 flex'>
        <div className='relative w-[140px] aspect-square'>
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
          <h4 className='text-xl font-bold'>{service.name}</h4>
          <p className='text-sm text-muted-foreground pt-2 pb-4'>
            {service.description}
          </p>

          <div className='flex items-center justify-between'>
            <span className='text-primary font-bold'>
              {Number(service.price).toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </span>
            <Button>Reservar</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
