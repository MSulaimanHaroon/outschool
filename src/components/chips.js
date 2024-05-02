import React from 'react'

const Chips = ({name}) => {
  return (
    <>
        <button className='font-semibold text-lg px-3 py-2 hover:bg-[#f0f3ff] border-[1px] border-transparent hover:border-1 hover:border-[#3059ff] bg-[#f0f0f0] rounded-full  '>
      {name}
    </button>
    </>
  )
}

export default Chips
