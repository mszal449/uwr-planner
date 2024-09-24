import Link from 'next/link'
import React from 'react'
import { NavbarProps } from '@/types/props'
import { HoverCard } from '@radix-ui/react-hover-card'
import { HoverCardContent, HoverCardTrigger } from '../ui/hover-card'


const Navbar = ({planName, savePlan } : NavbarProps) => {
  return (
    <main className='flex justify-between items-center w-full px-10 py-2'>
      <div className='flex items-center gap-2'>
        <div className='text-2xl'>{planName}</div>
        <button 
          className="text-white font-light py-2 px-4 rounded-md bg-green-500 hover:bg-green-600 transition ease-in duration-150"
          onClick={savePlan}>
          Save
        </button>
        <HoverCard openDelay={150} closeDelay={150}>
          <HoverCardTrigger className='text-red-500 text-4xl cursor-pointer px-3'>
          !
          </HoverCardTrigger>
          <HoverCardContent>
            <div className="p-1 bg-[#333333] text-red-500 text-xl rounded-md border-none outline-none">
            Plan won't be saved unless you click the save button.
        </div>
          </HoverCardContent>
        </HoverCard>
        <div className='flex flex-col gap-0'>
          <span>Click course, then select semester to assign course to semester.</span>
          <span>Double click course in semester column to delete it.</span>
        </div>

      </div>
        <div className='flex gap-4'>
            <Link className='navbarElement' href='/'>Choose plan</Link>
            <Link className='navbarElement' href='/api/auth/signout?callbackUrl=/'>Logout</Link>
        </div>
    </main>
  )
}

export default Navbar