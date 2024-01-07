import * as React from 'react';
const StarRateActionSVG = ({ fill, id, onMouseEnter, onClick }: any) => (
  <svg
    key={id}
    xmlns='http://www.w3.org/2000/svg'
    width={19}
    height={19}
    fill='none'
    onMouseEnter={onMouseEnter}
    onClick={onClick}
  >
    <path
      fill={fill ? '#FFA033' : '#fff'}
      stroke='#FFA033'
      strokeLinecap='round'
      strokeLinejoin='round'
      d='m9.428 1.572 2.428 4.918 5.43.794-3.929 3.826.927 5.406-4.856-2.554-4.855 2.554.927-5.406L1.57 7.284l5.43-.794 2.427-4.918Z'
    />
  </svg>
);
export default StarRateActionSVG;
