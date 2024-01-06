/* eslint-disable @next/next/no-img-element */
import MainButton from '@/components/atoms/MainButton';
import React from 'react';

const AboutUs = () => {
  return (
    <div className='container my-16 flex mb-20 flex-col lg:flex-row'>
      <div className='w-full lg:max-w-[35%] order-2 lg:order-1'>
        <h3 className='font-[TajawalBold,sans-serif] lg:text-[45px] text-[30px] text-primary'>
          من نحن؟
        </h3>
        <h3 className='font-[TajawalMedium,sans-serif] lg:text-[28px] text-[22px] text-secondary'>
          مجتمع تعليمي تفاعلي
        </h3>

        <p className=' text-textGray text-[18px] mt-4'>
          مع غياب حلقات القرآن اللي كنا بنعتمد عليها في تحفيظ أولادنا القرآن
          وتعليمهم أمور الدين الاساسية اللي بتنعكس طبعا على اخلاقهم معانا كأمهات
          ومع كل اللي حواليهم كان لازم بديل يقوم بالدور ده .. بطريقة تناسب
          حياتنا النهاردة اللي كل حاجة فيها بقت ديجيتال وعن طريق الانترنت ومن
          هنا جت فكرة الأكاديمية اللي بنعتمد فيها على تحفيظ القرآن ، وشرح
          المعاني والتفسير وطبعا تطبيق الكلام ده على واقع الأطفال وتشجيعهم على
          التحلي بالاخلاق اللي ذكرها القرآن يعني دور تربوي مش بس تعليمي لكن بشكل
          فردي لكل طفل مع معلم خاص بيه عشان نضمن الاستفادة وعدم التشتت ومنسناش
          الأمهات اللي عاوزين يحفظوا القرآن ووقتهم وانشغالتهم مش مساعدينهم ..
          هنا هتقدري تختاري الوقت اللي يناسبك مع معلمات متخصصات وبرضو تفسير وشرح
          للآيات
        </p>

        <div className='w-[106px] h-[42px] mt-10'>
          <MainButton title='إنضم' />
        </div>
      </div>

      <div className='w-full flex lg:justify-end justify-center lg:order-2'>
        <img
          src='/assets/images/Group 1000001783.svg'
          alt='about-us image'
          className='w-full h-full max-w-[290px] md:max-w-[380px] max-h-[290px] md:max-h-[380px]  lg:max-w-[500px] lg:max-h-[500px]'
        />
      </div>
    </div>
  );
};

export default AboutUs;
