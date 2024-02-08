'use client';
import TrainersCard from '@/components/molecules/TrainersCard/TrainersCard';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
import CustomerCard from '@/components/molecules/CustomerCard/CustomerCard';
import MainButton from '@/components/atoms/MainButton';

const CustomerOpinions = ({ pageDetails }: any) => {
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

      {pageDetails && (
        <div className='tablet:!block !hidden'>
          <div className='tablet:flex flex-col hidden items-center sm:!grid sm:grid-cols-2 lg:grid-cols-3  gap-8 justify-items-center mt-[40px]'>
            <div className='flex flex-col items-center  mx-auto rounded-[12px]'>
              <CustomerCard />
            </div>
            <div className='flex flex-col items-center  mx-auto rounded-[12px]'>
              <CustomerCard />
            </div>
            <div className='flex flex-col items-center  mx-auto rounded-[12px]'>
              <CustomerCard />
            </div>
          </div>

          <div className='flex justify-center w-full'>
            <div className='w-max h-[42px] mt-[30px]'>
              <MainButton title='عرض المزيد' />
            </div>
          </div>
        </div>
      )}

      <div className={`${pageDetails && 'tablet:hidden'}`}>
        <Swiper
          dir={'rtl'}
          slidesPerView={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          style={{
            //@ts-ignore
            '--swiper-pagination-color': '#2260AA',
            '--swiper-pagination-bullet-inactive-color': '#EEA62E',
            '--swiper-pagination-bullet-inactive-opacity': '1',
            '--swiper-pagination-bullet-width': '25px',
            '--swiper-pagination-progressbar-size': '8px',
          }}
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay]}
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
    </div>
  );
};

export default CustomerOpinions;
