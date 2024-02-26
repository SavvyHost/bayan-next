import MainButton from '@/components/atoms/MainButton';
import ClockFi from '@/components/atoms/icons/ClockFi';
import Layers from '@/components/atoms/icons/Layers';
import VectorStudent from '@/components/atoms/icons/VectorStudent';
import React from 'react';

const PricePlanCard = () => {
  return (
    <div className='sm:flex sm:gap-2 flex-col justify-end mb-10 lg:gap-0'>
      <div className='border-soild sm:w-full  border-[1px] py-4 border-textGray custom-box-shadow-3 rounded-t-none rounded-[8px] my-[12px] '>
        <p className=' font-bold text-[#EEA62E] text-[24px] text-center'>
          800.00 LE
        </p>
      </div>

      <div className='border-soild sm:w-full  border-[1px] py-4 border-textGray custom-box-shadow-3 rounded-t-none rounded-[8px] my-[12px] '>
        <ul>
          <li className='flex justify-center items-center gap-4 px-6'>
            <span className='text-[#EEA62E] text-[20px]'>12</span>
            <p className='text-[#4f4f4f] text-[16px] md:text-[18px] 2xl:!text-[20px]'>
              إثني عشر محاضره شهريا
            </p>
          </li>
          <hr className='my-[8px]' />
          <li className='flex justify-center items-center gap-4 px-6'>
            <span className='text-[#EEA62E] text-[20px]'>
              <ClockFi />
            </span>
            <p className='text-[#4f4f4f] text-[16px] md:text-[18px] 2xl:!text-[20px]'>
              إثني عشر محاضره شهريا
            </p>
          </li>
          <hr className='my-[8px]' />
          <li className='flex justify-center items-center gap-4 px-6'>
            <span className='text-[#EEA62E] text-[20px]'>
              <Layers />
            </span>
            <p className='text-[#4f4f4f] text-[16px] md:text-[18px] 2xl:!text-[20px]'>
              إثني عشر محاضره شهريا
            </p>
          </li>
          <hr className='my-[8px]' />
          <li className='flex justify-center items-center gap-4 px-6'>
            <span className='text-[#EEA62E] text-[20px]'>
              <VectorStudent />
            </span>
            <p className='text-[#4f4f4f] text-[16px] md:text-[18px] 2xl:!text-[20px]'>
              إثني عشر محاضره شهريا
            </p>
          </li>
        </ul>
        <div className='flex justify-center w-full'>
          <div className='w-max h-[42px] mt-[20px]'>
            <MainButton title=' إنضم' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricePlanCard;
