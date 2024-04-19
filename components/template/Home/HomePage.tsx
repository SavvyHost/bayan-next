import { useLocale } from 'next-intl';
import Aboutus from './about us/Aboutus';
import CustomerOpinions from './customer opinions/CustomerOpinions';
import HeroSection from './hero section/HeroSection';
import ImportantArticles from './important articles/ImportantArticles';
import ImportantCourses from './important courses/ImportantCourses';
import ImportantTrainers from './important trainers/ImportantTrainers';
import StepsToJoin from './steps to join/StepsToJoin';

async function getData(locale: any) {
  const res = await fetch(`https://bayan.savvyhost.io/api/home?lang=${locale}`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}
async function getSettingData(locale:any) {
  const res = await fetch(`https://bayan.savvyhost.io/api/settings?lang=${locale}`);
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
      <ImportantTrainers trainers={data?.data?.trainers} />
      <CustomerOpinions reviews={data?.data?.reviews} />
      <ImportantArticles posts={data?.data?.posts} />
      
    </>
  );
};

export default HomePage;
