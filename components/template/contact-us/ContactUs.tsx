import React from 'react';
import { useLocale, useTranslations } from 'next-intl';


const ContactUs = async ({data}:any) => {
  // console.log("🚀 ~ ContactUs ~ data:", data)
  const t = useTranslations('ContactUs');
  const localeActive = useLocale();

  const isRTL = localeActive == "ar";

  return (
    <div className='Contact-us-style'>
      <div className='container my-[70px] lg:my-[100px] flex w-full lg:gap-36 gap-20 lg:px-[80px] flex-col md:!flex-row'>
        <div className='lg:p-[40px] p-[20px] custom-box-shadow bg-white rounded-[8px] w-full order-2 md:order-1'>
          <h3 className='text-stroke-custom text-[30px] font-bold'>
            {t('title')}
          </h3>
          <h4 className='text-[#1E1E1E] text-[22px]'>{t('mainOffice')}</h4>
          <p className='text-main mt-4 lg:w-[85%]'>{t('description')}</p>
          <div className='my-[24px] flex flex-col gap-[8px]'>
            <h5 className='text-main text-[19px]'>
              {t('phone')}:{' '}
              <span className='text-primary font-bold text-[17px]'>
                {t('phoneValue')}
              </span>
            </h5>
            <h5 className='text-main text-[19px]'>
              {t('email')}:{' '}
              <span className='text-primary font-bold text-[17px]'>
                {t('emailValue')}
              </span>
            </h5>
          </div>
          <div className='flex flex-col gap-[18px]'>
            <h6 className='text-[#1e1e1e] text-[20px] font-bold'>
              {t('stayInTouch')}
            </h6>
            <form className='lg:w-[85%] flex flex-col gap-[20px]'>
              <input
                type='text'
                placeholder={t('namePlaceholder')}
                className='bg-background py-[12px] px-[8px] rounded-[4px] w-full'
              />
              <input
                type='email'
                placeholder={t('emailPlaceholder')}
                className='bg-background py-[12px] px-[8px] rounded-[4px] w-full'
              />
              <textarea
                placeholder={t('messagePlaceholder')}
                className='bg-background py-[12px] px-[8px] rounded-[4px] w-full'
                rows={4}
                style={{
                  resize: 'none',
                  scrollbarWidth: 'none',
                  overflow: 'auto',
                }}
              />
              <button
                type='submit'
                className='bg-primary text-[20px] text-white h-[44px] rounded-[4px] hover:bg-secondary font-bold'
              >
                {t('send')}
              </button>
            </form>
          </div>
        </div>
        <div className='w-full md:order-2'>
          <h3 className='lg:text-[48px] text-[35px] font-bold text-primary'>
            {t('title')}
          </h3>
          <p className='lg:mt-[40px] mt-[20px] text-main lg:text-[19px] text-[16px]'>
            {/* {t('infoDescription')} */}
            {isRTL ? data?.data?.description_ar : data?.data?.description_en }
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
