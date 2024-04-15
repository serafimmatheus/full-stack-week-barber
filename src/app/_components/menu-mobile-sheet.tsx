'use client'

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/app/_components/ui/sheet'
import { Button } from './ui/button'
import {
  CalendarDaysIcon,
  HomeIcon,
  LogInIcon,
  LogOutIcon,
  MenuIcon,
  UserIcon,
} from 'lucide-react'
import { signIn, signOut, useSession } from 'next-auth/react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import Link from 'next/link'
import { cn } from '../_lib/utils'

interface MenuMobileSheetProps {
  className?: string
}

export function MenuMobileSheet({ className }: MenuMobileSheetProps) {
  const { data } = useSession()

  const handleLogin = async () => {
    await signIn('google')
  }

  const handleLogout = async () => {
    await signOut()
  }
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size='icon' variant='outline' className={cn('', className)}>
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent className='p-0'>
        <SheetHeader className='border-b border-border p-5'>
          <SheetTitle className='text-left'>Menu</SheetTitle>
        </SheetHeader>

        <div className='p-5'>
          <SheetDescription>
            {data?.user ? (
              <div className='flex items-center gap-3'>
                <Avatar>
                  <AvatarImage src={data.user.image ?? ''} />

                  <AvatarFallback>{data.user.name?.charAt(0)}</AvatarFallback>
                </Avatar>

                <h2 className='text-foreground font-bold flex-1'>
                  {data.user.name}
                </h2>

                <Button variant='outline' size='icon' onClick={handleLogout}>
                  <LogOutIcon size={18} />
                </Button>
              </div>
            ) : (
              <div className='w-full flex flex-col gap-3'>
                <div className='flex items-center gap-3'>
                  <Avatar>
                    <AvatarFallback>
                      <UserIcon />
                    </AvatarFallback>
                  </Avatar>

                  <h2 className='text-foreground font-bold'>
                    Olá, Faça seu login!
                  </h2>
                </div>

                <Button
                  variant='outline'
                  className='flex items-center gap-2 w-full justify-start'
                  onClick={handleLogin}
                >
                  <LogInIcon size={18} />
                  Fazer login
                </Button>
              </div>
            )}

            <div className='pt-8'>
              <ul className='flex flex-col gap-3'>
                <li className='border border-border p-2 rounded-lg text-foreground hover:bg-secondary cursor-pointer'>
                  <Link href='/' className='flex items-center gap-2'>
                    <HomeIcon size={18} />
                    Inicio
                  </Link>
                </li>

                <li className='border border-border p-2 rounded-lg text-foreground hover:bg-secondary cursor-pointer'>
                  <Link href='/bukings' className='flex items-center gap-2'>
                    <CalendarDaysIcon size={18} />
                    Agendamentos
                  </Link>
                </li>
              </ul>
            </div>
          </SheetDescription>
        </div>
      </SheetContent>
    </Sheet>
  )
}
