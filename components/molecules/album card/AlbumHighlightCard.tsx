import React from "react";

const AlbumHighlightCard = ({ item }: any) => {
  return (
    <div
      className="py-[80px] px-[30px] max-h-[24px] rounded-[12px] w-full min-h-[240px] bg-contain bg-repeat-round highlights-style relative"
      style={{
        backgroundImage: `url(${item?.image})`,
      }}
    >
      <h4 className="text-white z-10 relative font-bold">
        {item?.description_ar}
      </h4>
      <h5 className="text-white z-10 relative ">
        <span className="text-secondary z-10 relative font-bold">الطالب: </span>{" "}
        {item?.name_ar}
      </h5>
    </div>
  );
};

export default AlbumHighlightCard;
