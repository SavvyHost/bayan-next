'use client';
/* eslint-disable react/no-unescaped-entities */
import TrainersCard from '@/components/molecules/TrainersCard/TrainersCard';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay } from 'swiper/modules';
import MainButton from '@/components/atoms/MainButton';
const TrainersComponents = ({ pageDetails }: any) => {
  return (
    <>
      {/* Swiper */}
      <div className='mt-[60px] '>
        <h5 className='text-[20px] font-[TajawalMedium,sans-serif] mb-[24px] text-[#3855A5]'>
          المدربون
        </h5>

        {pageDetails && (
          <div className='tablet:!block !hidden'>
            <div className='flex flex-col items-center sm:grid sm:grid-cols-2 lg:grid-cols-3  gap-8 justify-items-center mt-[40px]'>
              <div className='flex flex-col items-center max-w-[280px] sm:max-w-[unset] mx-auto'>
                <TrainersCard
                  image='/assets/images/Ellipse18.svg'
                  title='أستاذه مريم محمد'
                  description='معنا.. تخطَّ حواجز اللغة. منصة علمني العربية منصة تعليمية تهدف لتعليم اللغة العربية لغير الناطقين بها، عبر تطبيقات الهواتف الذكية.'
                />
              </div>
              <div className='flex flex-col items-center max-w-[280px] sm:max-w-[unset] mx-auto'>
                <TrainersCard
                  image='/assets/images/Ellipse18.svg'
                  title='أستاذه مريم محمد'
                  description='معنا.. تخطَّ حواجز اللغة. منصة علمني العربية منصة تعليمية تهدف لتعليم اللغة العربية لغير الناطقين بها، عبر تطبيقات الهواتف الذكية.'
                />
              </div>
              <div className='flex flex-col items-center max-w-[280px] sm:max-w-[unset] mx-auto'>
                <TrainersCard
                  image='/assets/images/Ellipse18.svg'
                  title='أستاذه مريم محمد'
                  description='معنا.. تخطَّ حواجز اللغة. منصة علمني العربية منصة تعليمية تهدف لتعليم اللغة العربية لغير الناطقين بها، عبر تطبيقات الهواتف الذكية.'
                />
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
            modules={[Autoplay]}
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
            }}
          >
            <SwiperSlide>
              <div className='flex flex-col items-center max-w-[280px] sm:max-w-[unset] mx-auto'>
                <TrainersCard
                  image='/assets/images/Ellipse18.svg'
                  title='أستاذه مريم محمد'
                  description='معنا.. تخطَّ حواجز اللغة. منصة علمني العربية منصة تعليمية تهدف لتعليم اللغة العربية لغير الناطقين بها، عبر تطبيقات الهواتف الذكية.'
                />
              </div>
            </SwiperSlide>

            {/* Repeat this to experiment */}
            <SwiperSlide>
              <div className='flex flex-col items-center max-w-[280px] sm:max-w-[unset] mx-auto'>
                <TrainersCard
                  image='/assets/images/Ellipse19.svg'
                  title='أستاذه مريم محمد'
                  description='معنا.. تخطَّ حواجز اللغة. منصة علمني العربية منصة تعليمية تهدف لتعليم اللغة العربية لغير الناطقين بها، عبر تطبيقات الهواتف الذكية.'
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='flex flex-col items-center max-w-[280px] sm:max-w-[unset] mx-auto'>
                <TrainersCard
                  image='/assets/images/Ellipse20.svg'
                  title='أستاذه مريم محمد'
                  description='معنا.. تخطَّ حواجز اللغة. منصة علمني العربية منصة تعليمية تهدف لتعليم اللغة العربية لغير الناطقين بها، عبر تطبيقات الهواتف الذكية.'
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='flex flex-col items-center max-w-[280px] sm:max-w-[unset] mx-auto'>
                <TrainersCard
                  image='/assets/images/Ellipse18.svg'
                  title='أستاذه مريم محمد'
                  description='معنا.. تخطَّ حواجز اللغة. منصة علمني العربية منصة تعليمية تهدف لتعليم اللغة العربية لغير الناطقين بها، عبر تطبيقات الهواتف الذكية.'
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='flex flex-col items-center max-w-[280px] sm:max-w-[unset] mx-auto'>
                <TrainersCard
                  image='/assets/images/Ellipse19.svg'
                  title='أستاذه مريم محمد'
                  description='معنا.. تخطَّ حواجز اللغة. منصة علمني العربية منصة تعليمية تهدف لتعليم اللغة العربية لغير الناطقين بها، عبر تطبيقات الهواتف الذكية.'
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='flex flex-col items-center max-w-[280px] sm:max-w-[unset] mx-auto'>
                <TrainersCard
                  image='/assets/images/Ellipse20.svg'
                  title='أستاذه مريم محمد'
                  description='معنا.. تخطَّ حواجز اللغة. منصة علمني العربية منصة تعليمية تهدف لتعليم اللغة العربية لغير الناطقين بها، عبر تطبيقات الهواتف الذكية.'
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default TrainersComponents;
