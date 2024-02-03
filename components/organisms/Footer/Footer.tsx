import PhoneIcon from '@/components/atoms/icons/PhoneIcon';
import JoinUs from '@/components/molecules/Join us/JoinUs';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <div className='footer-section min-h-[450px]'>
      <div className='container my-[3rem] md:my-[5rem] flex flex-col xs:grid xs:grid-cols-10 sm:!grid-cols-9 lg:!grid-cols-10 gap-10 xl:gap-20'>
        <div className='col-span-3 xs:col-span-10 sm:!col-span-9 lg:!col-span-4 flex justify-center'>
          <JoinUs />
        </div>

        <div className=' col-span-2 xs:col-span-5 sm:!col-span-3  lg:!col-span-2 '>
          <h6 className='text-secondary text-[24px] font-[TajawalMedium,sans-serif] font-bold mb-6'>
            تواصل معنا
          </h6>
          <ul className='flex flex-col gap-4'>
            <li className='font-[TajawalMedium,sans-serif] text-white flex items-center justify-start gap-[12px]'>
              <PhoneIcon />
              0102347890
            </li>
            <li className='font-[TajawalMedium,sans-serif] text-white flex items-center justify-start gap-[12px]'>
              <PhoneIcon />
              البريد الإلكتروني
            </li>
            <li className='font-[TajawalMedium,sans-serif] text-white flex items-center justify-start gap-[12px]'>
              <PhoneIcon />
              الموقع
            </li>
          </ul>
        </div>

        <div className='col-span-2 xs:col-span-5 sm:!col-span-3  lg:!col-span-2 '>
          <h6 className='text-secondary text-[24px] font-[TajawalMedium,sans-serif] font-bold mb-6'>
            الصفحات
          </h6>
          <ul className='flex flex-col gap-4'>
            <li className='font-[TajawalMedium,sans-serif] text-white hover:text-orange-400 flex items-center justify-start gap-[12px]'>
              <Link href='/'>الرئيسية</Link>
            </li>
            <li className='font-[TajawalMedium,sans-serif] text-white hover:text-orange-400 flex items-center justify-start gap-[12px]'>
              <Link href='/courses'>الدورات</Link>
            </li>
            <li className='font-[TajawalMedium,sans-serif] text-white hover:text-orange-400 flex items-center justify-start gap-[12px]'>
              <Link href='/albums'>الألبوم</Link>
            </li>
            <li className='font-[TajawalMedium,sans-serif] text-white hover:text-orange-400 flex items-center justify-start gap-[12px]'>
              <Link href='/about-us'>ماذا عنا</Link>
            </li>
            <li className='font-[TajawalMedium,sans-serif] text-white hover:text-orange-400 flex items-center justify-start gap-[12px]'>
              <Link href='/contact-us'>تواصل معنا</Link>
            </li>
          </ul>
        </div>

        <div className='col-span-2 xs:col-span-5 sm:!col-span-3  lg:!col-span-2 '>
          <h6 className='text-secondary text-[24px] font-[TajawalMedium,sans-serif] font-bold mb-6'>
            الروابط الهامه
          </h6>
          <ul className='flex flex-col gap-4'>
            <li className='font-[TajawalMedium,sans-serif] text-white flex items-center justify-start gap-[12px]'>
              <Link href='/'>الرابط الاول</Link>
            </li>
            <li className='font-[TajawalMedium,sans-serif] text-white flex items-center justify-start gap-[12px]'>
              <Link href='/'>الرابط الثاني</Link>
            </li>
            <li className='font-[TajawalMedium,sans-serif] text-white flex items-center justify-start gap-[12px]'>
              <Link href='/'>الرابط الثالث</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* copyright */}

      <hr className='border-[#f9f7f796] ' />
      <div className='container flex justify-center items-center py-3'>
        <h6 className='font-[TajawalMedium,sans-serif] text-white'>
          جميع الحقوق محفوظة لموقعنا &copy; 2024
        </h6>
      </div>
    </div>
  );
};

export default Footer;
