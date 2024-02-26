'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NavItems } from '../../../src/utils/navbar.data';

interface NavbarLinksProps {
  removeOverFlow: () => void;
}

const NavbarLinks: React.FC<NavbarLinksProps> = ({ removeOverFlow }) => {
  const pathname = usePathname();

  const activeLink = pathname;

  return (
    <ul className='flex  gap-6 xl:!gap-10 tablet:!gap-4 justify-center tablet:flex-col w-full'>
      {NavItems.map((item, index) => (
        <li
          key={index}
          onClick={removeOverFlow}
          className={`cursor-pointer 
          ${
            activeLink == item.path
              ? 'text-primary font-semibold'
              : 'text-textGray'
          }`}
        >
          <Link href={item.path} className='! '>
            {item.item}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavbarLinks;
