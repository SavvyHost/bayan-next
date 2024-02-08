import React from 'react';
import HeroSection from './hero section/HeroSection';
import Aboutus from './about us/Aboutus';
import ImportantCourses from './important courses/ImportantCourses';
import ImportantArticles from './important articles/ImportantArticles';
import ImportantTrainers from './important trainers/ImportantTrainers';
import CustomerOpinions from './customer opinions/CustomerOpinions';
import StepsToJoin from './steps to join/StepsToJoin';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <StepsToJoin />
      <Aboutus />
      <ImportantCourses />
      <ImportantTrainers />
      <CustomerOpinions />
      <ImportantArticles />
    </>
  );
};

export default HomePage;
