"use client";

import AWordSVG from "@/components/atoms/icons/AWord";
import Minus from "@/components/atoms/icons/Minus";
import Plural from "@/components/atoms/icons/Plural";
import Image from "next/image";
import { useState } from "react";
import {
  FacebookShareButton,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";

import DetailsArticles from "@/components/template/articles/DetailsArticles";
import copy from "clipboard-copy";
async function getData(id: any) {
  const res = await fetch(`https://backend.bayan-academy.com/api/posts/${id}`,{  cache: "no-store"});
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const ArticlesPageId = ({ params }: { params: { id: string } }) => {
  const [isCopied, setIsCopied] = useState(false);
  const currentPageUrl = window.location.href;
  const handleCopyLink = () => {
    const currentPageUrl = window.location.href;

    copy(currentPageUrl);

    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };
  const [textSize, setTextSize] = useState(18);
  const increaseTextSize = () => {
    setTextSize((prevSize) => Math.min(30, prevSize + 2));
  };

  const decreaseTextSize = () => {
    setTextSize((prevSize) => Math.max(12, prevSize - 2));
  };

  return (
    <>
      <div className="container flex flex-col xs:!flex-row gap-[2.5rem] my-20">
        {/*  */}
        <div
          className={`w-full xs:w-[30px] lg:!w-[100px] order-2 xs:order-1 flex flex-col gap-[20px]`}
        >
          <div className="xs:flex hidden  flex-col gap-6 items-center bg-[#E6E6E6] p-[24px] rounded-[63px] py-[40px]">
            <button
              onClick={increaseTextSize}
              className="text-primary text-[45px] "
            >
              <div className="">
                <Plural />
              </div>
            </button>
            <div>
              <AWordSVG />
            </div>
            <button
              className="text-primary text-[45px] max-h-[1rem]"
              onClick={decreaseTextSize}
            >
              <div className="">
                <Minus />
              </div>
            </button>
          </div>


          <div className="flex xs:flex-col  gap-6 items-center bg-[#E6E6E6] p-[24px] rounded-[63px] xs:py-[40px]">
            <ul className="flex xs:flex-col justify-center xs:gap-[30px] w-full xs:w-[unset] gap-3">
              <li className="w-full min-w-[28px] flex justify-center items-center">
                <TelegramShareButton url={currentPageUrl}>
                  <Image
                    src="/assets/images/soc1.png"
                    alt="social-1"
                    width={28}
                    height={28}
                  />
                </TelegramShareButton>
              </li>
              <li className="w-full min-w-[28px] flex justify-center items-center">
                <FacebookShareButton url={currentPageUrl}>
                  <Image
                    src="/assets/images/soc2.png"
                    alt="social-2"
                    width={28}
                    height={28}
                  />
                </FacebookShareButton>
              </li>
              <li className="w-full min-w-[28px] flex justify-center items-center">
                <TelegramShareButton url={currentPageUrl}>
                  <Image
                    src="/assets/images/soc3.png"
                    alt="social-3"
                    width={28}
                    height={28}
                  />
                </TelegramShareButton>
              </li>
              <li className="w-full min-w-[28px] flex justify-center items-center">
                <WhatsappShareButton url={currentPageUrl}>
                  <WhatsappIcon size={28} round />
                </WhatsappShareButton>
              </li>
              <li className="w-full min-w-[28px] flex justify-center items-center">
                <TwitterShareButton url={currentPageUrl}>
                  <TwitterIcon size={28} round />
                </TwitterShareButton>
              </li>
              <li
                className={`w-full min-w-[28px] min-h-[28px] items-center rounded-full flex justify-center ${
                  isCopied && "bg-secondary p-[4px]"
                }`}
                onClick={handleCopyLink}
                style={{ cursor: "pointer" }}
              >
                <Image
                  src="/assets/images/soc6.png"
                  alt="social-6"
                  className="max-w-[18px] max-h-[18]"
                  width={18}
                  height={18}
                />
              </li>
            </ul>
          </div>
        </div>
        {/*  */}
        <DetailsArticles textSize={textSize} params={params}/>
      </div>
    </>
  );
};

export default ArticlesPageId;
