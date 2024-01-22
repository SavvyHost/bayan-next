import * as React from 'react';
const ClockFi = (props: any) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={20}
    fill='none'
    {...props}
  >
    <g fill='#EEA62E' clipPath='url(#a)'>
      <path d='M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 18.333A8.333 8.333 0 1 1 18.333 10 8.342 8.342 0 0 1 10 18.333Z' />
      <path d='M10 5a.833.833 0 0 0-.833.833v3.604l-2.81 1.76a.835.835 0 1 0 .886 1.417l3.2-2a.834.834 0 0 0 .39-.715V5.833A.833.833 0 0 0 10 5Z' />
    </g>
    <defs>
      <clipPath id='a'>
        <path fill='#fff' d='M0 0h20v20H0z' />
      </clipPath>
    </defs>
  </svg>
);
export default ClockFi;
