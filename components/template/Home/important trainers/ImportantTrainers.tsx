"use client";

import TrainersCard from "@/components/molecules/TrainersCard/TrainersCard";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
const ImportantTrainers = ({ trainers }: any) => {
  return (
    <div className="container my-[100px] ">
      <div className="flex flex-col items-center mb-[4.5rem]">
        <h3 className="text-[29px] lg:text-[34px] text-primary font-[TajawalBold,sans-serif]">
          أهم المدربون
        </h3>
        <p className="text-main text-[15px] lg:text-[17px] text-center md:w-[40%]">
          تعليم القرءان الكريم بالأحكام والقراءه والكتابة بطريقة نور البيان{" "}
        </p>
      </div>

      {/* Swiper */}
      <Swiper
        dir={"rtl"}
        slidesPerView={1}
        breakpoints={{
          300: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          520: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          800: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1060: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1350: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
        }}
      >
        {trainers?.map((item: any) => (
          <SwiperSlide key={item?.id}>
            <div className="flex flex-col items-center max-w-[280px] sm:max-w-[unset] mx-auto">
              <TrainersCard
                image={item?.image}
                title={item?.name_ar}
                description={item?.description_ar}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImportantTrainers;
