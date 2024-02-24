import SecondaryCard from "@/components/molecules/SecondaryCard/SecondaryCard";

const ImportantArticles = ({ posts }: any) => {
  return (
    <div className="container my-[100px] ">
      <div className="flex flex-col items-center">
        <h3 className="text-[29px] lg:text-[34px] text-primary font-[TajawalBold,sans-serif]">
          أهم المقالات
        </h3>
        <p className="text-main text-[15px] lg:text-[17px] text-center md:w-[40%]">
          تعليم القرءان الكريم بالأحكام والقراءه والكتابة بطريقة نور البيان عن
          طريق الهواتف الذكيه
        </p>
      </div>

      <div className="flex flex-col items-center sm:grid sm:grid-cols-2 lg:grid-cols-3  xl:flex xl:flex-row xl:gap-16 xl:justify-center  gap-16 justify-items-center mt-[40px]">
        {posts.map((item: any) => (
          <div className="max-w-[340px] md:animation-translateY" key={item?.id}>
            <SecondaryCard
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
  );
};

export default ImportantArticles;
