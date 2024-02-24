"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import MainButton from "@/components/atoms/MainButton";
import classes from "./HomeSection.module.css";

const HeroSection = ({ slides }: any) => {
  const adjustSwiperWrapperHeight = (swiper: any) => {
    const currentSlideHasFirstSlide =
      swiper.slides[swiper.activeIndex].querySelector(".firstSlide");
    const swiperWrapper = swiper.el.querySelector(".swiper-wrapper");
    const isScreenWidthAbove768 = window.innerWidth <= 768;

    if (swiperWrapper && isScreenWidthAbove768) {
      if (currentSlideHasFirstSlide) {
        swiperWrapper.style.height = "28rem";
      } else {
        swiperWrapper.style.height = "auto";
      }
    } else if (swiperWrapper) {
      swiperWrapper.style.height = "auto";
    }
  };

  return (
    <div className="here-section">
      <Swiper
        onSlideChange={(swiper) => adjustSwiperWrapperHeight(swiper)}
        onInit={(swiper) => adjustSwiperWrapperHeight(swiper)}
        dir={"rtl"}
        slidesPerView={1}
        loop
        style={{
          //@ts-ignore
          "--swiper-pagination-color": "#2260AA",
          "--swiper-pagination-bullet-inactive-color": "#EEA62E",
          "--swiper-pagination-bullet-inactive-opacity": "1",
          "--swiper-pagination-bullet-width": "25px",
          "--swiper-pagination-progressbar-size": "8px",
        }}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        watchSlidesVisibility
        watchSlidesProgress
      >
        {slides?.map((item:any) => (
          <SwiperSlide
            key={item?.id}
            className={`!bg-[#2260AA] !max-h-[40rem] custom-slide-swipe bg-no-repeat bg-contain !object-contain  `}
            style={{backgroundImage:`url(${item?.image})`}}
          >
            <div className="container firstSlide hero-section-custom flex flex-col md:grid md:grid-cols-2 min-h-[13rem] xs:min-h-[15rem] lg:!min-h-[29.6875rem] sm:!min-h-[22rem] py-[20px] pb-[3.5rem] md:py-[80px] gap-7 ">
              {/* content */}
              <div className="flex flex-col gap-1 order-2 md:!order-1">
                <h2 className="text-[#EFBB43] font-[TajawalBold,sans-serif] text-[27px] md:text-[40px] lg:!text-[50px]">
                  {item?.title_ar}
                </h2>

                <h3 className=" font-[TajawalMedium,sans-serif] text-secondary text-[25px] md:text-[30px] lg:!text-[36px]">
                {item?.subtitle_ar}

                </h3>

                <p className="text-[16px]  md:!text-[20px] text-textGray font-[TajawalMedium,sans-serif] md:w-[90%] xl:!w-[70%] text-white">
                {item?.description_ar}

                </p>

                <div className="mt-[30px] w-[150px] h-[45px]">
                  <MainButton title= {item?.button_text_ar}/>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSection;
