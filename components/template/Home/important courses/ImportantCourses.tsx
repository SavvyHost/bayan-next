'use client';

import MainCard from '@/components/molecules/MainCard/MainCard';
import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules

import { Autoplay } from 'swiper/modules';
import MainButton from '@/components/atoms/MainButton';

const ImportantCourses = ({ courses, swiper }: any) => {
  return (
    <div className='container my-[65px] '>
      <div className='flex flex-col items-center'>
        <h3 className='text-[30px] lg:text-[35px] text-primary  font-bold pb-2 relative mb-3'>
          أهم الدورات
          <span className='block absolute bottom-0 left-0 h-[2px] w-full bg-[#d3971b]'></span>
        </h3>
      </div>

      {!swiper ? (
        <>
          <div className='flex flex-col items-center sm:grid sm:grid-cols-2 lg:grid-cols-3  gap-8 justify-items-center mt-[40px]'>
            {courses?.map((item: any) => (
              <div
                className='max-w-[360px] md:animation-translateY h-full'
                key={item?.id}
              >
                <MainCard
                  id={item?.id}
                  img={item?.image_url}
                  title={item?.title_ar}
                  description={item?.description_ar}
                  buttonContent='إنضم'
                />
              </div>
            ))}
          </div>
          <div className='flex justify-center w-full'>
            <div className='w-max h-[42px] mt-[30px]'>
              <MainButton title='عرض المزيد' />
            </div>
          </div>
        </>
      ) : (
        <>
          {/* Swiper */}
          <Swiper
            dir={'rtl'}
            slidesPerView={1}
            className='my-8'
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            style={{
              //@ts-ignore
              '--swiper-pagination-color': '#2260AA',
              '--swiper-pagination-bullet-inactive-color': '#EEA62E',
              '--swiper-pagination-bullet-inactive-opacity': '1',
              '--swiper-pagination-bullet-width': '25px',
              '--swiper-pagination-progressbar-size': '8px',
            }}
            breakpoints={{
              300: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },

              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
          >
            {courses?.map((item: any) => (
              <SwiperSlide key={item?.id}>
                <div className='flex flex-col items-center xl:max-w-[340px] max-w-[440px] p-2 mx-auto rounded-[12px]'>
                  <MainCard
                    id={item?.id}
                    img={item?.image_url}
                    title={item?.title_ar}
                    description={item?.description_ar}
                    buttonContent='إنضم'
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      )}
    </div>
  );
};

export default ImportantCourses;
