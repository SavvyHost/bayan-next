import React from 'react';

interface mainButtonProps {
  title: string;
}

const MainButton: React.FC<mainButtonProps> = ({ title }) => {
  return (
    <button className='rounded-[20px] animation-translateY hover:opacity-[0.85] w-full h-full flex justify-center items-center text-white bg-secondary font-[TajawalMedium,sans-serif] text-[20px] py-[12px] px-[20px]'>
      {title}
    </button>
  );
};

export default MainButton;
