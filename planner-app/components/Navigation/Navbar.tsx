import Link from 'next/link';
import React from 'react';
import { NavbarProps } from '@/types/props';
import { HoverCard } from '@radix-ui/react-hover-card';
import { HoverCardContent, HoverCardTrigger } from '../ui/hover-card';

const Navbar = ({ planName, degree, savePlan }: NavbarProps) => {

  return (
    <main className="flex justify-between items-center w-full px-5 py-2">
      <div className="flex items-center">
        {/* Save button */}
        <button
          className="text-white font-light py-2 px-4 rounded-lg bg-green-500 hover:bg-green-600 transition ease-in duration-150"
          onClick={savePlan}>
          Zapisz
        </button>

        {/* Plan Name and Degree */}
        <div className="ml-3 text-xl">{planName} - {degree === 'engineer' ? 'Inżynier' : 'Licencjat'}</div>
      </div>

      {/* HoverCard and Links */}
      <div className="flex gap-4 items-center">
        <HoverCard openDelay={150} closeDelay={150}>
          <HoverCardTrigger className="navbarElement cursor-pointer">Instrukcja</HoverCardTrigger>
          <HoverCardContent>
          <div className="p-2 bg-[#333333] text-xl rounded-md outline-none border-red-500 border-2">
            <div className="text-red-500">Plan nie zostanie zapisany, dopóki nie klikniesz przycisku zapisz.</div>
            <div className="text-white">Kliknij kurs, a następnie wybierz semestr, aby przypisać kurs do semestru.</div>
            <div className="text-white">Kliknij dwukrotnie kurs w kolumnie semestru, aby go usunąć.</div>
          </div>
          </HoverCardContent>
        </HoverCard>
        <Link className="navbarElement" href="/">Wybierz Plan</Link>
        <Link className="navbarElement" href="/api/auth/signout?callbackUrl=/">Wyloguj</Link>
      </div>
    </main>
  );
};

export default Navbar;
