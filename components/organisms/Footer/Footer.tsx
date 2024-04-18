import PhoneIcon from '@/components/atoms/icons/PhoneIcon';
import WhatssappIcon from '@/components/atoms/icons/Whatssapp';
import JoinUs from '@/components/molecules/Join us/JoinUs';
import { useTranslations } from 'next-intl';

const Footer = () => {
  const t = useTranslations('Footer');

  return (
    <>
      <div className='fixed-icons'>
        <a
          target='_blank'
          href='https://api.whatsapp.com/send?phone=+201559441925&amp;text=مرحباً'
          className='fixed-icon primary-color'
        >
          <WhatssappIcon />
        </a>
      </div>
      <div className='footer-section'>
        <div className='container my-[3rem] md:my-[5rem] flex flex-col md:flex-row gap-10'>
          <div className=' flex justify-center md:w-[50%]'>
            <JoinUs />
          </div>

          <div className=''>
            <h6 className='text-secondary text-[24px] font-bold mb-6'>
              {t('contactUs')}
            </h6>
            <ul className='flex flex-col gap-4'>
              <li className='text-white flex items-center justify-start gap-[12px]'>
                <PhoneIcon />
                {t('phoneNumber')}
              </li>
              <li className='text-white flex items-center justify-start gap-[12px]'>
                <PhoneIcon />
                {t('email')}
              </li>
              {/* <li className='text-white flex items-center justify-start gap-[12px]'>
                <PhoneIcon />
                {t('website')}
              </li> */}
            </ul>
          </div>

          {/* <div className='col-span-2 xs:col-span-5 sm:!col-span-3  lg:!col-span-2 '>
            <h6 className='text-secondary text-[24px] font-bold mb-6'>
              {t('pages')}
            </h6>
          </div> */}

          {/* <div className='col-span-2 xs:col-span-5 sm:!col-span-3  lg:!col-span-2 '>
            <h6 className='text-secondary text-[24px] font-bold mb-6'>
              {t('importantLinks')}
            </h6>
          </div> */}

        </div>

        <hr className='border-[#f9f7f796]' />
        <div className='container flex justify-center items-center py-3'>
          <h6 className='text-white'>
            {t('allRightsReserved')}
          </h6>
        </div>
      </div>
    </>
  );
};

export default Footer;
