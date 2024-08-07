import AboutUs from "@/components/template/about-us/AboutUs";
import React from "react";
async function getData() {
  const res = await fetch("https://backend.bayan-academy.com/api/settings",{  cache: "no-store"});
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
const AboutUsPage = async () => {
  const data = await getData();

  return <AboutUs  data={data?.data}/>;
};

export default AboutUsPage;
