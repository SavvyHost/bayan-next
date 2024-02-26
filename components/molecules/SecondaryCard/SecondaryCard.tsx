import MainButton from '@/components/atoms/MainButton';
import BookMark from '@/components/atoms/icons/BookMarkNew';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface SecondaryCardProps {
  img?: string | any;
  title?: string;
  description?: string;
  date?: string;
  articlesPath?: string;
  important?: boolean;
  id?: string;
}

const SecondaryCard: React.FC<SecondaryCardProps> = ({
  img,
  title,
  description,
  date,
  articlesPath,
  important,
  id,
}) => {
  return (
    <Link href={`/articles/${id}`}>
      <div className='relative animation-translateY '>
        {important && (
          <div className='absolute left-[-10px] top-[-10px] z-50'>
            <BookMark />
          </div>
        )}

        <div className='bg-white custom-box-shadow rounded-b-lg articles-pattern '>
          <div className='flex justify-center '>
            <Image
              className='max-h-[240px] min-h-[240px]'
              src={img}
              width={344}
              height={240}
              alt='courses_important'
            />
          </div>

          <div className='ms-[20px] md:me-[40px] me-[20px] mb-[35px] mt-[25px] '>
            <h4 className='  font-bold text-primary text-[19px] mb-[7px]'>
              {title}
            </h4>

            <span className='text-secondary  '>{date}</span>
            <p className='mt-[15px] text-[#616161]   text-[18px]'>
              {description}
            </p>

            <div className='w-[96px] h-[42px] mt-[4px]'>
              <Link
                href={articlesPath ? articlesPath : '/articles'}
                className='text-primary underline  font-bold text-[20px] hover:text-secondary'
              >
                إقرأ المزيد
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SecondaryCard;
