import PhoneIcon from '@/components/atoms/icons/PhoneIcon';
import JoinUs from '@/components/molecules/Join us/JoinUs';
import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <div className='footer-section min-h-[450px]'>
      <div className='container my-[5rem] flex flex-col gap-8'>
        <div className='col-span-3'>
          <JoinUs />
        </div>

        <div className='col-span-2'>
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

        <div className='col-span-2'>
          <h6 className='text-secondary text-[24px] font-[TajawalMedium,sans-serif] font-bold mb-6'>
            الصفحات
          </h6>
          <ul className='flex flex-col gap-4'>
            <li className='font-[TajawalMedium,sans-serif] text-white flex items-center justify-start gap-[12px]'>
              الرئيسية
            </li>
            <li className='font-[TajawalMedium,sans-serif] text-white flex items-center justify-start gap-[12px]'>
              الدورات
            </li>
            <li className='font-[TajawalMedium,sans-serif] text-white flex items-center justify-start gap-[12px]'>
              الألبوم
            </li>
            <li className='font-[TajawalMedium,sans-serif] text-white flex items-center justify-start gap-[12px]'>
              ماذا عنا
            </li>
            <li className='font-[TajawalMedium,sans-serif] text-white flex items-center justify-start gap-[12px]'>
              تواصل معنا
            </li>
          </ul>
        </div>

        <div className='col-span-2'>
          <h6 className='text-secondary text-[24px] font-[TajawalMedium,sans-serif] font-bold mb-6'>
            الروابط الهامه
          </h6>
          <ul className='flex flex-col gap-4'>
            <li className='font-[TajawalMedium,sans-serif] text-white flex items-center justify-start gap-[12px]'>
              0102347890
            </li>
            <li className='font-[TajawalMedium,sans-serif] text-white flex items-center justify-start gap-[12px]'>
              البريد الإلكتروني
            </li>
            <li className='font-[TajawalMedium,sans-serif] text-white flex items-center justify-start gap-[12px]'>
              الموقع
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
