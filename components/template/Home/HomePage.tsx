import React from "react";
import HeroSection from "./hero section/HeroSection";
import ImportantCourses from "./important courses/ImportantCourses";
import ImportantArticles from "./important articles/ImportantArticles";
import ImportantTrainers from "./important trainers/ImportantTrainers";
import CustomerOpinions from "./customer opinions/CustomerOpinions";
import StepsToJoin from "./steps to join/StepsToJoin";
import AboutUs from "../about-us/AboutUs";

async function getData() {
  const res = await fetch("https://bayan.savvyhost.io/api/home");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
async function getSettingData() {
  const res = await fetch("https://bayan.savvyhost.io/api/settings");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
const HomePage = async () => {
  const data = await getData();
  const settingData = await getSettingData();

  return (
    <>
      <HeroSection slides={data?.data?.slides} />
      <StepsToJoin data={settingData?.data} />
      <ImportantCourses courses={data?.data?.courses} />
      <AboutUs data={settingData?.data} />
      <ImportantTrainers trainers={data?.data?.trainers} />
      <CustomerOpinions reviews={data?.data?.reviews} />
      <ImportantArticles posts={data?.data?.posts} />
    </>
  );
};

export default HomePage;
