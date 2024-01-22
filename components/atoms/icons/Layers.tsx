import * as React from 'react';
const Layers = (props: any) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={20}
    fill='none'
    {...props}
  >
    <g fill='#EEA62E' clipPath='url(#a)'>
      <path d='M18.738 9.146 10 14.39 1.263 9.146a.833.833 0 1 0-.858 1.43l9.167 5.5a.834.834 0 0 0 .858 0l9.167-5.5a.833.833 0 0 0-.858-1.43h-.001Z' />
      <path d='M18.738 12.952 10 18.195l-8.737-5.243a.833.833 0 1 0-.858 1.43l9.167 5.5a.834.834 0 0 0 .858 0l9.167-5.5a.833.833 0 1 0-.858-1.43h-.001ZM10 12.311c-.45 0-.89-.123-1.276-.354L.404 6.965a.833.833 0 0 1 0-1.429L8.724.544a2.478 2.478 0 0 1 2.552 0l8.32 4.992a.833.833 0 0 1 0 1.429l-8.32 4.992a2.48 2.48 0 0 1-1.276.354Zm-7.547-6.06 7.13 4.277a.812.812 0 0 0 .833 0l7.13-4.278-7.13-4.277a.812.812 0 0 0-.833 0L2.453 6.25Z' />
    </g>
    <defs>
      <clipPath id='a'>
        <path fill='#fff' d='M0 0h20v20H0z' />
      </clipPath>
    </defs>
  </svg>
);
export default Layers;
