import { useLocale } from 'next-intl';
import Aboutus from './about us/Aboutus';
import CustomerOpinionsHome from './customer opinions/CustomerOpinionsHome';
import HeroSection from './hero section/HeroSection';
import ImportantArticles from './important articles/ImportantArticles';
import ImportantCourses from './important courses/ImportantCourses';
import ImportantTrainers from './important trainers/ImportantTrainers';
import StepsToJoin from './steps to join/StepsToJoin';
import TrainersComponents from '../courses/TrainersComponents';

async function getData(locale: any) {
  const res = await fetch(`https://backend.bayan-acaemy.com/api/home?lang=${locale}` ,{  cache: "no-store"});
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}
async function getSettingData(locale:any) {
  const res = await fetch(`https://backend.bayan-acaemy.com/api/settings?lang=${locale}` ,{  cache: "no-store"});
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}
const HomePage = async () => {
  const localeActive = useLocale();
  const data = await getData(localeActive);
  const settingData = await getSettingData(localeActive);

  return (
    <>
      <HeroSection slides={data?.data?.slides} />
      <StepsToJoin data={settingData?.data} />
      <ImportantCourses courses={data?.data?.courses} />
      <Aboutus />
      {/* <AboutUs data={settingData?.data} /> */}
      {/* <ImportantTrainers trainers={data?.data?.trainers} /> */}
      <TrainersComponents pageDetails={true} data={data?.data?.trainers} />
      <CustomerOpinionsHome reviews={data?.data?.reviews} />
      <ImportantArticles posts={data?.data?.posts} />
      
    </>
  );
};

export default HomePage;
