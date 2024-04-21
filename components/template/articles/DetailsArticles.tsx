'use client';
import RateAction from '@/components/molecules/RateAction/RateAction';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const DetailsArticles = ({ textSize, params }: any) => {
  const [articleData, setArticleData] = useState<any>({});
  console.log("🚀 ~ DetailsArticles ~ articleData:", articleData)
  useEffect(() => {
    // Function to fetch article data
    const fetchArticleData = async () => {
      try {
        const response = await fetch(
          `https://bayan.savvyhost.io/api/posts/${params?.id}`
        );
        const data = await response.json();
        setArticleData(data?.data);
      } catch (error) {
        console.error('Failed to fetch article data:', error);
      }
    };

    fetchArticleData();
  }, [params?.id]);

  return (
    <div className='order-1 xs:order-2'>
      <h4 className='text-primary text-[36px]  '>{articleData?.title_ar}</h4>
      <div className='flex flex-col lg:grid lg:grid-cols-11 gap-x-[50px] gap-y-[40px]'>
        <div className='col-span-7 lg:col-span-6'>
          <p
            className='text-[#616161]  new-font   mt-2'
            style={{ fontSize: `${textSize}px` }}
          >
            {articleData?.description_ar}
          </p>
        </div>

        <div className='w-auto md:w-[400px] h-[300px] max-w-[385px] max-h-[300px] col-span-4 lg:col-span-5 '>
          <Image
            src={articleData?.image}
            width={400}
            height={300}
            alt='articles details'
            className='!w-full max-h-[300px]'
          />
        </div>

        <div className='col-span-11'>
          <p
              dangerouslySetInnerHTML={{ __html: articleData?.content_ar }}
            className='text-[#616161]   mt-2  new-font'
            style={{ fontSize: `${textSize}px` }}
          >
            {/* {articleData?.content_ar} */}
          </p>
        </div>
      </div>

      <h6 className='text-[22px] flex flex-col xs:!flex-row xs:!gap-7 items-center gap-2   mt-[40px] text-secondary'>
        <span className='md:me-[40px]'>هل أعجبك المقال؟</span>
        <div className='flex gap-4 '>
          <RateAction />
        </div>
      </h6>
    </div>
  );
};

export default DetailsArticles;
