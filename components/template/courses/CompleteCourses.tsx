/* eslint-disable @next/next/no-img-element */
import MainButton from '@/components/atoms/MainButton';
import ImportantCourses from '../Home/important courses/ImportantCourses';
import { useLocale, useTranslations } from 'next-intl';

const CompleteCourses = ({ data }: any) => {
  console.log("🚀 ~ CompleteCourses ~ data:", data)
  const t = useTranslations();
  const localeActive = useLocale();
  const isRTL = localeActive == "ar";
  return (
    <div className='container py-[40px] md:my-[50px] '>
      <div className='flex flex-col items-center'>
        <h3 className='text-[29px] lg:text-[34px] text-primary  font-bold relative pb-2  mb-3'>
        {t("Complete your courses")}
          <span className='block absolute bottom-0 left-0 h-[2px] w-full bg-[#d3971b]'></span>
        </h3>
        <p className='text-main text-[15px] lg:text-[17px] text-center md:w-[40%] font-semibold'>
          تعليم القرءان الكريم بالأحكام والقراءه والكتابة بطريقة نور البيان{' '}
        </p>
      </div>

      {/*  */}
      <div className='flex flex-col lg:grid lg:grid-cols-12 mt-[45px] md:mt-[70px] bg-background rounded-[12px] custom-box-shadow-2'>
        <div className='col-span-7 flex flex-col gap-6 px-[15px] py-[25px] md:p-[45px] order-2 lg:!order-1'>
          <h3 className='text-[28px] xs:text-[36px] text-primary  '>
           {isRTL ? data?.data[0]?.title_ar :data?.data[0]?.title_en }
          </h3>

          <p className='  text-[#616161] xl:pe-[100px]'>
          {isRTL ? data?.data[0]?.description_ar :data?.data[0]?.description_en }

          </p>

          <div className='w-[86px] h-[38px]'>
            <MainButton title='إنضم' />
          </div>
        </div>
        <div className='col-span-5 lg:order-2'>
          <img
            src={data?.data[0]?.image_url}
            alt='complete courses'
            className='rounded-t-[12px] lg:!rounded-e-[12px] w-full h-[350px]'
          />
        </div>
      </div>

      {/* Start Important Courses */}
      <ImportantCourses courses={data?.data} swiper={false} hiddenShowMore={true} />
    </div>
  );
};

export default CompleteCourses;
