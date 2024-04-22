import React from 'react';
import AboutusIcon1 from '@/components/atoms/icons/AboutusIcon1';
import AboutusIcon2 from '@/components/atoms/icons/AboutusIcon2';
import AboutusIcon3 from '@/components/atoms/icons/AboutusIcon3';
import AboutusIcon4 from '@/components/atoms/icons/AboutusIcon4';
import AboutusIcon5 from '@/components/atoms/icons/AboutusIcon5';
import AboutusIcon6 from '@/components/atoms/icons/AboutusIcon6';
import { useTranslations } from 'next-intl';

const AboutUs = () => {
  const t = useTranslations('AboutUs');

  return (
    <div className='my-[35px] about-me-section'>
      <div className='container my-16'>
        <div className='flex flex-col items-center'>
          <h3 className='text-[29px] lg:text-[34px] text-primary font-bold text-white relative pb-2 mb-3  new-font'>
            {t('title')}
            <span className='block absolute bottom-0 left-0 h-[2px] w-full bg-[#d3971b]'></span>
          </h3>
          {/* <p className='text-white text-[19px] lg:text-[22px] text-center mt-2'>
            {t('description')}
          </p> */}
        </div>

        {/* Grid Card */}
        <div className='flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-20 mt-[40px]'>
          {/* Icon Sections */}
          {[1, 2, 3, 4, 5, 6].map((iconNumber) => (
            <div key={`aboutus-icon-${iconNumber}`} className='flex flex-col items-center'>
              <span className='h-[65px]'>
                {React.createElement(require(`@/components/atoms/icons/AboutusIcon${iconNumber}`).default)}
              </span>
              <h4 className='text-[18px] lg:text-[22px] font-semibold text-[#DAA63D] mt-[10px]'>
                {t(`icon${iconNumber}Title`)}
              </h4>
              <p className='text-[#f7f7f7] text-[15px] lg:text-[16px] xs:w-[60%] sm:!w-[90%] text-center'>
                {t(`icon${iconNumber}Description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
