import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <div className='p-3 px-5 flex iteams-center justify-between shadow-md'>
        <div className='flex gap-3 items-center'>
            <Image src={'/logo.svg'} alt="logo" width={30} height={30} />
            <h2 className='font-bold text-xl'>GenVid</h2>
        </div>

        <div className='flex gap-3 items-center'>
            <Button>Dashboard</Button>
            <UserButton/>
        </div>
    </div>
  )
}

export default Header