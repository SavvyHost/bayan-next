import * as React from 'react';
const MessageIcon = (props: any) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={24}
    fill='none'
    {...props}
  >
    <path
      fill='#fff'
      d='M22 3.907H2v15.626h20V3.907Zm-2 3.906-8 4.884-8-4.884V5.86l8 4.883 8-4.883v1.953Z'
      opacity={0.4}
    />
  </svg>
);
export default MessageIcon;
