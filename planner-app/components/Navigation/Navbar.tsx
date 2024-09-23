import Link from 'next/link'
import React from 'react'
import { NavbarProps } from '@/types/props'


const Navbar = ({ savePlan } : NavbarProps) => {
  return (
    <main className='flex justify-between items-center w-full px-10 py-2'>
      <div className='flex items-center gap-2'>
        <button 
          className="text-white font-light py-2 px-4 rounded-md bg-green-500 hover:bg-green-600 transition ease-in duration-150"
          onClick={savePlan}>
          Save
        </button>
        <div> click course, then select semester to assign course to semester; double click course in semester column to delete it.</div>
      </div>
        <div className='flex gap-4'>
            <Link className='navbarElement' href='/'>Contact</Link>
            <Link className='navbarElement' href='/api/auth/signout?callbackUrl=/'>Logout</Link>
        </div>
    </main>
  )
}

export default Navbar