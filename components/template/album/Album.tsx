import AlbumCard from "@/components/molecules/album card/AlbumCard";

const Album = ({ data }: any) => {
  return (
    <div className="container my-[8rem] ">
      <h3 className="text-[29px] lg:text-[34px] text-primary font-[TajawalBold,sans-serif]">
        أهم الإنجازات
      </h3>

      <div className="custom-grid my-6 ">
        {data?.map((item:any) => (
          <AlbumCard img={item?.image}  key={item?.id}/>
        ))}
      </div>
    </div>
  );
};

export default Album;
