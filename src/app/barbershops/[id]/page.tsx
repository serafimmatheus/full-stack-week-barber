import { db } from '@/app/_lib/prisma'
import { MapPinIcon } from 'lucide-react'
import Image from 'next/image'
import { ButtonLeftIcon } from '../_components/buttonLeftIcon'
import { Separator } from '@/app/_components/ui/separator'
import { ServicesItem } from '../_components/service-item'
import { MenuMobileSheet } from '@/app/_components/menu-mobile-sheet'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'

interface BarberShopPageProps {
  params: { id?: string }
}

export default async function BarberShopPage({ params }: BarberShopPageProps) {
  const session = await getServerSession(authOptions)
  if (!params.id) {
    return <p>BarberShop não encontrado</p>
  }

  const barberShop = await db.barbershop.findUnique({
    where: {
      id: params.id,
    },

    include: {
      services: true,
    },
  })

  if (!barberShop) {
    return <p>BarberShop não encontrado</p>
  }

  console.log(barberShop)

  return (
    <main>
      <div className='relative w-full h-[250px]'>
        <ButtonLeftIcon />

        <MenuMobileSheet className='absolute top-8 right-5 z-20 size-12' />

        <Image
          src={barberShop.imageUrl}
          alt={barberShop.name}
          sizes='100vw'
          fill
          style={{ objectFit: 'cover' }}
          className='opacity-60'
        />
      </div>

      <div className='px-5 pt-8 pb-8'>
        <h1 className='text-xl font-bold'>{barberShop.name}</h1>
        <div className='flex item-center gap-2'>
          <MapPinIcon className='text-primary' size={18} />
          <p className='text-muted-foreground text-sm'>{barberShop.address}</p>
        </div>
      </div>

      <Separator />

      <div className='px-5 pt-8 flex flex-col gap-5 pb-12'>
        {barberShop.services.map((service) => (
          <ServicesItem
            key={service.id}
            service={service}
            isAuthenticated={!!session?.user}
            barberShop={barberShop}
          />
        ))}
      </div>
    </main>
  )
}
