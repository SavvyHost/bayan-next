/* eslint-disable react/no-unescaped-entities */
import { useLocale,useTranslations, } from "next-intl";
import {getTranslations} from 'next-intl/server';

import ArrowLeft from "@/components/atoms/icons/ArrowLeft";
import PricePlanCard from "@/components/molecules/price plan/PricePlanCard";
import SubscriptionCard from "@/components/molecules/subscriptionCard/SubscriptionCard";
import CustomerOpinions from "@/components/template/Home/customer opinions/CustomerOpinions";
import TrainersComponents from "@/components/template/courses/TrainersComponents";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";

async function getData(id: any) {
  const res = await fetch(`https://bayan.savvyhost.io/api/courses/${id}`,{  cache: "no-store"});
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const CoursesPageId = async ({ params }: { params: { id: string } }) => {
  const data = await getData(params?.id);
  const localeActive = useLocale();
  const isRTL = localeActive == "ar";
  const t = await getTranslations('CoursesPage');

  return (
    <div className="container">
      <div className="flex flex-col lg:grid lg:grid-cols-12 gap-[60px] mt-[20px] mb-[50px] lg:mb-[100px] ">
        <div className="xl:col-span-9 col-span-12">
          <h4 className="hidden gap-2 mb-[14px] text-[14px] md:flex">
            {isRTL ? data?.data?.title_ar : data?.data?.title_en}
            <span>
              <ArrowLeft />
            </span>
            {t("Introduction to the Arabic language")}
            {/* مدخل الي اللغه العربية */}
          </h4>

          <div
            className="py-[80px] px-[30px] max-h-[24px] rounded-[12px] w-full  md:min-h-[450px] min-h-[220px] bg-cover bg-repeat-round highlights-style courses-details relative"
            style={{
              backgroundImage: `url(${data?.data?.image_url})`,
            }}
          />

          {/* description courses */}
          <div className="mt-[35px]">
            <h5 className="text-[20px]   text-[#3855A5]">
              {isRTL ? data?.data?.title_ar : data?.data?.title_en}
            </h5>

            <p className="text-main text-[15px] mt-[24px]">
              {isRTL ? data?.data?.description_ar : data?.data?.description_en}
            </p>
          </div>

          {/* What will you learn? */}
          <div className="mt-[60px] ">
            <h5 className="text-[20px]   text-[#3855A5]">{t("What will you learn")} </h5>

            <p className="text-main text-[15px] mt-[24px]">
              {isRTL
                ? data?.data?.learning_objectives_ar
                : data?.data?.learning_objectives_en}
            </p>
          </div>
        </div>

        <div className="col-span-3 hidden xl:!flex">
          <div className="sm:flex sm:gap-2 flex-col lg:gap-0 !sticky !top-0">
            <div className="border-soild sm:w-full !sticky !top-5 sm:flex sm:flex-col sm:justify-center border-[1px] p-6 border-textGray custom-box-shadow-2 rounded-[8px] my-[12px] xl:my-[24px]">
              <h6 className="text-[20px] mb-[20px] text-secondary   text-center">
                {/* إشترك معنا الأن */}
                {t("Subscribe with us now")}
              </h6>

              <ul className="flex gap-10 justify-center">
                <li>
                  <Link href="/">
                    <Image
                      src="/assets/images/whatsapp (1).png"
                      width={42}
                      height={42}
                      alt="social"
                    />
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <Image
                      src="/assets/images/Group 1000001805.svg"
                      width={42}
                      height={42}
                      alt="social"
                    />
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <Image
                      src="/assets/images/telegram.png"
                      width={42}
                      height={42}
                      alt="social"
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:!grid  sm:!grid-cols-2 lg:!grid-cols-3 gap-8 xl:gap-16  xl:max-w-[90%]">
        {data?.data?.plans.map((item: any, index: string) => (
          <PricePlanCard item={item} key={index} />
        ))}
      </div>

      <div className="flex flex-col gap-10 lg:grid lg:grid-cols-4 lg:gap-4">
        <div className="col-span-4">
          {/* Swiper */}
          <TrainersComponents pageDetails={true} data={data?.data?.trainers} />
        </div>
        
      </div>
      <div className="flex justify-center mb-10 !w-full xl:hidden">
          <div className="w-full flex justify-center items-end mb-10 max-w-[400px]">
            <SubscriptionCard />
          </div>
        </div> 

      {/* ⭐باصي الداتا من هنا و اعمل لوب جوة */}
      {/* <CustomerOpinions pageDetails={true} /> */}
      

      {/* ⭐باصي الداتا من هنا و اعمل لوب جوة */}
      {/* <ImportantCourses courses /> */}
    </div>
  );
};

export default CoursesPageId;
