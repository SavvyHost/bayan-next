'use client';
/* eslint-disable react/no-unescaped-entities */
import TrainersCard from '@/components/molecules/TrainersCard/TrainersCard';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useTranslations } from 'next-intl';

import { Autoplay } from 'swiper/modules';
import MainButton from '@/components/atoms/MainButton';
const TrainersComponents = ({ pageDetails, data }: any) => {
  const t = useTranslations('CoursesPage')
  return (
    <>
      {/* Swiper */}
      <div className='mt-[60px] '>
        <h5 className='text-[30px] font-bold text-center text-primary mb-[24px] new-font'>
          {t("trainers")}
          {/* المدربون */}
        </h5>

        {pageDetails && (
          <div className='tablet:block hidden'>
            <div className='flex flex-col items-center sm:grid sm:grid-cols-2 lg:grid-cols-3  gap-8 justify-items-center mt-[40px]'>
              {data?.slice(0,4).map((item: any) => (
                <div
                  className='flex flex-col items-center max-w-[280px] sm:max-w-[unset] mx-auto'
                  key={item?.id}
                >
                  <TrainersCard
                    image={item?.image}
                    title={item?.name_ar}
                    description={item?.description_ar}
                  />
                </div>
              ))}
            </div>
            <div className='flex justify-center w-full'>
              <div className='w-max h-[42px] mt-[30px]'>
                <MainButton title='عرض المزيد' link='/' />
              </div>
            </div>
          </div>
        )}

        <div className={`${pageDetails && 'tablet:hidden '}`}>
          <Swiper
            dir={'rtl'}
            slidesPerView={1}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            loop={true}
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
              1024: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
          >
            {data?.slice(0,4)?.map((item: any) => (
              <SwiperSlide key={item?.id}>
                <div className='flex flex-col items-center max-w-[280px] sm:max-w-[unset] mx-auto'>
                  <TrainersCard
                    image={item?.image}
                    title={item?.name_ar}
                    description={item?.description_ar}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <p className='text-main text-[20px] text-center  my-[24px] font-bold  '>
          {t("large group")}
        </p>
      </div>
    </>
  );
};

export default TrainersComponents;
