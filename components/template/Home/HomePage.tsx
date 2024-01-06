import React from 'react';
import HeroSection from './hero section/HeroSection';
import Aboutus from './about us/Aboutus';
import ImportantCourses from './important courses/ImportantCourses';
import ImportantArticles from './important articles/ImportantArticles';
import ImportantTrainers from './important trainers/ImportantTrainers';
import CustomerOpinions from './customer opinions/CustomerOpinions';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Aboutus />
      <ImportantCourses />
      <ImportantArticles />
      <ImportantTrainers />
      <CustomerOpinions />
    </>
  );
};

export default HomePage;
