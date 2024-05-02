import React from 'react';

const NavDrop = ({ name, options }) => {
    return (
        <div className="group relative cursor-pointer py-2">

            <div className="flex items-center justify-between space-x-5 bg-white px-4">
                <a className='font-medium text-black hover:text-[#4B01D4] hover:underline decoration-[#4B01D4] hover:underline-offset-8'>{name}</a>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                        stroke="currentColor" className="h-6 w-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                </span>
            </div>

            <div className="invisible absolute z-50 flex w-full flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible">
                {options.map(option => (
                    <a key={option.id} className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                        {option.name}
                    </a>
                ))}
            </div>
        </div>
    )
}

export default NavDrop;
