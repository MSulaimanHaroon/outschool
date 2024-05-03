import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import { PiHeartStraight } from 'react-icons/pi';

// Import JSON data
import tutorData from '../data/tutorData.js';

const TutorCard = () => {
    return (
        <div className="pt-[1em] pb-[1em]">
            {tutorData.map((tutor, index) => (
                <Link to="/tutor" key={index} className="flex w-[242px] relative justify-start mr-[18px] mt-[73px] hover:drop-shadow-lg">
                    <div className="bg-white border-[#dddfe3] rounded-[8px] border-[1px] text-[#2e3238] h-[339px] w-[242px]">
                        <div className="p-[10px]">
                            <div className="h-[142px] w-[142px] rounded-full p-[0.2rem] border-2 border-[#f7f7f7] bg-white absolute top-[-73px] left-[50px]">
                                <div className="relative rounded-full w-[134px] overflow-hidden h-[134px]"><img className="w-[134px] h-[134px] object-cover" src={tutor.img} alt="" /></div>
                                <div className="w-[132px] h-[32px] rounded-[16px] border-2 border-[#f7f7f7] bg-white flex justify-center items-center absolute top-[112px] left-[5px] text-center ">
                                    <span className="flex items-center text-xs text-[#fdc840]">
                                        <FaStar /><FaStar /><FaStar /><FaStar /><FaStar /> <p className="text-gray-700 text-[14px]">({tutor.reviews})</p>
                                    </span>
                                </div>
                            </div>
                            <div className="text-[30px] text-[#4b01d4] w-full flex justify-end  ">
                                <button>
                                    <PiHeartStraight />
                                </button>
                            </div>
                            <div className="flex flex-col gap-1">
                                <h1 className="text-[18px] font-bold mt-[40px] mb-[8px] overflow-hidden line-clamp-3">{tutor.title}</h1>
                                <p className="text-[16px] line-clamp-2">{tutor.subtitle}</p>
                            </div>
                            <div className="flex flex-col mt-3 gap-2">
                                <div className="bg-[#f7f7f7] text-xl rounded-lg font-semibold text-center ">
                                    <h1>{tutor.category}</h1>
                                </div>
                                <div className="flex gap-1 justify-center items-center">
                                    <span className="bg-[#f7f7f7] w-[75px] text-center flex flex-col rounded-lg px-2 py-2">
                                        <h1 className="font-bold text-md">{tutor.ages}</h1>
                                        <p className="text-xs">Ages</p>
                                    </span>
                                    <span className="bg-[#f7f7f7] w-[75px] text-center flex flex-col rounded-lg px-2 py-2">
                                        <h1 className="font-bold text-md">{tutor.duration}</h1>
                                        <p className="text-xs">Mins</p>
                                    </span>
                                    <span className="bg-[#f7f7f7] w-[85px] text-center flex flex-col rounded-lg px-2 py-2">
                                        <h1 className="font-bold text-md">{tutor.price}</h1>
                                        <p className="text-xs">Per session</p>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default TutorCard;
