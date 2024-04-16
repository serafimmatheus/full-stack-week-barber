'use client'

import {
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from '@/app/_components/ui/sheet'
import { Calendar } from './ui/calendar'
import { useMemo, useState } from 'react'
import { ptBR } from 'date-fns/locale/pt-BR'
import { generateDayTimeList } from '../_helpers/hours'
import { Badge } from './ui/badge'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/app/_components/ui/carousel'
import { Card, CardContent } from './ui/card'
import { Button } from './ui/button'
import { Barbershop, Service } from '@prisma/client'
import { format, set, setHours } from 'date-fns'
import { sabeBooking } from '../barbershops/[id]/_actions/save-booking'
import { useSession } from 'next-auth/react'
import { Loader2Icon } from 'lucide-react'

interface ReservedSheetProps {
  service: Service
  barberShop: Barbershop
}

export function ReservedSheet({ service, barberShop }: ReservedSheetProps) {
  const { data } = useSession()
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [hour, setHour] = useState<string | undefined>()
  const [submitIsLoading, setSubmitIsLoading] = useState(false)

  const handleDateClick = (date: Date | undefined) => {
    setDate(date)
    setHour(undefined)
  }

  const handleHourClick = (time: string) => {
    setHour(time)
  }

  const timeList = useMemo(() => {
    if (!date) {
      return []
    }

    return generateDayTimeList(date)
  }, [date])

  async function handleBookingSubmit() {
    setSubmitIsLoading(true)
    try {
      if (!hour || !date || !data?.user) {
        return
      }

      const dateHour = Number(hour.split(':')[0])
      const dateMinute = Number(hour.split(':')[1])

      const bookingDate = setHours(setHours(date, dateHour), dateMinute)

      await sabeBooking({
        date: bookingDate,
        barberShopId: barberShop.id,
        serviceId: service.id,
        userId: (data.user as any).id,
      })
    } catch (error) {
      console.error(error)
    } finally {
      setSubmitIsLoading(false)
    }
  }

  return (
    <SheetContent className='w-full p-0'>
      <SheetHeader className='p-5 border-b border-border'>
        <SheetTitle className='text-left'>Fazer reserva</SheetTitle>
      </SheetHeader>

      <SheetDescription>
        <Calendar
          mode='single'
          selected={date}
          onSelect={handleDateClick}
          fromDate={new Date()}
          className='p-5'
          locale={ptBR}
          styles={{
            head_cell: {
              width: '100%',
              textTransform: 'capitalize',
            },
            cell: {
              width: '100%',
            },
            button: {
              width: '100%',
            },
            nav_button_next: {
              width: '32px',
              height: '32px',
            },
            nav_button_previous: {
              width: '32px',
              height: '32px',
            },
            caption: {
              textTransform: 'capitalize',
            },
          }}
        />

        <div className='mt-5 pl-5'>
          {date && (
            <Carousel
              opts={{
                align: 'start',
              }}
              className='w-full border-b border-t py-8 border-border'
            >
              <CarouselContent>
                {timeList.map((time) => (
                  <CarouselItem key={time} className='basis-1/4'>
                    <Badge
                      onClick={() => handleHourClick(time)}
                      className={`py-2 px-4 w-20 flex items-center justify-center rounded-full ${
                        hour === time ? 'bg-primary' : 'bg-secondary'
                      } `}
                    >
                      {time}
                    </Badge>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          )}
        </div>

        <div className='px-5 pt-6'>
          <Card>
            <CardContent className='p-5'>
              <ul className='flex flex-col gap-4'>
                <li className='flex items-center justify-between'>
                  <p>{service.name}</p>
                  <p className='text-primary font-bold'>
                    {Number(service.price).toLocaleString('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    })}
                  </p>
                </li>

                {date && (
                  <li className='flex items-center justify-between'>
                    <p className='text-muted-foreground'>Data</p>
                    <p className=''>
                      {format(date, `dd 'de' MMMM`, {
                        locale: ptBR,
                      })}
                    </p>
                  </li>
                )}

                {hour && (
                  <li className='flex items-center justify-between'>
                    <p className='text-muted-foreground'>Horário</p>
                    <p>{hour}</p>
                  </li>
                )}

                <li className='flex items-center justify-between'>
                  <p className='text-muted-foreground'>Barbearia</p>
                  <p>{barberShop.name}</p>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <SheetFooter className='px-5 mt-8 w-full'>
          <Button
            onClick={handleBookingSubmit}
            disabled={!hour || !date || submitIsLoading}
            className='w-full'
          >
            {submitIsLoading ? (
              <Loader2Icon size={18} className='mr-2 animate-spin' />
            ) : (
              'Confirmar reserva'
            )}
          </Button>
        </SheetFooter>
      </SheetDescription>
    </SheetContent>
  )
}
