import MainButton from '@/components/atoms/MainButton';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface MainCardProps {
  img?: string | any;
  title?: string;
  description?: string;
  buttonContent?: string;
  id: string;
}

const MainCard: React.FC<MainCardProps> = ({
  img,
  title,
  description,
  buttonContent,
  id,
}) => {
  return (
    <Link href={`/courses/${id}`} className='h-full'>
      <div className='bg-white custom-box-shadow rounded-b-lg pt-[11px] pb-[5px] h-full'>
        <div className='flex justify-center '>
          <Image
            className='max-h-[240px] min-h-[240px]'
            src={img}
            width={344}
            height={240}
            alt='courses_important'
          />
        </div>

        <div className='ms-[20px] md:me-[40px] me-[20px] mb-[20px] mt-[25px]'>
          <h4 className='font-bold text-[19px] text-primary'>{title}</h4>
          <p className='mt-[15px] text-main  h-[120px]'>
            {description
              ? description.length > 190
                ? description.slice(0, 170) + '...'
                : description
              : '-'}
          </p>

          <div className='w-[120px] h-[42px] mt-[30px]'>
            <MainButton title={buttonContent} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MainCard;
