import React from 'react';
import Title from './utils/Title';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { HashtagIcon, HeartIcon } from "@heroicons/react/24/solid";
import { ClockIcon } from "@heroicons/react/24/outline";




const Stories = ({ story: { title, news, } }) => {
    return (
        <>
            <div className='nike-container mb-11'>
                <Title title={title} />
                <div>
                    <Splide>
                        {news.map((val, i) => (
                            <SplideSlide key={i}
                                className="mb-0.5"
                            >
                                <div>
                                    <div><img src={val.img} alt={`img/story/${i}`} className="" /></div>
                                    <div>
                                        <div><HeartIcon className='h-6 w-6 sm: h-5 sm:w-5 text-slate-100 cursor-pointer transition-all duration-100 active:scale-110 leading-tight' /><span>{val.like}</span></div>

                                        <div><ClockIcon className='h-6 w-6 sm: h-5 sm:w-5 text-slate-100 cursor-pointer transition-all duration-100 active:scale-110 leading-tight' /><span>{val.time}</span></div>

                                        <div><HashtagIcon className='h-6 w-6 sm: h-5 sm:w-5 text-slate-100 cursor-pointer transition-all duration-100 active:scale-110 leading-tight' /><span>{val.by}</span></div>
                                    </div>
                                </div>
                            </SplideSlide>
                        ))}
                    </Splide>
                </div>
            </div>
        </>
    )
}

export default Stories