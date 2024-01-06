import AlbunCard from '@/components/molecules/album card/AlbumCard';
import React from 'react';

const Album = () => {
  return (
    <div className='container my-[8rem] '>
      <h3 className='text-[29px] lg:text-[34px] text-primary font-[TajawalBold,sans-serif]'>
        أهم الإنجازات
      </h3>

      <div className='custom-grid my-6 '>
        <AlbunCard img='/assets/images/06db2b433cca9619b3d5f50fc913e7c8.webp' />
        <AlbunCard img='/assets/images/2b5e07ef5830af050d04e390fcadfaa8.webp' />
        <AlbunCard img='/assets/images/10eafa8e37c4286c2a5840bf8a38631c.webp' />

        <AlbunCard img='/assets/images/0e57e0fe2d18f6380b2fb25927b3ed6f.webp' />
        <AlbunCard img='/assets/images/10eafa8e37c4286c2a5840bf8a38631c.webp' />

        <AlbunCard img='/assets/images/10eafa8e37c4286c2a5840bf8a38631c.webp' />
        <AlbunCard img='/assets/images/10eafa8e37c4286c2a5840bf8a38631c.webp' />
        <AlbunCard img='/assets/images/10eafa8e37c4286c2a5840bf8a38631c.webp' />

        <AlbunCard img='/assets/images/10eafa8e37c4286c2a5840bf8a38631c.webp' />
        <AlbunCard img='/assets/images/10eafa8e37c4286c2a5840bf8a38631c.webp' />
      </div>
    </div>
  );
};

export default Album;
