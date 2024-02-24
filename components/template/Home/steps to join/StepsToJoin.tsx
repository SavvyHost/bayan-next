import Image from "next/image";
import React from "react";

const StepsToJoin = ({ data }: any) => {
  console.log("🚀 ~ StepsToJoin ~ data:", data);
  return (
    <div className="container py-8">
      <div className="md:grid flex flex-col grid-cols-3">
        <div className="md:w-[70%] flex flex-col gap-3 col-span-2">
          <h6 className="text-[#EFBB43] font-[TajawalMedium,sans-serif] text-[22px] md:text-[26px]">
            خطوات بسيطه للإنضمام
          </h6>
          <p className="text-[#4F4F4F] text-[14px] md:text-[15px]">
            معنا.. تخطَّ حواجز اللغة. منصة علمني العربية منصة تعليمية تهدف
            لتعليم اللغة العربية لغير الناطقين بها، عبر تطبيقات الهواتف الذكية.
          </p>

          <div className="mt-7 how-to-start">
            <ul className="flex flex-col gap-6 ">
              {data?.join_steps_ar?.map((item:any, index:any) => (
                <li
                  className="text-[#4F4F4F] text-[18px] md:text-[20px]"
                  key={index}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex justify-center items-center mt-8 col-span-1">
          <Image
            src="/assets/images/2.webp"
            width={440}
            height={440}
            alt="quran"
          />
        </div>
      </div>
    </div>
  );
};

export default StepsToJoin;
