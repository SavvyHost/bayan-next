import React from 'react';

const AlbumHighlightCard = () => {
  return (
    <div
      className='py-[80px] px-[30px] max-h-[24px] rounded-[12px] w-full min-h-[240px] bg-contain bg-repeat-round highlights-style relative'
      style={{
        backgroundImage: "url('/assets/images/Skillstork-1568x882.webp')",
      }}
    >
      <h4 className='text-white z-10 relative font-bold'>
        الفائز بمسابقه جزء عم
      </h4>
      <h5 className='text-white z-10 relative '>
        <span className='text-secondary z-10 relative font-bold'>الطالب: </span>{' '}
        أحمد محمد
      </h5>
    </div>
  );
};

export default AlbumHighlightCard;
