import StarRate from '@/components/atoms/icons/StarRate';
import React, { useState } from 'react';

const RateComponent = ({rate}:any) => {
  const [selectedId, setSelectedId] = useState(rate);

  return (
    <>
      {[1, 2, 3, 4, 5].map((id) => (
        <StarRate key={id} fill={selectedId !== null && id <= selectedId} />
      ))}
    </>
  );
};

export default RateComponent;
