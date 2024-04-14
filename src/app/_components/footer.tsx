import { Card, CardContent } from './ui/card'

export function Footer() {
  return (
    <Card className='p-0 rounded-none'>
      <CardContent className='p-5'>
        <p className='text-sm text-muted-foreground'>
          © 2024 Copyright FSW Barber
        </p>
      </CardContent>
    </Card>
  )
}
