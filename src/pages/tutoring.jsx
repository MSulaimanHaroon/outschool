import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Bear from '../assets/Bear.webp'
import Chips from '../components/chips'
import ButtonChip from '../components/ButtonChip'
import ChipSet from '../components/chipSet'
import chipData from '../data/chipData';
import TutorCard from '../components/TutorCard'


const Tutoring = () => {
    return (
        <div>
            <Header />

            <section className='w-full flex items-center mt-5 justify-center '>
                <div className='bg-personalized-pattern w-[78.2%] rounded-[20px] bg-[length:100%_100%] bg-no-repeat flex ' >
                    <div className='flex flex-col justify-center mt-5 px-11 py-5'>
                        <h1 className='font-extrabold mt-5 text-[40px]'>Help your kids build math skills [eCourse]</h1>
                        <div className='flex gap-3 items-center'>
                            <div className=' flex flex-col gap-4 mt-3 w-[60%]'>
                                <p className='text-[16px]'>✅ Tips for boosting math superpowers</p>
                                <p className='text-[16px]'>✅ How to find the right math tutor for your kids' ages</p>
                                <p className='text-[16px]'>✅ Fun math games and classes </p>
                                <p className='text-[16px]'>✅ Why 'New Math' isn't really new–or scary</p>
                                <p className='text-[18px] font-bold'>Send my first lesson!</p>
                                <div className='flex gap-2 items-center'>
                                    <input className='relative w-[70%] h-[37px] bg-white rounded-full text-lg font-medium text-slate-500 outline-2 px-5 ' type="text" name="" id="" placeholder='Enter your email' />
                                    <button className='relative flex justify-center items-center cursor-pointer  text-white m-2 w-[90px] h-[40px] rounded-full bg-[#4B01D4] hover:bg-[#37009c]'> Sign Up</button>
                                </div>
                            </div>
                            <div className='w-[25%] flex justify-center '>
                                <img src={Bear} alt='bear' />
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section className='w-full flex items-center mt-10 justify-center '>
                <div className='bg-personalized-pattern w-[78.2%] rounded-[20px] bg-no-repeat ' >
                    <span className='flex flex-col justify-center mt-5 items-center p-11'>
                        <h1 className='font-extrabold text-[35px]'>Personalize their progress</h1>
                        <p className='text-[17px] text-center p-6'>Whether you're looking for academic support, help with a core subject, or expert advice, you'll find it here. Parents love tutors on Outschool because they help kids learn in a way that works for them. Connect your kids with affordable tutors in a 1:1 setting.</p>
                    </span>
                </div>
            </section>

            <TutorCard/>

            <section className='flex w-full items-center mt-5 justify-center '>
                <span className='flex flex-col  w-[78.2%] justify-center mt-5 items-center p-11'>
                    <ChipSet heading="Explore more in tutoring" data={chipData} />
                </span>
            </section>
            <Footer />
        </div>
    )
}

export default Tutoring
