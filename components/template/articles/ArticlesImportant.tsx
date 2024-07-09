/* eslint-disable @next/next/no-img-element */
import SecondaryCard from "@/components/molecules/SecondaryCard/SecondaryCard";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

const ArticlesImportant = ({ data }: any) => {
  const localeActive = useLocale();
  const isRTL = localeActive === "ar";
  const t = useTranslations();

  return (
    <>
      <div className={`container py-[40px] md:my-[50px] ${isRTL ? "rtl" : ""}`}>
        <div className="flex flex-col items-center">
          <h3 className="text-[29px] lg:text-[34px] new-font text-primary pb-2 font-bold relative w-max mb-3">
            {t("mostImportantArticles")}
            <span className="block absolute bottom-0 left-0 h-[2px] w-full bg-[#d3971b]"></span>
          </h3>
          <p className="text-main text-[15px] lg:text-[17px] font-semibold text-center md:w-[40%] mt-2">
            {t("importantArticlesDescription")}
          </p>
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-12 mt-[45px] md:mt-[70px] bg-background rounded-[12px] custom-box-shadow-2">
          <div className="col-span-7 flex flex-col gap-3 px-[15px] py-[25px] md:p-[45px] order-2 lg:!order-1">
            <h3 className="text-[28px] xs:text-[36px] text-primary">
              {isRTL ? data[0]?.title_ar : data[0]?.title_en}
            </h3>
            <span className="text-secondary">{isRTL ? data[0]?.created_at_ar : data[0]?.created_at_en}</span>
            <p className="text-[#616161] xl:pe-[100px]">
              {isRTL ? data[0]?.description_ar : data[0]?.description_en}
            </p>
            <div>
              <Link
                href={`/articles/${data[0]?.id}`}
                className="text-primary underline font-bold text-[20px] hover:text-secondary"
              >
                {t("Read More")}
              </Link>
            </div>
          </div>
          <div className="col-span-5 lg:order-2">
            <img
              src={data[0]?.image}
              alt={t("completeCourses")}
              className="rounded-t-[12px] lg:!rounded-e-[12px] w-full h-[350px]"
            />
          </div>
        </div>

        <div className="mt-[100px]">
          <div className="flex flex-col items-center">
            <h3 className="text-[29px] lg:text-[34px] text-primary pb-2 font-bold relative w-max mb-3">
              {t("importantArticles")}
              <span className="block absolute bottom-0 left-0 h-[2px] w-full bg-[#d3971b]"></span>
            </h3>
            <p className="text-main new-font text-[15px] lg:text-[17px] text-center md:w-[40%] font-semibold mt-2">
              {t("importantArticlesSubtitle")}
            </p>
          </div>

          <div className="flex flex-col flex-wrap items-center sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:flex xl:flex-row xl:gap-16 xl:justify-center gap-16 justify-items-center mt-[40px]">
            {data?.map((item: any) => (
              <div
                className="max-w-[350px] md:animation-translateY"
                key={item?.id}
              >
                <SecondaryCard
                  id={item?.id}
                  img={item?.image}
                  title={isRTL ? item?.title_ar : item?.title_en}
                  date={isRTL ? item?.created_at_ar : item?.created_at_en} // Assuming this is dynamic; otherwise, use a translation
                  description={
                    isRTL
                      ? item?.description_ar.slice(0, 60)
                      : item?.description_en.slice(0, 60)
                  }
                  // articlesPath="/articles"
                  important
                />
              </div>
            ))}
          </div>
        </div>
        {/* 
        <div className="flex justify-center w-full mt-[30px]">
          <MainButton title={t("viewMore")}  link="/articles"/>
        </div> */}
      </div>
    </>
  );
};

export default ArticlesImportant;
