import MainButton from "@/components/atoms/MainButton";
import { FaCheck } from "react-icons/fa";

const PricePlanCard = ({ item }: any) => {
  console.log("🚀 ~ PricePlanCard ~ item:", item);
  return (
    <div
      className="sm:flex sm:gap-2 flex-col  mb-10 lg:gap-0"
      // key={index}
    >
      <>
        <div className="border-soild sm:w-full  border-[1px]  border-textGray custom-box-shadow-3 rounded-t-none rounded-[8px] mt-[12px] ">
          <p className=" font-bold bg-secondary text-white py-4 text-[24px] text-center">
            {item[0].ar}
          </p>
        </div>

        <div className="border-soild sm:w-full  border-[1px] py-4 border-textGray custom-box-shadow-3 rounded-t-none rounded-[8px] my-[12px] ">
          <ul>
            {item?.slice(1).map((subItem: any, index: any) => (
              <li className="flex items-center gap-4 px-6" key={index}>
                <span className="text-[#EEA62E] text-[20px]">
                  <FaCheck />
                </span>
                <p className="text-[#4f4f4f] text-[16px] md:text-[18px] 2xl:!text-[20px]">
                  {subItem.ar}
                </p>
              </li>
            ))}
            <hr className="my-[8px]" />
          </ul>
          <div className="flex justify-center w-full">
            <div className="w-max h-[42px] mt-[20px]">
              <MainButton title=" إنضمام" />
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default PricePlanCard;
