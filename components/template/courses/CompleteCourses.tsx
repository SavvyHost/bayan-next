/* eslint-disable @next/next/no-img-element */
import React from 'react';
import ImportantCourses from '../Home/important courses/ImportantCourses';
import MainButton from '@/components/atoms/MainButton';

const CompleteCourses = () => {
  return (
    <div className='container py-[40px] md:my-[50px] '>
      <div className='flex flex-col items-center'>
        <h3 className='text-[29px] lg:text-[34px] text-primary font-[TajawalBold,sans-serif]'>
          أكمل دوراتك
        </h3>
        <p className='text-main text-[15px] lg:text-[17px] text-center md:w-[40%]'>
          تعليم القرءان الكريم بالأحكام والقراءه والكتابة بطريقة نور البيان{' '}
        </p>
      </div>

      {/* Start Complete Coureses */}

      {/*  */}
      <div className='flex flex-col lg:grid lg:grid-cols-12 mt-[45px] md:mt-[70px] bg-background rounded-[12px] custom-box-shadow-2'>
        <div className='col-span-7 flex flex-col gap-6 px-[15px] py-[25px] md:p-[45px] order-2 lg:!order-1'>
          <h3 className='text-[28px] xs:text-[36px] text-primary font-[TajawalMedium,sans-serif]'>
            عنوان الدورة
          </h3>

          <p className='font-[TajawalMedium,sans-serif] text-[#616161] xl:pe-[100px]'>
            معنا.. تخطَّ حواجز اللغة. منصة علمني العربية منصة تعليمية تهدف
            لتعليم اللغة العربية لغير الناطقين بها، عبر تطبيقات الهواتف
            الذكية.لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على
            العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه …
            بروشور او فلاير على سبيل المثال … او نماذج مواقع انترنت …
          </p>

          <div className='w-[86px] h-[38px]'>
            <MainButton title='إنضم' />
          </div>
        </div>
        <div className='col-span-5 lg:order-2'>
          <img
            src='/assets/images/2b5e07ef5830af050d04e390fcadfaa8.webp'
            alt='complete courses'
            className='rounded-t-[12px] lg:!rounded-e-[12px] w-full h-full'
          />
        </div>
      </div>

      {/* Start Important Courses */}
      <ImportantCourses />
    </div>
  );
};

export default CompleteCourses;
