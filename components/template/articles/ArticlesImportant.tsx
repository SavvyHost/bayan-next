/* eslint-disable @next/next/no-img-element */
import MainButton from "@/components/atoms/MainButton";
import SecondaryCard from "@/components/molecules/SecondaryCard/SecondaryCard";
import Link from "next/link";
import React from "react";

const ArticlesImportant = ({ data }: any) => {
  return (
    <>
      <div className="container py-[40px] md:my-[50px] ">
        <div className="flex flex-col items-center">
          <h3 className="text-[29px] lg:text-[34px] text-primary font-[TajawalBold,sans-serif]">
            أهم المقالات
          </h3>
          <p className="text-main text-[15px] lg:text-[17px] text-center md:w-[40%]">
            تعليم القرءان الكريم بالأحكام والقراءه والكتابة بطريقة نور البيان عن
            طريق الهواتف الذكيه{" "}
          </p>
        </div>

        {/*  */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 mt-[45px] md:mt-[70px] bg-background rounded-[12px] custom-box-shadow-2">
          <div className="col-span-7 flex flex-col gap-3 px-[15px] py-[25px] md:p-[45px] order-2 lg:!order-1">
            <h3 className="text-[28px] xs:text-[36px] text-primary font-[TajawalMedium,sans-serif]">
              عنوان المقاله
            </h3>

            <span className="text-secondary font-[TajawalMedium,sans-serif]">
              27 يناير 2024
            </span>

            <p className="font-[TajawalMedium,sans-serif] text-[#616161] xl:pe-[100px]">
              معنا.. تخطَّ حواجز اللغة. منصة علمني العربية منصة تعليمية تهدف
              لتعليم اللغة العربية لغير الناطقين بها، عبر تطبيقات الهواتف
              الذكية.لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على
              العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه …
              بروشور او فلاير على سبيل المثال … او نماذج مواقع انترنت …
            </p>

            <div>
              <Link
                href={"/articles"}
                className="text-primary underline  font-bold text-[20px] hover:text-secondary"
              >
                إقرأ المزيد
              </Link>
            </div>
          </div>
          <div className="col-span-5 lg:order-2">
            <img
              src="/assets/images/2b5e07ef5830af050d04e390fcadfaa8.webp"
              alt="complete courses"
              className="rounded-t-[12px] lg:!rounded-e-[12px] w-full h-full"
            />
          </div>
        </div>

        {/* أهم المقالات */}

        <div>
          <div className="flex flex-col items-center mt-[100px]">
            <h3 className="text-[29px] lg:text-[34px] text-primary font-[TajawalBold,sans-serif]">
              أهم المقالات
            </h3>
            <p className="text-main text-[15px] lg:text-[17px] text-center md:w-[40%]">
              تعليم القرءان الكريم بالأحكام والقراءه والكتابة بطريقة نور البيان
              عن طريق الهواتف الذكيه{" "}
            </p>
          </div>

          <div className="flex flex-col items-center sm:grid sm:grid-cols-2 lg:grid-cols-3  xl:flex xl:flex-row xl:gap-16 xl:justify-center  gap-16 justify-items-center mt-[40px]">
            {data?.slice(0,3)?.map((item: any) => (
              <div
                className="max-w-[350px] md:animation-translateY"
                key={item?.id}
              >
                <SecondaryCard
                  id={item?.id}
                  img={item?.image}
                  title={item?.title_ar}
                  date="27 يناير 2024"
                  description={item?.description_ar}
                  articlesPath="/articles"
                  important
                />
              </div>
            ))}
          </div>
        </div>

        {/* أحدث المقالات */}

        <div>
          <div className="flex flex-col items-center mt-[100px]">
            <h3 className="text-[29px] lg:text-[34px] text-primary font-[TajawalBold,sans-serif]">
              أحدث المقالات
            </h3>
            <p className="text-main text-[15px] lg:text-[17px] text-center md:w-[40%]">
              تعليم القرءان الكريم بالأحكام والقراءه والكتابة بطريقة نور البيان{" "}
            </p>
          </div>

          <div className="flex flex-col items-center sm:grid sm:grid-cols-2 lg:grid-cols-3  gap-8 justify-items-center mt-[40px]">
            {data?.map((item: any) => (
              <div
                className="max-w-[340px] md:animation-translateY"
                key={item?.id}
              >
                <SecondaryCard
                  id={item?.id}
                  img={item?.image}
                  title={item?.title_ar}
                  date="27 يناير 2024"
                  description={item?.description_ar}
                  articlesPath="/articles"
                  important
                />
              </div>
            ))}
          </div>
          <div className="flex justify-center w-full">
            <div className="w-max h-[42px] mt-[30px]">
              <MainButton title="عرض المزيد" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticlesImportant;
