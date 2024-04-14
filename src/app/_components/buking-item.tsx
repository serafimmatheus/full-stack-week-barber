import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Badge } from './ui/badge'
import { Card, CardContent } from './ui/card'

export function BukingItem() {
  return (
    <Card>
      <CardContent className='flex justify-between p-0'>
        <div className='flex flex-col gap-3 py-5 pl-5'>
          <Badge className='bg-[#221c3d] text-primary hover:bg-[#221c3d] w-fit'>
            Confirmado
          </Badge>

          <h2 className='font-bold'>Corte de cabelo</h2>

          <div className='flex items-center gap-2'>
            <Avatar className='size-6'>
              <AvatarImage
                src='https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png'
                alt='avatar'
              />
              <AvatarFallback>A</AvatarFallback>
            </Avatar>

            <h3 className='text-sm text-muted-foreground'>Vintage Barber</h3>
          </div>
        </div>

        <div className='flex flex-col items-center justify-center border-l border-secondary py-5 px-5 gap-1'>
          <p className='text-sm'>Fevereiro</p>
          <p className='text-xl font-bold'>06</p>
          <p className='text-sm'>09:45</p>
        </div>
      </CardContent>
    </Card>
  )
}
