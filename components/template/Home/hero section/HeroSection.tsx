"use client";
import MainButton from "@/components/atoms/MainButton";
import { useLocale } from "next-intl";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination,Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const HeroSection = ({ slides }: any) => {
  const localeActive = useLocale();
  const isRTL = localeActive == "ar";
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
    // Old Part
    // <div className="here-section">
    //   <Swiper
    //     onSlideChange={(swiper) => adjustSwiperWrapperHeight(swiper)}
    //     onInit={(swiper) => adjustSwiperWrapperHeight(swiper)}
    //     dir={isRTL ? "rtl" : "ltr"}
    //     slidesPerView={1}
    //     loop
    //     style={{
    //       //@ts-ignore
    //       "--swiper-pagination-color": "#2260AA",
    //       "--swiper-pagination-bullet-inactive-color": "#EEA62E",
    //       "--swiper-pagination-bullet-inactive-opacity": "1",
    //       "--swiper-pagination-bullet-width": "25px",
    //       "--swiper-pagination-progressbar-size": "8px",
    //     }}
    //     pagination={{ clickable: true }}
    //     modules={[Pagination]}
    //     watchSlidesVisibility
    //     watchSlidesProgress
    //     // autoHeight={true}
    //   >
    //     {slides?.map((item: any) => (
    //       <SwiperSlide
    //         key={item?.id}
    //         className={`!bg-[#F9F7F7] bg-no-repeat bg-cover  !object-contain bg-[url(/assets/images/pattern1.png)] `}
    //       >
    //         <div className="container hero-section-custom flex flex-col md:grid md:grid-cols-2 min-h-[13rem] xs:min-h-[15rem] lg:!min-h-[29.6875rem] sm:!min-h-[22rem] py-[20px] pb-[3.5rem] md:py-[80px] gap-7">
    //           {/* content */}
    //           <div className="flex flex-col items-center md:items-start gap-1 ">
    //             <h2 className="text-[#2260AA] font-[TajawalBold,sans-serif] text-[27px] md:text-[40px] lg:!text-[50px]">
    //               {isRTL ? item?.title_ar : item?.title_en}
    //             </h2>

    //             <h3 className=" font-[TajawalMedium,sans-serif] text-secondary text-[25px] md:text-[30px] lg:!text-[36px]">
    //               {isRTL ? item?.subtitle_ar : item?.subtitle_en}
    //             </h3>

    //             <p className="text-[16px]  md:!text-[20px] text-textGray font-[TajawalMedium,sans-serif] md:w-[90%] xl:!w-[70%] ">
    //               {isRTL ? item?.description_ar : item?.description_en}
    //             </p>

    //             <div className="mt-[30px] w-[200px] h-[45px]">
    //               <MainButton
    //                 title={isRTL ? item?.button_text_ar : item?.button_text_en}
    //                 link={item?.button_link}
    //               />
    //             </div>
    //           </div>

    //           {/* Image */}
    //           <div className="lg:me-9 flex !justify-center xl:!justify-end ">
    //             <img
    //               className="!max-w-[300px] h-[300px] !max-h-[300px] md:!max-w-[450px] md:!max-h-[450px] w-full"
    //               src={item?.image}
    //               alt="hero image"
    //             />
    //           </div>
    //         </div>
    //       </SwiperSlide>
    //     ))}
    //   </Swiper>
    // </div>


    <div className="here-section">
      <Swiper
        onSlideChange={(swiper) => adjustSwiperWrapperHeight(swiper)}
        onInit={(swiper) => adjustSwiperWrapperHeight(swiper)}
        dir={isRTL ? "rtl" : "ltr"}
        slidesPerView={1}
        loop
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        style={{
          //@ts-ignore
          "--swiper-pagination-color": "#2260AA",
          "--swiper-pagination-bullet-inactive-color": "#EEA62E",
          "--swiper-pagination-bullet-inactive-opacity": "1",
          "--swiper-pagination-bullet-width": "25px",
          "--swiper-pagination-progressbar-size": "8px",
        }}
        pagination={{ clickable: true }}
        modules={[Pagination,Autoplay]}
        watchSlidesVisibility
        watchSlidesProgress
        // autoHeight={true}
      >
        {slides?.map((item: any) => (
          <SwiperSlide
            key={item?.id}
            className={`!bg-[#F9F7F7] bg-no-repeat bg-cover  !object-contain bg-[url(/assets/images/pattern1.png)] `}
          >
            <div className=" hero-section-custom min-h-[305px]  md:min-h-[480px] ">
              {/* Image */}
              <div className=" flex !justify-center xl:!justify-end ">
                <img
                  className="w-full h-[300px] md:min-h-[457px] "
                  src={item?.image}
                  alt="hero image"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSection;
