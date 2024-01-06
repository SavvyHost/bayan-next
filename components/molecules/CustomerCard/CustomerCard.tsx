import StarRate from '@/components/atoms/icons/StarRate';
import Image from 'next/image';
import React from 'react';
import RateComponent from '../Rate/Rate';

const CustomerCard = () => {
  return (
    <div className='h-full bg-background custom-box-shadow-2 py-[30px] px-[15px]  xl:w-[340px] w-full  rounded-[12px]'>
      <div className='flex gap-5'>
        <Image
          className='rounded-full h-[61px] w-[61px] max-h-[61px] min-h-[61px] max-w-[61px] min-w-[61px]'
          src='/assets/images/Ellipse5.svg'
          width={61}
          height={61}
          alt='customerReviewIMG'
        />

        <div className='w-full'>
          <h5 className='text-[#1E1E1E] font-[TajawalMedium,sans-serif] font-bold'>
            أحمد محمود
          </h5>
          <span className='text-textGray'>المهنة</span>
          <div className='flex justify-end'>
            <RateComponent />
          </div>
        </div>
      </div>

      <div>
        لقد كانت تجربه جيده حقا لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم
        لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم
        مطبوعه … بروشور او فلاير على سبيل المثال … او نماذج مواقع انترنت …
      </div>
    </div>
  );
};

export default CustomerCard;
