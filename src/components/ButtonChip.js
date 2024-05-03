import React from 'react'

const ButtonChip = ({name}) => {
  return (
    <>
        <button className='font-semibold text-lg px-6 py-2 text-[#4b01d4] hover:text-[#4500c4] hover:bg-[#e0e5ff] border-[2px] border-[#b4befe] hover:border-1 hover:border-[#3059ff] bg-white rounded-full  '>
      {name}
    </button>
    </>
  )
}

export default ButtonChip
