'use client';

import Link from 'next/link';
import { useState } from 'react';
import Hamburger from '../../molecules/navbar/Hamburger';
import NavbarLinks from '../../molecules/navbar/NavbarLinks';
import Image from 'next/image';
import SwitchLanguage from '../../molecules/navbar/SwitchLanguage';

// import { selectCurrentToken } from '@/auth/auth.slice';

const Navbar = () => {
  const [mobiledrawer, setMoblieDrawer] = useState(false);
  const toggleDrawer = () => {
    setMoblieDrawer((prevState) => !prevState);
    document.body.classList.toggle('overflowNone');
  };

  const removeOverFlow = () => {
    setMoblieDrawer(() => false);
    document.body.classList.remove('overflowNone');
  };

  return (
    <div className='navbar  border-b-[1px] border-solid border-[rgba(19, 18, 18, 0.10)] bg-background '>
      <div className='container px-4  mx-auto'>
        <div className='py-[6px]  flex justify-between items-center '>
          <div>
            <Image
              src='/assets/images/logosite.webp'
              width={86}
              height={94}
              alt='logo'
            />
          </div>

          <div
            className={`nav-contain w-full flex-basis-auto tablet:!pb-24  flex justify-between items-center content-center tablet:px-6 ${
              mobiledrawer ? 'active-nav' : ''
            }`}
          >
            {/* Navbar Link list */}
            <NavbarLinks removeOverFlow={removeOverFlow} />

            <hr className='bg-primaryLight h-[1px] w-full my-4 border-primaryLight hidden tablet:block' />

            {/* Account Link Mobile 📱 */}

            <div className='flex items-center xs:!justify-start tablet:justify-center gap-[10px] tablet:w-full'>
              {/* Switch Language  ⬇️*/}

              <SwitchLanguage />
            </div>
            <div className='w-full hidden xs:!justify-start  justify-center tablet:flex tablet:mt-4 '>
              <div className='tablet:w-[18rem]'>نص من عندي</div>
            </div>
          </div>

          <div className='flex gap-4 xs:gap-6'>
            <Hamburger
              mobiledrawer={mobiledrawer}
              toggleDrawer={toggleDrawer}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
