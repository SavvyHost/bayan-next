import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SubscriptionCard = () => {
  return (
    <div className='sm:flex sm:gap-2 flex-col  lg:gap-0'>
      {/* اشترك معنا الان */}
      <div className='border-soild sm:w-full sm:flex sm:flex-col sm:justify-center border-[1px] p-6 border-textGray custom-box-shadow-2 rounded-[8px] my-[12px] xl:my-[24px]'>
        <h6 className='text-[20px] mb-[20px] text-secondary font-[TajawalMedium,sans-serif] text-center'>
          إشترك معنا الأن
        </h6>

        <ul className='flex gap-10 justify-center'>
          <li>
            <Link href='/'>
              <Image
                src='/assets/images/whatsapp (1).png'
                width={42}
                height={42}
                alt='social'
              />
            </Link>
          </li>
          <li>
            <Link href='/'>
              <Image
                src='/assets/images/Group 1000001805.svg'
                width={42}
                height={42}
                alt='social'
              />
            </Link>
          </li>
          <li>
            <Link href='/'>
              <Image
                src='/assets/images/telegram.png'
                width={42}
                height={42}
                alt='social'
              />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SubscriptionCard;
