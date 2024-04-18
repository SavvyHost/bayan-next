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
        width={220}
        height={220}
        className='rounded-[8px] h-[220px] w-[220px] max-h-[220px] min-h-[220px] max-w-[220px] min-w-[220px]'
      />

      <h5 className='text-main   text-[18px] font-bold mt-[10px]'>{title}</h5>

      <p className='text-textGray mt-[10px] text-center '>{description}</p>
    </>
  );
};

export default TrainersCard;
