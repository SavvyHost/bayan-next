/* eslint-disable @next/next/no-img-element */
import MainButton from '@/components/atoms/MainButton';
import React from 'react';

const AboutUs = ({ data }: any) => {
  return (
    <div className='container my-16 flex mb-20 flex-col lg:flex-row'>
      <div className='w-full lg:max-w-[35%] order-2 lg:order-1'>
        <h3 className=' font-bold lg:text-[45px] text-[30px] text-primary'>
          من نحن؟
        </h3>
        <h3 className='  lg:text-[28px] text-[22px] text-secondary'>
          {data?.about_title_ar}
        </h3>

        <p className=' text-textGray text-[18px] mt-4'>{data?.about_text_ar}</p>

        <div className='w-[106px] h-[42px] mt-10'>
          <MainButton title='إنضم' />
        </div>
      </div>

      <div className='w-full flex lg:justify-end justify-center lg:order-2'>
        <img
          src='/assets/images/Group 1000001783.svg'
          alt='about-us image'
          className='w-full h-full max-w-[290px] md:max-w-[380px] max-h-[290px] md:max-h-[380px]  lg:max-w-[500px] lg:max-h-[500px]'
        />
      </div>
    </div>
  );
};

export default AboutUs;
