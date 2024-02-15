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
  // وظيفة لضبط ارتفاع swiper-wrapper
  const adjustSwiperWrapperHeight = (swiper: any) => {
    const currentSlideHasFirstSlide =
      swiper.slides[swiper.activeIndex].querySelector('.firstSlide');
    const swiperWrapper = swiper.el.querySelector('.swiper-wrapper');
    const isScreenWidthAbove768 = window.innerWidth <= 768;

    if (swiperWrapper && isScreenWidthAbove768) {
      if (currentSlideHasFirstSlide) {
        swiperWrapper.style.height = '28rem';
      } else {
        swiperWrapper.style.height = 'auto';
      }
    } else if (swiperWrapper) {
      swiperWrapper.style.height = 'auto';
    }
  };

  return (
    <div className='here-section'>
      <Swiper
        onSlideChange={(swiper) => adjustSwiperWrapperHeight(swiper)}
        onInit={(swiper) => adjustSwiperWrapperHeight(swiper)}
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
        watchSlidesVisibility
        watchSlidesProgress
      >
        <SwiperSlide
          className={`!bg-[#2260AA] !max-h-[40rem] custom-slide-swipe bg-no-repeat bg-contain !object-contain md:bg-[url(/assets/images/heroslidernew.webp)] bg-[url(/assets/images/mobile-hero.svg)] `}
        >
          <div className='container firstSlide hero-section-custom flex flex-col md:grid md:grid-cols-2 min-h-[13rem] xs:min-h-[15rem] lg:!min-h-[29.6875rem] sm:!min-h-[22rem] py-[20px] pb-[3.5rem] md:py-[80px] gap-7 '>
            {/* content */}
            <div className='flex flex-col gap-1 order-2 md:!order-1'>
              <h2 className='text-[#EFBB43] font-[TajawalBold,sans-serif] text-[27px] md:text-[40px] lg:!text-[50px]'>
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
          </div>
        </SwiperSlide>

        <SwiperSlide
          className={`!bg-[#F9F7F7] bg-no-repeat bg-cover  !object-contain bg-[url(/assets/images/pattern1.png)] ${classes.swiper}`}
        >
          <div className='container hero-section-custom flex flex-col md:grid md:grid-cols-2 min-h-[13rem] xs:min-h-[15rem] lg:!min-h-[29.6875rem] sm:!min-h-[22rem] py-[20px] pb-[3.5rem] md:py-[80px] gap-7'>
            {/* content */}
            <div className='flex flex-col gap-1 order-2 md:!order-1'>
              <h2 className='text-[#2260AA] font-[TajawalBold,sans-serif] text-[27px] md:text-[40px] lg:!text-[50px]'>
                أكاديمية بيان
              </h2>

              <h3 className=' font-[TajawalMedium,sans-serif] text-secondary text-[25px] md:text-[30px] lg:!text-[36px]'>
                مجتمع تعليمي تفاعلي
              </h3>

              <p className='text-[16px]  md:!text-[20px] text-textGray font-[TajawalMedium,sans-serif] md:w-[90%] xl:!w-[70%] '>
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
      </Swiper>
    </div>
  );
};

export default HeroSection;
