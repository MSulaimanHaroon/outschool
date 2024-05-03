import React from 'react'
import { TbHome } from "react-icons/tb";
import TrustPilot from "../assets/Trust.png"
import Hero from "../assets/hero-main.webp"
import HeroBack from "../assets/hero-back.webp"
import Heart from "../assets/heart.svg"
import Strike from "../assets/strike.svg"

const HeroSection = () => {
    return (
        <section>
            <div className='w-full relative z-10 h-[52svh] flex justify-center  bg-[#f0f3ff]'>
                <div className='w-[78.2%] flex gap-5 justify-center items-center'>
                    <div className='w-[55%] sm:w-[100%] '>
                        <div className='flex flex-col gap-3 mt-11 mb-3'>
                            <p className='text-sm flex items-center gap-2 '><TbHome className='text-[#4B01D4]' /> / Tutoring</p>
                            <h1 className='text-[2.3rem] md:text-[1.5rem] text-gray-800 leading-tight font-bold'>
                                1-on-1 Online Tutoring for Kids & Teens
                            </h1>
                        </div>
                        <div className='flex md:text-[12px] flex-col gap-2 mb-1'>
                            <p>🎥 Engaging<b> live video chat tutoring</b></p>

                            <p>🥇 <b>Vetted and passionate</b> teachers</p>

                            <p>👨‍🏫 <b>Individualized</b>, ongoing support</p>
                            <img width='400px' src={TrustPilot} alt='trust' />
                        </div>
                        <div className='flex sm:hidden md:flex-col md:items-start items-center justify-start gap-4'>

                            <h1 className='text-3xl md:text-xl  font-bold text-gray-800'>Learner's Age</h1>

                            <div class="containerA">
                                <form>
                                    <label>
                                        <input type="radio" name="radio" checked="" />
                                        <span>3-5</span>
                                    </label>
                                    <label>
                                        <input type="radio" name="radio" />
                                        <span>6-9</span>
                                    </label>
                                    <label>
                                        <input type="radio" name="radio" />
                                        <span>10-15</span>
                                    </label>
                                </form>
                            </div>
                        </div>

                    </div>

                    <div className='w-[50%] z-0 relative h-[420px]'>
                        <img className='w-[100%] h-[100%] absolute top-[-5%] md:hidden  ' src={HeroBack} alt='heroo' />
                        <img className='rounded-[20px] w-[420px] h-[270px] md:w-[100%] sm:hidden top-[22%] left-[15%] z-2 relative ' src={Hero} alt='hero' />
                        <img className='absolute w-2/12 bottom-[10%] md:hidden left-[10%] z-3' src={Heart} alt='heart' />
                        <img className='absolute z-1 left-[85%] md:hidden bottom-[10%]' src={Strike} alt='strike' />
                    </div>
                </div>
            </div>
            <svg className=' rotate-180' width="100%" height="100px" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" overflow="auto" shape-rendering="auto" fill="#ffffff">
                <defs>
                    <path id="wavepath" d="M 0 2000 0 500 Q 150 357 300 500 t 300 0 300 0 300 0 300 0 300 0  v1000 z" />
                    <path id="motionpath" d="M -600 0 0 0" />
                </defs>
                <g >
                    <use xlinkHref="#wavepath" y="-76" fill="#f0f3ff">
                        <animateMotion
                            dur="5s"
                            repeatCount="indefinite">
                            <mpath xlinkHref="#motionpath" />
                        </animateMotion>
                    </use>
                </g>
            </svg>
        </section>
    )
}

export default HeroSection
