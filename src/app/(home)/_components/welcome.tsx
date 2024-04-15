'use client'

import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'
import { useSession } from 'next-auth/react'

export function Welcome() {
  const { data } = useSession()
  return (
    <>
      <h2 className='text-xl font-bold'>
        Olá, {data?.user?.name ? data?.user?.name : 'Faça seu login!'}
      </h2>
      <span className='capitalize text-sm text-muted-foreground'>
        {format(new Date(), `EEE, dd 'de' MMMM`, {
          locale: ptBR,
        })}
      </span>
    </>
  )
}
