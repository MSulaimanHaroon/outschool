import { React, useState, useEffect } from 'react'
import Header from '../components/Header'
import { ImSearch } from "react-icons/im";
import Footer from '../components/Footer'
import Bear from '../assets/Bear.webp'
import Chips from '../components/chips'
import ButtonChip from '../components/ButtonChip'
import ChipSet from '../components/chipSet'
import { chipData, chipData2 } from '../data/chipData';
import TutorCard from '../components/TutorCard'
import StickyNavbar from '../components/stickyNavbar'
import HeroSection from '../components/HeroSection'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation';
import ReviewCard from '../components/ReviewCard'

const Tutoring = () => {
    const tutors = Array.from({ length: 8 }, (_, index) => index + 1);
    const reviews = Array.from({ length: 6 }, (_, index) => index + 1);
    const [isSticky, setIsSticky] = useState(true);
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }

    useEffect(() => {
        const section = document.getElementById('unsticky-section');

        const handleScroll = () => {
            if (section.getBoundingClientRect().top <= 0) {
                setIsSticky(false);
            } else {
                setIsSticky(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div>
            <Header />
            <HeroSection />
            <StickyNavbar isSticky={isSticky} />
            <section className='w-full flex flex-col items-center mt-5 justify-center '>
                <div className='w-[78.2%] rounded-[20px] bg-no-repeat ' >
                    <h1 className='text-3xl font-bold  '>Top Rated Tutors</h1>
                    <div className='my-4 flex gap-3 overflow-x-auto'>
                        <Chips name="English Tutors" />
                        <Chips name="English Tutors" />
                        <Chips name="English Tutors" />
                        <Chips name="English Tutors" />
                        <Chips name="English Tutors" />

                    </div>
                    <div className='flex items-center justify-center gap-12 flex-wrap'>
                        {tutors.map((tutor, index) => (

                            <TutorCard />

                        ))}
                    </div>
                </div>
                <div>
                    <ButtonChip name="Show more" />
                </div>
            </section>
            <section className='w-full flex items-center mt-5 justify-center '>
                <div className='bg-personalized-pattern w-[78.2%] rounded-[20px] bg-[length:100%_100%] bg-no-repeat flex ' >
                    <div className='flex flex-col justify-center mt-5 px-11 py-5'>
                        <h1 className='font-extrabold mt-5 text-[40px]'>Help your kids build math skills [eCourse]</h1>
                        <div className='flex gap-3 items-center'>
                            <div className=' flex flex-col gap-4 mt-3 w-[60%]'>
                                <p className='text-[16px] md:text-[12px] '>✅ Tips for boosting math superpowers</p>
                                <p className='text-[16px] md:text-[12px]'>✅ How to find the right math tutor for your kids' ages</p>
                                <p className='text-[16px] md:text-[12px]'>✅ Fun math games and classes </p>
                                <p className='text-[16px] md:text-[12px]'>✅ Why 'New Math' isn't really new–or scary</p>
                                <p className='text-[18px] md:text-[16px] font-bold'>Send my first lesson!</p>
                                <div className='flex gap-2 items-center'>
                                    <input className='relative w-[70%] h-[37px] bg-white rounded-full text-lg font-medium text-slate-500 outline-2 px-5 ' type="text" name="" id="" placeholder='Enter your email' />
                                    <button className='relative flex justify-center items-center cursor-pointer  text-white m-2 w-[90px] h-[40px] rounded-full bg-[#4B01D4] hover:bg-[#37009c]'> Sign Up</button>
                                </div>
                            </div>
                            <div className='w-[25%] flex justify-center  '>
                                <img src={Bear} alt='bear' />
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section className='w-full flex flex-col items-center mt-10 justify-center '>
                <div className='w-[78.2%] rounded-[20px] bg-no-repeat ' >
                    <h1 className='text-3xl font-bold mb-4 '>Reviews For Top Tutoring classes</h1>
                    <div className='flex items-center justify-center gap-3 flex-wrap'>
                        <Swiper
                            className='cursor-grab'
                            slidesPerView='2.3'
                            breakpoints={{
                                1280: {
                                    slidesPerView: 2.3
                                },
                                565: {
                                    slidesPerView: 1
                                },
                            }}

                            spaceBetween={30}
                            loop={false}
                            navigation={{
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev',
                            }}
                            pagination={{

                                clickable: false,
                                el: '.custom_bullet'
                            }}
                        >
                            {tutors.map((reviews, index) => (
                                <SwiperSlide key={index}>
                                    <ReviewCard />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </section>

            <section className='w-full flex flex-col items-center mt-10 justify-center '>
                <div className='w-[78.2%] rounded-[20px] bg-no-repeat ' >
                    <h1 className='text-3xl font-bold  '>English Tutors</h1>
                    <div className='flex items-center justify-center gap-12 flex-wrap'>
                        {tutors.map((tutor, index) => (

                            <TutorCard />

                        ))}
                    </div>
                </div>
                <div>
                    <ButtonChip name="Explore English Tutors" />
                </div>
            </section>
            <section className='w-full flex items-center mt-5 justify-center '>
                <div className='bg-outSchool-pattern w-[78.2%] px-[5rem] py-[4rem] rounded-[20px] bg-[length:100%_100%] bg-no-repeat flex justify-end items-center' >
                    <div className=' rounded-[20px] w-[54%] overflow-hidden'>
                        <video data-testid="video" playsinline="" preload="auto" controls="true" controlslist="nodownload" poster="https://image.mux.com/iPWZ01J69A6HCR99IVXV3WYMJ1f00SDfmt/thumbnail.jpg?time=1&amp;height=318&amp;width=566" class="outschool-18inzk3" src="blob:https://outschool.com/ce37c8a8-d488-4e03-8f47-e31872982e40"></video>
                    </div>
                </div>
            </section>

            <section className='w-full flex flex-col items-center mt-10 justify-center '>
                <div className='w-[78.2%] rounded-[20px] bg-no-repeat ' >
                    <h1 className='text-3xl font-bold  '>High school Tutors</h1>
                    <div className='flex items-center justify-center gap-12 flex-wrap'>
                        {tutors.map((tutor, index) => (

                            <TutorCard />

                        ))}
                    </div>
                </div>
                <div>
                    <ButtonChip name="Explore High School Tutors" />
                </div>
            </section>
            <section className='w-full bg-[#f0f3ff] flex flex-col items-center mt-10 justify-center '>
                <div className='w-[78.2%] rounded-[20px] bg-no-repeat p-5 ' >

                    <div >
                    <h1 className='font-bold text-3xl mb-5'>Find more classes</h1>
                    <div className='w-full md-lg:w-full mb-5'>
                            <div className='flex border-2 border-black w-[100%] overflow-hidden rounded-full h-[50px] items-center relative gap-5'>
                                <input className='w-full relative drop-shadow-lg  bg-white text-lg font-medium text-slate-500 outline-0 px-4 h-full' type="text" name="" id="" placeholder='Search online classes and tutors' />
                                <button className=' rounded-[10px] right-0 absolute px-3 h-9 mr-1 font-semibold uppercase text-black'><ImSearch /></button>
                            </div>
                        </div>
                    <h1 className='font-semibold text-xl mb-5'>Popular Searches</h1>
                    </div>
                    <Swiper
                        className='cursor-grab '
                        slidesPerView='2.3'
                        breakpoints={{
                            1280: {
                                slidesPerView: 5.5
                            },
                            565: {
                                slidesPerView: 3
                            },
                        }}

                        spaceBetween={30}
                        loop={false}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        pagination={{

                            clickable: false,
                            el: '.custom_bullet'
                        }}
                    >
                        {tutors.map((reviews, index) => (
                            <SwiperSlide key={index}>
                                <ButtonChip name="Anime Drawing" />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
            <section className='w-full flex flex-col items-center mt-10 justify-center '>
                <div className='w-[78.2%] rounded-[20px] bg-no-repeat ' >
                    <h1 className='text-3xl font-bold  '>English Tutors</h1>
                    <div className='flex items-center justify-center gap-12 flex-wrap'>
                        {tutors.map((tutor, index) => (

                            <TutorCard />

                        ))}
                    </div>
                </div>
                <div>
                    <ButtonChip name="Explore English Tutors" />
                </div>
            </section>

            <section id="unsticky-section" className='w-full flex items-center mt-10 justify-center '>
                <div className='bg-personalized-pattern w-[78.2%] rounded-[20px] bg-no-repeat ' >
                    <span className='flex flex-col justify-center mt-5 items-center p-11'>
                        <h1 className='font-extrabold text-[35px]'>Personalize their progress</h1>
                        <p className='text-[17px] text-center p-6'>Whether you're looking for academic support, help with a core subject, or expert advice, you'll find it here. Parents love tutors on Outschool because they help kids learn in a way that works for them. Connect your kids with affordable tutors in a 1:1 setting.</p>
                    </span>
                </div>
            </section>
            <section></section>
            <section className='flex w-full items-center mt-5 justify-center '>
                <span className='flex flex-col  w-[78.2%] justify-center mt-5 items-center p-11'>
                    <ChipSet heading="Explore more in tutoring" data={chipData} />
                    <ChipSet heading="Explore more" data={chipData2} />
                </span>
            </section>
            <Footer />
        </div>
    )
}

export default Tutoring
