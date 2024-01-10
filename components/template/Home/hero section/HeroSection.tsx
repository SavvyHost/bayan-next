/* eslint-disable @next/next/no-img-element */
'use client';

import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';

import classes from './HomeSection.module.css';
import Image from 'next/image';
import MainButton from '@/components/atoms/MainButton';

const HeroSection = () => {
  return (
    <div className='here-section'>
      <Swiper
        dir={'rtl'}
        slidesPerView={1}
        loop
        style={{
          //@ts-ignore
          '--swiper-pagination-color': '#2260AA',
          '--swiper-pagination-bullet-inactive-color': '#EEA62E',
          '--swiper-pagination-bullet-inactive-opacity': '1',
          '--swiper-pagination-bullet-width': '25px',
          '--swiper-pagination-progressbar-size': '8px',
        }}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className='!bg-[#eea62e]'
      >
        <SwiperSlide>
          <div className='container flex flex-col md:grid md:grid-cols-2 min-h-[13rem] xs:min-h-[15rem] lg:!min-h-[29.6875rem] sm:!min-h-[22rem] py-[20px] pb-[3.5rem] md:py-[80px] gap-7'>
            {/* content */}
            <div className='flex flex-col gap-1 order-2 md:!order-1'>
              <h2 className='text-primary font-[TajawalBold,sans-serif] text-[27px] md:text-[40px] lg:!text-[50px]'>
                أكاديمية بيان
              </h2>

              <h3 className=' font-[TajawalMedium,sans-serif] text-secondary text-[25px] md:text-[30px] lg:!text-[36px]'>
                مجتمع تعليمي تفاعلي
              </h3>

              <p className='text-[16px]  md:!text-[20px] text-textGray font-[TajawalMedium,sans-serif] md:w-[90%] xl:!w-[70%] text-white'>
                معنا.. تخطَّ حواجز اللغة. منصة علمني العربية منصة تعليمية تهدف
                لتعليم اللغة العربية لغير الناطقين بها، عبر تطبيقات الهواتف
                الذكية.
              </p>

              <div className='mt-[30px] w-[120px] h-[45px]'>
                <MainButton title='تعلم أكثر' />
              </div>
            </div>
            <div className='lg:me-9 flex !justify-center xl:!justify-end md:!order-2'>
              <img
                className='!max-w-[300px] h-[300px] !max-h-[300px] md:!max-w-[450px] md:!max-h-[450px] w-full'
                src='/assets/images/Group 11.svg'
                alt='hero image'
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='container flex flex-col md:grid md:grid-cols-2 min-h-[13rem] xs:min-h-[15rem] lg:!min-h-[29.6875rem] sm:!min-h-[22rem] py-[20px] pb-[3.5rem] md:py-[80px] gap-7'>
            {/* content */}
            <div className='flex flex-col gap-1 order-2 md:!order-1'>
              <h2 className='text-primary font-[TajawalBold,sans-serif] text-[27px] md:text-[40px] lg:!text-[50px]'>
                أكاديمية بيان
              </h2>

              <h3 className=' font-[TajawalMedium,sans-serif] text-secondary text-[25px] md:text-[30px] lg:!text-[36px]'>
                مجتمع تعليمي تفاعلي
              </h3>

              <p className='text-[16px]  md:!text-[20px] text-textGray font-[TajawalMedium,sans-serif] md:w-[90%] xl:!w-[70%] !text-white'>
                معنا.. تخطَّ حواجز اللغة. منصة علمني العربية منصة تعليمية تهدف
                لتعليم اللغة العربية لغير الناطقين بها، عبر تطبيقات الهواتف
                الذكية.
              </p>

              <div className='mt-[30px] w-[120px] h-[45px]'>
                <MainButton title='تعلم أكثر' />
              </div>
            </div>

            {/* Image */}
            {/* Image */}
            <div className='lg:me-9 flex !justify-center xl:!justify-end md:!order-2'>
              <img
                className='!max-w-[300px] h-[300px] !max-h-[300px] md:!max-w-[450px] md:!max-h-[450px] w-full'
                src='/assets/images/hero-image1.png'
                alt='hero image'
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSection;
