import Image from 'next/image';
import { title } from 'process';
import React from 'react';

interface TrainersCardProps {
  image?: string | any;
  title?: string;
  description?: string;
}

const TrainersCard: React.FC<TrainersCardProps> = ({
  image,
  title,
  description,
}) => {
  return (
    <>
      <Image
        src={image}
        alt='trainers'
        width={136}
        height={136}
        className='rounded-full h-[136px] w-[136px] max-h-[136px] min-h-[136px] max-w-[136px] min-w-[136px]'
      />

      <h5 className='text-main font-[TajawalMedium,sans-serif] text-[18px] font-bold mt-[10px]'>
        {title}
      </h5>

      <p className='text-textGray mt-[10px] text-center '>{description}</p>
    </>
  );
};

export default TrainersCard;
