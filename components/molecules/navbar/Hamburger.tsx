import React from 'react';

interface HamburgerProps {
  mobiledrawer: boolean;
  toggleDrawer: () => void;
}

const Hamburger: React.FC<HamburgerProps> = ({
  mobiledrawer,
  toggleDrawer,
}) => {
  return (
    <div
      className={`hamburger ${mobiledrawer ? 'active' : ''}`}
      onClick={toggleDrawer}
    >
      <span className='line'></span>
      <span className='line'></span>
      <span className='line'></span>
    </div>
  );
};

export default Hamburger;
