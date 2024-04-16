'use server'

import { db } from '@/app/_lib/prisma'

interface SaveBookingParams {
  serviceId: string
  barberShopId: string
  userId: string
  date: Date
}

export async function sabeBooking({
  serviceId,
  barberShopId,
  userId,
  date,
}: SaveBookingParams) {
  await db.booking.create({
    data: {
      serviceId,
      userId,
      barbershopId: barberShopId,
      date,
    },
  })
}
