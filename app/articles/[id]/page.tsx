'use client';

import AWordSVG from '@/components/atoms/icons/AWord';
import Minus from '@/components/atoms/icons/Minus';
import Plural from '@/components/atoms/icons/Plural';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import {
  FacebookShareButton,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from 'react-share';

import copy from 'clipboard-copy';
import RateAction from '@/components/molecules/RateAction/RateAction';
import ArticelControll from '@/components/atoms/icons/ArticelControll';

const ArticlesPageId = () => {
  const [isCopied, setIsCopied] = useState(false);

  const [openSettings, setOpenSettings] = useState(false);

  const currentPageUrl = window.location.href;

  const handleCopyLink = () => {
    const currentPageUrl = window.location.href;

    copy(currentPageUrl);

    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  const [textSize, setTextSize] = useState(18);

  const increaseTextSize = () => {
    setTextSize((prevSize) => Math.min(30, prevSize + 2));
  };

  const decreaseTextSize = () => {
    setTextSize((prevSize) => Math.max(12, prevSize - 2));
  };

  return (
    <>
      {/* <div className='w-full container '>
        <ArticelControll />
      </div> */}
      <div className='container flex flex-col xs:!flex-row gap-[2.5rem] my-20'>
        {/*  */}
        <div
          className={`w-full xs:w-[30px] lg:!w-[100px] order-2 xs:order-1 flex flex-col gap-[20px]`}
        >
          <div className='xs:flex hidden  flex-col gap-6 items-center bg-[#E6E6E6] p-[24px] rounded-[63px] py-[40px]'>
            <button
              onClick={increaseTextSize}
              className='text-primary text-[45px] 
'
            >
              <div className=''>
                <Plural />
              </div>
            </button>
            <div>
              <AWordSVG />
            </div>
            <button
              className='text-primary text-[45px] max-h-[1rem]'
              onClick={decreaseTextSize}
            >
              <div className=''>
                <Minus />
              </div>
            </button>
          </div>

          <div className='flex xs:flex-col  gap-6 items-center bg-[#E6E6E6] p-[24px] rounded-[63px] xs:py-[40px]'>
            <ul className='flex xs:flex-col justify-center xs:gap-[30px] w-full xs:w-[unset] gap-3'>
              <li className='w-full min-w-[28px] flex justify-center items-center'>
                <TelegramShareButton url={currentPageUrl}>
                  <Image
                    src='/assets/images/soc1.png'
                    alt='social-1'
                    width={28}
                    height={28}
                  />
                </TelegramShareButton>
              </li>
              <li className='w-full min-w-[28px] flex justify-center items-center'>
                <FacebookShareButton url={currentPageUrl}>
                  <Image
                    src='/assets/images/soc2.png'
                    alt='social-2'
                    width={28}
                    height={28}
                  />
                </FacebookShareButton>
              </li>
              <li className='w-full min-w-[28px] flex justify-center items-center'>
                <TelegramShareButton url={currentPageUrl}>
                  <Image
                    src='/assets/images/soc3.png'
                    alt='social-3'
                    width={28}
                    height={28}
                  />
                </TelegramShareButton>
              </li>
              <li className='w-full min-w-[28px] flex justify-center items-center'>
                <WhatsappShareButton url={currentPageUrl}>
                  <WhatsappIcon size={28} round />
                </WhatsappShareButton>
              </li>
              <li className='w-full min-w-[28px] flex justify-center items-center'>
                <TwitterShareButton url={currentPageUrl}>
                  <TwitterIcon size={28} round />
                </TwitterShareButton>
              </li>
              <li
                className={`w-full min-w-[28px] min-h-[28px] items-center rounded-full flex justify-center ${
                  isCopied && 'bg-secondary p-[4px]'
                }`}
                onClick={handleCopyLink}
                style={{ cursor: 'pointer' }}
              >
                <Image
                  src='/assets/images/soc6.png'
                  alt='social-6'
                  className='max-w-[18px] max-h-[18]'
                  width={18}
                  height={18}
                />
              </li>
            </ul>
          </div>
        </div>
        {/*  */}

        <div className='order-1 xs:order-2'>
          <h4 className='text-primary text-[36px] font-[TajawalMedium,sans-serif]'>
            عنوان المقالة
          </h4>
          <div className='flex flex-col lg:grid lg:grid-cols-11 gap-x-[50px] gap-y-[40px]'>
            <div className='col-span-7 lg:col-span-6'>
              <p
                className='text-[#616161] font-[TajawalMedium,sans-serif] mt-2'
                style={{ fontSize: `${textSize}px` }}
              >
                معنا.. تخطَّ حواجز اللغة. منصة علمني العربية منصة تعليمية تهدف
                لتعليم اللغة العربية لغير الناطقين بها، عبر تطبيقات الهواتف
                الذكية.لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على
                العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه
                … بروشور او فلاير على سبيل المثال … او نماذج مواقع انترنت … وعند
                موافقه العميل المبدئيه على التصميم يتم ازالة هذا النص من التصميم
                ويتم وضع النصوص النهائية المطلوبة للتصميم ويقول البعض ان وضع
                النصوص التجريبية بالتصميم قد تشغل المشاهد عن وضع الكثير من
                الملاحظات او الانتقادات للتصميم الاساسي. وخلافاَ للاعتقاد السائد
                فإن لوريم إيبسوم ليس نصاَ عشوائياً، بل إن له جذور في الأدب
                اللاتيني الكلاسيكي منذ العام 45 قبل الميلاد. من كتاب “حول أقاصي
                الخير والشر”
              </p>
            </div>

            <div className='w-auto md:w-[400px] h-[300px] max-w-[385px] max-h-[300px] col-span-4 lg:col-span-5 '>
              <Image
                src='/assets/images/articlesdetails.webp'
                width={400}
                height={300}
                alt='articles details'
              />
            </div>

            <div className='col-span-11'>
              <p
                className='text-[#616161] font-[TajawalMedium,sans-serif] mt-2'
                style={{ fontSize: `${textSize}px` }}
              >
                معنا.. تخطَّ حواجز اللغة. منصة علمني العربية منصة تعليمية تهدف
                لتعليم اللغة العربية لغير الناطقين بها، عبر تطبيقات الهواتف
                الذكية.لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على
                العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه
                … بروشور او فلاير على سبيل المثال … او نماذج مواقع انترنت … وعند
                موافقه العميل المبدئيه على التصميم يتم ازالة هذا النص من التصميم
                ويتم وضع النصوص النهائية المطلوبة للتصميم ويقول البعض ان وضع
                النصوص التجريبية بالتصميم قد تشغل المشاهد عن وضع الكثير من
                الملاحظات او الانتقادات للتصميم الاساسي. وخلافاَ للاعتقاد السائد
                فإن لوريم إيبسوم ليس نصاَ عشوائياً، بل إن له جذور في الأدب
                اللاتيني الكلاسيكي منذ العام 45 قبل الميلاد. من كتاب “حول أقاصي
                الخير والشر”
              </p>
            </div>
          </div>

          <h6 className='text-[22px] flex flex-col xs:!flex-row xs:!gap-7 items-center gap-2 font-[TajawalMedium,sans-serif] mt-[40px] text-secondary'>
            <span className='md:me-[40px]'>هل أعجبك المقال؟</span>
            <div className='flex gap-4 '>
              <RateAction />
            </div>
          </h6>
        </div>
      </div>
    </>
  );
};

export default ArticlesPageId;
