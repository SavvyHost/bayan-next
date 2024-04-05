import AlbumCard from "@/components/molecules/album card/AlbumCard";
import { useTranslations } from "next-intl";

const Album = ({ data }: any) => {
  const t = useTranslations();

  return (
    <div className="container my-[8rem] ">
      <h3 className="text-[29px] lg:text-[34px] text-primary pb-2  font-bold relative w-max  mb-3">
        {t("Album")}{" "}
        <span className="block absolute bottom-0 left-0 h-[2px] w-full bg-[#d3971b]"></span>
      </h3>

      <div className="custom-grid my-6 ">
        {data?.map((item: any) => (
          <AlbumCard img={item?.image} key={item?.id} />
        ))}
      </div>
    </div>
  );
};

export default Album;
