'use client';

import TrainersCard from '@/components/molecules/TrainersCard/TrainersCard';
import { useLocale, useTranslations } from 'next-intl';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
const ImportantTrainers = ({ trainers }: any) => {
  const localeActive = useLocale();
  const isRTL = localeActive == "ar";
  const t = useTranslations();

  return (
    <div className='container my-[100px] '>
      <div className='flex flex-col items-center mb-[4.5rem]'>
        <h3 className='text-[29px] lg:text-[34px] text-primary  font-bold relative pb-2 mb-3'>
         {t("The most important trainers")}
          <span className='block absolute bottom-0 left-0 h-[2px] w-full bg-[#d3971b]'></span>
        </h3>

        <p className='text-main text-[15px] lg:text-[17px] text-center md:w-[40%] font-semibold'>
          تعليم القرءان الكريم بالأحكام والقراءه والكتابة بطريقة نور البيان{' '}
        </p>
      </div>

      {/* Swiper */}
      <Swiper
          dir={isRTL ? "rtl" : "ltr"}
        slidesPerView={1}
        breakpoints={{
          300: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          520: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          800: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1060: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1350: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
        }}
      >
        {trainers?.map((item: any) => (
          <SwiperSlide key={item?.id}>
            <div className='flex flex-col items-center max-w-[280px] sm:max-w-[unset] mx-auto'>
              <TrainersCard
                image={item?.image}
                title={isRTL ? item?.name_ar :item?.name_en }
                description={isRTL ? item?.description_ar :  item?.description_en}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImportantTrainers;
