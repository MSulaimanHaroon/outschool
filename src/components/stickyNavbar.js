import React from 'react'
import { LuArrowUpDown } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";

const StickyNavbar = ({ isSticky }) => {
    return (
        <section className={`w-full flex flex-col ${isSticky ? 'sticky top-0 z-50' : ''} items-center mt-10 justify-center`}>
            <div className='w-[78.2%] h-[60px] bg-white flex  justify-between ' >
                <div className='flex gap-3 items-center '>
                    <button className='font-semibold justify-center text-lg px-3 py-2 hover:bg-[#f0f3ff] border-[1px]  hover:border-[#3059ff] border-1 border-[#d8d8d8] rounded-full flex items-center gap-1 '>
                        Day or time <IoIosArrowDown />
                    </button>
                    <button className='font-semibold justify-center text-lg px-3 py-2 hover:bg-[#f0f3ff] border-[1px]  hover:border-[#3059ff] border-1 border-[#d8d8d8] rounded-full flex items-center gap-1 '>
                        Date <IoIosArrowDown />
                    </button>
                    <button className='font-semibold justify-center text-lg px-3 py-2 hover:bg-[#f0f3ff] border-[1px]  hover:border-[#3059ff] border-1 border-[#d8d8d8] rounded-full flex items-center gap-1 '>
                        1 learner <IoIosArrowDown />
                    </button>
                    <button className='font-semibold justify-center text-lg px-3 py-2 hover:bg-[#f0f3ff] border-[1px]  hover:border-[#3059ff] border-1 border-[#d8d8d8] rounded-full flex items-center gap-1 '>
                        Any price <IoIosArrowDown />
                    </button>
                    <button className='font-semibold justify-center text-lg px-3 py-2 hover:bg-[#f0f3ff] border-[1px]  hover:border-[#3059ff] border-1 border-[#d8d8d8] rounded-full flex items-center gap-1 '>
                        Age <IoIosArrowDown />
                    </button>
                    <button className='font-semibold justify-center text-lg px-3 py-2 hover:bg-[#f0f3ff] border-[1px]  hover:border-[#3059ff] border-1 border-[#d8d8d8] rounded-full flex items-center gap-1 '>
                        More <IoIosArrowDown />
                    </button>
                    <p className='text-sm font-semibold text-[#4B01D4] '>Reset Filters</p>
                </div>
                <div className='flex items-center gap-3'>
                    <p className='text-md font-semibold text-[#000000] '>Sort by</p>
                    <button className='font-semibold justify-center text-lg px-3 py-2 hover:bg-[#f0f3ff] border-[1px]  hover:border-[#3059ff] border-1 border-[#d8d8d8] rounded-full flex items-center gap-1 '>
                        <LuArrowUpDown /> Relevance
                    </button>

                </div>
            </div>
        </section>
    )
}

export default StickyNavbar
