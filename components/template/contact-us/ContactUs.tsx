import React from 'react';

const ContactUs = () => {
  return (
    <div className='Contact-us-style '>
      <div className='container my-[70px] lg:my-[100px] flex w-full lg:gap-36 gap-20 lg:px-[80px] flex-col md:!flex-row'>
        {/* Form */}
        <div className='lg:p-[40px] p-[20px] custom-box-shadow bg-white rounded-[8px] w-full order-2 md:order-1'>
          <h3 className='text-stroke-custom text-[30px] font-bold'>
            تواصل معنا
          </h3>
          <h4 className='text-[#1E1E1E] text-[22px]  '>المقر الرئيسي</h4>

          <p className='text-main mt-4 lg:w-[85%]'>
            وريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل
            ليتصور طريقه وضع النصوص بالتصاميم سواء{' '}
          </p>

          <div className='my-[24px] flex flex-col gap-[8px]'>
            <h5 className='text-main text-[19px]  '>
              هاتف:{' '}
              <span className='text-primary font-bold text-[17px]'>
                01154000000
              </span>
            </h5>
            <h5 className='text-main text-[19px]  '>
              البريد الالكتروني:{' '}
              <span className='text-primary font-bold text-[17px]'>
                Comp@software.com
              </span>
            </h5>
          </div>

          <div className='flex flex-col gap-[18px]'>
            <h6 className='text-[#1e1e1e] text-[20px]  font-bold'>
              ابقي علي تواصل
            </h6>

            <form className=' lg:w-[85%] flex flex-col gap-[20px]'>
              <input
                type='text'
                placeholder='اسم:'
                className='bg-background py-[12px] px-[8px] rounded-[4px] w-full'
              />
              <input
                type='email'
                placeholder='عنوان البريد الإلكتروني:'
                className='bg-background py-[12px] px-[8px] rounded-[4px] w-full'
              />

              <textarea
                placeholder='رسالتك:'
                className='bg-background py-[12px] px-[8px] rounded-[4px] w-full'
                rows={4}
                cols={10}
                style={{
                  resize: 'none',
                  scrollbarWidth: 'none',
                  overflow: 'auto',
                }}
              />

              <button
                type='submit'
                className='bg-primary text-[20px] text-white h-[44px] rounded-[4px] hover:bg-secondary  font-bold'
              >
                إرسال
              </button>
            </form>
          </div>
        </div>

        {/* Info */}

        <div className='w-full md:order-2'>
          <h3 className='lg:text-[48px] text-[35px]  font-bold text-primary'>
            تواصل معنا
          </h3>

          <p className='lg:mt-[40px] mt-[20px] text-main   lg:text-[19px] text-[16px]'>
            مع غياب حلقات القرآن اللي كنا بنعتمد عليها في تحفيظ أولادنا القرآن
            وتعليمهم أمور الدين الاساسية اللي بتنعكس طبعا على اخلاقهم معانا
            كأمهات ومع كل اللي حواليهم كان لازم بديل يقوم بالدور ده .. بطريقة
            تناسب حياتنا النهاردة اللي كل حاجة فيها بقت ديجيتال وعن طريق
            الانترنت ومن هنا جت فكرة الأكاديمية اللي بنعتمد فيها على تحفيظ
            القرآن ، وشرح المعاني والتفسير وطبعا تطبيق الكلام ده على واقع
            الأطفال وتشجيعهم على التحلي بالاخلاق اللي ذكرها القرآن يعني دور
            تربوي مش بس تعليمي لكن بشكل فردي لكل طفل مع معلم خاص بيه عشان نضمن
            الاستفادة وعدم التشتت ومنسناش الأمهات اللي عاوزين يحفظوا القرآن
            ووقتهم وانشغالتهم مش مساعدينهم .. هنا هتقدري تختاري الوقت اللي
            يناسبك مع معلمات متخصصات وبرضو تفسير وشرح للآيات
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
