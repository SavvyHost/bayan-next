import MessageIcon from '@/components/atoms/icons/Message';
import SendMessageIcon from '@/components/atoms/icons/SendMessage';
import React from 'react';

const JoinUs = () => {
  return (
    <div className='bg-[#192e5198] rounded-[8px] py-[33px] px-[22px] w-[450px] lg:w-[unset] h-max'>
      <h5 className='text-white text-[24px]   mb-[13px]'>إنضم الان</h5>

      <div className='flex gap-[1rem]'>
        <div className='w-full relative'>
          <span className='absolute top-1/2 rtl:left-[25px] ltr:right-[10px] transform -translate-x-1/2 -translate-y-1/2'>
            <MessageIcon />
          </span>
          <input
            type='text'
            className='bg-[#15233D] rounded-[4px] h-[40px] w-full ps-[13px] pt-[4px] pe-16 text-white'
            placeholder='البريد الالكتروني'
          />
        </div>

        <button
          type='button'
          className='w-[40px] min-w-[40px] h-[40px] min-h-[40px] rounded-full flex items-center justify-center bg-primary'
        >
          <SendMessageIcon />
        </button>
      </div>

      <p className='text-textGray mt-[15px] '>
        سيتم ارسال رساله تأكيد علي حسابك
      </p>
    </div>
  );
};

export default JoinUs;
