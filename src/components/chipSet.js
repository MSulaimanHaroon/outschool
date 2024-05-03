import React from 'react';
import Chips from './chips';

const ChipSet = ({ heading ,data , isMiddle }) => {
  return (
    <div className='my-[10px]'>
      <h1 className={`text-[30px] mb-[10px] ${isMiddle ? 'text-center' : ''} font-bold`}>{heading}</h1>
      <div className={`flex flex-wrap ${isMiddle ?  'justify-center' : ''} gap-x-3 gap-y-4 `}>
      {data.map(chip => (
          <Chips key={chip.id} name={chip.name} />
        ))}
      </div>
    </div>
  );
};

export default ChipSet;
