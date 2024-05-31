import Album from "@/components/template/album/Album";
import Highlights from "@/components/template/album/Highlights";
import React from "react";
async function getData() {
  const res = await fetch("https://backend.bayan-academy.com/api/photos", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
const AlbumsPage = async () => {
  const data = await getData();

  return (
    <>
      <Highlights data={data?.data} />
      <Album data={data?.data} />
    </>
  );
};

export default AlbumsPage;
