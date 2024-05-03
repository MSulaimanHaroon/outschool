import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { FaCircleChevronLeft } from "react-icons/fa6";
import { FaCircleChevronRight } from "react-icons/fa6";
import ChipSet from '../components/chipSet'
import { chipData } from '../data/chipData'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation';
import TutorCard from '../components/TutorCard'

const Tutor = () => {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
    const tutors = Array.from({ length: 6 }, (_, index) => index + 1);
    return (
        <div>
            <Header />
            <section className='w-full flex flex-col items-center mt-10 justify-center '>
                <div className='w-[78.2%] rounded-[20px] bg-no-repeat ' >
            <Swiper
            className='cursor-grab'
                slidesPerView='2.3'
                breakpoints={{
                    1280: {
                        slidesPerView: 4
                    },
                    565: {
                        slidesPerView: 5
                    },
                }}
                
                spaceBetween={1}
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
                {tutors.map((tutor, index) => (
                    <SwiperSlide key={index}>
                        <TutorCard />
                    </SwiperSlide>
                ))}
            </Swiper>
            </div>
            </section>
             {/* <div className="swiper-button-next"><FaCircleChevronRight /></div>
            <div className="swiper-button-prev"><FaCircleChevronLeft /></div> */}
        
            <section className='flex w-full items-center mt-5 justify-center '>
                <span className='flex flex-col  w-[78.2%] justify-center mt-5 items-center p-11'>
                    <ChipSet heading="Related Categories" data={chipData} isMiddle={true} />
                    <ChipSet heading="More to explore" data={chipData} isMiddle={true} />
                </span>
            </section>
            <Footer />
        </div>
    )
}

export default Tutor
