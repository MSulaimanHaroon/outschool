import React from 'react'
import { ImSearch } from "react-icons/im";
import { FiLogIn } from "react-icons/fi";
import { MdOutlineHelpOutline } from "react-icons/md";
import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'
import NavDrop from './NavDrop';
import options from '../data/option';


const Header = () => {

    const search = () => {

    }

    return (
        <div className='w-full bg-[white] drop-shadow-sm z-10 relative'>
            <div className='w-white'>
                <div className='w-[78.2%] lg:w-[75%] mx-auto flex flex-col gap-3'>
                    <div className=' md-lg:h-[100px] flex items-center justify-center'>
                        <div className='md-lg:w-full'>
                            <div className='flex justify-center mx-5 items-center '>
                                <Link className='flex items-center' to='/'>
                                    <img
                                        className="h-14 w-25"
                                        src={logo}
                                        alt="Logo"
                                    />
                                </Link>

                            </div>
                        </div>


                        <div className='w-full md-lg:w-full'>
                            <div className='flex border-2 border-black w-[100%] rounded-full h-[50px] items-center relative gap-5'>
                                <input className='w-full relative drop-shadow-lg bg-transparent text-lg font-medium text-slate-500 outline-0 px-4 h-full' type="text" name="" id="" placeholder='Search online classes and tutors' />
                                <button onClick={search} className=' rounded-[10px] right-0 absolute px-3 h-9 mr-1 font-semibold uppercase text-black'><ImSearch /></button>
                            </div>
                        </div>

                        <div className='flex md-lg:hidden justify-center items-center'>
                            <div className='flex justify-center  '>
                                <button className='relative flex justify-center items-center cursor-pointer m-2  h-[43px] rounded-full '>
                                    <span className=' text-md font-bold flex items-center text-black gap-2'><MdOutlineHelpOutline className='font-bold w-[1.5rem] h-[1.5rem]' />Help</span>
                                </button>
                                <button className='relative flex justify-center items-center cursor-pointer m-2  h-[43px] rounded-full'>
                                    <span className=' text-md font-bold flex items-center text-black gap-2'><FiLogIn className='font-bold w-[1.5rem] h-[1.5rem]' /> Login</span>
                                </button>
                                <button className='relative flex justify-center items-center cursor-pointer m-2 w-[90px] h-[43px] rounded-full bg-[#4B01D4] hover:bg-[#37009c]'>
                                    <span className=' text-md text-white'>Join</span>
                                </button>
                            </div>
                        </div>

                    </div>
                    <div className='flex md:hidden justify-between items-center '>
                        <NavDrop name="Popular" options={options}/>
                        <NavDrop name="Tutoring & Private Lessons" options={options}/>
                        <NavDrop name="Full Courses" options={options}/>
                        <NavDrop name="Clubs & Enrichment" options={options}/>
                        <NavDrop name="One-Time Activities" options={options}/>
                    </div>
                </div>
            </div>
            <div className='hidden md-lg:hidden'>
                <div className='w-[85%] mx-auto my-0'>
                    <div className='flex border rounded-[10px] drop-shadow-lg h-[50px] items-center relative gap-5'>

                        <input className='w-full relative  bg-transparent text-slate-500 outline-0 px-3 h-full' type="text" name="" id="" placeholder='what do you need' />
                        <button onClick={search} className='bg-[#1e6959] rounded-[10px] right-0 absolute px-4 h-full font-semibold uppercase text-white'><ImSearch /></button>
                    </div>
                </div>
            </div>


        </div >
    )
}

export default Header