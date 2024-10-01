import Link from 'next/link';
import React from 'react';
import { NavbarProps } from '@/types/props';
import { HoverCard } from '@radix-ui/react-hover-card';
import { HoverCardContent, HoverCardTrigger } from '../ui/hover-card';
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger, DialogClose, DialogOverlay } from '@radix-ui/react-dialog';
import { DialogFooter, DialogHeader } from '../ui/dialog';

const Navbar = ({ planName, degree, savePlan }: NavbarProps) => {

  return (
    <main className="flex justify-between items-center w-full px-5 py-2">
      <div className="flex items-center">
        {/* Save button */}
        <button
          className="text-white font-light py-2 px-4 rounded-lg bg-green-500 hover:bg-green-600 transition ease-in duration-150"
          onClick={savePlan}>
          Save
        </button>

        {/* Plan Name and Degree */}
        <div className="ml-3 text-2xl">{planName} - {degree}</div>
        <div className="flex flex-col gap-0"></div>
      </div>

      {/* HoverCard and Links */}
      <div className="flex gap-4 items-center">
        <HoverCard openDelay={150} closeDelay={150}>
          <HoverCardTrigger className="text-red-500 text-3xl cursor-pointer px-3">?</HoverCardTrigger>
          <HoverCardContent>
            <div className="p-2 bg-[#333333] text-xl rounded-md outline-none border-purple-400 border-2">
              <div className="text-red-500">Plan won't be saved unless you click the save button.</div>
              <div className="text-white">Click course, then select semester to assign course to semester.</div>
              <div className="text-white">Double click course in semester column to delete it.</div>
            </div>
          </HoverCardContent>
        </HoverCard>
        <Link className="navbarElement" href="/">Choose plan</Link>
        <Link className="navbarElement" href="/api/auth/signout?callbackUrl=/">Logout</Link>
      </div>
    </main>
  );
};

export default Navbar;
