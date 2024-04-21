import AlbumCard from '@/components/molecules/album card/AlbumHighlightCard';
import { useTranslations } from 'next-intl';
import React from 'react';

const Highlights = ({ data }: any) => {
  console.log("🚀 ~ Highlights ~ data:", data)
  const t = useTranslations();

  return (
    <div className='container mt-[4rem]'>
      <h3 className='text-[29px] lg:text-[34px] new-font text-primary pb-2  font-bold relative w-max  mb-3'>
      {t("highlights")}{" "}
        <span className='block absolute bottom-0 left-0 h-[2px] w-full bg-[#d3971b]'></span>
      </h3>
      <div className='flex flex-col gap-10 sm:grid sm:grid-cols-2  lg:!grid-cols-3 my-6'>
        {data?.map((item: any) => (
          <AlbumCard key={item?.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Highlights;
