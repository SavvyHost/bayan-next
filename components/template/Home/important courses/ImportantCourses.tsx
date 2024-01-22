import MainCard from '@/components/molecules/MainCard/MainCard';
import React from 'react';

const ImportantCourses = () => {
  return (
    <div className='container my-[65px] '>
      <div className='flex flex-col items-center'>
        <h3 className='text-[29px] lg:text-[34px] text-primary font-[TajawalBold,sans-serif]'>
          أهم الدورات
        </h3>
        <p className='text-main text-[15px] lg:text-[17px] text-center md:w-[40%]'>
          تعليم القرءان الكريم بالأحكام والقراءه والكتابة بطريقة نور البيان عن
          طريق الهواتف الذكيه
        </p>
      </div>

      <div className='flex flex-col items-center sm:grid sm:grid-cols-2 lg:grid-cols-3  gap-16 justify-items-center mt-[40px]'>
        <div className='max-w-[360px] md:animation-translateY'>
          <MainCard
            img='/assets/images/courses1.webp'
            title='مدخل إلي اللغه العربيه'
            description='تعليم القرءان الكريم بالأحكام والقراءه والكتابة بطريقة نور البيان لغير الناطقين عبر تطبيقات الهواتف الذكيه.'
            buttonContent='إنضم'
          />
        </div>
        <div className='max-w-[360px] animation-translateY'>
          <MainCard
            img='/assets/images/courses2.webp'
            title='مدخل إلي اللغه العربيه'
            description='تعليم القرءان الكريم بالأحكام والقراءه والكتابة بطريقة نور البيان لغير الناطقين عبر تطبيقات الهواتف الذكيه.'
            buttonContent='إنضم'
          />
        </div>
        <div className='max-w-[360px] animation-translateY'>
          <MainCard
            img='/assets/images/courses3.webp'
            title='مدخل إلي اللغه العربيه'
            description='تعليم القرءان الكريم بالأحكام والقراءه والكتابة بطريقة نور البيان لغير الناطقين عبر تطبيقات الهواتف الذكيه.'
            buttonContent='إنضم'
          />
        </div>
        <div className='max-w-[360px] animation-translateY'>
          <MainCard
            img='/assets/images/courses4.webp'
            title='مدخل إلي اللغه العربيه'
            description='تعليم القرءان الكريم بالأحكام والقراءه والكتابة بطريقة نور البيان لغير الناطقين عبر تطبيقات الهواتف الذكيه.'
            buttonContent='إنضم'
          />
        </div>
        <div className='max-w-[360px] animation-translateY'>
          <MainCard
            img='/assets/images/courses5.webp'
            title='مدخل إلي اللغه العربيه'
            description='تعليم القرءان الكريم بالأحكام والقراءه والكتابة بطريقة نور البيان لغير الناطقين عبر تطبيقات الهواتف الذكيه.'
            buttonContent='إنضم'
          />
        </div>
        <div className='max-w-[360px] animation-translateY'>
          <MainCard
            img='/assets/images/courses6.webp'
            title='مدخل إلي اللغه العربيه'
            description='تعليم القرءان الكريم بالأحكام والقراءه والكتابة بطريقة نور البيان لغير الناطقين عبر تطبيقات الهواتف الذكيه.'
            buttonContent='إنضم'
          />
        </div>
      </div>
    </div>
  );
};

export default ImportantCourses;
