import AlbumCard from "@/components/molecules/album card/AlbumHighlightCard";
import React from "react";

const Highlights = ({ data }: any) => {
  return (
    <div className="container mt-[4rem]">
      <h3 className="text-[29px] lg:text-[34px] text-primary font-[TajawalBold,sans-serif]">
        أهم الإنجازات
      </h3>

      <div className="flex flex-col gap-10 sm:grid sm:grid-cols-2  lg:!grid-cols-3 my-6">
        {data?.map((item: any) => (
          <AlbumCard key={item?.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Highlights;
