import MainButton from "@/components/atoms/MainButton";
import SecondaryCard from "@/components/molecules/SecondaryCard/SecondaryCard";
import { useLocale, useTranslations } from "next-intl";

const ImportantArticles = ({ posts }: any) => {
  const localeActive = useLocale();
  const isRTL = localeActive == "ar";
  const t = useTranslations();

  return (
    <div className="container my-[100px] ">
      <div className="flex flex-col items-center">
        <h3 className="text-[29px] lg:text-[34px] text-primary new-font  font-bold relative pb-2  mb-3">
          {t("Most important articles")}
          <span className="block absolute bottom-0 left-0 h-[2px] w-full bg-[#d3971b]"></span>
        </h3>
        {/* <p className="text-main text-[15px] lg:text-[17px] font-semibold text-center md:w-[40%]">
          تعليم القرءان الكريم بالأحكام والقراءه والكتابة بطريقة نور البيان عن
          طريق الهواتف الذكيه
        </p> */}
      </div>

      <div className="flex flex-col items-center sm:grid sm:grid-cols-2 lg:grid-cols-3  xl:flex xl:flex-row xl:gap-16 xl:justify-center  gap-16 justify-items-center mt-[40px]">
        {posts.map((item: any) => (
          <div className="max-w-[340px] md:animation-translateY" key={item?.id}>
            <SecondaryCard
              id={item?.id}
              img={item?.image}
              title={isRTL ? item?.title_ar : item?.title_en}
              date={isRTL ? item?.created_at_ar : item?.created_at_en}
              description={
                isRTL
                  ? item?.description_ar?.slice(0, 30)
                  : item?.description_en.slice(0, 30)
              }
              articlesPath={`/articles/${item?.id}`}
              important
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center w-full">
        <div className="w-max h-[42px] mt-[30px]">
          <MainButton title="عرض المزيد" link="/articles" />
        </div>
      </div>
    </div>
  );
};

export default ImportantArticles;
