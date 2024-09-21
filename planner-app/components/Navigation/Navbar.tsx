import Link from 'next/link'
import React from 'react'
import { NavbarProps } from '@/types/props'


const Navbar = ({ userName } : NavbarProps) => {
  return (
    <main className='flex justify-between items-center w-full px-10 py-4'>
        <div className='font-bold text-2xl'>{userName}</div>
        <div className='flex gap-4 font-bold text-xl'>
            <Link className='navbarElement' href='/'>Contact</Link>
            <Link className='navbarElement' href='/api/auth/signout?callbackUrl=/'>Logout</Link>
        </div>
    </main>
  )
}

export default Navbar