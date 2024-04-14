import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'
import { Search } from '../_components/search'
import { BukingItem } from '../_components/buking-item'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col px-5 py-8'>
      <h2 className='text-xl font-bold'>Olá, Matheus</h2>
      <span className='capitalize text-sm text-muted-foreground'>
        {format(new Date(), `EEE, dd 'de' MMMM`, {
          locale: ptBR,
        })}
      </span>

      <div className='pt-6'>
        <Search />
      </div>

      <div className='pt-6'>
        <h4 className='pb-3 uppercase text-sm text-muted-foreground font-bold'>
          Agendamentos
        </h4>
        <BukingItem />
      </div>
    </main>
  )
}
