import React from 'react'
import { FaStar } from "react-icons/fa6";

const ReviewCard = () => {
    return (
        <>
        <div className='flex flex-col bg-[#f6f6f8] gap-3 p-5 rounded-xl '>
            <span className='flex items-center text-md text-[#fdc840]' >
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar /> 
            </span>
            <h1 className='text-[#7530ff] font-md line-clamp-1' >1-on-1 Private Math Tutoring</h1>
            <p className='line-clamp-3' >Seana helped identify some target areas to support then focused on building those up. My daughter enjoyed working with her!</p>
           
        </div>
         <p className='text-gray-400 mt-4 ml-2 line-clamp-3' >Seana on 12 Sep</p>
         </>
    )
}

export default ReviewCard
