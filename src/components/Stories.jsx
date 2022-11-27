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
                <div className=''>
                    <Splide>
                        {news.map((val, i) => (
                            <SplideSlide key={i}
                                className="mb-0.5"
                            >
                                <div className='relative grid items-center gap-4 pb-2 rounded-lg shadow shadow-slate-200 ring-1 ring-slate-200'>
                                    <div className='flex items-center justify-center'><img src={val.img} alt={`img/story/${i}`} className="w-full h-auto object-cover shadow-md shadow-slate-200 rounded-tl-lg rounded-tr-lg" /></div>

                                    <div className='flex items-center justify-between w-full px-4'>
                                        <div className='flex items-center gap-0.5'><HeartIcon className='h-6 w-6 sm: h-5 sm:w-5 text-slate-100 cursor-pointer transition-all duration-100 active:scale-110 leading-tight text-red-500' /><span className='text-xs font-bold'>{val.like}</span></div>

                                        <div className='flex items-center gap-0.5'><ClockIcon className='h-6 w-6 sm: h-5 sm:w-5 text-slate-100 cursor-pointer transition-all duration-100 active:scale-110 leading-tight text-black' /><span className='text-xs font-bold'>{val.time}</span></div>

                                        <div className='flex items-center gap-0.5'><HashtagIcon className='h-6 w-6 sm: h-5 sm:w-5 text-slate-100 cursor-pointer transition-all duration-100 active:scale-110 leading-tight text-blue-600' /><span className='text-xs font-bold text-blue-600'>{val.by}</span></div>
                                    </div>

                                    <div className='grid items-center justify-items-start px-4 '>
                                        <h1 className='text-base font-semibold lg:text-sm'>{val.title}</h1>
                                        <p className='text-sm text-justify lg:text-xs'>{val.text}</p>
                                    </div>

                                    <div className='flex items-center justify-center px-4 w-full'>
                                        <a href={val.url} target="_blank" role={"button"} className='w-full bg-gradient-to-b from-slate-900 to-black shadow-md shadow-black text-center text-slate-100 py-1.5 px-7 rounded active:scale-90 transition-all duration-100 ease-in-out sm:text-sm'>{val.btn}</a>
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