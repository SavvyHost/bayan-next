import AboutusIcon1 from '@/components/atoms/icons/AboutusIcon1';
import AboutusIcon2 from '@/components/atoms/icons/AboutusIcon2';
import AboutusIcon3 from '@/components/atoms/icons/AboutusIcon3';
import AboutusIcon4 from '@/components/atoms/icons/AboutusIcon4';
import AboutusIcon5 from '@/components/atoms/icons/AboutusIcon5';
import AboutusIcon6 from '@/components/atoms/icons/AboutusIcon6';
import React from 'react';

const AboutUs = () => {
  return (
    <div className='my-[35px] about-me-section'>
      <div className='container my-16'>
        <div className='flex flex-col items-center'>
          <h3 className='text-[29px] lg:text-[34px] text-white font-[TajawalBold,sans-serif]'>
            ماذا عننا؟
          </h3>
          <p className='text-white text-[15px] lg:text-[17px] text-center'>
            تعليم القرءان الكريم بالأحكام والقراءه والكتابة بطريقة نور البيان
          </p>
        </div>

        {/* Grid Card */}
        <div className='flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-20 mt-[40px]'>
          <div className='flex flex-col items-center'>
            <AboutusIcon1 />
            <h4 className='text-[18px] lg:text-[22px] text-white mt-[10px] font-[TajawalMedium,sans-serif]'>
              تحفيظ القرءان
            </h4>
            <p className='text-[#f7f7f7] text-[15px] lg:text-[16px] xs:w-[60%] sm:!w-[90%] text-center font-[TajawalMedium,sans-serif]'>
              تحفيظ القرآن ، وشرح المعاني
            </p>
          </div>

          <div className='flex flex-col items-center'>
            <AboutusIcon2 />
            <h4 className='text-[18px] lg:text-[22px] text-white mt-[10px] font-[TajawalMedium,sans-serif]'>
              إختار وقتك!
            </h4>
            <p className='text-[#f7f7f7] text-[15px] lg:text-[16px] xs:w-[60%] sm:!w-[90%] text-center font-[TajawalMedium,sans-serif]'>
              إختيار الوقت المناسب للأم مع معلمات متخصصات وبرضو تفسير وشرح
              للآيات
            </p>
          </div>
          <div className='flex flex-col items-center'>
            <AboutusIcon3 />
            <h4 className='text-[18px] lg:text-[22px] text-white mt-[10px] font-[TajawalMedium,sans-serif]'>
              معلم معك أول ب أول
            </h4>
            <p className='text-[#f7f7f7] text-[15px] lg:text-[16px] xs:w-[60%] sm:!w-[90%] text-center font-[TajawalMedium,sans-serif]'>
              الأهتمام بشكل فردي لكل طفل مع معلم خاص بيه عشان نضمن الاستفادة
              وعدم التشتت
            </p>
          </div>
          <div className='flex flex-col items-center'>
            <AboutusIcon4 />
            <h4 className='text-[18px] lg:text-[22px] text-white mt-[10px] font-[TajawalMedium,sans-serif]'>
              عروض خاصه للأمهات
            </h4>
            <p className='text-[#f7f7f7] text-[15px] lg:text-[16px] xs:w-[60%] sm:!w-[90%] text-center font-[TajawalMedium,sans-serif]'>
              منسناش الأمهات اللي عاوزين يحفظوا القرآن ووقتهم وانشغالتهم مش
              مساعدينهم
            </p>
          </div>
          <div className='flex flex-col items-center'>
            <AboutusIcon5 />
            <h4 className='text-[18px] lg:text-[22px] text-white mt-[10px] font-[TajawalMedium,sans-serif]'>
              جوائز مميزه
            </h4>
            <p className='text-[#f7f7f7] text-[15px] lg:text-[16px] xs:w-[60%] sm:!w-[90%] text-center font-[TajawalMedium,sans-serif]'>
              التفسير وطبعا تطبيق الكلام ده على واقع الأطفال
            </p>
          </div>
          <div className='flex flex-col items-center'>
            <AboutusIcon6 />
            <h4 className='text-[18px] lg:text-[22px] text-white mt-[10px] font-[TajawalMedium,sans-serif]'>
              الدور التربوي
            </h4>
            <p className='text-[#f7f7f7] text-[15px] lg:text-[16px] xs:w-[60%] sm:!w-[90%] text-center font-[TajawalMedium,sans-serif]'>
              وتشجيعهم على التحلي بالاخلاق اللي ذكرها القرآن يعني دور تربوي مش
              بس تعليمي
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
