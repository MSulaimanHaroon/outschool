import React from 'react';
import Chips from './chips';

const ChipSet = ({ heading ,data }) => {
  return (
    <div className='my-[10px]'>
      <h1 className='text-[30px] mb-[10px] font-bold'>{heading}</h1>
      <div className='flex flex-wrap  gap-x-3 gap-y-4 '>
      {data.map(chip => (
          <Chips key={chip.id} name={chip.name} />
        ))}
      </div>
    </div>
  );
};

export default ChipSet;
