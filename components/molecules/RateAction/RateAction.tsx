import StarRateActionSVG from '@/components/atoms/icons/StarRateAction';
import { useState } from 'react';

const RateAction = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);

  console.log(selectedId);

  const handleHover = (id:any) => {
    setHoveredId(id);
  };

  const handleClick = (id:any) => {
    setSelectedId(id);
    setHoveredId(null);
    console.log(`Clicked on Star ${id}`);
  };

  return (
    <>
      {[1, 2, 3, 4, 5].map((id) => (
        <StarRateActionSVG
          key={id}
          fill={selectedId !== null && id <= selectedId}
          onMouseEnter={() => handleHover(id)}
          onMouseLeave={() => setHoveredId(null)}
          onClick={() => handleClick(id)}
        />
      ))}
    </>
  );
};

export default RateAction;
