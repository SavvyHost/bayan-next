/* eslint-disable @next/next/no-img-element */
import React from 'react';

const AlbumCard = ({ img }: any) => {
  return (
    <div className='albun-card-style rounded-[8px]'>
      <img src={img} alt='img' className='rounded-[8px] h-[300px] w-full' />

    </div>
  );
};

export default AlbumCard;
