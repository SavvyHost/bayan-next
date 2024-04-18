import React from "react";

const AlbumHighlightCard = ({ item }: any) => {
  return (
    <div
      className="py-[80px] px-[30px] max-h-[24px] rounded-[12px] w-full min-h-[240px] bg-contain bg-repeat-round group highlights-style hover:before:bg-[#000000b4] relative"
      style={{
        backgroundImage: `url(${item?.image})`,
      }}
    >
      <div className=" absolute hidden group-hover:block">
        <h4 className="text-white z-10 relative font-bold">
          {item?.description_ar}
        </h4>
        <h5 className="text-white z-10 relative ">
          <span className="text-secondary z-10 relative font-bold">الطالب: </span>{" "}
          {item?.name_ar}
        </h5>
      </div>

    </div>
  );
};

export default AlbumHighlightCard;
