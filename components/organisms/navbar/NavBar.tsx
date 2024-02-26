'use client';

import Link from 'next/link';
import { useState } from 'react';
import Hamburger from '../../molecules/navbar/Hamburger';
import NavbarLinks from '../../molecules/navbar/NavbarLinks';
import Image from 'next/image';
import SwitchLanguage from '../../molecules/navbar/SwitchLanguage';
import FaceBookSub from '@/components/atoms/icons/facebookSub';
import TawtterSub from '@/components/atoms/icons/TawtterSub';
import InstaSub from '@/components/atoms/icons/InstaSub';
import YouTubeSub from '@/components/atoms/icons/youtubeSub';

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
    <>
      <div className=' lg:!hidden h-[64px] py-[12px] flex items-center bg-[#2260aa]'>
        <div className='flex gap-4 px-4 w-full justify-end '>
          <button type='button' className='text-white'>
            English
          </button>
          <span className='text-white text-[19px] font-bold'>|</span>
          <FaceBookSub className='scale-[0.85]' />
          <YouTubeSub className='scale-[0.85]' />
          <InstaSub className='scale-[0.85]' />
          <TawtterSub className='scale-[0.85]' />
        </div>
      </div>
      <div className='navbar  border-b-[1px] border-solid border-[rgba(19, 18, 18, 0.10)] bg-background '>
        <div className='container px-4  mx-auto'>
          <div className='py-[6px]  flex justify-between items-center '>
            <Link href='/'>
              <Image
                src='/assets/images/logosite.webp'
                width={86}
                height={94}
                alt='logo'
                style={{ transform: 'scale(1.2)' }}
                className='object-contain !max-h-[70px] md:!max-h-[94px]'
              />
            </Link>

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
                {/* <div className='tablet:w-[18rem]'>نص من عندي</div> */}
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
      </div>{' '}
    </>
  );
};

export default Navbar;
