'use client';

import Footer from '@/components/organisms/Footer/Footer';
import Navbar from '@/components/organisms/navbar/NavBar';
const LayoutPages = ({ children }: any) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default LayoutPages;
