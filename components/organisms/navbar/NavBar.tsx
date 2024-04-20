"use client";
import Link from "next/link";
import { useState } from "react";
import Hamburger from "../../molecules/navbar/Hamburger";
import NavbarLinks from "../../molecules/navbar/NavbarLinks";
import Image from "next/image";
import SwitchLanguage from "../../molecules/navbar/SwitchLanguage";
import FaceBookSub from "@/components/atoms/icons/facebookSub";
import TawtterSub from "@/components/atoms/icons/TawtterSub";
import InstaSub from "@/components/atoms/icons/InstaSub";
import YouTubeSub from "@/components/atoms/icons/youtubeSub";
import { useLocale ,useTranslations} from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { useTransition, useEffect } from "react";
import MainButton from "@/components/atoms/MainButton";

const Navbar = () => {
  const t = useTranslations();

  const [mobiledrawer, setMoblieDrawer] = useState(false);
  const toggleDrawer = () => {
    setMoblieDrawer((prevState) => !prevState);
    document.body.classList.toggle("overflowNone");
  };



  const removeOverFlow = () => {
    setMoblieDrawer(() => false);
    document.body.classList.remove("overflowNone");
  };
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localeActive = useLocale();
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.dir = localeActive === "en" ? "ltr" : "rtl";
  }, [localeActive]);

  const switchLocale = (nextLocale: string) => {
    startTransition(() => {
      const currentPath = pathname;
      const newPath = currentPath.replace(`/${localeActive}`, `/${nextLocale}`);
      const searchParams = new URLSearchParams(window.location.search);
      const newPathWithQuery = `${newPath}${
        searchParams.toString() ? `?${searchParams.toString()}` : ""
      }`;

      router.push(newPathWithQuery);
    });
  };

  return (
    <>
      <div className="  h-[64px] py-[12px] flex items-center bg-[#2260aa]">
          <div className="flex gap-2 px-4 w-full ">
            <button
              type="button"
              className="text-white"
              onClick={() => switchLocale(localeActive === "en" ? "ar" : "en")}
            >
              {localeActive == "en" ? "عربي" : "English"}
            </button>
            <span className="text-white text-[19px] font-bold">|</span>
            <FaceBookSub className="scale-[0.85]" />
            <YouTubeSub className="scale-[0.85]" />
            <InstaSub className="scale-[0.85]" />
          </div>
          <div className="flex justify-end gap-2 items-center w-full px-[10px]">

            <Link href='https://app.bayan-academy.com/parents/' target="_blank">
              <button className=" text-[#2260aa] border border-white bg-white  p-1 md:p-2 md:px-[10px] rounded">
                {t('Sign In')}
              </button>
            </Link>
            <Link href='https://app.bayan-academy.com/parents/sign-up.php' target="_blank">
              <button className=" text-white border border-white p-1 px-[6px] md:p-2 md:px-[10px] rounded">
                {t('Register')}
              </button>
            </Link>
          </div>

      </div>
      <div className="navbar py-5  border-b-[1px] bg-white border-solid border-[rgba(19, 18, 18, 0.10)] bg-background ">
        <div className="container px-4  mx-auto overflow-hidden ">
          <div className="  flex justify-between items-center ">
            <Link href="/">
              <Image
                src="/assets/images/mainlogo5.png"
                width={86}
                height={110}
                alt="logo"
                style={{ transform: "scale(1.2)" }}
                className="object-contain  w-[160px] h-full max-h-[90px] "
                // className="object-contain "
              />
            </Link>
            <div
              className={`nav-contain w-full flex-basis-auto tablet:!pb-24  flex justify-between items-center content-center tablet:px-6 ${
                mobiledrawer ? "active-nav" : ""
              }`}
            >
              {/* Navbar Link list */}
              <NavbarLinks removeOverFlow={removeOverFlow} />

              <hr className="bg-primaryLight h-[1px] w-full my-4 border-primaryLight hidden tablet:block" />

              {/* Account Link Mobile 📱 */}

              <div className="flex items-center xs:!justify-start tablet:justify-center gap-[10px] tablet:w-full">
                {/* Switch Language  ⬇️*/}

                <SwitchLanguage />
              </div>
              <div className="w-full hidden xs:!justify-start  justify-center tablet:flex tablet:mt-4 ">
                {/* <div className='tablet:w-[18rem]'>نص من عندي</div> */}
              </div>
            </div>

            <div className="flex gap-4 xs:gap-6">
              <Hamburger
                mobiledrawer={mobiledrawer}
                toggleDrawer={toggleDrawer}
              />
            </div>
          </div>
        </div>
      </div>{" "}
    </>
  );
};

export default Navbar;
