import { Search } from '../_components/search'
import { BukingItem } from '../_components/buking-item'
import { db } from '../_lib/prisma'
import { BarberShopItem } from '../_components/barberShop-item'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '../_components/ui/carousel'
import { Header } from '../_components/header'
import { Welcome } from './_components/welcome'

export default async function Home() {
  const barberShop = await db.barbershop.findMany()

  return (
    <>
      <Header />

      <main className='flex min-h-screen flex-col py-8'>
        <div className='px-5'>
          <Welcome />
        </div>

        <div className='pt-6 px-5'>
          <Search />
        </div>

        <div className='pt-6 px-5'>
          <h4 className='pb-3 uppercase text-sm text-muted-foreground font-bold'>
            Agendamentos
          </h4>
          <BukingItem />
        </div>

        <div className='pt-6 pl-5'>
          <h4 className='pb-3 uppercase text-sm text-muted-foreground font-bold'>
            Recomendados
          </h4>

          <Carousel
            opts={{
              align: 'start',
            }}
            className='w-full max-w-sm'
          >
            <CarouselContent>
              {barberShop.map((barberShop) => (
                <CarouselItem
                  key={barberShop.id}
                  className='basis-2/3 lg:basis-1/3'
                >
                  <BarberShopItem key={barberShop.id} barberShop={barberShop} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        <div className='pt-6 pl-5'>
          <h4 className='pb-3 uppercase text-sm text-muted-foreground font-bold'>
            Populares
          </h4>

          <Carousel
            opts={{
              align: 'start',
            }}
            className='w-full max-w-sm'
          >
            <CarouselContent>
              {barberShop.map((barberShop) => (
                <CarouselItem
                  key={barberShop.id}
                  className='basis-2/3 lg:basis-1/3'
                >
                  <BarberShopItem key={barberShop.id} barberShop={barberShop} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </main>
    </>
  )
}
