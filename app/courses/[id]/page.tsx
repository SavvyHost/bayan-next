'use client';
/* eslint-disable react/no-unescaped-entities */
import ArrowLeft from '@/components/atoms/icons/ArrowLeft';
import TrainersCard from '@/components/molecules/TrainersCard/TrainersCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import ArrorLeftBlue from '@/components/atoms/icons/ArrorLeftBlue';
import CustomerOpinions from '@/components/template/Home/customer opinions/CustomerOpinions';
import ImportantCourses from '@/components/template/Home/important courses/ImportantCourses';
import Image from 'next/image';
import ClockFi from '@/components/atoms/icons/ClockFi';
import Layers from '@/components/atoms/icons/Layers';
import VectorStudent from '@/components/atoms/icons/VectorStudent';

import { Autoplay } from 'swiper/modules';
import TrainersComponents from '@/components/template/courses/TrainersComponents';
import Link from 'next/link';
import PricePlanCard from '@/components/molecules/price plan/PricePlanCard';
import SubscriptionCard from '@/components/molecules/subscriptionCard/SubscriptionCard';

const CoursesPageId = () => {
  return (
    <div className='container'>
      {/* grid grid-cols-12 */}
      <div className='flex flex-col lg:grid lg:grid-cols-12 gap-[60px] mt-[20px] mb-[50px] lg:mb-[100px] '>
        <div className='col-span-12 xl:max-w-[90%]'>
          <h4 className='hidden gap-2 mb-[14px] text-[14px] md:flex'>
            دورة تعلم اللغة العربية
            <span>
              <ArrowLeft />
            </span>
            مدخل الي اللغه العربية
          </h4>

          <div
            className='py-[80px] px-[30px] max-h-[24px] rounded-[12px] w-full  md:min-h-[450px] min-h-[220px] bg-cover bg-repeat-round highlights-style courses-details relative'
            style={{
              backgroundImage:
                "url('/assets/images/Quran Poster Instagram Post 2(1).webp')",
            }}
          />

          {/* description courses */}
          <div className='mt-[35px]'>
            <h5 className='text-[20px] font-[TajawalMedium,sans-serif] text-[#3855A5]'>
              دورة تعلم اللغه العربية
            </h5>

            <p className='text-main text-[15px] mt-[24px]'>
              هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم
              في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار
              للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص
              مجموعة من الأحرف بشكل عشوائي أخذتها من نص، لتكوّن كتيّب بمثابة
              دليل أو مرجع شكلي لهذه الأحرف. خمسة قرون من الزمن لم تقضي على هذا
              النص، بل انه حتى صار مستخدماً وبشكله الأصلي في الطباعة والتنضيد
              الإلكتروني. انتشر بشكل كبير في ستينيّات هذا القرن مع إصدار رقائق
              "ليتراسيت" (Letraset) البلاستيكية تحوي مقاطع من هذا النص، وعاد
              لينتشر مرة أخرى مؤخراَ مع ظهور برامج النشر الإلكتروني مثل "ألدوس
              بايج مايكر"
            </p>
          </div>

          {/* What will you learn? */}
          <div className='mt-[60px] '>
            <h5 className='text-[20px] font-[TajawalMedium,sans-serif] text-[#3855A5]'>
              ماذا ستتعلم؟
            </h5>

            <p className='text-main text-[15px] mt-[24px]'>
              هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم
              في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار
              للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص
              مجموعة من الأحرف بشكل عشوائي أخذتها من نص، لتكوّن كتيّب بمثابة
              دليل أو مرجع شكلي لهذه الأحرف. خمسة قرون من الزمن لم تقضي على هذا
              النص، بل انه حتى صار مستخدماً وبشكله الأصلي في الطباعة والتنضيد
              الإلكتروني. انتشر بشكل كبير في ستينيّات هذا القرن مع إصدار رقائق
              "ليتراسيت" (Letraset) البلاستيكية تحوي مقاطع من هذا النص، وعاد
              لينتشر مرة أخرى مؤخراَ مع ظهور برامج النشر الإلكتروني مثل "ألدوس
              بايج مايكر"
            </p>
          </div>

          <div className='flex flex-col gap-10 lg:grid lg:grid-cols-4 lg:gap-4'>
            <div className='col-span-3'>
              {/* Swiper */}
              <TrainersComponents pageDetails />
            </div>
            <div className='flex mb-10 !w-full'>
              <div className='w-full flex items-end mb-10 max-w-[400px]'>
                <SubscriptionCard />
              </div>
            </div>
          </div>
        </div>

        <div className='col-span-4 !hidden'>
          {/* <div>
            <h5 className='text-[20px] font-[TajawalMedium,sans-serif] mb-2'>
              الخطه الدراسية
            </h5>

            <div
              className='border-soild border-[1px] overflow-x-hidden border-textGray custom-box-shadow-2 rounded-b-[8px] max-h-[480px] overflow-y-scroll'
              style={{
                scrollbarWidth: 'thin',
                scrollbarColor: '#2260aa #f0f0f0',
              }}
            >
              <button
                type='button'
                className='flex gap-3 hover:bg-background p-[10px] m-[2px] sm:w-full'
              >
                <div className='sm:w-full'>
                  <h5 className='text-primary font-[TajawalMedium,sans-serif] text-[20px] text-start'>
                    الدرس الأول
                  </h5>
                  <p className='text-main font-[TajawalMedium,sans-serif] text-[15px] text-start'>
                    مدخل الي اللغه العربية يساعدك علي فهم مبادئ اللغه.
                  </p>
                </div>

                <div className='bg-[#69A8C93B]'>
                  <Image
                    src='/assets/images/Online learning concept.svg'
                    width={110}
                    height={110}
                    alt='image'
                  />
                </div>
              </button>
              <button
                type='button'
                className='flex gap-3 hover:bg-background p-[10px] m-[2px] sm:w-full'
              >
                <div className='sm:w-full'>
                  <h5 className='text-primary font-[TajawalMedium,sans-serif] text-[20px] text-start'>
                    الدرس الأول
                  </h5>
                  <p className='text-main font-[TajawalMedium,sans-serif] text-[15px] text-start'>
                    مدخل الي اللغه العربية يساعدك علي فهم مبادئ اللغه. مدخل الي
                    اللغه العربية يساعدك علي فهم مبادئ اللغه. مدخل الي اللغه
                    العربية يساعدك علي فهم مبادئ اللغه.
                  </p>
                </div>

                <div className='bg-[#69A8C93B] max-w-[82px] max-h-[82px]'>
                  <Image
                    src='/assets/images/Online learning concept.svg'
                    width={110}
                    height={110}
                    alt='image'
                  />
                </div>
              </button>

              <button
                type='button'
                className='flex gap-3 hover:bg-background p-[10px] m-[2px] sm:w-full'
              >
                <div className='sm:w-full'>
                  <h5 className='text-primary font-[TajawalMedium,sans-serif] text-[20px] text-start'>
                    الدرس الأول
                  </h5>
                  <p className='text-main font-[TajawalMedium,sans-serif] text-[15px] text-start'>
                    مدخل الي اللغه العربية يساعدك علي فهم مبادئ اللغه.
                  </p>
                </div>

                <div className='bg-[#69A8C93B]'>
                  <Image
                    src='/assets/images/Online learning concept.svg'
                    width={110}
                    height={110}
                    alt='image'
                  />
                </div>
              </button>

              <button
                type='button'
                className='flex gap-3 hover:bg-background p-[10px] m-[2px] sm:w-full'
              >
                <div className='sm:w-full'>
                  <h5 className='text-primary font-[TajawalMedium,sans-serif] text-[20px] text-start'>
                    الدرس الأول
                  </h5>
                  <p className='text-main font-[TajawalMedium,sans-serif] text-[15px] text-start'>
                    مدخل الي اللغه العربية يساعدك علي فهم مبادئ اللغه.
                  </p>
                </div>

                <div className='bg-[#69A8C93B]'>
                  <Image
                    src='/assets/images/Online learning concept.svg'
                    width={110}
                    height={110}
                    alt='image'
                  />
                </div>
              </button>

              <button
                type='button'
                className='flex gap-3 hover:bg-background p-[10px] m-[2px] sm:w-full'
              >
                <div className='sm:w-full'>
                  <h5 className='text-primary font-[TajawalMedium,sans-serif] text-[20px] text-start'>
                    الدرس الأول
                  </h5>
                  <p className='text-main font-[TajawalMedium,sans-serif] text-[15px] text-start'>
                    مدخل الي اللغه العربية يساعدك علي فهم مبادئ اللغه.
                  </p>
                </div>

                <div className='bg-[#69A8C93B]'>
                  <Image
                    src='/assets/images/Online learning concept.svg'
                    width={110}
                    height={110}
                    alt='image'
                  />
                </div>
              </button>
            </div>
          </div> */}

          <div className='sm:flex sm:gap-2 flex-col lg:gap-0'>
            {/*  */}
            {/* <div className='border-soild sm:w-full border-[1px] p-6 border-textGray custom-box-shadow-2 rounded-[8px] my-[12px] xl:my-[24px]'>
              <h6 className='text-[20px] mb-[20px] text-secondary font-[TajawalMedium,sans-serif] text-center'>
                800.00LE
              </h6>

              <ul>
                <li className='text-main font-[TajawalMedium,sans-serif] flex items-center gap-3'>
                  <ArrorLeftBlue />
                  <span> إثني عشر محاضره شهريا</span>
                </li>
                <li className='text-main font-[TajawalMedium,sans-serif] flex items-center gap-3'>
                  <ArrorLeftBlue />
                  <span>ساعة للمحاضرة</span>
                </li>
                <li className='text-main font-[TajawalMedium,sans-serif] flex items-center gap-3'>
                  <ArrorLeftBlue />
                  <span>ثلاث حصص إسبوعيا</span>
                </li>
                <li className='text-main font-[TajawalMedium,sans-serif] flex items-center gap-3'>
                  <ArrorLeftBlue />
                  <span>الطلاب</span>
                </li>
              </ul>
            </div> */}
            <div className='border-soild sm:w-full border-[1px] py-4 border-textGray custom-box-shadow-3 rounded-[8px] my-[12px] xl:my-[24px]'>
              <p className='font-[TajawalBold,sans-serif] text-[#EEA62E] text-[24px] text-center'>
                800.00 LE
              </p>
            </div>

            <div className='border-soild sm:w-full border-[1px] py-4 border-textGray custom-box-shadow-3 rounded-[8px] my-[12px] xl:my-[24px]'>
              <ul>
                <li className='flex justify-center items-center gap-4 px-6'>
                  <span className='text-[#EEA62E] text-[20px]'>12</span>
                  <p className='text-[#4f4f4f] text-[16px] md:text-[18px] 2xl:!text-[20px]'>
                    إثني عشر محاضره شهريا
                  </p>
                </li>
                <hr className='my-[8px]' />
                <li className='flex justify-center items-center gap-4 px-6'>
                  <span className='text-[#EEA62E] text-[20px]'>
                    <ClockFi />
                  </span>
                  <p className='text-[#4f4f4f] text-[16px] md:text-[18px] 2xl:!text-[20px]'>
                    إثني عشر محاضره شهريا
                  </p>
                </li>
                <hr className='my-[8px]' />
                <li className='flex justify-center items-center gap-4 px-6'>
                  <span className='text-[#EEA62E] text-[20px]'>
                    <Layers />
                  </span>
                  <p className='text-[#4f4f4f] text-[16px] md:text-[18px] 2xl:!text-[20px]'>
                    إثني عشر محاضره شهريا
                  </p>
                </li>
                <hr className='my-[8px]' />
                <li className='flex justify-center items-center gap-4 px-6'>
                  <span className='text-[#EEA62E] text-[20px]'>
                    <VectorStudent />
                  </span>
                  <p className='text-[#4f4f4f] text-[16px] md:text-[18px] 2xl:!text-[20px]'>
                    إثني عشر محاضره شهريا
                  </p>
                </li>
              </ul>
            </div>

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
        </div>
      </div>

      <div className='flex flex-col sm:!grid  sm:!grid-cols-2 lg:!grid-cols-3 gap-8 xl:gap-16  xl:max-w-[90%]'>
        <PricePlanCard />
        <PricePlanCard />
        <PricePlanCard />
      </div>

      {/* ⭐باصي الداتا من هنا و اعمل لوب جوة */}
      <CustomerOpinions pageDetails={true} />

      {/* ⭐باصي الداتا من هنا و اعمل لوب جوة */}
      <ImportantCourses courses />
    </div>
  );
};

export default CoursesPageId;
