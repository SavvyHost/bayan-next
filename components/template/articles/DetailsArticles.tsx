import RateAction from "@/components/molecules/RateAction/RateAction";
import Image from "next/image";
import React from "react";

async function getData(id: any) {
  const res = await fetch(`https://bayan.savvyhost.io/api/posts/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const DetailsArticles =  ({ textSize, params }: any) => {
//   const data = await getData(params?.id);
//   console.log("🚀 ~ DetailsArticles ~ data:", data);

  return (
    <div className="order-1 xs:order-2">
      <h4 className="text-primary text-[36px] font-[TajawalMedium,sans-serif]">
        عنوان المقالة
      </h4>
      <div className="flex flex-col lg:grid lg:grid-cols-11 gap-x-[50px] gap-y-[40px]">
        <div className="col-span-7 lg:col-span-6">
          <p
            className="text-[#616161] font-[TajawalMedium,sans-serif] mt-2"
            style={{ fontSize: `${textSize}px` }}
          >
            معنا.. تخطَّ حواجز اللغة. منصة علمني العربية منصة تعليمية تهدف
            لتعليم اللغة العربية لغير الناطقين بها، عبر تطبيقات الهواتف
            الذكية.لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على
            العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه …
            بروشور او فلاير على سبيل المثال … او نماذج مواقع انترنت … وعند
            موافقه العميل المبدئيه على التصميم يتم ازالة هذا النص من التصميم
            ويتم وضع النصوص النهائية المطلوبة للتصميم ويقول البعض ان وضع النصوص
            التجريبية بالتصميم قد تشغل المشاهد عن وضع الكثير من الملاحظات او
            الانتقادات للتصميم الاساسي. وخلافاَ للاعتقاد السائد فإن لوريم إيبسوم
            ليس نصاَ عشوائياً، بل إن له جذور في الأدب اللاتيني الكلاسيكي منذ
            العام 45 قبل الميلاد. من كتاب “حول أقاصي الخير والشر”
          </p>
        </div>

        <div className="w-auto md:w-[400px] h-[300px] max-w-[385px] max-h-[300px] col-span-4 lg:col-span-5 ">
          <Image
            src="/assets/images/articlesdetails.webp"
            width={400}
            height={300}
            alt="articles details"
          />
        </div>

        <div className="col-span-11">
          <p
            className="text-[#616161] font-[TajawalMedium,sans-serif] mt-2"
            style={{ fontSize: `${textSize}px` }}
          >
            معنا.. تخطَّ حواجز اللغة. منصة علمني العربية منصة تعليمية تهدف
            لتعليم اللغة العربية لغير الناطقين بها، عبر تطبيقات الهواتف
            الذكية.لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على
            العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه …
            بروشور او فلاير على سبيل المثال … او نماذج مواقع انترنت … وعند
            موافقه العميل المبدئيه على التصميم يتم ازالة هذا النص من التصميم
            ويتم وضع النصوص النهائية المطلوبة للتصميم ويقول البعض ان وضع النصوص
            التجريبية بالتصميم قد تشغل المشاهد عن وضع الكثير من الملاحظات او
            الانتقادات للتصميم الاساسي. وخلافاَ للاعتقاد السائد فإن لوريم إيبسوم
            ليس نصاَ عشوائياً، بل إن له جذور في الأدب اللاتيني الكلاسيكي منذ
            العام 45 قبل الميلاد. من كتاب “حول أقاصي الخير والشر”
          </p>
        </div>
      </div>

      <h6 className="text-[22px] flex flex-col xs:!flex-row xs:!gap-7 items-center gap-2 font-[TajawalMedium,sans-serif] mt-[40px] text-secondary">
        <span className="md:me-[40px]">هل أعجبك المقال؟</span>
        <div className="flex gap-4 ">
          <RateAction />
        </div>
      </h6>
    </div>
  );
};

export default DetailsArticles;
