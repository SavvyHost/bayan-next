'use client';
import TrainersCard from '@/components/molecules/TrainersCard/TrainersCard';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';
import CustomerCard from '@/components/molecules/CustomerCard/CustomerCard';
const CustomerOpinions = () => {
  return (
    <div className='container my-[80px] customer-review-style'>
      <div className='flex flex-col items-center mb-[50px]'>
        <h3 className='text-[29px] lg:text-[34px] text-primary font-[TajawalBold,sans-serif]'>
          أراء العملاء
        </h3>
        <p className='text-main text-[15px] lg:text-[17px] text-center md:w-[40%]'>
          تعليم القرءان الكريم بالأحكام والقراءه والكتابة بطريقة نور البيان{' '}
        </p>
      </div>

      {/* Swiper */}
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
        <SwiperSlide>
          <div className='flex flex-col items-center xl:max-w-[340px] max-w-[440px] max-h-[285px] mx-auto rounded-[12px]'>
            <CustomerCard />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='flex flex-col items-center xl:max-w-[340px] max-w-[440px] max-h-[285px] mx-auto rounded-[12px]'>
            <CustomerCard />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='flex flex-col items-center xl:max-w-[340px] max-w-[440px] max-h-[285px] mx-auto rounded-[12px]'>
            <CustomerCard />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='flex flex-col items-center xl:max-w-[340px] max-w-[440px] max-h-[285px] mx-auto rounded-[12px]'>
            <CustomerCard />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CustomerOpinions;
