import Image from 'next/image';
import RateComponent from '../Rate/Rate';
import { useLocale } from 'next-intl';

const CustomerCard = ({ item }: any) => {
  const localeActive = useLocale();
  const isRTL = localeActive == "ar";
  return (
    <div className='h-full bg-background custom-box-shadow-2 py-[30px] px-[15px]  xl:w-[340px] w-full  rounded-[12px]'>
      <div className='flex gap-5'>
        <Image
          className='rounded-full h-[61px] w-[61px] max-h-[61px] min-h-[61px] max-w-[61px] min-w-[61px]'
          src={item?.image}
          width={61}
          height={61}
          alt='customerReviewIMG'
        />

        <div className='w-full'>
          <h5 className='text-[#1E1E1E]   font-bold'>{isRTL ? item?.name_ar : item?.name_en}</h5>
          <span className='text-textGray'> {isRTL ? item?.job_ar :  item?.job_en}</span>
          <div className='flex justify-end'>
            <RateComponent rate={item?.rate} />
          </div>
        </div>
      </div>

      <div>{item?.comment_ar}</div>
    </div>
  );
};

export default CustomerCard;
