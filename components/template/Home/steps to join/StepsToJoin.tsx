import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const StepsToJoin = ({ data }: any) => {
  const localeActive = useLocale();
  const isRTL = localeActive == "ar";
  const t = useTranslations();

  return (
    <div className="container py-8">
      <p className="text-[#4F4F4F] text-[16px] md:text-[17px] text-center max-w-[400px] mx-auto mb-4">
          {/* معنا.. تخطَّ حواجز اللغة. منصة علمني العربية منصة تعليمية تهدف
          لتعليم اللغة العربية لغير الناطقين بها، عبر تطبيقات الهواتف الذكية. */}
          اهلا بك في أكاديمية بيان يمكنك حفظ القرآن الكريم بسهولة انت وأطفالك مع مجموعة كبيرة من معلمين وشيوخ الأزهر الشريف 

      </p>
      <div className=" flex flex-col md:flex-row">
        <div className="md:w-[70%] flex flex-col gap-3 col-span-2">
          <h6 className="text-[#EFBB43]   text-[22px] md:text-[26px] font-bold new-font">
            {t("Simple steps to join")}
          </h6>
          <div className="mt-7 how-to-start px-5">
            <ul className="flex flex-col gap-6 ">
              {isRTL
                ? data?.join_steps_ar?.map((item: any, index: any) => (
                    <li
                      className="text-[#4F4F4F] text-[18px] md:text-[20px] "
                      key={index}
                    >
                      {index + 1}. {item}
                    </li>
                  ))
                : data?.join_steps_en?.map((item: any, index: any) => (
                    <li
                      className="text-[#4F4F4F] text-[18px] md:text-[20px]"
                      key={index}
                    >
                      {index + 1}. {item}
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
