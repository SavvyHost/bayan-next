'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NavItems } from '../../../src/utils/navbar.data';
import { useLocale, useTranslations } from 'next-intl';

interface NavbarLinksProps {
  removeOverFlow: () => void;
}

const NavbarLinks: React.FC<NavbarLinksProps> = ({ removeOverFlow }) => {
  const t = useTranslations();

  const pathname = usePathname();
  const activeLink = pathname;
  const localeActive = useLocale();

  const isRTL = localeActive == "ar";
  console.log("🚀 ~ activeLink:", activeLink)

  return (
    <ul className='flex  gap-6 xl:!gap-10 tablet:!gap-4 justify-center tablet:flex-col w-full'>
      {NavItems.map((item, index) => (
        <li
          key={index}
          onClick={removeOverFlow}
          className={`cursor-pointer 
          ${
            activeLink == `${isRTL ? "/ar" : "/en"}${item.path}`
              ? 'text-primary font-semibold'
              : 'text-textGray'
          }`}
        >
          <Link href={item.path} className='! '>
            {t(item.item)}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavbarLinks;
