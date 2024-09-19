import Link from 'next/link'
import React from 'react'
import { getServerSession } from 'next-auth'
import options from '@/app/api/auth/[...nextauth]/options'


const Navbar = async () => {
  const session = await getServerSession(options)


  return (
    <div className='flex justify-between items-center w-full px-10 py-4'>
        <div>Login system</div>
        <div className='flex gap-4'>
            <Link href='/'>Home</Link>
            <Link href='/'>Home</Link>
            <Link href='/'>Home</Link>
            <Link href='/'>Home</Link>
            <Link href='/'>Home</Link>
            {session ? 
              (<Link href='/api/auth/signout?callbackUrl=/'>Logout</Link>)
               : 
              (<Link href='/api/auth/signin'>Login</Link>)}
        </div>
    </div>
  )
}

export default Navbar